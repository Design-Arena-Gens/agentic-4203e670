import { ReactNode } from 'react';

export default function Section({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div style={{ marginBottom: 18 }}>
          <div className="tag">{subtitle ?? '?'}</div>
          <h2 style={{ fontSize: 'clamp(22px, 3.6vw, 32px)', marginTop: 10 }}>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
