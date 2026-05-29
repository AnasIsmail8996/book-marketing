'use client';

export default function Services() {
  const services = [
    {
      icon: '📈',
      title: 'Marketing Campaigns',
      desc: 'Data-driven campaigns across all major platforms that put your book in front of the right readers.',
      color: '#7c3aed',
      bg: 'rgba(124,58,237,0.1)',
      border: 'rgba(124,58,237,0.25)',
      id: 'svc-0',
    },
    {
      icon: '🏆',
      title: 'Best Seller Growth',
      desc: 'Strategic positioning and promotion to push your book to bestseller lists on Amazon and beyond.',
      color: '#f59e0b',
      bg: 'rgba(245,158,11,0.1)',
      border: 'rgba(245,158,11,0.25)',
      id: 'svc-1',
    },
    {
      icon: '📚',
      title: 'Book Sales',
      desc: 'Comprehensive sales strategies combining organic traffic, paid ads, and community engagement.',
      color: '#06b6d4',
      bg: 'rgba(6,182,212,0.1)',
      border: 'rgba(6,182,212,0.25)',
      id: 'svc-2',
    },
    {
      icon: '⭐',
      title: 'Author Visibility & Ranking',
      desc: 'Build your author brand and dominate search results across all major book discovery platforms.',
      color: '#10b981',
      bg: 'rgba(16,185,129,0.1)',
      border: 'rgba(16,185,129,0.25)',
      id: 'svc-3',
    },
  ];

  return (
    <section id="services" style={{
      padding: '100px 0',
      background: 'var(--section-gradient)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.3s ease',
    }}>
      <div style={{ position: 'absolute', top: '50%', left: '-200px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', borderRadius: '50%', transform: 'translateY(-50%)' }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label">What We Do</div>
          <h2 className="section-heading" style={{ marginBottom: '20px' }}>
            Publishing Hub <span className="accent">USA</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--foreground-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.75, transition: 'color 0.3s ease' }}>
            High-impact marketing campaigns that drive book sales, support bestseller growth, and increase author visibility across major platforms.
          </p>
        </div>

        <div className="services-grid-layout">
          {services.map((svc) => (
            <div key={svc.id} className={`svc-card svc-${svc.id}`}>
              <div className="svc-icon" style={{ background: `${svc.color}20`, border: `1px solid ${svc.color}40` }}>
                {svc.icon}
              </div>
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-desc">{svc.desc}</p>
              <div className="svc-line" style={{ background: `linear-gradient(90deg, transparent, ${svc.color}, transparent)` }} />
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '56px', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn-primary">Get Started Today
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13"><path fillRule="evenodd" fill="currentColor" d="M0.499,6.498 L12.85,6.498 L7.585,1.998 L8.999,0.584 L15.913,7.499 L8.999,14.413 L7.585,12.998 L12.85,8.498 L0.499,8.498 L0.499,6.498 Z"/></svg>
          </a>
          <a href="tel:+16502930132" className="btn-ghost">📞 +1 (650) 293-0132</a>
        </div>
      </div>

      <style>{`
        .services-grid-layout { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
        .svc-card { border-radius: 20px; padding: 36px 28px; transition: all 0.4s ease; cursor: default; position: relative; overflow: hidden; backdrop-filter: blur(10px); }
        .svc-card.svc-svc-0 { background: rgba(124,58,237,0.1); border: 1px solid rgba(124,58,237,0.25); }
        .svc-card.svc-svc-1 { background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.25); }
        .svc-card.svc-svc-2 { background: rgba(6,182,212,0.1); border: 1px solid rgba(6,182,212,0.25); }
        .svc-card.svc-svc-3 { background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.25); }
        .svc-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .svc-icon { width: 60px; height: 60px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin-bottom: 20px; }
        .svc-title { font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: var(--foreground); margin-bottom: 12px; line-height: 1.4; transition: color 0.3s ease; }
        .svc-desc { font-size: 0.9rem; color: var(--foreground-muted); line-height: 1.7; transition: color 0.3s ease; }
        .svc-line { position: absolute; bottom: 0; left: 0; right: 0; height: 2px; }
        @media (max-width: 1024px) { #services { padding: 80px 0 !important; } #services .container { padding: 0 20px !important; } .services-grid-layout { gap: 20px !important; } }
        @media (max-width: 900px) { #services { padding: 65px 0 !important; } #services > div.container > div:first-child { margin-bottom: 42px !important; } #services > div.container > div:first-child h2 { font-size: 2.2rem !important; line-height: 1.3 !important; } #services > div.container > div:first-child p { font-size: 0.96rem !important; line-height: 1.7 !important; } .services-grid-layout { grid-template-columns: repeat(2, 1fr) !important; gap: 18px !important; } .svc-card { padding: 30px 24px !important; } }
        @media (max-width: 700px) { .services-grid-layout { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { #services { padding: 50px 0 !important; overflow: hidden !important; } #services .container { padding: 0 14px !important; } #services > div.container > div:first-child { margin-bottom: 32px !important; } #services > div.container > div:first-child h2 { font-size: 1.9rem !important; line-height: 1.3 !important; margin-bottom: 14px !important; } #services > div.container > div:first-child p { font-size: 0.9rem !important; line-height: 1.7 !important; max-width: 100% !important; } .services-grid-layout { gap: 16px !important; } .svc-card { padding: 26px 20px !important; border-radius: 18px !important; } .svc-card:hover { transform: none !important; } .svc-icon { width: 52px !important; height: 52px !important; font-size: 1.5rem !important; margin-bottom: 16px !important; border-radius: 14px !important; } .svc-title { font-size: 1.05rem !important; margin-bottom: 10px !important; } .svc-desc { font-size: 0.86rem !important; line-height: 1.65 !important; } #services > div.container > div:last-child { width: 100% !important; margin-top: 34px !important; display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; gap: 12px !important; padding: 0 !important; } #services > div.container > div:last-child a { width: 100% !important; max-width: 300px !important; display: flex !important; align-items: center !important; justify-content: center !important; text-align: center !important; } }
        @media (max-width: 420px) { #services { padding: 40px 0 !important; } #services .container { padding: 0 12px !important; } #services > div.container > div:first-child { margin-bottom: 24px !important; } #services > div.container > div:first-child h2 { font-size: 1.6rem !important; line-height: 1.35 !important; } #services > div.container > div:first-child p { font-size: 0.85rem !important; line-height: 1.6 !important; } .services-grid-layout { gap: 14px !important; } .svc-card { padding: 22px 16px !important; border-radius: 16px !important; } .svc-icon { width: 46px !important; height: 46px !important; font-size: 1.3rem !important; margin-bottom: 14px !important; } .svc-title { font-size: 1rem !important; margin-bottom: 8px !important; } .svc-desc { font-size: 0.8rem !important; line-height: 1.55 !important; } #services > div.container > div:last-child { margin-top: 26px !important; gap: 10px !important; } #services > div.container > div:last-child a { width: 100% !important; max-width: 100% !important; padding: 14px 18px !important; font-size: 0.88rem !important; } }
      `}</style>
    </section>
  );
}
