import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { api, setToken, clearToken } from "@/lib/api";

export interface AppUser {
  id: string;
  email: string;
  full_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  role: string;
  created_at?: string;
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  signOut: () => void;
  setUser: (user: AppUser | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signOut: () => {},
  setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

export { setToken };

const SESSION_MS = 6 * 60 * 60 * 1000;

/** When the session ends (ms): the token's expiry, capped at 6h after sign-in for older 30-day tokens. */
export const tokenExpiry = (token: string | null): number | null => {
  try {
    const payload = JSON.parse(atob(token!.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
    const ends = [payload.exp * 1000, payload.iat * 1000 + SESSION_MS].filter(Number.isFinite);
    return ends.length ? Math.min(...ends) : null;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("htb_token");
    if (!token) { setLoading(false); return; }
    api.get<AppUser>("/api/auth/me")
      .then((u) => setUser(u))
      .catch(() => clearToken())
      .finally(() => setLoading(false));
  }, []);

  const signOut = () => {
    clearToken();
    setUser(null);
  };

  // Sessions last 6 hours (token expiry set by the API); sign out when it runs out, even in an open tab.
  useEffect(() => {
    if (!user) return;
    const expiresAt = tokenExpiry(localStorage.getItem("htb_token"));
    if (!expiresAt) return;
    const timer = window.setTimeout(signOut, Math.max(0, expiresAt - Date.now()));
    return () => window.clearTimeout(timer);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, loading, signOut, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
