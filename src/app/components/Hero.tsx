'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; r: number; vx: number; vy: number; alpha: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,158,11,${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'var(--hero-gradient)',
      paddingTop: '80px',
      transition: 'background 0.3s ease',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />

      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '600px', height: '600px', background: 'var(--hero-glow-purple)', pointerEvents: 'none', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '5%', width: '500px', height: '500px', background: 'var(--hero-glow-gold)', pointerEvents: 'none', borderRadius: '50%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr auto', gap: '60px', alignItems: 'center', padding: '80px 0' }}>
        <div style={{ maxWidth: '620px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 16px',
            background: 'rgba(245,158,11,0.1)',
            border: '1px solid rgba(245,158,11,0.3)',
            borderRadius: '100px',
            marginBottom: '32px',
            animation: 'fadeUp 0.6s ease forwards',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f59e0b' }}>
              Professional Book Marketing
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--foreground)',
            marginBottom: '24px',
            animation: 'fadeUp 0.7s ease 0.1s forwards',
            opacity: 0,
            transition: 'color 0.3s ease',
          }}>
            Turn Your <span style={{ color: '#f59e0b' }}>Book</span> Into A{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f59e0b, #fbbf24, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Best Seller</span>{' '}
            With Powerful <span style={{ color: '#f59e0b' }}>Marketing</span>
          </h1>

          <p style={{
            fontSize: '1.1rem', lineHeight: 1.75, color: 'var(--foreground-secondary)',
            marginBottom: '40px', maxWidth: '520px',
            animation: 'fadeUp 0.7s ease 0.2s forwards', opacity: 0,
            transition: 'color 0.3s ease',
          }}>
            Professional marketing strategies to increase book sales, grow your audience, and build your author brand across every major platform.
          </p>

          <div style={{
            display: 'flex', gap: '40px', marginBottom: '40px', flexWrap: 'wrap',
            animation: 'fadeUp 0.7s ease 0.3s forwards', opacity: 0,
          }}>
            {[
              { value: '500+', label: 'Authors Served' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '3x', label: 'Avg Sales Boost' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f59e0b', fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--foreground-muted)', letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'color 0.3s ease' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', animation: 'fadeUp 0.7s ease 0.4s forwards', opacity: 0 }}>
            <a href="#contact" className="btn-primary">
              Get Started Today
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13"><path fillRule="evenodd" fill="currentColor" d="M0.499,6.498 L12.85,6.498 L7.585,1.998 L8.999,0.584 L15.913,7.499 L8.999,14.413 L7.585,12.998 L12.85,8.498 L0.499,8.498 L0.499,6.498 Z"/></svg>
            </a>
            <a href="tel:+12104938277" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.61 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.09 4.18 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Now
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '40px', animation: 'fadeUp 0.7s ease 0.5s forwards', opacity: 0 }}>
            <Image src="/users.webp" alt="Clients" width={80} height={36} style={{ borderRadius: '100px' }} />
            <div>
              <div style={{ color: '#f59e0b', fontSize: '0.95rem', letterSpacing: '0.05em' }}>★★★★★</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--foreground-muted)', transition: 'color 0.3s ease' }}>Trusted by 500+ authors worldwide</div>
            </div>
          </div>
        </div>

        <div style={{ animation: 'fadeUp 0.8s ease 0.3s forwards', opacity: 0 }}>
          <ContactForm compact />
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        color: 'var(--foreground-muted)', fontSize: '0.7rem', letterSpacing: '0.1em',
        animation: 'float 2s ease-in-out infinite',
        transition: 'color 0.3s ease',
      }}>
        <span>SCROLL</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(245,158,11,0.6), transparent)' }} />
      </div>

      <style>{`
        @media (max-width: 1200px) {
          #hero > div.container { gap: 48px !important; padding: 70px 24px !important; }
        }
        @media (max-width: 1024px) {
          #hero { min-height: auto !important; }
          #hero > div.container { grid-template-columns: 1fr !important; gap: 50px !important; text-align: center !important; padding: 70px 24px !important; }
          #hero > div.container > div:first-child { max-width: 100% !important; margin: 0 auto !important; }
          #hero > div.container > div:first-child > div:first-child { margin-left: auto !important; margin-right: auto !important; }
          #hero > div.container > div:first-child p { margin-left: auto !important; margin-right: auto !important; max-width: 700px !important; }
          #hero > div.container > div:first-child > div:nth-child(4), #hero > div.container > div:first-child > div:nth-child(5), #hero > div.container > div:first-child > div:last-child { justify-content: center !important; }
          #hero > div.container > div:last-child { width: 100% !important; display: flex !important; justify-content: center !important; }
          #hero > div.container > div:last-child > div { width: 100% !important; max-width: 650px !important; }
        }
        @media (max-width: 768px) {
          #hero { padding-top: 70px !important; }
          #hero > div.container { padding: 60px 20px !important; gap: 40px !important; }
          #hero > div.container h1 { font-size: clamp(2rem, 8vw, 3rem) !important; line-height: 1.2 !important; margin-bottom: 20px !important; }
          #hero > div.container p { font-size: 1rem !important; line-height: 1.7 !important; margin-bottom: 32px !important; }
          #hero > div.container > div:first-child > div:nth-child(4) { gap: 24px !important; margin-bottom: 32px !important; justify-content: center !important; }
          #hero > div.container > div:first-child > div:nth-child(4) > div { min-width: 110px !important; }
          #hero > div.container > div:first-child > div:nth-child(4) > div > div:first-child { font-size: 1.7rem !important; }
          #hero > div.container > div:first-child > div:nth-child(5) { justify-content: center !important; gap: 14px !important; flex-wrap: wrap !important; }
          #hero > div.container > div:first-child > div:last-child { margin-top: 32px !important; justify-content: center !important; }
          #hero > div.container > div:last-child > div { border-radius: 22px !important; }
          #hero > div:last-child { bottom: 20px !important; }
        }
        @media (max-width: 600px) {
          #hero { padding-top: 60px !important; overflow: hidden !important; }
          #hero > div.container { padding: 48px 16px !important; gap: 32px !important; }
          #hero > div.container h1 { font-size: clamp(1.8rem, 8vw, 2.4rem) !important; line-height: 1.25 !important; margin-bottom: 18px !important; }
          #hero > div.container p { font-size: 0.92rem !important; line-height: 1.75 !important; margin-bottom: 28px !important; max-width: 100% !important; }
          #hero > div.container > div:first-child > div:first-child { padding: 7px 14px !important; margin-bottom: 24px !important; }
          #hero > div.container > div:first-child > div:first-child span:last-child { font-size: 0.72rem !important; letter-spacing: 0.08em !important; }
          #hero > div.container > div:first-child > div:nth-child(4) { gap: 18px !important; margin-bottom: 28px !important; }
          #hero > div.container > div:first-child > div:nth-child(4) > div { min-width: auto !important; }
          #hero > div.container > div:first-child > div:nth-child(4) > div > div:first-child { font-size: 1.4rem !important; }
          #hero > div.container > div:first-child > div:nth-child(4) > div > div:last-child { font-size: 0.7rem !important; }
          #hero > div.container > div:first-child > div:nth-child(5) { width: 100% !important; gap: 12px !important; }
          #hero > div.container > div:first-child > div:nth-child(5) a { flex: 1 1 100% !important; justify-content: center !important; text-align: center !important; width: 100% !important; max-width: 100% !important; }
          #hero > div.container > div:first-child > div:last-child { gap: 12px !important; margin-top: 28px !important; flex-direction: column !important; text-align: center !important; }
          #hero > div.container > div:last-child > div { padding: 24px 18px !important; border-radius: 18px !important; }
          #hero > div:last-child { display: none !important; }
        }
        @media (max-width: 420px) {
          #hero > div.container { padding: 38px 14px !important; gap: 28px !important; }
          #hero > div.container h1 { font-size: 1.55rem !important; line-height: 1.3 !important; }
          #hero > div.container p { font-size: 0.86rem !important; line-height: 1.65 !important; }
          #hero > div.container > div:first-child > div:nth-child(4) { gap: 14px !important; justify-content: space-between !important; }
          #hero > div.container > div:first-child > div:nth-child(4) > div { flex: 1 1 30% !important; }
          #hero > div.container > div:first-child > div:nth-child(4) > div > div:first-child { font-size: 1.15rem !important; }
          #hero > div.container > div:first-child > div:nth-child(4) > div > div:last-child { font-size: 0.62rem !important; line-height: 1.4 !important; }
          #hero > div.container > div:first-child > div:nth-child(5) { flex-direction: column !important; align-items: stretch !important; }
          #hero > div.container > div:first-child > div:nth-child(5) a { width: 100% !important; padding: 14px 18px !important; font-size: 0.88rem !important; }
          #hero > div.container > div:first-child > div:last-child img { width: 70px !important; height: auto !important; }
          #hero > div.container > div:first-child > div:last-child > div:last-child { font-size: 0.72rem !important; }
          #hero > div.container > div:last-child > div { padding: 20px 16px !important; border-radius: 16px !important; }
        }
      `}</style>
    </section>
  );
}
