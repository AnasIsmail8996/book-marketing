'use client';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    subtitle: 'Social Media Marketing & Author Branding',
    desc: 'Perfect for authors starting their journey.',
    color: '#06b6d4',
    featured: false,
    features: [
      'Social Media Marketing on 4 major platforms',
      'Custom Design Posts & Short Videos',
      'Scheduled posting of professional content',
      'Campaign optimization for maximum reach',
      'Free Author Website',
      'Content creation & brand promotion',
      'Engaging ad campaigns to attract readers',
    ],
  },
  {
    name: 'Pro',
    subtitle: 'Everything in Starter, plus Amazon & Sales Optimization',
    desc: 'Ideal for authors ready to sell more books.',
    color: '#f59e0b',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Includes all Starter Package features',
      'Amazon Management & Product Listing Optimization',
      'Amazon Ad Campaigns & PPC Management',
      'SEO for Book Visibility',
      'Keyword Planning for maximum discoverability',
      'Sales Tracking & Analytics',
      'Reputation Management: Reviews & Ranking Boost',
    ],
  },
  {
    name: 'Premium',
    subtitle: 'All-in-One Marketing + Bestseller Support',
    desc: 'For authors aiming for top rankings and guaranteed sales.',
    color: '#7c3aed',
    featured: false,
    badge: 'Best Results',
    features: [
      'Includes Starter & Pro Package features',
      'Best Seller Guarantee',
      'Book Sales Acceleration',
      'Advanced Marketing Campaigns',
      'Multi-platform author branding & promotion',
      'Priority support & campaign management',
    ],
  },
];

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section id="pricing" style={{
      padding: '100px 0',
      background: 'var(--section-gradient)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.3s ease',
    }}>
      <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label">Pricing Plans</div>
          <h2 className="section-heading" style={{ marginBottom: '20px' }}>
            Choose the Right <span className="accent">Plan</span> for Your Book
          </h2>
          <p style={{ color: 'var(--foreground-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75, transition: 'color 0.3s ease' }}>
            Every book deserves the right strategy. Our packages support authors with powerful promotion, stronger visibility, and tools for growth.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', alignItems: 'start' }}>
          {plans.map(plan => (
            <div
              key={plan.name}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: plan.featured ? `2px solid ${plan.color}` : '1px solid var(--border)',
                background: plan.featured ? `linear-gradient(145deg, rgba(245,158,11,0.08), rgba(245,158,11,0.03))` : 'var(--card-bg)',
                transform: plan.featured ? 'scale(1.03)' : hoveredPlan === plan.name ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.4s ease',
                boxShadow: plan.featured ? `0 0 40px rgba(245,158,11,0.15)` : hoveredPlan === plan.name ? '0 16px 40px rgba(0,0,0,0.3)' : 'none',
                position: 'relative',
              }}
            >
              <div style={{
                padding: '32px 28px 24px',
                background: `linear-gradient(135deg, ${plan.color}20, ${plan.color}08)`,
                borderBottom: `1px solid ${plan.color}30`,
                position: 'relative',
              }}>
                {plan.badge && (
                  <div style={{
                    position: 'absolute', top: '16px', right: '16px',
                    padding: '4px 12px', borderRadius: '100px',
                    background: plan.color, color: plan.featured ? 'var(--background-secondary)' : '#ffffff',
                    fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.08em',
                  }}>{plan.badge}</div>
                )}
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.6rem', fontWeight: 800,
                  color: plan.color, marginBottom: '8px',
                }}>{plan.name}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--foreground-secondary)', fontWeight: 500, marginBottom: '6px', transition: 'color 0.3s ease' }}>{plan.subtitle}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--foreground-muted)', transition: 'color 0.3s ease' }}>{plan.desc}</p>
              </div>

              <div style={{ padding: '28px' }}>
                <a
                  href="#contact"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    width: '100%', padding: '14px 24px', marginBottom: '28px',
                    background: plan.featured ? plan.color : 'transparent',
                    color: plan.featured ? 'var(--background-secondary)' : plan.color,
                    border: `2px solid ${plan.color}`,
                    borderRadius: '10px', fontWeight: 800, fontSize: '0.9rem',
                    textDecoration: 'none', transition: 'all 0.3s',
                    letterSpacing: '0.05em',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = plan.color;
                    e.currentTarget.style.color = plan.featured ? 'var(--background-secondary)' : '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 8px 20px ${plan.color}40`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = plan.featured ? plan.color : 'transparent';
                    e.currentTarget.style.color = plan.featured ? 'var(--background-secondary)' : plan.color;
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Get Price Estimate
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12"><path fillRule="evenodd" fill="currentColor" d="M0.499,5.998 L11.35,5.998 L7.085,1.998 L8.499,0.584 L14.413,6.499 L8.499,12.413 L7.085,10.998 L11.35,6.998 L0.499,6.998 L0.499,5.998 Z"/></svg>
                </a>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {plan.features.map(feat => (
                    <li key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--foreground-secondary)', transition: 'color 0.3s ease' }}>
                      <span style={{ color: plan.color, fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: 'var(--foreground-muted)', fontSize: '0.85rem', marginTop: '40px', transition: 'color 0.3s ease' }}>
          All packages include dedicated support. <a href="#contact" style={{ color: '#f59e0b', textDecoration: 'none' }}>Contact us</a> for custom solutions.
        </p>
      </div>

      <style>{`
        @media (max-width: 1024px) { #pricing { padding: 80px 0 !important; } #pricing > div.container > div:first-of-type { margin-bottom: 50px !important; padding: 0 20px !important; } #pricing > div.container > div:nth-child(2) { gap: 20px !important; } #pricing > div.container > div:nth-child(2) > div { border-radius: 20px !important; } }
        @media (max-width: 900px) { #pricing { padding: 65px 0 !important; } #pricing > div.container > div:first-of-type { margin-bottom: 40px !important; padding: 0 16px !important; } #pricing > div.container > div:first-of-type h2 { font-size: 2.2rem !important; line-height: 1.3 !important; } #pricing > div.container > div:first-of-type p { font-size: 0.95rem !important; line-height: 1.7 !important; } #pricing > div.container > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; } #pricing > div.container > div:nth-child(2) > div { transform: scale(1) !important; } }
        @media (max-width: 700px) { #pricing > div.container > div:nth-child(2) { grid-template-columns: 1fr !important; gap: 18px !important; } #pricing > div.container > div:nth-child(2) > div { max-width: 100% !important; } }
        @media (max-width: 600px) { #pricing { padding: 50px 0 !important; overflow: hidden !important; } #pricing > div.container { padding: 0 14px !important; } #pricing > div.container > div:first-of-type { margin-bottom: 32px !important; } #pricing > div.container > div:first-of-type h2 { font-size: 1.9rem !important; line-height: 1.3 !important; margin-bottom: 14px !important; } #pricing > div.container > div:first-of-type p { font-size: 0.9rem !important; line-height: 1.7 !important; max-width: 100% !important; } #pricing > div.container > div:nth-child(2) { gap: 16px !important; } #pricing > div.container > div:nth-child(2) > div { border-radius: 18px !important; transform: scale(1) !important; } #pricing > div.container > div:nth-child(2) > div > div:first-child { padding: 24px 20px 20px !important; } #pricing > div.container > div:nth-child(2) > div > div:first-child h3 { font-size: 1.4rem !important; } #pricing > div.container > div:nth-child(2) > div > div:first-child p { font-size: 0.85rem !important; } #pricing > div.container > div:nth-child(2) > div > div:last-child { padding: 22px 20px !important; } #pricing > div.container > div:nth-child(2) > div > div:last-child a { padding: 13px 18px !important; font-size: 0.85rem !important; width: 100% !important; justify-content: center !important; text-align: center !important; } #pricing > div.container > div:nth-child(2) > div ul { gap: 10px !important; } #pricing > div.container > div:nth-child(2) > div ul li { font-size: 0.84rem !important; line-height: 1.6 !important; } #pricing > div.container > p { margin-top: 28px !important; font-size: 0.8rem !important; padding: 0 10px !important; line-height: 1.6 !important; } }
        @media (max-width: 420px) { #pricing { padding: 40px 0 !important; } #pricing > div.container { padding: 0 12px !important; } #pricing > div.container > div:first-of-type { margin-bottom: 24px !important; } #pricing > div.container > div:first-of-type h2 { font-size: 1.6rem !important; line-height: 1.35 !important; } #pricing > div.container > div:first-of-type p { font-size: 0.85rem !important; line-height: 1.6 !important; } #pricing > div.container > div:nth-child(2) { gap: 14px !important; } #pricing > div.container > div:nth-child(2) > div { border-radius: 16px !important; } #pricing > div.container > div:nth-child(2) > div > div:first-child { padding: 20px 16px 18px !important; } #pricing > div.container > div:nth-child(2) > div > div:first-child h3 { font-size: 1.2rem !important; } #pricing > div.container > div:nth-child(2) > div > div:first-child p { font-size: 0.8rem !important; line-height: 1.5 !important; } #pricing > div.container > div:nth-child(2) > div > div:last-child { padding: 18px 16px !important; } #pricing > div.container > div:nth-child(2) > div > div:last-child a { width: 100% !important; max-width: 100% !important; padding: 12px 14px !important; font-size: 0.82rem !important; display: flex !important; align-items: center !important; justify-content: center !important; } #pricing > div.container > div:nth-child(2) > div ul { gap: 8px !important; } #pricing > div.container > div:nth-child(2) > div ul li { font-size: 0.8rem !important; line-height: 1.5 !important; gap: 8px !important; } #pricing > div.container > p { margin-top: 24px !important; font-size: 0.75rem !important; line-height: 1.5 !important; } }
      `}</style>
    </section>
  );
}
