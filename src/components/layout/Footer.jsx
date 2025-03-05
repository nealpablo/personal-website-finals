function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <h3 style={{ marginBottom: '1rem', color: 'white' }}>Neal Pablo</h3>
        <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>
          BSIT-MI Student & FiveM Developer
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <a href="#" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.3s ease', textDecoration: 'none' }}>
            GitHub
          </a>
          <a href="#" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.3s ease', textDecoration: 'none' }}>
            LinkedIn
          </a>
          <a href="#" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.3s ease', textDecoration: 'none' }}>
            Email
          </a>
        </div>
        <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>
          &copy; {currentYear} Neal Pablo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
