export default function HomePage() {
  return (
    <div className="home-page">
      {/* ── Hero Section ── */}
      <div className="home-layout">
        <div className="home-left">
          <h1 className="home-name">Anjali Patel</h1>
          <p className="home-tagline">AI · Multimodal Systems · Space Data</p>

          <div className="home-divider" />

          <p className="home-description">
            Working as a Project Associate – I at PDEU on an ISRO-funded research project,
            focused on machine learning approaches for multimodal data involving optical
            imagery and LiDAR.
          </p>

          <p className="home-description" style={{ marginTop: '0.75rem' }}>
            My work centers on how different data modalities can be aligned and represented
            under real-world constraints, particularly in remote sensing and space-related
            applications.
          </p>

          <p className="home-description" style={{ marginTop: '0.75rem' }}>
            Currently preparing to transition into a PhD, with a focus on AI systems
            for space science and Earth observation.
          </p>

          <div className="home-links">
            <a href="https://github.com/Anjalii-Patel" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/anjalipatel45" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:anjalijpatel.45@gmail.com">Email</a>
          </div>
        </div>

        <div className="home-photo-wrap">
          <div className="home-photo-placeholder">
            <span>Photo<br />goes<br />here</span>
          </div>
        </div>
      </div>

      {/* ── Quick Stats ── */}
      <div className="home-stats">
        <div className="home-stat">
          <span className="stat-value">1+</span>
          <span className="stat-label">Year in AI/ML</span>
        </div>
        <div className="home-stat">
          <span className="stat-value">2</span>
          <span className="stat-label">End-to-End Projects</span>
        </div>
        <div className="home-stat">
          <span className="stat-value">3</span>
          <span className="stat-label">Certifications</span>
        </div>
        <div className="home-stat">
          <span className="stat-value">ISRO</span>
          <span className="stat-label">Funded Research</span>
        </div>
      </div>
    </div>
  );
}
