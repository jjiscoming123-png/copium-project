"use client"

import { useEffect, useRef, useState } from "react"
import Logo from "@/components/Logo"

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[var(--color-background)]/90 backdrop-blur-xl border-b border-white/[0.04] py-4" : "bg-gradient-to-b from-[var(--color-background)] via-[var(--color-background)]/80 to-transparent py-7"}`}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 group">
          <Logo size={28} className="group-hover:scale-105 transition-transform duration-300" />
          <span className="text-[13px] font-bold tracking-[0.18em] uppercase text-white/90">COPIUM</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-[13px] text-[var(--color-muted)] font-medium">
          <a href="#story" className="hover:text-white transition-colors duration-300">Story</a>
          <a href="#principles" className="hover:text-white transition-colors duration-300">Principles</a>
          <a href="#vision" className="hover:text-white transition-colors duration-300">Vision</a>
        </div>
        <a href="https://x.com/COPIUM_Official" target="_blank" rel="noopener noreferrer"
          className="text-[13px] font-semibold text-white bg-[var(--color-accent)] px-5 py-2 rounded-full hover:bg-[var(--color-accent-dim)] transition-colors duration-300">
          Follow
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end pb-16 md:pb-24 overflow-hidden">
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[var(--color-accent)] blur-[250px] animate-breathe pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-15%] w-[500px] h-[500px] rounded-full bg-rose-900 blur-[200px] opacity-[0.08] pointer-events-none" />
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <div className="label animate-fade-up delay-1 mb-6">Est. 2026</div>
        <h1 className="display-xl animate-fade-up delay-2 mb-8">
          NOBODY<br />
          SELLS.<br />
          <span className="text-[var(--color-accent)]">EVERYBODY COPES.</span>
        </h1>
        <div className="max-w-lg animate-fade-up delay-3">
          <p className="body-lg">It&apos;s not denial. It&apos;s a survival strategy. The bag is heavy. The faith is heavier. We hold both.</p>
        </div>
        <div className="mt-10 animate-fade-up delay-4 flex items-center gap-6">
          <a href="#story" className="text-sm font-semibold text-white bg-[var(--color-accent)] px-7 py-3.5 rounded-full hover:bg-[var(--color-accent-dim)] transition-colors duration-300">Read the Manifesto</a>
          <a href="#principles" className="text-sm text-[var(--color-muted)] hover:text-white transition-colors duration-300">Our Principles →</a>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-5">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[var(--color-muted)]" />
      </div>
    </section>
  )
}

