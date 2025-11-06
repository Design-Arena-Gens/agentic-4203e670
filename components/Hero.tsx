"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: 96 }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="glass glow-outline"
          style={{ padding: '40px 28px' }}
        >
          <div className="tag" style={{ marginInline: 'auto' }}>Professional tech architect</div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', marginTop: 14, lineHeight: 1.15 }}>
            Murad Khan ? Building Smarter Systems for the Digital Age.
          </h1>
          <p style={{ marginTop: 12, color: 'var(--muted)', fontSize: 'clamp(14px, 2.4vw, 18px)' }}>
            IT solutions expert and developer specializing in modern web systems, automation,
            and on-demand AI integration.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 18 }}>
            <a href="#contact" className="button primary">Start a Project</a>
            <a href="#expertise" className="button">Explore Expertise</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
