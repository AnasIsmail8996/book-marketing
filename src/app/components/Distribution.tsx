'use client';
import Image from 'next/image';

const channels = [
  { src: '/Amazon 1.webp', name: 'Amazon', w: 120, h: 40 },
  { src: '/BarnesAndNoble 1.webp', name: 'Barnes & Noble', w: 140, h: 40 },
  { src: '/AppleBooks 1.webp', name: 'Apple Books', w: 110, h: 40 },
  { src: '/Ingram 1.webp', name: 'Ingram', w: 110, h: 40 },
  { src: '/Kobo 1.webp', name: 'Kobo', w: 90, h: 40 },
];

export default function Distribution() {
  return (
    <section style={{
      padding: '100px 0 0',
      background: 'var(--section-gradient)',
      transition: 'background 0.3s ease',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-label">Distribution</div>
          <h2 className="section-heading" style={{ marginBottom: '20px' }}>
            Your Book, Everywhere<br />
            <span className="accent">Readers Are Looking</span>
          </h2>
          <p style={{ color: 'var(--foreground-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75, transition: 'color 0.3s ease' }}>
            We help your book reach readers across <strong style={{ color: 'var(--foreground-secondary)', transition: 'color 0.3s ease' }}>major book marketplaces and digital platforms</strong> where people are actively searching.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap', marginBottom: '80px' }}>
          {channels.map(ch => (
            <div
              key={ch.name}
              style={{
                padding: '20px 32px',
                background: 'var(--card-hover)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.3s',
                filter: 'brightness(0.7) grayscale(0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.filter = 'brightness(1)';
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.4)';
                e.currentTarget.style.background = 'rgba(245,158,11,0.08)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.filter = 'brightness(0.7) grayscale(0.3)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'var(--card-hover)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <Image src={ch.src} alt={ch.name} width={ch.w} height={ch.h} style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>

      <div style={{
        background: 'var(--footer-bg)',
        borderTop: '1px solid var(--border-light)',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center" style={{ padding: '80px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', animation: 'float 4s ease-in-out infinite' }}>
              <Image
                src="/3d-tablet.webp"
                alt="Your book everywhere"
                width={360}
                height={280}
                style={{ objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(245,158,11,0.2))' }}
              />
            </div>

            <div className="text-center md:text-left">
              <div className="section-label">Our Guarantee</div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 800, color: 'var(--footer-foreground)', marginBottom: '20px', lineHeight: 1.2,
                transition: 'color 0.3s ease',
              }}>
                Quality Coverage &amp;<br />Global <span style={{ color: '#f59e0b' }}>Outreach Guaranteed!</span>
              </h3>
              <p style={{ color: 'var(--footer-foreground-muted)', lineHeight: 1.8, marginBottom: '32px', transition: 'color 0.3s ease' }}>
                We don&apos;t just promise results — we guarantee them. Your book will appear on every major platform with optimized listings designed to convert browsers into buyers.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#contact" className="btn-primary">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13"><path fillRule="evenodd" fill="currentColor" d="M0.499,6.498 L12.85,6.498 L7.585,1.998 L8.999,0.584 L15.913,7.499 L8.999,14.413 L7.585,12.998 L12.85,8.498 L0.499,8.498 L0.499,6.498 Z" /></svg>
                </a>
                <a href="tel:+16502930132" className="btn-ghost">📞 Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { section > div:last-child > div.container > div { gap: 40px !important; } section > div:last-child > div.container > div > div:first-child img { width: 280px !important; height: auto !important; } }
        @media (max-width: 900px) { section > div:first-of-type { padding: 70px 0 0 !important; } section > div:first-of-type > div.container > div:first-child { margin-bottom: 40px !important; padding: 0 10px !important; } section > div:first-of-type > div.container > div:nth-child(2) { gap: 18px !important; justify-content: center !important; } section > div:first-of-type > div.container > div:nth-child(2) > div { padding: 16px 20px !important; } section > div:last-child > div.container > div { grid-template-columns: 1fr !important; text-align: center !important; padding: 60px 0 !important; } section > div:last-child > div.container > div > div:first-child { order: 1 !important; justify-content: center !important; } section > div:last-child > div.container > div > div:last-child { order: 2 !important; display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; text-align: center !important; } section > div:last-child > div.container > div > div:last-child > div:last-child { justify-content: center !important; } section > div:last-child > div.container > div > div:first-child img { width: 240px !important; } }
        @media (max-width: 600px) { section { overflow: hidden !important; } section > div:first-of-type { padding: 50px 16px 0 !important; } section > div:first-of-type > div.container > div:first-child { margin-bottom: 32px !important; } section > div:first-of-type > div.container > div:first-child h2 { font-size: 2rem !important; line-height: 1.3 !important; } section > div:first-of-type > div.container > div:first-child h2 br { display: none !important; } section > div:first-of-type > div.container > div:first-child p { font-size: 0.92rem !important; line-height: 1.7 !important; padding: 0 4px !important; } section > div:first-of-type > div.container > div:nth-child(2) { gap: 14px !important; margin-bottom: 50px !important; } section > div:first-of-type > div.container > div:nth-child(2) > div { padding: 12px 16px !important; border-radius: 14px !important; width: calc(50% - 10px) !important; min-width: 130px !important; } section > div:first-of-type > div.container > div:nth-child(2) > div img { width: 70px !important; height: auto !important; } section > div:last-child > div.container { padding: 0 16px !important; } section > div:last-child > div.container > div { padding: 50px 0 !important; gap: 28px !important; } section > div:last-child > div.container > div > div:first-child img { width: 200px !important; height: auto !important; } section > div:last-child > div.container > div > div:last-child h3 { font-size: 1.5rem !important; line-height: 1.35 !important; } section > div:last-child > div.container > div > div:last-child h3 br { display: none !important; } section > div:last-child > div.container > div > div:last-child p { font-size: 0.92rem !important; line-height: 1.7 !important; margin-bottom: 24px !important; } section > div:last-child > div.container > div > div:last-child > div:last-child { width: 100% !important; display: flex !important; flex-direction: column !important; align-items: center !important; gap: 12px !important; } section > div:last-child > div.container > div > div:last-child > div:last-child a { width: 100% !important; max-width: 320px !important; justify-content: center !important; text-align: center !important; } }
        @media (max-width: 420px) { section > div:last-child > div.container > div > div:last-child > div:last-child { width: 100% !important; display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; text-align: center !important; gap: 10px !important; } section > div:last-child > div.container > div > div:last-child > div:last-child a { width: 100% !important; max-width: 280px !important; margin: 0 auto !important; display: flex !important; align-items: center !important; justify-content: center !important; text-align: center !important; } }
      `}</style>
    </section>
  );
}
