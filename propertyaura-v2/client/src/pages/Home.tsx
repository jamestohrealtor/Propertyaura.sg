import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Download,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Minus,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Buy with clarity",
    body: "From first viewing to final keys, a measured strategy built around the life you want to live.",
    link: "Explore buying",
  },
  {
    number: "02",
    title: "Sell with confidence",
    body: "Positioning, presentation and negotiation that protect your property's story — and its value.",
    link: "Explore selling",
  },
  {
    number: "03",
    title: "Invest with intent",
    body: "A grounded view of Singapore's market, built for long-term decisions rather than short-term noise.",
    link: "Explore investing",
  },
];

const articles = [
  {
    category: "Market notes",
    date: "06 Sep 2024",
    title: "The quiet premium: Why liveable layouts are winning Singapore buyers",
    excerpt: "Beyond the headline price, the details that shape enduring value.",
  },
  {
    category: "A better move",
    date: "28 Aug 2024",
    title: "Three questions to ask before you make your next property move",
    excerpt: "A considered framework for entering the market with less noise and more conviction.",
  },
  {
    category: "Neighbourhoods",
    date: "14 Aug 2024",
    title: "Joo Chiat, re-read: The case for character in a changing city",
    excerpt: "An afternoon walk through one of Singapore's most layered neighbourhoods.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f0e8] text-[#13213b] selection:bg-[#d9b66e] selection:text-[#13213b]">
      <header className="absolute inset-x-0 top-0 z-40 px-5 py-5 sm:px-8 lg:px-14 lg:py-7">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between border-b border-white/15 pb-5 text-white">
          <a href="#top" className="flex items-center gap-3" aria-label="PropertyAura home">
            <span className="flex h-9 w-9 items-center justify-center border border-[#d9b66e] font-serif text-xl text-[#d9b66e]">P</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">PropertyAura</span>
          </a>
          <nav className="hidden items-center gap-9 text-[11px] uppercase tracking-[0.2em] text-white/70 md:flex">
            <a className="transition-colors hover:text-[#d9b66e]" href="#approach">Approach</a>
            <a className="transition-colors hover:text-[#d9b66e]" href="#services">Services</a>
            <a className="transition-colors hover:text-[#d9b66e]" href="#journal">Journal</a>
          </nav>
          <a href="#consultation" className="hidden items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d9b66e] transition-colors hover:text-white sm:flex">
            Book a consultation <ArrowRight size={15} strokeWidth={1.5} />
          </a>
          <button className="rounded-full p-2 text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mx-auto mt-3 max-w-[1440px] border border-white/15 bg-[#13213b]/95 p-5 text-[11px] uppercase tracking-[0.2em] text-white md:hidden">
            <div className="flex flex-col gap-5">
              <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#journal" onClick={() => setMenuOpen(false)}>Journal</a>
              <a className="text-[#d9b66e]" href="#consultation" onClick={() => setMenuOpen(false)}>Book a consultation</a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-[720px] overflow-hidden bg-[#13213b] text-white lg:min-h-[820px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(196,151,76,0.24),transparent_27%),linear-gradient(115deg,#13213b_0%,#172b4b_52%,#102039_100%)]" />
          <div className="absolute -right-20 top-24 h-[540px] w-[540px] rounded-full border border-[#d9b66e]/20 lg:right-[4%] lg:top-20" />
          <div className="absolute -right-5 top-39 h-[390px] w-[390px] rounded-full border border-[#d9b66e]/10 lg:right-[10%] lg:top-40" />
          <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-[1.06fr_.94fr] lg:gap-16 lg:px-14 lg:pb-24 lg:pt-48">
            <div className="max-w-[730px]">
              <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#d9b66e]"><span className="h-px w-10 bg-[#d9b66e]" /> Singapore property, considered</p>
              <h1 className="font-serif text-[clamp(3.75rem,7.5vw,7.5rem)] font-normal leading-[0.88] tracking-[-0.055em]">Make your<br /><span className="italic text-[#d9b66e]">next move</span><br />meaningful.</h1>
              <p className="mt-8 max-w-[455px] text-[16px] leading-7 text-white/65">Thoughtful advice for buying, selling and investing in Singapore property — with a long view in mind.</p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a href="#consultation" className="group inline-flex items-center gap-3 bg-[#d9b66e] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#13213b] transition-all hover:bg-[#f0d195]">Start a conversation <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
                <a href="#approach" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-[#d9b66e]">Our approach <ArrowDownRight size={16} /></a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[460px] lg:mr-0 lg:mt-14">
              <div className="absolute -inset-3 border border-[#d9b66e]/30" />
              <div className="relative aspect-[4/5] overflow-hidden bg-[#263a58]">
                <img src="/manus-storage/liftapp(3)_a5f2f490.png" alt="Portrait of a Singapore property advisor" className="h-full w-full object-cover object-center grayscale-[12%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13213b]/35 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 flex h-24 w-24 flex-col justify-center bg-[#d9b66e] px-4 text-[#13213b] sm:-left-8">
                <span className="font-serif text-3xl leading-none">12</span><span className="mt-1 text-[9px] font-semibold uppercase leading-3 tracking-[0.18em]">years of<br />perspective</span>
              </div>
              <p className="absolute -right-14 top-10 hidden max-w-[100px] rotate-90 text-[9px] uppercase tracking-[0.3em] text-white/45 sm:block">A more personal way to property</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-5 pb-6 text-[9px] uppercase tracking-[0.26em] text-white/35 sm:px-8 lg:px-14"><span>01 / 04</span><span>Scroll to discover ↓</span></div>
        </section>

        <section id="approach" className="relative bg-[#f4f0e8] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
          <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[.76fr_1.24fr] lg:gap-28">
            <div>
              <p className="eyebrow">A quieter kind of expertise</p>
              <h2 className="mt-5 max-w-[450px] font-serif text-[clamp(2.7rem,5vw,5.2rem)] leading-[0.94] tracking-[-0.045em]">Property is personal. <span className="italic text-[#9a6d29]">Advice should be too.</span></h2>
            </div>
            <div className="max-w-[600px] lg:pt-11">
              <p className="font-serif text-[24px] leading-[1.35] text-[#213250]">The best property decisions are rarely made in a rush. They come from knowing what matters to you, understanding what the market is saying, and having someone experienced enough to tell the difference.</p>
              <div className="mt-10 grid gap-8 border-t border-[#13213b]/15 pt-8 sm:grid-cols-3">
                <div><p className="font-serif text-4xl text-[#9a6d29]">S$86m</p><p className="mt-2 text-[10px] uppercase leading-4 tracking-[0.18em] text-[#13213b]/55">in homes transacted<br />for our clients</p></div>
                <div><p className="font-serif text-4xl text-[#9a6d29]">4.9/5</p><p className="mt-2 text-[10px] uppercase leading-4 tracking-[0.18em] text-[#13213b]/55">client experience<br />rating</p></div>
                <div><p className="font-serif text-4xl text-[#9a6d29]">100%</p><p className="mt-2 text-[10px] uppercase leading-4 tracking-[0.18em] text-[#13213b]/55">independent,<br />always</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#e6dfd2] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow">How I can help</p><h2 className="mt-4 font-serif text-[clamp(2.7rem,5vw,5rem)] leading-[0.95] tracking-[-0.05em]">A considered<br /><span className="italic text-[#9a6d29]">point of view.</span></h2></div><p className="max-w-[280px] text-[14px] leading-6 text-[#13213b]/60 sm:pb-1">Three ways to make the property market work harder for the life you are building.</p></div>
            <div className="mt-16 grid border-t border-[#13213b]/20 md:grid-cols-3">
              {services.map((service, index) => <article key={service.number} className={`group border-b border-[#13213b]/20 py-8 md:border-b-0 md:py-10 md:pr-10 ${index > 0 ? "md:border-l md:pl-10" : ""}`}><div className="flex items-start justify-between"><span className="font-serif text-2xl text-[#9a6d29]">{service.number}</span><ArrowUpRight className="text-[#13213b]/35 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#9a6d29]" size={20} /></div><h3 className="mt-14 font-serif text-[32px] leading-none tracking-[-0.03em]">{service.title}</h3><p className="mt-5 max-w-[280px] text-[14px] leading-6 text-[#13213b]/60">{service.body}</p><a href="#consultation" className="mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a6d29]">{service.link} <ArrowRight size={14} /></a></article>)}
            </div>
          </div>
        </section>

        <section className="bg-[#13213b] px-5 py-24 text-white sm:px-8 lg:px-14 lg:py-32">
          <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-[1fr_.9fr]">
            <div><p className="eyebrow text-[#d9b66e]">A useful place to begin</p><h2 className="mt-5 max-w-[600px] font-serif text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.93] tracking-[-0.05em]">Know what your<br /><span className="italic text-[#d9b66e]">property is worth.</span></h2><p className="mt-7 max-w-[480px] text-[15px] leading-7 text-white/60">Get a clear, considered view of your property's current market position — no hard sell, just useful context for your next decision.</p><a href="#consultation" className="group mt-9 inline-flex items-center gap-3 border border-[#d9b66e] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d9b66e] transition-all hover:bg-[#d9b66e] hover:text-[#13213b]">Download the valuation guide <Download size={16} className="transition-transform group-hover:translate-y-0.5" /></a></div>
            <div className="relative mx-auto w-full max-w-[480px]"><div className="absolute -inset-4 border border-[#d9b66e]/25" /><div className="relative aspect-[3/2] overflow-hidden"><img src="/manus-storage/propertyaura-shophouse_8d1ecde2.jpg" alt="Golden hour shophouses in Singapore" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-[#13213b]/20 mix-blend-multiply" /></div><div className="absolute -bottom-5 -right-4 flex items-center gap-3 bg-[#e6dfd2] px-5 py-4 text-[#13213b]"><ShieldCheck size={20} className="text-[#9a6d29]" strokeWidth={1.5} /><span className="max-w-[120px] text-[10px] font-semibold uppercase leading-4 tracking-[0.14em]">A guide for<br />the discerning owner</span></div></div>
          </div>
        </section>

        <section id="journal" className="bg-[#f4f0e8] px-5 py-24 sm:px-8 lg:px-14 lg:py-32"><div className="mx-auto max-w-[1280px]"><div className="flex items-end justify-between border-b border-[#13213b]/20 pb-8"><div><p className="eyebrow">From the journal</p><h2 className="mt-4 font-serif text-[clamp(2.7rem,5vw,5rem)] leading-none tracking-[-0.05em]">Thoughts on <span className="italic text-[#9a6d29]">place.</span></h2></div><a href="#journal" className="hidden items-center gap-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a6d29] sm:flex">View all articles <ArrowRight size={15} /></a></div><div className="grid md:grid-cols-3">{articles.map((article, index) => <article key={article.title} className={`group border-b border-[#13213b]/20 py-9 md:border-b-0 md:py-12 ${index > 0 ? "md:border-l md:pl-8 md:ml-8" : "md:pr-8"}`}><div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9a6d29]"><span>{article.category}</span><span className="text-[#13213b]/40">{article.date}</span></div><h3 className="mt-9 font-serif text-[25px] leading-[1.1] tracking-[-0.025em] transition-colors group-hover:text-[#9a6d29]">{article.title}</h3><p className="mt-5 text-[14px] leading-6 text-[#13213b]/55">{article.excerpt}</p><a href="#journal" className="mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#13213b]">Read article <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></a></article>)}</div></div></section>

        <section id="consultation" className="bg-[#d9b66e] px-5 py-20 sm:px-8 lg:px-14 lg:py-28"><div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24"><div><p className="eyebrow text-[#13213b]/65">Let's talk property</p><h2 className="mt-5 max-w-[520px] font-serif text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.92] tracking-[-0.05em]">Your next chapter starts with a <span className="italic">conversation.</span></h2><p className="mt-7 max-w-[390px] text-[15px] leading-7 text-[#13213b]/70">Tell me a little about where you are in your property journey. I will come prepared with a point of view.</p><div className="mt-9 flex flex-col gap-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#13213b]/75"><a href="mailto:propertyaura@gmail.com" className="flex items-center gap-3 hover:text-[#13213b]"><Mail size={16} /> propertyaura@gmail.com</a><a href="tel:+6586854321" className="flex items-center gap-3 hover:text-[#13213b]"><Phone size={16} /> +65 868 54321</a></div></div><div className="bg-[#f4f0e8] p-6 sm:p-9"><div className="mb-8 flex items-center justify-between border-b border-[#13213b]/15 pb-5"><span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a6d29]">Free 30-minute consultation</span><CalendarDays size={19} className="text-[#9a6d29]" /></div>{submitted ? <div className="flex min-h-[310px] flex-col items-center justify-center text-center"><div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d9b66e] text-[#13213b]"><Check size={25} /></div><h3 className="mt-6 font-serif text-3xl">Thank you.</h3><p className="mt-3 max-w-[320px] text-[14px] leading-6 text-[#13213b]/60">Your note is on its way. I will be in touch within one working day.</p></div> : <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2"><label className="field"><span>Your name</span><input required type="text" placeholder="e.g. Stephanie Tan" /></label><label className="field"><span>Email address</span><input required type="email" placeholder="you@email.com" /></label><label className="field"><span>I am looking to</span><select defaultValue=""><option value="" disabled>Select one</option><option>Buy a property</option><option>Sell a property</option><option>Invest in property</option><option>Understand my property's value</option></select><ChevronDown size={15} /></label><label className="field"><span>Preferred timing</span><select defaultValue=""><option value="" disabled>Select one</option><option>Weekday morning</option><option>Weekday afternoon</option><option>Weekday evening</option><option>Saturday</option></select><ChevronDown size={15} /></label><label className="field sm:col-span-2"><span>Tell me a little more <em>(optional)</em></span><textarea rows={3} placeholder="A neighbourhood, a question, a plan…" /></label><button type="submit" className="group mt-2 inline-flex items-center justify-center gap-3 bg-[#13213b] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-[#213250] sm:col-span-2">Book my consultation <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></button></form>}</div></div></section>
      </main>

      <footer className="bg-[#0d182c] px-5 py-12 text-white sm:px-8 lg:px-14 lg:py-16"><div className="mx-auto max-w-[1280px]"><div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1fr_auto_auto] md:gap-24"><div><a href="#top" className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center border border-[#d9b66e] font-serif text-xl text-[#d9b66e]">P</span><span className="text-[11px] font-semibold uppercase tracking-[0.24em]">PropertyAura</span></a><p className="mt-6 max-w-[270px] text-[13px] leading-6 text-white/45">A more personal way to navigate Singapore property.</p></div><div><p className="footer-label">Contact</p><div className="mt-4 flex flex-col gap-2 text-[13px] text-white/65"><a href="mailto:propertyaura@gmail.com" className="hover:text-[#d9b66e]">propertyaura@gmail.com</a><a href="tel:+6586854321" className="hover:text-[#d9b66e]">+65 868 54321</a><span>CEA Reg. No. R012345A</span></div></div><div><p className="footer-label">Follow along</p><div className="mt-4 flex gap-3"><a aria-label="Instagram" href="#top" className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/60 transition-colors hover:border-[#d9b66e] hover:text-[#d9b66e]"><Instagram size={16} /></a><a aria-label="LinkedIn" href="#top" className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/60 transition-colors hover:border-[#d9b66e] hover:text-[#d9b66e]"><Linkedin size={16} /></a></div></div></div><div className="flex flex-col justify-between gap-3 pt-6 text-[9px] uppercase tracking-[0.16em] text-white/30 sm:flex-row"><span>© 2024 PropertyAura. All rights reserved.</span><span>Singapore · By appointment</span></div></div></footer>
    </div>
  );
}

function ArrowUpRight({ size, className }: { size: number; className?: string }) {
  return <ArrowRight size={size} className={className} />;
}

function FieldStyles() {
  return null;
}

void FieldStyles;
void Minus;
void Quote;
void Sparkles;
