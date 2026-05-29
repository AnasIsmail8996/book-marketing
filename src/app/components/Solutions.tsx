'use client';

export default function Solutions() {
  const offerings = [
    { icon: '📱', title: 'Social Media Marketing', desc: 'Reach millions on Instagram, Facebook, TikTok & X' },
    { icon: '🔍', title: 'Search Engine Optimization', desc: 'Rank higher on Google for book-related searches' },
    { icon: '🛒', title: 'AMZ Marketing', desc: 'Dominate Amazon search results & sponsored listings' },
    { icon: '✍️', title: 'Content Marketing', desc: 'Compelling content that converts readers into buyers' },
    { icon: '🚀', title: 'Book Launch Campaigns', desc: 'High-impact launches that create instant buzz' },
    { icon: '🎬', title: 'Book Trailers', desc: 'Cinematic trailers that captivate your audience' },
    { icon: '💻', title: 'Author Website', desc: 'Professional websites that establish your brand' },
  ];

  return (
    <section id="about" style={{
      padding: '100px 0',
      background: 'var(--background)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.3s ease',
    }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="solutions-grid">
          <div>
            <div className="section-label">Services We Offer</div>
            <h2 className="section-heading" style={{ marginBottom: '16px' }}>
              Complete Marketing<br />
              <span className="accent">Solutions for Authors</span>
            </h2>
            <p style={{ color: 'var(--foreground-muted)', lineHeight: 1.75, marginBottom: '40px', transition: 'color 0.3s ease' }}>
              From your first launch to bestseller status — we provide end-to-end book marketing solutions that deliver real, measurable results.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary">
                Start Your Journey
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13"><path fillRule="evenodd" fill="currentColor" d="M0.499,6.498 L12.85,6.498 L7.585,1.998 L8.999,0.584 L15.913,7.499 L8.999,14.413 L7.585,12.998 L12.85,8.498 L0.499,8.498 L0.499,6.498 Z"/></svg>
              </a>
              <a href="#pricing" className="btn-outline">View Packages</a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {offerings.map((item) => (
              <div key={item.title} className="sol-item">
                <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--foreground)', fontSize: '0.95rem', transition: 'color 0.3s ease' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--foreground-muted)', marginTop: '2px', transition: 'color 0.3s ease' }}>{item.desc}</div>
                </div>
                <div style={{ marginLeft: 'auto', color: '#f59e0b', opacity: 0.5, flexShrink: 0 }}>→</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .solutions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .sol-item { display: flex; align-items: center; gap: 16px; padding: 18px 20px; background: var(--card-bg); border: 1px solid var(--border-light); border-radius: 14px; transition: all 0.35s ease; cursor: default; backdrop-filter: blur(10px); }
        .sol-item:hover { background: rgba(245,158,11,0.08); border-color: rgba(245,158,11,0.25); transform: translateX(8px); box-shadow: 0 12px 30px rgba(0,0,0,0.25); }
        @media (max-width: 1100px) { #about { padding: 80px 0 !important; } .solutions-grid { gap: 50px !important; } #about .container { padding: 0 20px !important; } }
        @media (max-width: 900px) { #about { padding: 70px 0 !important; } .solutions-grid { grid-template-columns: 1fr !important; gap: 40px !important; } #about > div.container > div > div:first-child { text-align: center !important; } #about > div.container > div > div:first-child p { max-width: 700px !important; margin-left: auto !important; margin-right: auto !important; } #about > div.container > div > div:first-child > div:last-child { justify-content: center !important; } }
        @media (max-width: 600px) { #about { padding: 52px 0 !important; overflow: hidden !important; } #about .container { padding: 0 14px !important; } #about > div.container > div > div:first-child { text-align: center !important; } #about > div.container > div > div:first-child h2 { font-size: 2rem !important; line-height: 1.3 !important; margin-bottom: 14px !important; } #about > div.container > div > div:first-child h2 br { display: none !important; } #about > div.container > div > div:first-child p { font-size: 0.92rem !important; line-height: 1.7 !important; margin-bottom: 28px !important; } #about > div.container > div > div:first-child > div:last-child { width: 100% !important; display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; gap: 12px !important; } #about > div.container > div > div:first-child > div:last-child a { width: 100% !important; max-width: 300px !important; justify-content: center !important; text-align: center !important; } .solutions-grid { gap: 30px !important; } .sol-item { padding: 16px !important; gap: 14px !important; border-radius: 12px !important; } .sol-item:hover { transform: none !important; } .sol-item > span { font-size: 1.2rem !important; } .sol-item > div:nth-child(2) > div:first-child { font-size: 0.9rem !important; line-height: 1.4 !important; } .sol-item > div:nth-child(2) > div:last-child { font-size: 0.8rem !important; line-height: 1.55 !important; } }
        @media (max-width: 420px) { #about { padding: 42px 0 !important; } #about .container { padding: 0 12px !important; } .solutions-grid { gap: 24px !important; } #about > div.container > div > div:first-child h2 { font-size: 1.7rem !important; line-height: 1.35 !important; } #about > div.container > div > div:first-child p { font-size: 0.85rem !important; line-height: 1.6 !important; } #about > div.container > div > div:first-child > div:last-child { gap: 10px !important; } #about > div.container > div > div:first-child > div:last-child a { max-width: 100% !important; width: 100% !important; padding: 14px 18px !important; font-size: 0.88rem !important; } .sol-item { padding: 14px !important; gap: 12px !important; align-items: flex-start !important; } .sol-item > span { font-size: 1.05rem !important; margin-top: 2px !important; } .sol-item > div:nth-child(2) > div:first-child { font-size: 0.85rem !important; } .sol-item > div:nth-child(2) > div:last-child { font-size: 0.76rem !important; line-height: 1.5 !important; margin-top: 4px !important; } .sol-item > div:last-child { font-size: 0.9rem !important; margin-top: 2px !important; } }
      `}</style>
    </section>
  );
}
