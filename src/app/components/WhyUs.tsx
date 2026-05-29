'use client';
export default function WhyUs() {
  const reasons = [
    {
      icon: '🎯',
      title: 'Guaranteed ROI Focus',
      desc: 'Every campaign is optimized for maximum return. We measure success in sales, not just impressions.',
    },
    {
      icon: '🌍',
      title: 'Increase Your Reach',
      desc: 'Multi-platform strategy puts your book in front of millions of potential readers worldwide.',
    },
    {
      icon: '📊',
      title: 'Significant Sales Growth',
      desc: 'Data-driven approach consistently delivers 3x or more in book sales for our clients.',
    },
    {
      icon: '⚡',
      title: 'Amplify Your Impact',
      desc: 'Build lasting author authority that continues to drive sales long after campaigns end.',
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      desc: 'Your personal marketing team is always available — no bots, no delays, real experts.',
    },
    {
      icon: '🔬',
      title: 'Proven Strategies',
      desc: 'Battle-tested campaigns refined from 500+ successful author marketing journeys.',
    },
  ];

  return (
    <section id="why-us" style={{
      padding: '100px 0',
      background: 'var(--background)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.3s ease',
    }}>
      <div style={{ position: 'absolute', top: '50%', right: '-100px', transform: 'translateY(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-heading" style={{ marginBottom: '20px' }}>
            Strategy To <span className="accent">Outperform</span><br />Your Competitors
          </h2>
          <p style={{ color: 'var(--foreground-muted)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.75, transition: 'color 0.3s ease' }}>
            Increase book visibility, engagement, and sales with expert marketing strategies tailored to your unique story.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {reasons.map((r) => (
            <div
              key={r.title}
              style={{
                display: 'flex', gap: '20px', padding: '28px',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-light)',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--card-hover)';
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--card-bg)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px', flexShrink: 0,
                background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
              }}>{r.icon}</div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)', marginBottom: '8px', transition: 'color 0.3s ease' }}>{r.title}</h3>
                <p style={{ fontSize: '0.87rem', color: 'var(--foreground-muted)', lineHeight: 1.7, transition: 'color 0.3s ease' }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(245,158,11,0.1))',
          border: '1px solid rgba(245,158,11,0.2)',
          borderRadius: '24px',
          padding: '48px 40px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap',
          position: 'relative', overflow: 'hidden',
        }} className="why-cta-banner">
          <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)', borderRadius: '50%' }} />
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '8px', transition: 'color 0.3s ease' }}>
              Ready to become a <span style={{ color: '#f59e0b' }}>bestselling author?</span>
            </h3>
            <p style={{ color: 'var(--foreground-muted)', fontSize: '1rem', transition: 'color 0.3s ease' }}>Join 500+ authors who&apos;ve transformed their book sales with Triverse.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', flexShrink: 0 }}>
            <a href="#contact" className="btn-primary">Get Free Consultation
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13"><path fillRule="evenodd" fill="currentColor" d="M0.499,6.498 L12.85,6.498 L7.585,1.998 L8.999,0.584 L15.913,7.499 L8.999,14.413 L7.585,12.998 L12.85,8.498 L0.499,8.498 L0.499,6.498 Z"/></svg>
            </a>
            <a href="tel:+12104938277" className="btn-outline">📞 Call Us</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { #why-us { padding: 80px 0 !important; } #why-us > div.container > div:nth-child(2) { gap: 20px !important; } .why-cta-banner { padding: 40px 32px !important; } }
        @media (max-width: 900px) { #why-us { padding: 65px 0 !important; } #why-us > div.container > div:first-of-type { margin-bottom: 48px !important; padding: 0 12px !important; } #why-us > div.container > div:first-of-type h2 br { display: none !important; } #why-us > div.container > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; gap: 18px !important; } #why-us > div.container > div:nth-child(2) > div { padding: 24px !important; } .why-cta-banner { flex-direction: column !important; align-items: center !important; justify-content: center !important; text-align: center !important; padding: 36px 28px !important; gap: 24px !important; } .why-cta-banner > div:last-child { justify-content: center !important; } }
        @media (max-width: 600px) { #why-us { padding: 50px 0 !important; overflow: hidden !important; } #why-us > div.container { padding: 0 16px !important; } #why-us > div.container > div:first-of-type { margin-bottom: 36px !important; } #why-us > div.container > div:first-of-type h2 { font-size: 2rem !important; line-height: 1.3 !important; } #why-us > div.container > div:first-of-type p { font-size: 0.92rem !important; line-height: 1.7 !important; } #why-us > div.container > div:nth-child(2) { grid-template-columns: 1fr !important; gap: 16px !important; margin-bottom: 40px !important; } #why-us > div.container > div:nth-child(2) > div { padding: 20px !important; gap: 16px !important; border-radius: 14px !important; } #why-us > div.container > div:nth-child(2) > div h3 { font-size: 0.95rem !important; } #why-us > div.container > div:nth-child(2) > div p { font-size: 0.84rem !important; line-height: 1.6 !important; } #why-us > div.container > div:nth-child(2) > div > div:first-child { width: 46px !important; height: 46px !important; font-size: 1.25rem !important; border-radius: 12px !important; } .why-cta-banner { padding: 28px 20px !important; border-radius: 18px !important; gap: 20px !important; } .why-cta-banner h3 { font-size: 1.4rem !important; line-height: 1.4 !important; } .why-cta-banner p { font-size: 0.9rem !important; line-height: 1.7 !important; } .why-cta-banner > div:last-child { width: 100% !important; display: flex !important; flex-direction: column !important; align-items: center !important; gap: 12px !important; } .why-cta-banner > div:last-child a { width: 100% !important; max-width: 320px !important; justify-content: center !important; text-align: center !important; } }
        @media (max-width: 420px) { #why-us { padding: 40px 0 !important; } #why-us > div.container { padding: 0 14px !important; } #why-us > div.container > div:first-of-type { margin-bottom: 28px !important; } #why-us > div.container > div:first-of-type h2 { font-size: 1.7rem !important; } #why-us > div.container > div:first-of-type p { font-size: 0.86rem !important; } #why-us > div.container > div:nth-child(2) { gap: 14px !important; } #why-us > div.container > div:nth-child(2) > div { padding: 18px !important; } #why-us > div.container > div:nth-child(2) > div p { font-size: 0.8rem !important; } .why-cta-banner { padding: 24px 16px !important; border-radius: 16px !important; } .why-cta-banner h3 { font-size: 1.15rem !important; } .why-cta-banner p { font-size: 0.82rem !important; } .why-cta-banner > div:last-child { gap: 10px !important; } .why-cta-banner > div:last-child a { max-width: 100% !important; padding: 14px 18px !important; font-size: 0.88rem !important; } }
      `}</style>
    </section>
  );
}
