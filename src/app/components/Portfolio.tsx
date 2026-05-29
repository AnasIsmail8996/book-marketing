'use client';
import Image from 'next/image';

const books = [
  '/book1.webp', '/book4.webp', '/book5.webp', '/book6.webp',
  '/book7.webp', '/book8.webp', '/book9.webp', '/book10.webp',
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{
      padding: '100px 0',
      background: 'var(--section-gradient)',
      overflow: 'hidden',
      transition: 'background 0.3s ease',
    }}>
      <div className="container" style={{ marginBottom: '60px', textAlign: 'center' }}>
        <div className="section-label">Our Work</div>
        <h2 className="section-heading" style={{ marginBottom: '16px' }}>
          Marketing <span className="accent">Portfolio</span>
        </h2>
        <p style={{ color: 'var(--foreground-muted)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.75, transition: 'color 0.3s ease' }}>
          Books we&apos;ve helped market across bestseller lists, Amazon rankings, and global audiences.
        </p>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '120px', background: 'linear-gradient(90deg, var(--background-secondary), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '120px', background: 'linear-gradient(-90deg, var(--background-secondary), transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div style={{
          display: 'flex', gap: '24px',
          animation: 'marquee 25s linear infinite',
          width: 'max-content',
        }}>
          {[...books, ...books].map((src, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0, width: '200px', height: '280px',
                borderRadius: '12px', overflow: 'hidden',
                border: '1px solid var(--border)',
                transition: 'all 0.3s',
                position: 'relative',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5), 0 0 0 2px rgba(245,158,11,0.4)';
                e.currentTarget.style.zIndex = '10';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.zIndex = '1';
              }}
            >
              <Image
                src={src}
                alt={`Book ${i + 1}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '56px', flexWrap: 'wrap' }}>
        <a href="#contact" className="btn-primary">
          Get Started Today
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13"><path fillRule="evenodd" fill="currentColor" d="M0.499,6.498 L12.85,6.498 L7.585,1.998 L8.999,0.584 L15.913,7.499 L8.999,14.413 L7.585,12.998 L12.85,8.498 L0.499,8.498 L0.499,6.498 Z"/></svg>
        </a>
        <a href="tel:+12104938277" className="btn-ghost">📞 Call Now</a>
      </div>

      <style>{`
        @media (max-width: 1024px) { #portfolio { padding: 80px 0 !important; } #portfolio > div:first-of-type { margin-bottom: 50px !important; padding: 0 20px !important; } #portfolio > div:nth-child(2) > div:first-child, #portfolio > div:nth-child(2) > div:nth-child(2) { width: 80px !important; } #portfolio > div:nth-child(2) > div:nth-child(3) { gap: 20px !important; } #portfolio > div:nth-child(2) > div:nth-child(3) > div { width: 180px !important; height: 250px !important; } }
        @media (max-width: 900px) { #portfolio { padding: 65px 0 !important; } #portfolio > div:first-of-type { margin-bottom: 40px !important; padding: 0 16px !important; } #portfolio > div:first-of-type h2 { font-size: 2.2rem !important; line-height: 1.3 !important; } #portfolio > div:first-of-type p { font-size: 0.95rem !important; line-height: 1.7 !important; } #portfolio > div:nth-child(2) > div:first-child, #portfolio > div:nth-child(2) > div:nth-child(2) { width: 60px !important; } #portfolio > div:nth-child(2) > div:nth-child(3) { gap: 18px !important; animation-duration: 20s !important; } #portfolio > div:nth-child(2) > div:nth-child(3) > div { width: 160px !important; height: 225px !important; } #portfolio > div:last-child { margin-top: 40px !important; gap: 14px !important; } }
        @media (max-width: 600px) { #portfolio { padding: 50px 0 !important; overflow: hidden !important; } #portfolio > div:first-of-type { margin-bottom: 30px !important; padding: 0 14px !important; } #portfolio > div:first-of-type h2 { font-size: 1.9rem !important; line-height: 1.3 !important; margin-bottom: 14px !important; } #portfolio > div:first-of-type p { font-size: 0.9rem !important; line-height: 1.7 !important; max-width: 100% !important; } #portfolio > div:nth-child(2) > div:first-child, #portfolio > div:nth-child(2) > div:nth-child(2) { width: 35px !important; } #portfolio > div:nth-child(2) > div:nth-child(3) { gap: 14px !important; animation-duration: 18s !important; } #portfolio > div:nth-child(2) > div:nth-child(3) > div { width: 130px !important; height: 185px !important; border-radius: 10px !important; } #portfolio > div:last-child { width: 100% !important; margin-top: 32px !important; display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; gap: 12px !important; padding: 0 14px !important; } #portfolio > div:last-child a { width: 100% !important; max-width: 300px !important; display: flex !important; align-items: center !important; justify-content: center !important; text-align: center !important; } }
        @media (max-width: 420px) { #portfolio { padding: 40px 0 !important; } #portfolio > div:first-of-type { margin-bottom: 24px !important; padding: 0 12px !important; } #portfolio > div:first-of-type h2 { font-size: 1.6rem !important; line-height: 1.35 !important; } #portfolio > div:first-of-type p { font-size: 0.85rem !important; line-height: 1.6 !important; } #portfolio > div:nth-child(2) > div:first-child, #portfolio > div:nth-child(2) > div:nth-child(2) { width: 20px !important; } #portfolio > div:nth-child(2) > div:nth-child(3) { gap: 10px !important; animation-duration: 16s !important; } #portfolio > div:nth-child(2) > div:nth-child(3) > div { width: 110px !important; height: 160px !important; border-radius: 8px !important; } #portfolio > div:last-child { margin-top: 26px !important; gap: 10px !important; padding: 0 12px !important; } #portfolio > div:last-child a { width: 100% !important; max-width: 100% !important; padding: 14px 18px !important; font-size: 0.9rem !important; display: flex !important; align-items: center !important; justify-content: center !important; } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}
