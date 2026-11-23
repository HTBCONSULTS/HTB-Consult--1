import { FormEvent, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import "./Cybersecurity.css";
import { api } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import htbLogo from "@/assets/htb-logo-gold.webp";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FOLDERS } from "./Courses";
import { programmeSlug } from "@/lib/programmes";

/** Register-your-interest page for one programme; same flow and look as the cybersecurity page. */
const ProgrammeRegister = () => {
  const { slug } = useParams();
  const { user } = useAuth();
  const folder = FOLDERS.find((f) => programmeSlug(f.key) === slug);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!folder) return;
    const previousTitle = document.title;
    document.title = `${folder.label} | Register your interest | HTB Academy`;
    return () => { document.title = previousTitle; };
  }, [folder]);

  if (!folder) return <Navigate to="/services" replace />;
  if (folder.key === "Cybersecurity Bootcamp") return <Navigate to="/cybersecurity#register" replace />;

  const p: any = folder.programme;
  const learn: string[] = p?.learn ?? p?.phases?.[0]?.items ?? [];
  const delivery: string[] = p?.delivery ?? p?.phases?.[1]?.items ?? [];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    try {
      await api.post("/api/cybersecurity/interests", {
        programme: folder.key,
        name: formData.get("name"),
        email: formData.get("email"),
        country: formData.get("country"),
        background: formData.get("background"),
        goal: formData.get("goal"),
        consent: formData.get("consent") === "on",
        website: formData.get("website"),
      });
      setSubmitted(true);
    } catch (error: any) {
      setSubmitError(error?.message || "We could not save your response. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cyber-page">
      <header>
        <Link className="brand" to="/"><img className="academy-logo" src={htbLogo} alt="HTB Consult Academy" /></Link>
        <Link className="back" to="/courses">← Back to courses</Link>
      </header>
      <main>
        <section className="hero">
          <div className="intro">
            <div className="eyebrow"><span /> {(folder.tag || "PROGRAMME").toUpperCase()} · REGISTRATION</div>
            <h1>{folder.label}.<br /><em>Start here.</em></h1>
            <p className="lede">{folder.description}</p>
            {p?.who?.length > 0 && <div className="tags">{p.who.slice(0, 4).map((w: string) => <span key={w}>{w}</span>)}</div>}
            <div className="programme"><div className="shield">⌁</div><div><small>{(p?.badge || folder.label).toUpperCase()}</small><strong>Practical learning.<br />Real-world application.</strong><p>{folder.audience}</p></div></div>
            <p className="cohort">Cohort dates, delivery arrangements and fees will be confirmed when you register.</p>
            <a className="explore" href="#learning">Explore what you’ll learn ↓</a>
          </div>
          <div className="formcard" id="register">
            {submitted ? <div className="success" role="status"><span>✓</span><p>Thanks for registering for {folder.label}. We’ll be in touch with programme information and next steps.</p><button className="secondary" type="button" onClick={() => setSubmitted(false)}>Submit another response</button></div> : <>
              <div className="form-top"><span className="eyebrow">LET’S GET TO KNOW YOU</span><span className="step">01 / FIRST STEP</span></div>
              <h2>Register now</h2>
              <p>Tell us a little about yourself. We’ll contact you with programme details and the next steps.</p>
              <form onSubmit={handleSubmit}>
                <label>Full name <b>*</b><input autoComplete="name" placeholder="Your full name" required maxLength={100} name="name" defaultValue={user?.full_name ?? ""} /></label>
                <label>Email address <b>*</b><input type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} name="email" defaultValue={user?.email ?? ""} /></label>
                <div className="row"><label>Country of residence <b>*</b><select name="country" defaultValue="" required><option value="" disabled>Select country</option><option>United Kingdom</option><option>Nigeria</option><option>Other</option></select></label><label>Current background <b>*</b><select name="background" defaultValue="" required><option value="" disabled>Select background</option><option>Student</option><option>Graduate</option><option>Career changer</option><option>Working professional</option><option>Business owner</option><option>Other</option></select></label></div>
                <label>What would you like to achieve? <span className="optional">Optional</span><textarea name="goal" maxLength={1000} placeholder="For example, move into a Business Analyst role within a year." rows={2} /></label>
                <div className="trap" aria-hidden="true"><input tabIndex={-1} autoComplete="off" name="website" /></div>
                <label className="consent"><input type="checkbox" required name="consent" /><span>I agree to HTB Academy contacting me by email about this programme. <Link to="/privacy">How we use your details</Link></span></label>
                {submitError && <p className="error" role="alert">{submitError}</p>}
                <button className="submit" type="submit" disabled={isSubmitting}>{isSubmitting ? "Saving your registration…" : "Register now"}<span>↗</span></button>
                <p className="no-payment">No payment required now. No obligation to enrol.</p>
              </form>
            </>}
          </div>
        </section>
        <section className="learning" id="learning"><div><span className="eyebrow">WHAT YOU’LL LEARN</span><h2>Build capability<br />step by step.</h2><p>{p?.subtitle || folder.description}</p><a href="#register" className="textlink">Register now ↗</a></div><ol>{learn.map((item, i) => <li key={item}><span>{String(i + 1).padStart(2, "0")}</span>{item}</li>)}</ol></section>
        {delivery.length > 0 && <section className="learning"><div><span className="eyebrow">DELIVERY FORMAT</span><h2>How you’ll learn.</h2></div><ol>{delivery.map((item, i) => <li key={item}><span>{String(i + 1).padStart(2, "0")}</span>{item}</li>)}</ol></section>}
        <section className="next"><span className="eyebrow">WHAT HAPPENS NEXT?</span><div className="nextgrid"><article><span>01</span><h3>Register</h3><p>Complete the short form. You don’t need an account to register.</p></article><article><span>02</span><h3>Get the details</h3><p>Receive information about dates, fees and how the programme will run.</p></article><article><span>03</span><h3>Confirm your place</h3><p>Review the information and confirm your place when you’re ready.</p></article></div></section>
        <section className="privacy" id="privacy"><h3>Your details, handled with care.</h3><p>HTB Academy, operated by HTB Consult Ltd, will store the details you submit and use them to respond to your registration for this programme. This form does not subscribe you to unrelated marketing. To withdraw or request deletion of your details, email <a href="mailto:training@htbconsults.com">training@htbconsults.com</a>.</p></section>
      </main>
      <footer><span>HTB ACADEMY <small>by HTB Consult</small></span><a href="mailto:training@htbconsults.com">Questions? Let’s talk ↗</a><span>Think. Analyse. Improve.</span></footer>
      <WhatsAppButton />
    </div>
  );
};

export default ProgrammeRegister;
