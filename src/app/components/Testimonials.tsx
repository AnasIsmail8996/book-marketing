'use client';
import { useState } from 'react';

const testimonials = [
  {
    quote: 'Working with Triverse Book Marketing was a great decision. Their marketing strategies helped increase my book visibility and brought in real readers. My sales tripled within the first month.',
    name: 'James Walker',
    role: 'Mystery Author',
    initials: 'JW',
    color: '#f59e0b',
    stars: 5,
  },
  {
    quote: 'The team was professional and very supportive throughout the marketing process. I saw a noticeable boost in my book sales and rankings. They truly understand the book market.',
    name: 'Emily Carter',
    role: 'Self-help Author',
    initials: 'EC',
    color: '#7c3aed',
    stars: 5,
  },
  {
    quote: 'Triverse Book Marketing knows how to position a book in front of the right audience. Their campaign helped my book gain the attention it truly deserved. Highly recommended!',
    name: 'David Richardson',
    role: 'Fiction Author',
    initials: 'DR',
    color: '#06b6d4',
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section style={{
      padding: '100px 0',
      background: 'var(--background)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.3s ease',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label">Testimonials</div>
          <h2 className="section-heading" style={{ marginBottom: '16px' }}>
            What Authors <span className="accent">Say About Us</span>
          </h2>
        </div>

        <div style={{
          background: 'var(--card-bg)',
          border: `1px solid ${testimonials[active].color}30`,
          borderRadius: '24px',
          padding: '48px',
          marginBottom: '40px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.4s ease',
          boxShadow: `0 0 60px ${testimonials[active].color}10`,
        }}>
          <div style={{ position: 'absolute', top: '24px', left: '32px', fontSize: '4rem', color: testimonials[active].color, opacity: 0.2, fontFamily: 'serif', lineHeight: 1 }}>&ldquo;</div>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, transparent, ${testimonials[active].color}, transparent)` }} />

          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ color: '#f59e0b', fontSize: '1.2rem', marginBottom: '24px', letterSpacing: '4px' }}>
              {'★'.repeat(testimonials[active].stars)}
            </div>

            <p style={{
              fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--foreground-secondary)',
              fontStyle: 'italic', marginBottom: '32px',
              fontFamily: "'Playfair Display', serif",
              transition: 'color 0.3s ease',
            }}>
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%',
                background: `linear-gradient(135deg, ${testimonials[active].color}, ${testimonials[active].color}80)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '1rem', color: 'var(--background-secondary)',
              }}>{testimonials[active].initials}</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 700, color: 'var(--foreground)', transition: 'color 0.3s ease' }}>{testimonials[active].name}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--foreground-muted)', transition: 'color 0.3s ease' }}>{testimonials[active].role}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '56px', flexWrap: 'wrap' }}>
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              style={{
                padding: '12px 24px',
                borderRadius: '100px',
                border: `2px solid ${active === i ? t.color : 'var(--border)'}`,
                background: active === i ? `${t.color}20` : 'transparent',
                color: active === i ? t.color : 'var(--foreground-muted)',
                fontWeight: 600, fontSize: '0.88rem',
                cursor: 'pointer', transition: 'all 0.3s',
              }}
            >{t.name}</button>
          ))}
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px', background: 'var(--border-light)',
          borderRadius: '20px', overflow: 'hidden',
          transition: 'background 0.3s ease',
        }}>
          {[
            { value: '500+', label: 'Authors Served' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '#1', label: 'Amazon Rankings Achieved' },
            { value: '3x', label: 'Average Sales Increase' },
          ].map(stat => (
            <div key={stat.label} style={{
              padding: '32px 24px', textAlign: 'center',
              background: 'var(--background)',
              transition: 'background 0.3s ease',
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 800, color: '#f59e0b', marginBottom: '6px' }}>{stat.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--foreground-muted)', letterSpacing: '0.05em', transition: 'color 0.3s ease' }}>{stat.label}</div>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 1100px) { #pricing ~ section { padding: 80px 0 !important; } #pricing ~ section .container { padding: 0 20px !important; } #pricing ~ section > div.container > div:nth-child(2) { padding: 40px !important; } }
          @media (max-width: 900px) { #pricing ~ section { padding: 70px 0 !important; } #pricing ~ section > div.container > div:first-of-type { margin-bottom: 46px !important; } #pricing ~ section > div.container > div:first-of-type h2 { font-size: 2.3rem !important; line-height: 1.3 !important; } #pricing ~ section > div.container > div:nth-child(2) { padding: 36px 28px !important; border-radius: 20px !important; } #pricing ~ section > div.container > div:nth-child(2) p { font-size: 1.05rem !important; line-height: 1.8 !important; } #pricing ~ section > div.container > div:nth-child(3) { gap: 12px !important; margin-bottom: 42px !important; } #pricing ~ section > div.container > div:last-child { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px) { #pricing ~ section { padding: 55px 0 !important; overflow: hidden !important; } #pricing ~ section .container { padding: 0 14px !important; } #pricing ~ section > div.container > div:first-of-type { margin-bottom: 34px !important; } #pricing ~ section > div.container > div:first-of-type h2 { font-size: 1.9rem !important; line-height: 1.3 !important; margin-bottom: 12px !important; } #pricing ~ section > div.container > div:nth-child(2) { padding: 28px 20px !important; margin-bottom: 30px !important; border-radius: 18px !important; } #pricing ~ section > div.container > div:nth-child(2) > div:first-child { font-size: 3rem !important; top: 16px !important; left: 18px !important; } #pricing ~ section > div.container > div:nth-child(2) p { font-size: 0.95rem !important; line-height: 1.75 !important; margin-bottom: 24px !important; } #pricing ~ section > div.container > div:nth-child(2) > div > div:first-child { font-size: 1rem !important; margin-bottom: 18px !important; letter-spacing: 2px !important; } #pricing ~ section > div.container > div:nth-child(2) > div > div:last-child { gap: 12px !important; flex-direction: column !important; text-align: center !important; } #pricing ~ section > div.container > div:nth-child(2) > div > div:last-child > div:last-child { text-align: center !important; } #pricing ~ section > div.container > div:nth-child(2) > div > div:last-child > div:first-child { width: 48px !important; height: 48px !important; font-size: 0.95rem !important; } #pricing ~ section > div.container > div:nth-child(3) { width: 100% !important; display: flex !important; flex-wrap: wrap !important; justify-content: center !important; gap: 10px !important; margin-bottom: 34px !important; } #pricing ~ section > div.container > div:nth-child(3) button { padding: 10px 16px !important; font-size: 0.8rem !important; width: calc(50% - 8px) !important; min-width: 130px !important; text-align: center !important; } #pricing ~ section > div.container > div:last-child { grid-template-columns: repeat(2, 1fr) !important; border-radius: 16px !important; overflow: hidden !important; } #pricing ~ section > div.container > div:last-child > div { padding: 22px 16px !important; } #pricing ~ section > div.container > div:last-child > div > div:first-child { font-size: 1.6rem !important; margin-bottom: 4px !important; } #pricing ~ section > div.container > div:last-child > div > div:last-child { font-size: 0.72rem !important; line-height: 1.5 !important; } }
          @media (max-width: 420px) { #pricing ~ section { padding: 42px 0 !important; } #pricing ~ section .container { padding: 0 12px !important; } #pricing ~ section > div.container > div:first-of-type { margin-bottom: 26px !important; } #pricing ~ section > div.container > div:first-of-type h2 { font-size: 1.6rem !important; line-height: 1.35 !important; } #pricing ~ section > div.container > div:nth-child(2) { padding: 22px 16px !important; border-radius: 16px !important; } #pricing ~ section > div.container > div:nth-child(2) > div:first-child { font-size: 2.4rem !important; top: 12px !important; left: 14px !important; } #pricing ~ section > div.container > div:nth-child(2) p { font-size: 0.85rem !important; line-height: 1.65 !important; } #pricing ~ section > div.container > div:nth-child(2) > div > div:last-child > div:first-child { width: 44px !important; height: 44px !important; font-size: 0.85rem !important; } #pricing ~ section > div.container > div:nth-child(2) > div > div:last-child > div:last-child > div:first-child { font-size: 0.9rem !important; } #pricing ~ section > div.container > div:nth-child(2) > div > div:last-child > div:last-child > div:last-child { font-size: 0.75rem !important; } #pricing ~ section > div.container > div:nth-child(3) { gap: 8px !important; margin-bottom: 26px !important; } #pricing ~ section > div.container > div:nth-child(3) button { width: 100% !important; max-width: 100% !important; padding: 12px 14px !important; font-size: 0.78rem !important; } #pricing ~ section > div.container > div:last-child { grid-template-columns: 1fr !important; } #pricing ~ section > div.container > div:last-child > div { padding: 20px 14px !important; } #pricing ~ section > div.container > div:last-child > div > div:first-child { font-size: 1.45rem !important; } #pricing ~ section > div.container > div:last-child > div > div:last-child { font-size: 0.7rem !important; } }
        `}</style>
      </div>
    </section>
  );
}
