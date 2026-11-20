// Remembers where a visitor was heading (e.g. a course) across sign-up, which
// leaves the site for email verification, so we can bring them back afterwards.
const KEY = "htb-next-path";

export const rememberNextPath = (path: string) => {
  try { localStorage.setItem(KEY, path); } catch { /* storage blocked: fall back to default */ }
};

/** Returns the remembered path once (then forgets it), or the fallback. Only same-site paths. */
export const takeNextPath = (fallback: string) => {
  let path: string | null = null;
  try { path = localStorage.getItem(KEY); localStorage.removeItem(KEY); } catch { /* ignore */ }
  return path && path.startsWith("/") && !path.startsWith("//") ? path : fallback;
};
