'use client';
import Image from 'next/image';
import type { ElementType } from 'react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Company: [
      { label: 'Who We Are', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Why Choose Us', href: '#why-us' },
    ],
    Packages: [
      { label: 'Starter Package', href: '#pricing' },
      { label: 'Pro Package', href: '#pricing' },
      { label: 'Premium Package', href: '#pricing' },
      { label: 'Custom Solutions', href: '#contact' },
    ],
    Contact: [
      { label: '(210) 493-8277', href: 'tel:+12104938277', icon: FaPhone },
      { label: 'info@triversebookmarketing.com', href: 'mailto:info@triversebookmarketing.com', icon: FaEnvelope },
    ],
  };

  const socials = [
    { label: 'Facebook', icon: FaFacebookF, href: '#' },
    { label: 'Twitter', icon: FaXTwitter, href: '#' },
    { label: 'Instagram', icon: FaInstagram, href: '#' },
    { label: 'LinkedIn', icon: FaLinkedinIn, href: '#' },
  ];

  return (
    <footer style={{
      background: 'var(--footer-bg)',
      borderTop: '1px solid var(--border-light)',
      paddingTop: '80px',
      transition: 'background 0.3s ease, border-color 0.3s ease',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(3, 1fr)', gap: '60px', marginBottom: '60px' }}>
          <div>
            <Image src="/icon-nav.png" alt="Triverse" width={80} height={44} style={{ objectFit: 'contain', marginBottom: '20px' }} />
            <p style={{ color: 'var(--footer-foreground-muted)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '28px', maxWidth: '280px', transition: 'color 0.3s ease' }}>
              Professional book marketing strategies to turn your manuscript into a bestseller and build your author brand.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: 'var(--card-hover)',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.9rem', color: 'var(--footer-foreground-muted)',
                    cursor: 'pointer', transition: 'all 0.3s', textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(245,158,11,0.2)';
                    e.currentTarget.style.borderColor = 'rgba(245,158,11,0.4)';
                    e.currentTarget.style.color = '#f59e0b';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--card-hover)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--footer-foreground-muted)';
                  }}
                ><Icon /></a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([col, items]) => (
            <div key={col}>
              <h4 style={{ fontWeight: 700, color: 'var(--footer-foreground)', fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px', transition: 'color 0.3s ease' }}>{col}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {items.map(item => {
                  const Icon = (item as { icon?: ElementType }).icon;
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        style={{
                          color: 'var(--footer-foreground-muted)', textDecoration: 'none',
                          fontSize: '0.9rem', transition: 'color 0.3s',
                          display: 'inline-flex', alignItems: 'center', gap: '8px',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#f59e0b')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--footer-foreground-muted)')}
                      >
                        {Icon && <Icon style={{ fontSize: '0.8rem' }} />}
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid var(--border-light)',
          padding: '24px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
          transition: 'border-color 0.3s ease',
        }}>
          <p style={{ color: 'var(--footer-foreground-muted)', fontSize: '0.85rem', transition: 'color 0.3s ease' }}>
            © {currentYear} Triverse Book Marketing. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map(link => (
              <a
                key={link}
                href="#"
                style={{ color: 'var(--footer-foreground-muted)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f59e0b')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--footer-foreground-muted)')}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        [data-theme="light"] footer a[aria-label] svg,
        [data-theme="light"] footer ul li a svg {
          color: #111827 !important;
        }
        @media (max-width: 1024px) {
          footer > div.container > div:first-child { gap: 40px !important; }
        }
        @media (max-width: 900px) {
          footer { padding-top: 60px !important; }
          footer > div.container > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          footer > div.container > div:first-child > div:first-child { grid-column: 1 / -1; text-align: center !important; display: flex !important; flex-direction: column !important; align-items: center !important; }
          footer > div.container > div:first-child > div:first-child p { max-width: 100% !important; }
          footer > div.container > div:first-child > div:first-child > div { justify-content: center !important; }
        }
        @media (max-width: 600px) {
          footer { padding-top: 48px !important; padding-bottom: 20px !important; }
          footer > div.container { padding: 0 18px !important; }
          footer > div.container > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; margin-bottom: 40px !important; }
          footer > div.container > div:first-child > div { width: 100% !important; text-align: center !important; display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; }
          footer > div.container > div:first-child p { max-width: 100% !important; font-size: 0.92rem !important; line-height: 1.7 !important; margin-bottom: 22px !important; }
          footer ul { align-items: center !important; justify-content: center !important; padding: 0 !important; }
          footer ul li { text-align: center !important; }
          footer ul li a { justify-content: center !important; text-align: center !important; font-size: 0.9rem !important; }
          footer h4 { margin-bottom: 16px !important; text-align: center !important; font-size: 0.85rem !important; }
          footer > div.container > div:first-child > div:first-child > div { justify-content: center !important; gap: 10px !important; width: 100% !important; }
          footer > div.container > div:first-child > div:first-child > div a { width: 40px !important; height: 40px !important; }
          footer > div.container > div:last-child { flex-direction: column !important; align-items: center !important; justify-content: center !important; text-align: center !important; gap: 14px !important; padding-top: 20px !important; }
          footer > div.container > div:last-child p { margin: 0 !important; text-align: center !important; }
          footer > div.container > div:last-child > div { justify-content: center !important; flex-wrap: wrap !important; gap: 18px !important; }
        }
        @media (max-width: 420px) {
          footer { padding-top: 40px !important; }
          footer > div.container { padding: 0 14px !important; }
          footer > div.container > div:first-child { gap: 26px !important; }
          footer h4 { font-size: 0.8rem !important; margin-bottom: 12px !important; }
          footer ul { gap: 10px !important; }
          footer ul li a { font-size: 0.85rem !important; }
          footer > div.container > div:first-child p { font-size: 0.85rem !important; line-height: 1.6 !important; }
          footer > div.container > div:last-child p, footer > div.container > div:last-child a { font-size: 0.8rem !important; }
          footer > div.container > div:last-child > div { gap: 14px !important; }
        }
      `}</style>
    </footer>
  );
}
