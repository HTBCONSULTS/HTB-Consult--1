import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";

const CONTACT_EMAIL = "training@htbconsults.com";
const UPDATED = "20 November 2026";

const LegalPage = ({ title, intro, children }: { title: string; intro: string; children: ReactNode }) => (
  <Layout>
    <section className="relative -mt-[72px] pt-[72px] bg-[hsl(var(--background))]">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/45 mb-6">
          <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-white/70">{title}</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-serif font-normal text-white leading-tight mb-4">{title}</h1>
        <p className="text-base text-white/65 max-w-2xl leading-relaxed">{intro}</p>
        <p className="text-xs text-white/40 mt-4">Last updated: {UPDATED}</p>
      </div>
    </section>
    <section className="bg-white">
      <div className="container mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <div className="max-w-3xl text-slate-700 leading-relaxed space-y-8 [&_h2]:text-2xl [&_h2]:font-serif [&_h2]:text-slate-900 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_p+p]:mt-3 [&_a]:text-primary [&_a]:underline">
          {children}
        </div>
      </div>
    </section>
  </Layout>
);

export const Privacy = () => (
  <LegalPage title="Privacy Policy" intro="How HTB Consult Ltd (“HTB Consult Academy”, “we”, “us”) collects, uses and protects your personal data when you use this website and our courses.">
    <div>
      <h2>Who we are</h2>
      <p>HTB Consult Academy is run by HTB Consult Ltd, the data controller for the personal data described here. Contact us about privacy at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or on <a href="tel:+447862056300">+44 7862 056300</a>.</p>
    </div>
    <div>
      <h2>What we collect</h2>
      <ul>
        <li><strong>Account details</strong> — your name, email address, password (stored only in encrypted, hashed form) and whether you joined as a learner or mentor.</li>
        <li><strong>Profile information</strong> you choose to add, such as a photo or bio.</li>
        <li><strong>Learning records</strong> — the courses you enrol on, your progress, saved courses and any certificates issued.</li>
        <li><strong>Payments</strong> — the course, amount, status and payment reference. Card details are entered directly with our payment provider, Stripe; we never see or store your full card number.</li>
        <li><strong>Mentoring</strong> — session bookings (date, time and notes) and messages you exchange with mentors on the platform.</li>
        <li><strong>Enquiry and interest forms</strong> — for example, the Cybersecurity Bootcamp form collects your name, email, country, background, goals and your consent to be contacted.</li>
        <li><strong>Website usage</strong> — the pages you visit, the page that referred you, a random session identifier and, if you are signed in, your account ID. This helps us understand which pages are useful.</li>
      </ul>
    </div>
    <div>
      <h2>How we use it</h2>
      <ul>
        <li>To create and run your account and give you access to the courses you enrol on (contract).</li>
        <li>To take payment and keep financial records (contract and legal obligation).</li>
        <li>To send service emails such as email verification, password resets, enrolment and payment confirmations (contract).</li>
        <li>To arrange mentoring sessions and respond to your enquiries (contract or legitimate interests).</li>
        <li>To understand how the website is used and improve it (legitimate interests).</li>
        <li>To contact you about a programme you registered interest in, where you have given consent. You can withdraw consent at any time.</li>
      </ul>
      <p>We do not sell your personal data.</p>
    </div>
    <div>
      <h2>Cookies and similar storage</h2>
      <p>We use your browser’s local storage for essentials such as keeping you signed in and remembering a course you were viewing while you register. Google Analytics is only loaded if you have agreed to analytics; without that agreement it does not run.</p>
    </div>
    <div>
      <h2>Who we share it with</h2>
      <p>We use trusted service providers who process data on our behalf: website and application hosting (Vercel and Fly.io), our database host, Stripe (payments), Cloudinary (image and file uploads), our email service provider, and Google Analytics (only with your agreement). If you contact us on WhatsApp, WhatsApp’s own terms apply. Some providers may process data outside the UK; where they do, we rely on appropriate safeguards such as the UK International Data Transfer Agreement or adequacy regulations.</p>
    </div>
    <div>
      <h2>How long we keep it</h2>
      <p>We keep account and learning records while your account is active and for up to two years after your last activity, unless you ask us to delete them sooner. Payment records are kept for six years to meet UK accounting requirements. Interest-form submissions are kept for up to two years.</p>
    </div>
    <div>
      <h2>Your rights</h2>
      <p>Under UK data protection law you can ask to access, correct or delete your data, restrict or object to how we use it, and receive a copy of it. To make a request, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. If you are unhappy with how we handle your data you can complain to the Information Commissioner’s Office at <a href="https://ico.org.uk" target="_blank" rel="noreferrer">ico.org.uk</a>.</p>
    </div>
    <div>
      <h2>Changes</h2>
      <p>We may update this policy. The date at the top shows when it last changed.</p>
    </div>
  </LegalPage>
);

export const Terms = () => (
  <LegalPage title="Terms & Conditions" intro="These terms apply when you use the HTB Consult Academy website and enrol on our courses. By creating an account or enrolling, you agree to them.">
    <div>
      <h2>About us</h2>
      <p>HTB Consult Academy is run by HTB Consult Ltd. Contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    </div>
    <div>
      <h2>Your account</h2>
      <ul>
        <li>You must give accurate details and verify your email address.</li>
        <li>Keep your password private; you are responsible for activity on your account.</li>
        <li>Accounts are personal and must not be shared.</li>
      </ul>
    </div>
    <div>
      <h2>Courses and payment</h2>
      <ul>
        <li>Prices are shown in pounds sterling (GBP). Payment is taken through Stripe when you enrol on a paid course.</li>
        <li>Access to a course starts once payment is confirmed. Free courses are available as soon as you enrol.</li>
        <li>We may update course content, schedules or mentors to keep material current; we will tell you about significant changes to a course you have paid for.</li>
      </ul>
    </div>
    <div>
      <h2>Cancellations and refunds</h2>
      <p>You may cancel within 14 days of purchase for a full refund, provided you have not yet started the course or accessed its paid content. If you start a course within the 14 days, you agree that you lose the right to cancel once content has been accessed. For scheduled bootcamps and live sessions, please contact us as early as possible; we will offer a transfer to a later date or a refund where we can. To cancel, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. This does not affect your statutory rights.</p>
    </div>
    <div>
      <h2>Using course materials</h2>
      <p>Course materials, videos, templates and articles are owned by HTB Consult Ltd or its contributors. You may use them for your own learning, but you must not copy, resell or share them publicly without written permission.</p>
    </div>
    <div>
      <h2>Acceptable use</h2>
      <p>Please be respectful to mentors and other learners. Do not upload unlawful or harmful content, attempt to access other people’s accounts, or interfere with the website. We may suspend accounts that break these rules.</p>
    </div>
    <div>
      <h2>Certificates and outcomes</h2>
      <p>Certificates confirm completion of an HTB Consult Academy course. Our training is designed to build practical skills, but we cannot guarantee a particular job, promotion or exam result.</p>
    </div>
    <div>
      <h2>Liability</h2>
      <p>Nothing in these terms limits liability that cannot be limited by law. Otherwise, our total liability to you for any course is limited to the amount you paid for it, and we are not liable for indirect or unforeseeable losses.</p>
    </div>
    <div>
      <h2>Privacy</h2>
      <p>Our <Link to="/privacy">Privacy Policy</Link> explains how we use your personal data.</p>
    </div>
    <div>
      <h2>Governing law</h2>
      <p>These terms are governed by the law of England and Wales, and the courts of England and Wales have jurisdiction.</p>
    </div>
  </LegalPage>
);
