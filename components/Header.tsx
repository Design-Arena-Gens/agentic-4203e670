"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`glass glow-outline`} style={{ position: 'sticky', top: 16, zIndex: 50, margin: '16px auto', width: 'min(1100px, 94vw)', borderColor: scrolled ? 'rgba(0,229,255,.28)' : undefined }}>
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px' }}>
        <Link href="#" className="tag" aria-label="Murad Khan home">
          <span style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--accent)' }} />
          <strong style={{ letterSpacing: .4, color: 'var(--text)' }}>Murad Khan</strong>
        </Link>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a href="#expertise" className="button">Expertise</a>
          <a href="#projects" className="button">Projects</a>
          <a href="#about" className="button">About</a>
          <a href="#contact" className="button primary">Contact</a>
        </div>
      </nav>
    </header>
  );
}
