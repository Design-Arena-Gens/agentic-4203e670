import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { expertise, projects } from '@/lib/data';
import { Cpu, Network, Code2, Workflow, Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section id="expertise" title="Expertise" subtitle="Systems, web, automation, and AI">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {expertise.map((item) => (
              <article key={item.title} className="card glass">
                <h3 style={{ fontSize: 18, marginBottom: 10 }}>{item.title}</h3>
                <ul style={{ display: 'grid', gap: 8, paddingLeft: 18 }}>
                  {item.points.map((p) => (
                    <li key={p} style={{ color: 'var(--muted)' }}>? {p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Selected Projects" subtitle="Real-world, production-focused builds">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {projects.map((proj) => (
              <article key={proj.name} className="card glass">
                <h3 style={{ fontSize: 18 }}>{proj.name}</h3>
                <p style={{ color: 'var(--muted)', marginTop: 8 }}>{proj.description}</p>
                <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                  {proj.links.map((l) => (
                    <a key={l.label} href={l.href} className="button">{l.label}</a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="about" title="About" subtitle="Karachi-based IT solutions expert">
          <div className="glass card">
            <p style={{ color: 'var(--muted)' }}>
              I design and ship resilient, scalable systems?spanning networks, full-stack web, and automation. I solve
              business problems with clear architecture, strong reliability practices, and thoughtful developer experience.
              My work blends practical engineering with premium UX for production environments.
            </p>
            <div style={{ display: 'grid', gap: 10, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 14 }}>
              <div className="tag"><MapPin size={16} /> Karachi, Pakistan</div>
              <div className="tag"><Code2 size={16} /> Next.js, React, Node.js, TS</div>
              <div className="tag"><Network size={16} /> Networking & Security</div>
              <div className="tag"><Workflow size={16} /> CI/CD & Automation</div>
              <div className="tag"><Cpu size={16} /> AI Integration On?Demand</div>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Let?s build something excellent">
          <div className="grid" style={{ gridTemplateColumns: '1.3fr .7fr' }}>
            <form className="glass card" action="mailto:murad@example.com" method="post" encType="text/plain">
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input required id="name" name="name" placeholder="Your name" style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input required type="email" id="email" name="email" placeholder="you@company.com" style={inputStyle} />
                </div>
              </div>
              <div style={{ marginTop: 10 }}>
                <label htmlFor="message">Message</label>
                <textarea required id="message" name="message" placeholder="Tell me about your project" rows={6} style={inputStyle} />
              </div>
              <button className="button primary" style={{ marginTop: 12 }}>
                <Mail size={18} /> Send Inquiry
              </button>
              <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 10 }}>Alternatively, email directly: murad@example.com</p>
            </form>
            <aside className="glass card" style={{ display: 'grid', alignContent: 'start', gap: 10 }}>
              <h3 style={{ fontSize: 18 }}>Availability</h3>
              <p style={{ color: 'var(--muted)' }}>Open to select consulting and build engagements.</p>
              <div style={{ display: 'flex', gap: 10 }}>
                <a className="button" href="https://github.com/" target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>
                <a className="button" href="https://linkedin.com/" target="_blank" rel="noreferrer">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </aside>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  marginTop: 6,
  padding: '12px 14px',
  borderRadius: 12,
  border: '1px solid rgba(255,255,255,.14)',
  background: 'rgba(255,255,255,.05)',
  color: 'var(--text)'
};
