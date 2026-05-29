'use client';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" style={{
      padding: '100px 0',
      background: 'var(--section-gradient)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.3s ease',
    }}>
      <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          <div className="order-1 md:order-1 text-center md:text-left">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-heading" style={{ marginBottom: '20px' }}>
              Ready To Grow Your<br />
              <span className="accent">Book Sales?</span>
            </h2>
            <p style={{ color: 'var(--foreground-secondary)', lineHeight: 1.8, marginBottom: '40px', transition: 'color 0.3s ease' }}>
              Take the first step toward bestseller status. Our team will craft a personalized marketing strategy for your book — completely free.
            </p>

            <div className="flex flex-col gap-5 items-center md:items-start">
              {[
                { icon: '📞', label: 'Phone', value: '+1 (650) 293-0132', href: 'tel:+16502930132' },
                { icon: '📧', label: 'Email', value: 'info@publishinghubusa.com', href: 'mailto:info@publishinghubusa.com' },
                { icon: '🕐', label: 'Office Hours', value: '9 AM - 6 PM', href: '#' },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    padding: '20px 24px',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '14px',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(245,158,11,0.4)';
                    e.currentTarget.style.background = 'rgba(245,158,11,0.08)';
                    e.currentTarget.style.transform = 'translateX(8px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'var(--card-bg)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--foreground-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2px', transition: 'color 0.3s ease' }}>{item.label}</div>
                    <div style={{ color: 'var(--foreground)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.3s ease' }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div style={{
              marginTop: '32px',
              padding: '20px 24px',
              background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05))',
              border: '1px solid rgba(245,158,11,0.3)',
              borderRadius: '14px',
              display: 'flex', alignItems: 'center', gap: '14px',
            }}>
              <span style={{ fontSize: '1.8rem' }}>🎁</span>
              <div>
                <div style={{ fontWeight: 700, color: '#f59e0b', marginBottom: '2px' }}>Limited Time: 30% OFF</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--foreground-muted)', transition: 'color 0.3s ease' }}>Fill the form now to claim your discount</div>
              </div>
            </div>
          </div>

          <div className="order-2 md:order-2 flex justify-center">
            <ContactForm
              title="Get Your Free Plan"
              subtitle="Claim 30% Off Today"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) { #contact .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } #contact .contact-grid > div { width: 100% !important; } #contact .contact-grid > div:first-child { display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; text-align: center !important; } #contact .contact-grid > div:last-child { display: flex !important; justify-content: center !important; width: 100% !important; } #contact .contact-grid > div:last-child > div { width: 100% !important; max-width: 100% !important; } #contact .contact-grid h2 br { display: none !important; } #contact .contact-grid p { max-width: 100% !important; } #contact .contact-grid a { width: 100% !important; max-width: 100% !important; } }
        @media (max-width: 600px) { #contact { padding: 50px 16px !important; } #contact .container { width: 100% !important; padding: 0 !important; } #contact .contact-grid { display: flex !important; flex-direction: column !important; gap: 32px !important; } #contact .contact-grid > div:first-child { order: 1 !important; padding: 0 !important; text-align: center !important; } #contact .contact-grid > div:last-child { order: 2 !important; width: 100% !important; } #contact .section-heading { font-size: 2rem !important; line-height: 1.3 !important; margin-bottom: 16px !important; } #contact .section-heading br { display: none !important; } #contact p { font-size: 0.95rem !important; line-height: 1.7 !important; margin-bottom: 28px !important; padding: 0 6px !important; } #contact .flex.flex-col.gap-5 { width: 100% !important; gap: 14px !important; align-items: stretch !important; } #contact .flex.flex-col.gap-5 a { width: 100% !important; padding: 16px !important; border-radius: 14px !important; } #contact .flex.flex-col.gap-5 a > div:first-child { width: 42px !important; height: 42px !important; min-width: 42px !important; } #contact .flex.flex-col.gap-5 a > div:last-child { text-align: left !important; } #contact .contact-grid > div:first-child > div:last-child { margin-top: 20px !important; width: 100% !important; flex-direction: column !important; text-align: center !important; padding: 18px !important; gap: 10px !important; } #contact .contact-grid > div:last-child form, #contact .contact-grid > div:last-child > div { width: 100% !important; max-width: 100% !important; } }
        @media (max-width: 420px) { #contact { padding: 40px 14px !important; } #contact .section-heading { font-size: 1.7rem !important; line-height: 1.35 !important; } #contact p { font-size: 0.9rem !important; } #contact .flex.flex-col.gap-5 a { padding: 14px !important; gap: 12px !important; } #contact .flex.flex-col.gap-5 a > div:first-child { width: 36px !important; height: 36px !important; font-size: 1rem !important; } #contact .contact-grid > div:last-child > div { padding: 22px 16px !important; border-radius: 18px !important; } #contact input, #contact textarea, #contact button { width: 100% !important; font-size: 0.9rem !important; } }
      `}</style>
    </section>
  );
}