function Story() {
  const { ref, visible } = useInView()
  return (
    <section id="story" ref={ref} className="py-32 md:py-40">
      <div className="section-divider mb-32 md:mb-40" />
      <div className={`max-w-[1200px] mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="grid md:grid-cols-12 gap-12 md:gap-6">
          <div className="md:col-span-5">
            <div className="label mb-4">The Story</div>
            <h2 className="display-lg">The art of<br /><span className="text-[var(--color-accent)]">holding on.</span></h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-8">
            <p className="body-lg">Everyone knows it&apos;s going down. The chart is clear. The group chat has gone quiet. And yet — nobody sells. Not because they believe, but because selling means it&apos;s finally, officially real.</p>
            <p className="body-lg">COPIUM is that space between knowing and accepting. It&apos;s the drug that keeps you in your seat when every rational signal says walk away. It isn&apos;t weakness. It&apos;s the last act of defiance against an outcome you refuse to accept.</p>
            <p className="body-lg">And sometimes — just sometimes — that refusal is what turns a rout into a recovery. Not always. Not even often. But enough times to keep the prescription filled.</p>
            <div className="accent-line mt-4" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Principles() {
  const { ref, visible } = useInView()
  const items = [
    { num: "01", title: "Hold First, Reason Later", text: "The sell button is always there. The opportunity to hold is finite. In the moment of maximum fear, inaction is its own kind of courage." },
    { num: "02", title: "Denial Is a Tool", text: "Not every truth needs to be confronted immediately. Sometimes you need distance — from the chart, from the noise, from the number — to see what actually matters." },
    { num: "03", title: "Collective Faith Over Individual Logic", text: "One person holding is stubbornness. Ten thousand people holding is a movement. COPIUM works because it scales. Belief compounds." },
    { num: "04", title: "The Cope Is the Point", text: "We don't take COPIUM to get rich. We take it because the alternative — cold, sober certainty — is worse. Hope costs nothing. Regret costs everything." },
  ]
  return (
    <section id="principles" ref={ref} className="py-32 md:py-40 bg-[var(--color-surface)]">
      <div className={`max-w-[1200px] mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="label mb-4">Principles</div>
        <h2 className="display-lg mb-20 md:mb-28">What we<br /><span className="text-[var(--color-accent)]">stand for.</span></h2>
        <div className="space-y-0">
          {items.map((item, i) => (
            <div key={i} className="group border-t border-white/[0.06] py-10 md:py-14">
              <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-start">
                <div className="md:col-span-1 text-[var(--color-accent)] text-sm font-mono font-semibold pt-1">{item.num}</div>
                <h3 className="md:col-span-4 display-md group-hover:text-[var(--color-accent)] transition-colors duration-500">{item.title}</h3>
                <p className="md:col-span-5 md:col-start-7 body-lg">{item.text}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  return (
    <div className="py-16 md:py-24 overflow-hidden select-none">
      <div className="flex whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 animate-[marquee_30s_linear_infinite] items-center gap-12 pr-12">
            {["HOLD THE BAG.", "HOLD THE FAITH.", "HOLD THE BAG.", "HOLD THE FAITH.", "HOLD THE BAG.", "HOLD THE FAITH."].map((t, i) => (
              <span key={i} className={`text-5xl md:text-7xl font-black tracking-tight ${i % 2 === 0 ? "text-white/[0.04]" : "text-[var(--color-accent)]/20"}`}>{t}</span>
            ))}
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  )
}

function Vision() {
  const { ref, visible } = useInView()
  return (
    <section id="vision" ref={ref} className="py-32 md:py-40">
      <div className="section-divider mb-32 md:mb-40" />
      <div className={`max-w-[1200px] mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="max-w-3xl">
          <div className="label mb-4">Vision</div>
          <h2 className="display-lg mb-10">We&apos;re not building a token.<br />We&apos;re building <span className="text-[var(--color-accent)]">permission.</span></h2>
          <div className="space-y-8">
            <p className="body-lg">Permission to feel the fear and stay anyway. Permission to believe in something that the market has already written off. Permission to be irrational in a space that rewards exactly that — at exactly the right moment.</p>
            <p className="body-lg">COPIUM is the shared language of every holder who&apos;s ever stared at a red wallet and chosen tomorrow over today. That&apos;s not a niche. That&apos;s the majority of crypto.</p>
          </div>
          <div className="accent-line mt-12" />
        </div>
      </div>
    </section>
  )
}

function Join() {
  const { ref, visible } = useInView()
  return (
    <section ref={ref} className="py-32 md:py-40 bg-[var(--color-surface)]">
      <div className={`max-w-[1200px] mx-auto px-6 lg:px-8 text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="display-lg mb-6">Still holding?<br /><span className="text-[var(--color-accent)]">Good.</span></h2>
        <p className="body-lg max-w-lg mx-auto mb-12">You already know what this is. You&apos;ve been here before. Follow us. We&apos;ll get through this together.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://x.com/COPIUM_Official" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 text-sm font-semibold text-white bg-[var(--color-accent)] px-8 py-4 rounded-full hover:bg-[var(--color-accent-dim)] transition-colors duration-300">
            <span>𝕏</span><span>Follow on X</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Logo size={22} />
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/60">COPIUM</span>
        </div>
        <p className="text-xs text-[var(--color-muted)]">© 2026 COPIUM. Not financial advice. The bag is heavy. Hold anyway.</p>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main className="noise">
      <Nav /><Hero /><Story /><Principles /><Marquee /><Vision /><Join /><Footer />
    </main>
  )
}
