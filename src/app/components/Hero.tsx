'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';

const countries = [
  { code: 'US', name: 'United States', dial: '+1', flag: '🇺🇸', tz: ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles', 'America/Anchorage', 'Pacific/Honolulu'] },
  { code: 'CA', name: 'Canada', dial: '+1', flag: '🇨🇦', tz: ['America/Toronto', 'America/Vancouver', 'America/Edmonton', 'America/Winnipeg', 'America/Halifax', 'America/St_Johns'] },
  { code: 'GB', name: 'United Kingdom', dial: '+44', flag: '🇬🇧', tz: ['Europe/London', 'Europe/Belfast'] },
  { code: 'AU', name: 'Australia', dial: '+61', flag: '🇦🇺', tz: ['Australia/Sydney', 'Australia/Melbourne', 'Australia/Perth', 'Australia/Brisbane', 'Australia/Adelaide', 'Australia/Darwin', 'Australia/Hobart'] },
  { code: 'PK', name: 'Pakistan', dial: '+92', flag: '🇵🇰', tz: ['Asia/Karachi'] },
  { code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳', tz: ['Asia/Kolkata'] },
  { code: 'AE', name: 'UAE', dial: '+971', flag: '🇦🇪', tz: ['Asia/Dubai'] },
  { code: 'SA', name: 'Saudi Arabia', dial: '+966', flag: '🇸🇦', tz: ['Asia/Riyadh'] },
  { code: 'SG', name: 'Singapore', dial: '+65', flag: '🇸🇬', tz: ['Asia/Singapore'] },
  { code: 'MY', name: 'Malaysia', dial: '+60', flag: '🇲🇾', tz: ['Asia/Kuala_Lumpur'] },
  { code: 'PH', name: 'Philippines', dial: '+63', flag: '🇵🇭', tz: ['Asia/Manila'] },
  { code: 'BD', name: 'Bangladesh', dial: '+880', flag: '🇧🇩', tz: ['Asia/Dhaka'] },
  { code: 'LK', name: 'Sri Lanka', dial: '+94', flag: '🇱🇰', tz: ['Asia/Colombo'] },
  { code: 'NG', name: 'Nigeria', dial: '+234', flag: '🇳🇬', tz: ['Africa/Lagos'] },
  { code: 'ZA', name: 'South Africa', dial: '+27', flag: '🇿🇦', tz: ['Africa/Johannesburg', 'Africa/Cape_Town'] },
  { code: 'KE', name: 'Kenya', dial: '+254', flag: '🇰🇪', tz: ['Africa/Nairobi'] },
  { code: 'EG', name: 'Egypt', dial: '+20', flag: '🇪🇬', tz: ['Africa/Cairo'] },
  { code: 'DE', name: 'Germany', dial: '+49', flag: '🇩🇪', tz: ['Europe/Berlin', 'Europe/Munich', 'Europe/Frankfurt'] },
  { code: 'FR', name: 'France', dial: '+33', flag: '🇫🇷', tz: ['Europe/Paris'] },
  { code: 'IT', name: 'Italy', dial: '+39', flag: '🇮🇹', tz: ['Europe/Rome'] },
  { code: 'ES', name: 'Spain', dial: '+34', flag: '🇪🇸', tz: ['Europe/Madrid', 'Europe/Barcelona'] },
  { code: 'NL', name: 'Netherlands', dial: '+31', flag: '🇳🇱', tz: ['Europe/Amsterdam'] },
  { code: 'SE', name: 'Sweden', dial: '+46', flag: '🇸🇪', tz: ['Europe/Stockholm'] },
  { code: 'NO', name: 'Norway', dial: '+47', flag: '🇳🇴', tz: ['Europe/Oslo'] },
  { code: 'DK', name: 'Denmark', dial: '+45', flag: '🇩🇰', tz: ['Europe/Copenhagen'] },
  { code: 'CH', name: 'Switzerland', dial: '+41', flag: '🇨🇭', tz: ['Europe/Zurich', 'Europe/Bern'] },
  { code: 'JP', name: 'Japan', dial: '+81', flag: '🇯🇵', tz: ['Asia/Tokyo'] },
  { code: 'KR', name: 'South Korea', dial: '+82', flag: '🇰🇷', tz: ['Asia/Seoul'] },
  { code: 'CN', name: 'China', dial: '+86', flag: '🇨🇳', tz: ['Asia/Shanghai', 'Asia/Beijing', 'Asia/Chongqing', 'Asia/Hong_Kong'] },
  { code: 'HK', name: 'Hong Kong', dial: '+852', flag: '🇭🇰', tz: ['Asia/Hong_Kong'] },
  { code: 'TW', name: 'Taiwan', dial: '+886', flag: '🇹🇼', tz: ['Asia/Taipei'] },
  { code: 'TR', name: 'Turkey', dial: '+90', flag: '🇹🇷', tz: ['Europe/Istanbul'] },
  { code: 'RU', name: 'Russia', dial: '+7', flag: '🇷🇺', tz: ['Europe/Moscow', 'Asia/Yekaterinburg', 'Asia/Krasnoyarsk', 'Asia/Vladivostok'] },
  { code: 'BR', name: 'Brazil', dial: '+55', flag: '🇧🇷', tz: ['America/Sao_Paulo', 'America/Rio_de_Janeiro', 'America/Brasilia', 'America/Recife', 'America/Manaus'] },
  { code: 'MX', name: 'Mexico', dial: '+52', flag: '🇲🇽', tz: ['America/Mexico_City', 'America/Tijuana', 'America/Cancun'] },
  { code: 'AR', name: 'Argentina', dial: '+54', flag: '🇦🇷', tz: ['America/Argentina/Buenos_Aires'] },
  { code: 'CO', name: 'Colombia', dial: '+57', flag: '🇨🇴', tz: ['America/Bogota'] },
  { code: 'CL', name: 'Chile', dial: '+56', flag: '🇨🇱', tz: ['America/Santiago'] },
  { code: 'PE', name: 'Peru', dial: '+51', flag: '🇵🇪', tz: ['America/Lima'] },
  { code: 'IE', name: 'Ireland', dial: '+353', flag: '🇮🇪', tz: ['Europe/Dublin'] },
  { code: 'NZ', name: 'New Zealand', dial: '+64', flag: '🇳🇿', tz: ['Pacific/Auckland', 'Pacific/Chatham'] },
  { code: 'IL', name: 'Israel', dial: '+972', flag: '🇮🇱', tz: ['Asia/Jerusalem', 'Asia/Tel_Aviv'] },
  { code: 'QA', name: 'Qatar', dial: '+974', flag: '🇶🇦', tz: ['Asia/Qatar'] },
  { code: 'KW', name: 'Kuwait', dial: '+965', flag: '🇰🇼', tz: ['Asia/Kuwait'] },
  { code: 'OM', name: 'Oman', dial: '+968', flag: '🇴🇲', tz: ['Asia/Muscat'] },
  { code: 'BH', name: 'Bahrain', dial: '+973', flag: '🇧🇭', tz: ['Asia/Bahrain'] },
  { code: 'NP', name: 'Nepal', dial: '+977', flag: '🇳🇵', tz: ['Asia/Kathmandu'] },
  { code: 'AF', name: 'Afghanistan', dial: '+93', flag: '🇦🇫', tz: ['Asia/Kabul'] },
  { code: 'IR', name: 'Iran', dial: '+98', flag: '🇮🇷', tz: ['Asia/Tehran'] },
  { code: 'IQ', name: 'Iraq', dial: '+964', flag: '🇮🇶', tz: ['Asia/Baghdad'] },
  { code: 'JO', name: 'Jordan', dial: '+962', flag: '🇯🇴', tz: ['Asia/Amman'] },
  { code: 'LB', name: 'Lebanon', dial: '+961', flag: '🇱🇧', tz: ['Asia/Beirut'] },
  { code: 'SY', name: 'Syria', dial: '+963', flag: '🇸🇾', tz: ['Asia/Damascus'] },
  { code: 'YE', name: 'Yemen', dial: '+967', flag: '🇾🇪', tz: ['Asia/Aden'] },
  { code: 'MA', name: 'Morocco', dial: '+212', flag: '🇲🇦', tz: ['Africa/Casablanca'] },
  { code: 'DZ', name: 'Algeria', dial: '+213', flag: '🇩🇿', tz: ['Africa/Algiers'] },
  { code: 'TN', name: 'Tunisia', dial: '+216', flag: '🇹🇳', tz: ['Africa/Tunis'] },
  { code: 'LY', name: 'Libya', dial: '+218', flag: '🇱🇾', tz: ['Africa/Tripoli'] },
  { code: 'SD', name: 'Sudan', dial: '+249', flag: '🇸🇩', tz: ['Africa/Khartoum'] },
  { code: 'ET', name: 'Ethiopia', dial: '+251', flag: '🇪🇹', tz: ['Africa/Addis_Ababa'] },
  { code: 'SO', name: 'Somalia', dial: '+252', flag: '🇸🇴', tz: ['Africa/Mogadishu'] },
  { code: 'GH', name: 'Ghana', dial: '+233', flag: '🇬🇭', tz: ['Africa/Accra'] },
  { code: 'TZ', name: 'Tanzania', dial: '+255', flag: '🇹🇿', tz: ['Africa/Dar_es_Salaam'] },
  { code: 'UG', name: 'Uganda', dial: '+256', flag: '🇺🇬', tz: ['Africa/Kampala'] },
  { code: 'AT', name: 'Austria', dial: '+43', flag: '🇦🇹', tz: ['Europe/Vienna'] },
  { code: 'BE', name: 'Belgium', dial: '+32', flag: '🇧🇪', tz: ['Europe/Brussels'] },
  { code: 'BG', name: 'Bulgaria', dial: '+359', flag: '🇧🇬', tz: ['Europe/Sofia'] },
  { code: 'HR', name: 'Croatia', dial: '+385', flag: '🇭🇷', tz: ['Europe/Zagreb'] },
  { code: 'CY', name: 'Cyprus', dial: '+357', flag: '🇨🇾', tz: ['Asia/Nicosia'] },
  { code: 'CZ', name: 'Czech Republic', dial: '+420', flag: '🇨🇿', tz: ['Europe/Prague'] },
  { code: 'EE', name: 'Estonia', dial: '+372', flag: '🇪🇪', tz: ['Europe/Tallinn'] },
  { code: 'FI', name: 'Finland', dial: '+358', flag: '🇫🇮', tz: ['Europe/Helsinki'] },
  { code: 'GR', name: 'Greece', dial: '+30', flag: '🇬🇷', tz: ['Europe/Athens'] },
  { code: 'HU', name: 'Hungary', dial: '+36', flag: '🇭🇺', tz: ['Europe/Budapest'] },
  { code: 'IS', name: 'Iceland', dial: '+354', flag: '🇮🇸', tz: ['Atlantic/Reykjavik'] },
  { code: 'LV', name: 'Latvia', dial: '+371', flag: '🇱🇻', tz: ['Europe/Riga'] },
  { code: 'LT', name: 'Lithuania', dial: '+370', flag: '🇱🇹', tz: ['Europe/Vilnius'] },
  { code: 'LU', name: 'Luxembourg', dial: '+352', flag: '🇱🇺', tz: ['Europe/Luxembourg'] },
  { code: 'MT', name: 'Malta', dial: '+356', flag: '🇲🇹', tz: ['Europe/Malta'] },
  { code: 'MD', name: 'Moldova', dial: '+373', flag: '🇲🇩', tz: ['Europe/Chisinau'] },
  { code: 'ME', name: 'Montenegro', dial: '+382', flag: '🇲🇪', tz: ['Europe/Podgorica'] },
  { code: 'PL', name: 'Poland', dial: '+48', flag: '🇵🇱', tz: ['Europe/Warsaw'] },
  { code: 'PT', name: 'Portugal', dial: '+351', flag: '🇵🇹', tz: ['Europe/Lisbon', 'Atlantic/Azores'] },
  { code: 'RO', name: 'Romania', dial: '+40', flag: '🇷🇴', tz: ['Europe/Bucharest'] },
  { code: 'RS', name: 'Serbia', dial: '+381', flag: '🇷🇸', tz: ['Europe/Belgrade'] },
  { code: 'SK', name: 'Slovakia', dial: '+421', flag: '🇸🇰', tz: ['Europe/Bratislava'] },
  { code: 'SI', name: 'Slovenia', dial: '+386', flag: '🇸🇮', tz: ['Europe/Ljubljana'] },
  { code: 'UA', name: 'Ukraine', dial: '+380', flag: '🇺🇦', tz: ['Europe/Kyiv'] },
  { code: 'VN', name: 'Vietnam', dial: '+84', flag: '🇻🇳', tz: ['Asia/Ho_Chi_Minh', 'Asia/Hanoi'] },
  { code: 'TH', name: 'Thailand', dial: '+66', flag: '🇹🇭', tz: ['Asia/Bangkok'] },
  { code: 'ID', name: 'Indonesia', dial: '+62', flag: '🇮🇩', tz: ['Asia/Jakarta'] },
  { code: 'MM', name: 'Myanmar', dial: '+95', flag: '🇲🇲', tz: ['Asia/Yangon'] },
  { code: 'KH', name: 'Cambodia', dial: '+855', flag: '🇰🇭', tz: ['Asia/Phnom_Penh'] },
  { code: 'LA', name: 'Laos', dial: '+856', flag: '🇱🇦', tz: ['Asia/Vientiane'] },
  { code: 'MN', name: 'Mongolia', dial: '+976', flag: '🇲🇳', tz: ['Asia/Ulaanbaatar'] },
  { code: 'UZ', name: 'Uzbekistan', dial: '+998', flag: '🇺🇿', tz: ['Asia/Tashkent'] },
  { code: 'KZ', name: 'Kazakhstan', dial: '+7', flag: '🇰🇿', tz: ['Asia/Almaty', 'Asia/Astana'] },
  { code: 'AZ', name: 'Azerbaijan', dial: '+994', flag: '🇦🇿', tz: ['Asia/Baku'] },
  { code: 'GE', name: 'Georgia', dial: '+995', flag: '🇬🇪', tz: ['Asia/Tbilisi'] },
  { code: 'AM', name: 'Armenia', dial: '+374', flag: '🇦🇲', tz: ['Asia/Yerevan'] },
  { code: 'BY', name: 'Belarus', dial: '+375', flag: '🇧🇾', tz: ['Europe/Minsk'] },
  { code: 'VE', name: 'Venezuela', dial: '+58', flag: '🇻🇪', tz: ['America/Caracas'] },
  { code: 'EC', name: 'Ecuador', dial: '+593', flag: '🇪🇨', tz: ['America/Guayaquil'] },
  { code: 'BO', name: 'Bolivia', dial: '+591', flag: '🇧🇴', tz: ['America/La_Paz'] },
  { code: 'PY', name: 'Paraguay', dial: '+595', flag: '🇵🇾', tz: ['America/Asuncion'] },
  { code: 'UY', name: 'Uruguay', dial: '+598', flag: '🇺🇾', tz: ['America/Montevideo'] },
  { code: 'CR', name: 'Costa Rica', dial: '+506', flag: '🇨🇷', tz: ['America/Costa_Rica'] },
  { code: 'PA', name: 'Panama', dial: '+507', flag: '🇵🇦', tz: ['America/Panama'] },
  { code: 'GT', name: 'Guatemala', dial: '+502', flag: '🇬🇹', tz: ['America/Guatemala'] },
  { code: 'SV', name: 'El Salvador', dial: '+503', flag: '🇸🇻', tz: ['America/El_Salvador'] },
  { code: 'HN', name: 'Honduras', dial: '+504', flag: '🇭🇳', tz: ['America/Tegucigalpa'] },
  { code: 'NI', name: 'Nicaragua', dial: '+505', flag: '🇳🇮', tz: ['America/Managua'] },
  { code: 'DO', name: 'Dominican Republic', dial: '+1', flag: '🇩🇴', tz: ['America/Santo_Domingo'] },
  { code: 'PR', name: 'Puerto Rico', dial: '+1', flag: '🇵🇷', tz: ['America/Puerto_Rico'] },
  { code: 'JM', name: 'Jamaica', dial: '+1', flag: '🇯🇲', tz: ['America/Jamaica'] },
  { code: 'TT', name: 'Trinidad & Tobago', dial: '+1', flag: '🇹🇹', tz: ['America/Port_of_Spain'] },
  { code: 'BS', name: 'Bahamas', dial: '+1', flag: '🇧🇸', tz: ['America/Nassau'] },
  { code: 'BB', name: 'Barbados', dial: '+1', flag: '🇧🇧', tz: ['America/Barbados'] },
  { code: 'MU', name: 'Mauritius', dial: '+230', flag: '🇲🇺', tz: ['Indian/Mauritius'] },
  { code: 'SC', name: 'Seychelles', dial: '+248', flag: '🇸🇨', tz: ['Indian/Mahe'] },
  { code: 'MV', name: 'Maldives', dial: '+960', flag: '🇲🇻', tz: ['Indian/Maldives'] },
  { code: 'FJ', name: 'Fiji', dial: '+679', flag: '🇫🇯', tz: ['Pacific/Fiji'] },
  { code: 'PG', name: 'Papua New Guinea', dial: '+675', flag: '🇵🇬', tz: ['Pacific/Port_Moresby'] },
];

function detectCountry(): string {
  if (typeof Intl === 'undefined') return 'US';
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!tz) return 'US';
    const match = countries.find(c => c.tz.includes(tz) || c.tz.some(t => tz.startsWith(t.replace(/\/.*$/, ''))));
    return match?.code ?? 'US';
  } catch {
    return 'US';
  }
}

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryDetected, setCountryDetected] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!countryDetected) {
      setSelectedCountry(detectCountry());
      setCountryDetected(true);
    }
  }, [countryDetected]);

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

  const handleModalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const selectedDial = countries.find(c => c.code === selectedCountry)?.dial ?? '+1';
    data.set('phone', `${selectedDial} ${phoneNumber}`);

    try {
      await fetch('https://formsubmit.co/ajax/info@publishinghubusa.com', {
        method: 'POST',
        body: data,
      });
      setFormSubmitted(true);
    } catch {
      form.submit();
    } finally {
      setFormLoading(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setModalOpen(false);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  const selectedCountryData = countries.find(c => c.code === selectedCountry);

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
            Professional marketing strategies to increase book sales, grow your audience, and build your author brand across every major platform.{' '}
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>— Publishing Hub USA Professional</span>
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
            <button type="button" onClick={() => setModalOpen(true)} className="btn-primary" style={{ cursor: 'pointer' }}>
              Get Started Today
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13"><path fillRule="evenodd" fill="currentColor" d="M0.499,6.498 L12.85,6.498 L7.585,1.998 L8.999,0.584 L15.913,7.499 L8.999,14.413 L7.585,12.998 L12.85,8.498 L0.499,8.498 L0.499,6.498 Z"/></svg>
            </button>
            <a href="tel:+16502930132" className="btn-outline">
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

      {/* ── Modal ── */}
      {modalOpen && (
        <div
          className="getstarted-overlay"
          onClick={handleOverlayClick}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(8px)',
            animation: 'fadeIn 0.25s ease',
          }}
        >
          <div
            className="getstarted-modal"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              maxWidth: '880px',
              width: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
              animation: 'modalSlideUp 0.35s ease',
            }}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute', top: '16px', right: '16px', zIndex: 10,
                width: '36px', height: '36px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--card-hover)', border: '1px solid var(--border)',
                color: 'var(--foreground)', fontSize: '1.4rem', cursor: 'pointer',
                transition: 'all 0.2s', lineHeight: 1,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,158,11,0.15)'; e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = '#f59e0b'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--card-hover)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--foreground)'; }}
              aria-label="Close modal"
            >×</button>

            {/* Image side */}
            <div className="getstarted-image" style={{
              position: 'relative',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '40px',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '-40%', right: '-30%',
                width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', bottom: '-20%', left: '-20%',
                width: '300px', height: '300px',
                background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
              }} />
              <Image
                src="/3d-tablet.webp"
                alt="3D Tablet"
                width={400}
                height={400}
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: 'auto',
                  maxWidth: '340px',
                  position: 'relative',
                  zIndex: 1,
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                }}
                priority
              />
              <div style={{
                position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
                color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem', letterSpacing: '0.15em',
                textTransform: 'uppercase', whiteSpace: 'nowrap', zIndex: 1,
              }}>
                Publishing Hub USA
              </div>
            </div>

            {/* Form side */}
            <div className="getstarted-form" style={{
              padding: '44px 40px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, #7c3aed, #f59e0b, #06b6d4)',
              }} />

              {formSubmitted ? (
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
                    color: '#f59e0b', marginBottom: '14px', alignSelf: 'flex-start',
                  }}>
                    GET 30% OFF — Limited Time
                  </div>

                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.6rem', fontWeight: 700,
                    color: 'var(--foreground)', marginBottom: '6px',
                    transition: 'color 0.3s ease',
                  }}>Start Your Journey</h2>
                  <p style={{
                    fontSize: '0.85rem', color: 'var(--foreground-secondary)',
                    marginBottom: '24px', transition: 'color 0.3s ease',
                  }}>
                    Fill in your details and we&apos;ll create a custom marketing plan for your book.
                  </p>

                  <form onSubmit={handleModalSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <input type="hidden" name="_next" value="https://publishinghubusa.com/thank-you.html" />
                    <input type="hidden" name="_captcha" value="false" />

                    <input className="form-input" type="text" name="name" placeholder="Full Name *" required />

                    <input className="form-input" type="email" name="email" placeholder="Email Address *" required />

                    {/* Phone with country code */}
                    <div className="phone-group" style={{
                      display: 'flex', gap: '8px',
                    }}>
                      <div className="country-select-wrapper" style={{ position: 'relative', flexShrink: 0 }}>
                        <select
                          value={selectedCountry}
                          onChange={e => setSelectedCountry(e.target.value)}
                          className="country-select"
                          style={{
                            height: '100%', minHeight: '48px',
                            padding: '0 32px 0 14px',
                            background: 'var(--card-hover)',
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            color: 'var(--foreground)',
                            fontSize: '0.95rem',
                            fontFamily: 'var(--font-body)',
                            outline: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            MozAppearance: 'none',
                          }}
                        >
                          {countries.map(c => (
                            <option key={c.code} value={c.code}>
                              {c.flag} {c.name} ({c.dial})
                            </option>
                          ))}
                        </select>
                        <svg
                          width="10" height="6" viewBox="0 0 10 6" fill="none"
                          style={{
                            position: 'absolute', right: '12px', top: '50%',
                            transform: 'translateY(-50%)', pointerEvents: 'none',
                            color: 'var(--foreground-muted)',
                          }}
                        >
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <input
                        className="form-input"
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        required
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        style={{ flex: 1 }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="modal-submit-btn"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                        padding: '15px 24px', marginTop: '4px',
                        background: formLoading ? '#92400e' : 'linear-gradient(135deg, #f59e0b, #d97706)',
                        color: '#0d1526', fontWeight: 800, fontSize: '0.9rem',
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        border: 'none', borderRadius: '8px', cursor: formLoading ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s', boxShadow: '0 4px 16px rgba(245,158,11,0.3)',
                      }}
                      onMouseEnter={e => { if (!formLoading) (e.currentTarget.style.transform = 'translateY(-2px)'); if (!formLoading) (e.currentTarget.style.boxShadow = '0 8px 24px rgba(245,158,11,0.5)'); }}
                      onMouseLeave={e => { (e.currentTarget.style.transform = 'none'); (e.currentTarget.style.boxShadow = '0 4px 16px rgba(245,158,11,0.3)'); }}
                    >
                      {formLoading ? 'Sending…' : 'Get Started'}
                      {!formLoading && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13">
                          <path fillRule="evenodd" fill="currentColor" d="M0.499,6.498 L12.85,6.498 L7.585,1.998 L8.999,0.584 L15.913,7.499 L8.999,14.413 L7.585,12.998 L12.85,8.498 L0.499,8.498 L0.499,6.498 Z"/>
                        </svg>
                      )}
                    </button>
                  </form>

                  <p style={{ fontSize: '0.72rem', color: 'var(--foreground-muted)', textAlign: 'center', marginTop: '14px', transition: 'color 0.3s ease' }}>
                    No spam. We respect your privacy.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .getstarted-overlay {
          overflow-y: auto;
        }

        .country-select:focus {
          border-color: var(--gold) !important;
          box-shadow: 0 0 0 3px rgba(245,158,11,0.15) !important;
        }

        .phone-group .form-input:focus {
          border-color: var(--gold) !important;
          box-shadow: 0 0 0 3px rgba(245,158,11,0.15) !important;
        }

        @media (max-width: 1024px) {
          #hero > div.container { gap: 48px !important; padding: 70px 24px !important; }
        }
        @media (max-width: 900px) {
          .getstarted-modal {
            grid-template-columns: 1fr !important;
            max-width: 500px !important;
          }
          .getstarted-image {
            display: none !important;
          }
          .getstarted-form {
            padding: 36px 28px !important;
          }
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
          .getstarted-form { padding: 32px 24px !important; }
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
          .getstarted-modal { border-radius: 16px !important; }
          .getstarted-form { padding: 28px 20px !important; }
          .getstarted-form h2 { font-size: 1.35rem !important; }
          .country-select { min-height: 44px !important; font-size: 0.88rem !important; padding: 0 28px 0 12px !important; }
          .getstarted-overlay { padding: 12px !important; }
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
          .getstarted-form { padding: 24px 16px !important; }
          .getstarted-form h2 { font-size: 1.2rem !important; }
          .modal-submit-btn { padding: 13px 18px !important; font-size: 0.85rem !important; }
          .getstarted-overlay { padding: 8px !important; }
        }
      `}</style>
    </section>
  );
}
