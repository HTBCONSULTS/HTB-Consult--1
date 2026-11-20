import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target, Users, BookOpen, Lightbulb, UserCheck, Building2,
  GraduationCap, Briefcase, TrendingUp, ArrowRight, ChevronRight,
  Rocket, CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  }),
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.08, duration: 0.45 },
  }),
};

/* ── Data ── */
const stats = [
  { value: "500+", label: "Professionals Supported" },
  { value: "15+",  label: "Years Experience" },
  { value: "98%",  label: "Learner Satisfaction" },
  { value: "50+",  label: "Organisations Served" },
];

const pillars = [
  {
    icon: Briefcase,
    title: "Real Consulting Experience",
    desc: "Built from live project experience across business analysis, delivery and transformation.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Lightbulb,
    title: "Grounded & Relevant",
    desc: "Training that reflects how work is actually done — not just what textbooks say.",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: UserCheck,
    title: "People Centred",
    desc: "We meet learners where they are and guide them toward where they want to be.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "A growing curriculum that evolves with industry demands and learner needs.",
    color: "bg-emerald-500/10 text-emerald-500",
  },
];

const individuals = [
  "Build practical skills in business analysis and project delivery",
  "Gain real world understanding of how projects and organisations operate",
  "Improve career positioning through applied knowledge and guidance",
];

const organisations = [
  "Strengthen team capability and performance",
  "Support workforce development in key business areas",
  "Improve delivery through structured, skills-based training",
];

const approach = [
  {
    icon: GraduationCap,
    title: "Practical Learning",
    desc: "Skills you can apply in real roles and business environments from day one.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Target,
    title: "Structured Development",
    desc: "Clear learning paths from fundamentals to fully applied capability.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Real World Insight",
    desc: "Training built from consulting experience, not theory alone.",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: TrendingUp,
    title: "Business Focused Growth",
    desc: "Supporting both professional development and organisational performance.",
    color: "bg-emerald-500/10 text-emerald-500",
  },
];

const focusItems = [
  {
    icon: Users,
    title: "For Individuals",
    desc: "Individuals build confidence and real capability that unlocks career growth.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Building2,
    title: "For Organisations",
    desc: "Organisations develop stronger, more effective teams that deliver better results.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: TrendingUp,
    title: "For Performance",
    desc: "Professionals and businesses improve how they work and deliver outcomes.",
    color: "bg-amber-500/10 text-amber-500",
  },
];

/* ══════════════════════════════════════════════════════════ */

/* HTB Consult sections, shown on the About page (formerly the separate /about-htb page). */
export const HtbConsultSections = () => {
  return (
    <div id="htb-consult" className="scroll-mt-20">

      {/* ─────────────────── STATS (white) ─────────────────── */}
      <section className="py-16 lg:py-20 bg-white border-y border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.015) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i} variants={fadeUp}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold mb-2">{stat.value}</p>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── WHO WE ARE (white) ─────────────────── */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.02) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">

          {/* Header */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0}
              className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
              style={{ color: "hsl(var(--primary))" }}
            >
              Who We Are
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1}
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight max-w-2xl mx-auto"
            >
              Built from Real Consulting{" "}
              <em className="not-italic text-gradient-gold">Experience.</em>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2}
              className="text-slate-500 mt-5 max-w-2xl mx-auto text-base leading-relaxed"
            >
              HTB Consult Academy's programmes reflect how work is actually done across business analysis, project delivery, and digital transformation — grounded, relevant, and aligned with real industry expectations.
            </motion.p>
          </motion.div>

          {/* 4-pillar grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i} variants={fadeUp}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/6 transition-all duration-300 card-lift"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon size={22} />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── WHAT WE DO (slate-50) ─────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.018) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0}
              className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
              style={{ color: "hsl(var(--primary))" }}
            >
              What We Do
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1}
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight"
            >
              Training for Individuals &amp; Organisations.
            </motion.h2>
            <motion.p variants={fadeUp} custom={2}
              className="text-slate-500 mt-5 max-w-xl mx-auto text-base leading-relaxed"
            >
              We support both individuals and organisations through structured, results-driven training and development.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {/* For Individuals */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={0}
              className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/6 transition-all duration-300 card-lift"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-0.5">For</p>
                  <h3 className="text-xl font-serif font-semibold text-slate-900">Individuals</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {individuals.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* For Organisations */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={1}
              className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-amber-400/40 hover:shadow-lg hover:shadow-amber-400/8 transition-all duration-300 card-lift"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Building2 size={22} className="text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-0.5">For</p>
                  <h3 className="text-xl font-serif font-semibold text-slate-900">Organisations</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {organisations.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-amber-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────── OUR APPROACH (white) ─────────────────── */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.02) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0}
              className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
              style={{ color: "hsl(var(--primary))" }}
            >
              Our Approach
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1}
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight"
            >
              Clarity. Structure. Real Application.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i} variants={fadeUp}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/6 transition-all duration-300 card-lift"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 mx-auto`}>
                  <item.icon size={22} />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── OUR FOCUS (slate-50) ─────────────────── */}
      <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.018) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} custom={0}
              className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
              style={{ color: "hsl(var(--primary))" }}
            >
              Our Focus
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1}
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight"
            >
              We are committed to helping.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {focusItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i} variants={fadeUp}
                className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/6 transition-all duration-300 card-lift"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon size={22} />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
