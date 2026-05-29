'use client';
import { useState, useEffect } from 'react';
import CountryPickerModal from './CountryPickerModal';
import { countries, detectCountry, type Country } from '@/lib/countries';

interface ContactFormProps {
  compact?: boolean;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function ContactForm({ compact = false, title = 'Get in Touch', subtitle = 'GET 30% OFF — Limited Time Offer', dark = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    const code = detectCountry();
    const found = countries.find(c => c.code === code);
    if (found) setSelectedCountry(found);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;

    const data = new FormData();
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const msgInput = form.elements.namedItem('message') as HTMLTextAreaElement;

    data.append('name', nameInput?.value || '');
    data.append('email', emailInput?.value || '');
    data.append('phone', `${selectedCountry.dial} ${phoneNumber}`);
    data.append('message', msgInput?.value || '');
    data.append('_next', 'https://publishinghubusa.com/thank-you.html');
    data.append('_captcha', 'false');

    try {
      await fetch('https://formsubmit.co/ajax/info@publishinghubusa.com', {
        method: 'POST',
        body: data,
      });
      setSubmitted(true);
    } catch {
      form.submit();
    } finally {
      setLoading(false);
    }
  };

  const CountryCodeButton = (
    <button
      type="button"
      onClick={() => setShowPicker(true)}
      style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '0 12px',
        minWidth: '80px', flexShrink: 0,
        height: '48px',
        background: 'var(--card-hover)',
        border: phoneFocused ? '1px solid #f59e0b' : '1px solid var(--border)',
        borderRadius: '8px',
        color: 'var(--foreground)',
        fontSize: '0.95rem',
        fontFamily: 'inherit',
        cursor: 'pointer',
        transition: 'all 0.3s',
        outline: 'none',
      }}
      onFocus={() => setPhoneFocused(true)}
      onBlur={() => setPhoneFocused(false)}
    >
      <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{selectedCountry.flag}</span>
      <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{selectedCountry.dial}</span>
      <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ color: 'var(--foreground-muted)' }}>
        <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );

  return (
    <>
      <CountryPickerModal
        isOpen={showPicker}
        onClose={() => setShowPicker(false)}
        onSelect={c => setSelectedCountry(c)}
        selectedCode={selectedCountry.code}
      />

      <div className="form-card" style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border)',
        borderRadius: compact ? '20px' : '24px',
        padding: compact ? '32px 28px' : '40px 36px',
        backdropFilter: 'blur(24px)',
        width: '100%',
        maxWidth: compact ? '340px' : '500px',
        boxShadow: dark
          ? '0 24px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)'
          : '0 24px 60px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.5)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #7c3aed, #f59e0b, #06b6d4)' }} />

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', color: '#f59e0b', marginBottom: '8px' }}>Thank You!</h3>
            <p style={{ color: 'var(--foreground-secondary)', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>We&apos;ll get back to you within 24 hours with your personalized plan.</p>
          </div>
        ) : (
          <>
            <div style={{
              display: 'inline-block', padding: '5px 12px', borderRadius: '100px',
              background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)',
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#f59e0b', marginBottom: '16px',
            }}>
              {subtitle}
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: compact ? '1.5rem' : '1.8rem',
              fontWeight: 700, color: 'var(--foreground)', marginBottom: '24px',
              transition: 'color 0.3s ease',
            }}>{title}</h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <input className="form-input" type="text" name="name" placeholder="Full Name *" required />
              <input className="form-input" type="email" name="email" placeholder="Email Address *" required />

              <div style={{ display: 'flex', gap: '8px' }}>
                {CountryCodeButton}
                <input
                  className="form-input"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                  onFocus={() => setPhoneFocused(true)}
                  onBlur={() => setPhoneFocused(false)}
                  style={{
                    flex: 1,
                    borderColor: phoneFocused ? '#f59e0b !important' : undefined,
                  }}
                />
              </div>

              <textarea
                className="form-input"
                name="message"
                placeholder="Your Message (optional)"
                rows={4}
                style={{ resize: 'vertical', minHeight: '80px', fontFamily: 'inherit' }}
              />

              <button
                type="submit"
                disabled={loading}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  padding: '15px 24px', marginTop: '4px',
                  background: loading ? '#92400e' : 'linear-gradient(135deg, #f59e0b, #d97706)',
                  color: '#0d1526', fontWeight: 800, fontSize: '0.9rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  border: 'none', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s', boxShadow: '0 4px 16px rgba(245,158,11,0.3)',
                }}
                onMouseEnter={e => { if (!loading) (e.currentTarget.style.transform = 'translateY(-2px)'); if (!loading) (e.currentTarget.style.boxShadow = '0 8px 24px rgba(245,158,11,0.5)'); }}
                onMouseLeave={e => { (e.currentTarget.style.transform = 'none'); (e.currentTarget.style.boxShadow = '0 4px 16px rgba(245,158,11,0.3)'); }}
              >
                {loading ? 'Sending…' : 'Get Started'}
                {!loading && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13">
                    <path fillRule="evenodd" fill="currentColor" d="M0.499,6.498 L12.85,6.498 L7.585,1.998 L8.999,0.584 L15.913,7.499 L8.999,14.413 L7.585,12.998 L12.85,8.498 L0.499,8.498 L0.499,6.498 Z"/>
                  </svg>
                )}
              </button>
            </form>

            <p style={{ fontSize: '0.75rem', color: 'var(--foreground-muted)', textAlign: 'center', marginTop: '14px', transition: 'color 0.3s ease' }}>
              No spam. We respect your privacy.
            </p>
          </>
        )}

        <style>{`
          @media (max-width: 420px) { .form-card { padding: 24px 16px !important; border-radius: 16px !important; } .form-card h2 { font-size: 1.3rem !important; margin-bottom: 18px !important; } .form-card .form-input { padding: 12px 14px !important; font-size: 0.9rem !important; } .form-card button { padding: 13px 20px !important; font-size: 0.85rem !important; } }
        `}</style>
      </div>
    </>
  );
}
