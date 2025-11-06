export default function Footer() {
  return (
    <footer className="section">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: .8, fontSize: 14 }}>
        <p>? {new Date().getFullYear()} Murad Khan. All rights reserved.</p>
        <p>Karachi, Pakistan ? IT Solutions, Web, Automation, AI</p>
      </div>
    </footer>
  );
}
