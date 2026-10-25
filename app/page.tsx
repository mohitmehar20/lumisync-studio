'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Check, Menu, X, Sparkles, MoveUpRight, Instagram, Linkedin, Facebook } from 'lucide-react';

const services = [
  { n: '01', title: 'Event experiences', desc: 'From first sketch to final encore, we turn gatherings into stories people want to be part of.', tags: 'Launches · Live shows · Experiences', icon: '✳' },
  { n: '02', title: 'Brand & advertising', desc: 'A sharper point of view, a clearer voice, and creative that earns its place in the world.', tags: 'Strategy · Identity · Campaigns', icon: '↗' },
  { n: '03', title: 'Digital growth', desc: 'Digital-first ideas that bring the right people closer to your brand, one meaningful click at a time.', tags: 'Social · Content · Performance', icon: '⌁' },
  { n: '04', title: 'Weddings & corporate', desc: 'Thoughtful details, seamless production, and atmospheres your guests remember.', tags: 'Weddings · Conferences · Galas', icon: '✺' },
];
const projects = [
  { category: 'LIVE EXPERIENCE · 2025', title: 'A night in full colour', type: 'Festival production', image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85', cls: 'project-large' },
  { category: 'BRAND CAMPAIGN · 2025', title: 'Made to be noticed', type: 'Brand activation', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1100&q=85', cls: 'project-small' },
  { category: 'CELEBRATION · 2024', title: 'A little more forever', type: 'Wedding experience', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=85', cls: 'project-small' },
];
const testimonials = [
  { quote: 'They understood the feeling we wanted people to leave with, then built every detail around it. The result was beyond the brief.', name: 'Ananya Mehta', role: 'Marketing Director · Verve Collective' },
  { quote: 'The rare team that can think strategically and still care about the tiny details that make an experience feel effortless.', name: 'Rohan Kapoor', role: 'Founder · Northstar Labs' },
  { quote: 'From the first conversation to the last guest leaving, the team brought calm, clarity and a genuinely fresh point of view.', name: 'Mira Shah', role: 'Private client' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: 'Event management', details: '' });

  const closeMenu = () => setMenuOpen(false);
  const submitInquiry = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); setSubmitted(true); };

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Lumisync Studio home"><span className="brand-mark"><Asterisk size={23} strokeWidth={2.5} /></span><span>lumisync<span className="brand-light"> studio</span></span></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>What we do</a><a href="#work" onClick={closeMenu}>Selected work</a><a href="#approach" onClick={closeMenu}>Our approach</a><a href="#about" onClick={closeMenu}>About us</a>
          <a className="nav-mobile-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={16} /></a>
        </nav>
        <a className="header-cta" href="#contact">Start a project <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}><span className="eyebrow-dot" /> INDEPENDENT CREATIVE & EXPERIENCE STUDIO</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }}>We make<br /><span className="serif-italic">moments</span> move<span className="period">.</span></motion.h1>
          <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35, duration: .6 }}>
            <p>We bring brands to life through unforgettable events, thoughtful design and ideas that move people.</p>
            <a className="round-link" href="#work" aria-label="Explore our work"><ArrowDownRight size={22} /></a>
          </motion.div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .18 }}>
          <div className="hero-image" role="img" aria-label="Crowd enjoying a live event with vivid stage lights" />
          <div className="image-note"><span className="note-star">✳</span><span>Good energy.<br /><em>Great execution.</em></span></div>
          <div className="hero-stamp"><span>IDEAS INTO</span><strong>IMPACT</strong><span>EST. WITH INTENT · 2020</span></div>
        </motion.div>
        <div className="hero-meta"><span>STRATEGY <i>·</i> CREATIVITY <i>·</i> PRODUCTION</span><span>AHMEDABAD · WORKING EVERYWHERE</span></div>
      </section>

      <section className="intro-band" id="about"><div className="section-wrap intro-inner"><span className="section-kicker">A STUDIO WITH RANGE</span><p>Big ideas deserve <span className="serif-italic">beautiful execution.</span> We connect the dots between what a brand says, what people feel, and what they remember.</p><a className="text-link" href="#approach">Get to know us <ArrowUpRight size={16} /></a></div></section>

      <section className="services section-wrap" id="services">
        <div className="section-heading"><div><span className="section-kicker">WHAT WE BRING TO THE TABLE</span><h2>One team.<br /><span className="serif-italic">Many ways</span> to make a mark.</h2></div><p className="heading-aside">From the first spark to the final sign-off, we bring the right people, ideas and details together.</p></div>
        <div className="service-grid">{services.map((service, i) => <motion.article className="service-card" key={service.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: i * .08, duration: .45 }}><div className="service-top"><span>{service.n} / 04</span><span className="service-icon">{service.icon}</span></div><h3>{service.title}</h3><p>{service.desc}</p><div className="service-bottom"><span>{service.tags}</span><a href="#contact" aria-label={`Enquire about ${service.title}`}><ArrowUpRight size={18} /></a></div></motion.article>)}</div>
      </section>

      <section className="work-section" id="work"><div className="section-wrap"><div className="section-heading work-heading"><div><span className="section-kicker">A FEW THINGS WE’VE MADE</span><h2>Work that <span className="serif-italic">stays</span><br />with you.</h2></div><a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={16} /></a></div><div className="project-grid">{projects.map((project, i) => <a className={`project-card ${project.cls}`} href="#contact" key={project.title}><div className="project-image" style={{ backgroundImage: `url('${project.image}')` }}><span className="project-arrow"><ArrowUpRight size={20} /></span></div><div className="project-info"><div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div><span className="project-type">{project.type}</span></div></a>)}</div><p className="work-footnote">A selection of the energy we bring. More good things are in the works.</p></div></section>

      <section className="approach section-wrap" id="approach"><div className="approach-visual"><div className="approach-image" role="img" aria-label="Creative team collaborating around a table"/><div className="approach-sticker"><Sparkles size={19} /><span>Curiosity<br />is our craft.</span></div></div><div className="approach-copy"><span className="section-kicker">HOW WE MAKE IT HAPPEN</span><h2>Less passing the brief.<br /><span className="serif-italic">More getting it.</span></h2><p className="approach-lead">Good work starts with listening. Great work happens when strategy, creativity and production pull in the same direction.</p><div className="steps"><div className="step"><span>01</span><div><h3>Get curious</h3><p>We ask better questions to find the real opportunity behind the brief.</p></div></div><div className="step"><span>02</span><div><h3>Make it matter</h3><p>We shape the big idea, map the details and build a plan that works in the real world.</p></div></div><div className="step"><span>03</span><div><h3>Bring it to life</h3><p>We make it happen with care, clarity and a close eye on every moving part.</p></div></div></div><a className="text-link" href="#contact">Let’s make something meaningful <ArrowUpRight size={16} /></a></div></section>

      <section className="quote-section"><div className="section-wrap quote-inner"><span className="section-kicker">KIND WORDS, REAL PEOPLE</span><div className="quote-mark">“</div><div className="quote-content" aria-live="polite"><motion.blockquote key={activeTestimonial} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }}>{testimonials[activeTestimonial].quote}</motion.blockquote><div className="quote-byline"><div><strong>{testimonials[activeTestimonial].name}</strong><span>{testimonials[activeTestimonial].role}</span></div><div className="quote-controls"><button aria-label="Previous testimonial" onClick={() => setActiveTestimonial((activeTestimonial + testimonials.length - 1) % testimonials.length)}>←</button><span>0{activeTestimonial + 1} <i>/</i> 0{testimonials.length}</span><button aria-label="Next testimonial" onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}>→</button></div></div></div></div></section>

      <section className="contact-section section-wrap" id="contact"><div className="contact-copy"><span className="section-kicker">YOUR NEXT CHAPTER STARTS HERE</span><h2>Got a good<br /><span className="serif-italic">feeling?</span></h2><p>Tell us what you’re dreaming up. We’ll bring the questions, the ideas and a fresh notebook.</p><div className="contact-details"><span>Prefer a proper conversation?</span><a href="mailto:hello@lumisync.studio">hello@lumisync.studio <ArrowUpRight size={15} /></a></div></div><form className="contact-form" onSubmit={submitInquiry}><div className="form-top"><span>LET’S GET THE BALL ROLLING</span><span className="form-spark">✳</span></div>{submitted ? <div className="success-state"><span className="success-icon"><Check size={25} /></span><h3>That’s a great start.</h3><p>Thanks, {form.name || 'there'}! This demo form is ready to connect to your email or CRM. For now, reach us at hello@lumisync.studio.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another inquiry <ArrowRight size={16} /></button></div> : <><label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="What should we call you?" autoComplete="name" /></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" autoComplete="email" /></label><label>What are you thinking about?<select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}><option>Event management</option><option>Advertising & branding</option><option>Digital marketing</option><option>Concerts & festivals</option><option>Weddings & corporate events</option><option>A little bit of everything</option></select></label><label>Tell us a little more<textarea rows={3} value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} placeholder="The idea, the date, the big ambition…" /></label><button className="submit-button" type="submit">Send the good stuff <ArrowUpRight size={18} /></button><p className="form-note">No pressure, no pitch deck required. Just a conversation.</p></>}</form></section>

      <footer className="footer"><div className="section-wrap"><div className="footer-top"><a href="#top" className="brand"><span className="brand-mark"><Asterisk size={23} strokeWidth={2.5} /></span><span>lumisync<span className="brand-light"> studio</span></span></a><p>Make it mean something.</p><a className="back-top" href="#top">Back to the top <ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© 2026 Lumisync Studio. Made with intention.</span><div className="socials"><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={17} /></a><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://www.facebook.com/" aria-label="Facebook"><Facebook size={17} /></a></div><span>Good ideas travel.</span></div></div></footer>
    </main>
  );
}
