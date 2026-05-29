'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Who We Are' },
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Packages' },
    { href: '#portfolio', label: 'Portfolio' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--nav-border)' : 'none',
        boxShadow: scrolled ? '0 4px 30px var(--nav-shadow)' : 'none',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          {/* Logo */}
          <Link
            href="/"
            className="nav-logo"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <Image
              src="/icon-nav.png"
              alt="Triverse"
              width={150}
              height={40}
              className="nav-logo-img"
              style={{ objectFit: "contain", width: "150px", height: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="desktop-nav">
            <ul style={{ display: 'flex', listStyle: 'none', gap: '36px', alignItems: 'center' }}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} style={{
                    color: 'var(--foreground-secondary)', textDecoration: 'none',
                    fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.02em',
                    transition: 'color 0.3s',
                    padding: '4px 0',
                    borderBottom: '2px solid transparent',
                  }}
                    onMouseEnter={e => { (e.target as HTMLAnchorElement).style.color = 'var(--gold)'; (e.target as HTMLAnchorElement).style.borderBottomColor = 'var(--gold)'; }}
                    onMouseLeave={e => { (e.target as HTMLAnchorElement).style.color = 'var(--foreground-secondary)'; (e.target as HTMLAnchorElement).style.borderBottomColor = 'transparent'; }}
                  >{link.label}</a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <a href="tel:+12104938277" style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              color: 'var(--foreground-secondary)', textDecoration: 'none',
              fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--foreground-secondary)')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.61 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.09 4.18 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              (210) 493-8277
            </a>
            <a href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
              Let&apos;s Consult
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13">
                <path fillRule="evenodd" fill="currentColor" d="M0.499,6.498 L12.85,6.498 L7.585,1.998 L8.999,0.584 L15.913,7.499 L8.999,14.413 L7.585,12.998 L12.85,8.498 L0.499,8.498 L0.499,6.498 Z" />
              </svg>
            </a>
          </div>

          {/* Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="mobile-toggle">
              <ThemeToggle />
            </div>
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'none', background: 'transparent', border: 'none',
                cursor: 'pointer', padding: '8px', color: 'var(--foreground)',
              }}
              aria-label="Toggle menu"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <span style={{ display: 'block', width: '24px', height: '2px', background: menuOpen ? 'var(--gold)' : 'var(--foreground)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                <span style={{ display: 'block', width: '24px', height: '2px', background: menuOpen ? 'var(--gold)' : 'var(--foreground)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
                <span style={{ display: 'block', width: '24px', height: '2px', background: menuOpen ? 'var(--gold)' : 'var(--foreground)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={{
          display: menuOpen ? 'block' : 'none',
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--nav-border)',
          padding: '24px',
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)} style={{
                  color: 'var(--foreground)', textDecoration: 'none',
                  fontSize: '1.1rem', fontWeight: 500,
                }}>{link.label}</a>
              </li>
            ))}
            <li><a href="tel:+12104938277" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}>(210) 493-8277</a></li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ display: 'inline-flex' }}>
                Let&apos;s Consult
              </a>
            </li>
          </ul>
        </div>
      </nav>

   <style>{`
  /* Default Logo */
  .nav-logo-img {
    width: 80px !important;
    height: auto !important;
    transition: all 0.3s ease !important;
  }

  /* Large Tablets / Small Laptops */
  @media (max-width: 1024px) {
    nav > div.container {
      height: 74px !important;
      padding: 0 20px !important;
    }

    .nav-logo-img {
      width: 75px !important;
    }
  }

  /* Tablets */
  @media (max-width: 900px) {
    .desktop-nav {
      display: none !important;
    }

    .hamburger-btn {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .mobile-toggle {
      display: flex !important;
    }

    nav > div.container {
      height: 70px !important;
      padding: 0 18px !important;
    }

    .nav-logo-img {
      width: 68px !important;
    }
  }

  .mobile-toggle {
    display: none;
  }

  /* Medium Mobile */
  @media (max-width: 768px) {
    nav > div.container {
      height: 66px !important;
      padding: 0 16px !important;
    }

    .nav-logo-img {
      width: 60px !important;
    }

    .hamburger-btn {
      padding: 6px !important;
    }

    .hamburger-btn div span {
      width: 22px !important;
    }
  }

  /* Small Mobile */
  @media (max-width: 600px) {
    nav {
      backdrop-filter: blur(18px) !important;
    }

    nav > div.container {
      height: 60px !important;
      padding: 0 14px !important;
    }

    .nav-logo-img {
      width: 45px !important;
    }

    nav > div.container ~ div {
      padding: 18px 16px !important;
    }

    nav > div.container ~ div ul {
      gap: 18px !important;
    }

    nav > div.container ~ div a {
      font-size: 1rem !important;
    }
  }

  /* Extra Small Mobile */
  @media (max-width: 420px) {
    nav > div.container {
      height: 56px !important;
      padding: 0 12px !important;
    }

    .nav-logo-img {
      width: 35px !important;
    }

    .hamburger-btn div span {
      width: 20px !important;
      height: 1.8px !important;
    }

    nav > div.container ~ div {
      padding: 16px 14px !important;
    }

    nav > div.container ~ div a {
      font-size: 0.95rem !important;
    }
  }

  /* Ultra Small Devices */
  @media (max-width: 360px) {
    nav > div.container {
      height: 54px !important;
      padding: 0 10px !important;
    }

    .nav-logo-img {
      width: 45px !important;
    }

    .hamburger-btn div span {
      width: 18px !important;
    }
  }
`}</style>
    </>
  );
}
