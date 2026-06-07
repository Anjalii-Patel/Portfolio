export default function HomePage() {
  return (
    <div className="home-page">
      {/* ── Hero Section ── */}
      <div className="home-layout">
        <div className="home-left">
          <h1 className="home-name">Anjali Patel</h1>
          <p className="home-tagline">Cross-Modal Registration · Lunar Terrain Navigation</p>

          <div className="home-divider" />

          <p className="home-description">
            Working as a Project Associate – I at PDEU on an ISRO-funded research project
            focused on cross-modal alignment between LiDAR intensity images, Digital Elevation
            Models (DEM), and optical imagery.
          </p>

          <p className="home-description" style={{ marginTop: '0.75rem' }}>
            Current work targets structural representation of heterogeneous lunar terrain data
            for robust feature matching, that balance robustness with real-time constraints,
            with deployment targeted on FPGA hardware.
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
          <span className="stat-value">Cross-Modal Registration</span>
          <span className="stat-label">LiDAR · DEM · Optical</span>
        </div>
        <div className="home-stat">
          <span className="stat-value">Autonomous Navigation</span>
          <span className="stat-label">Lunar Descent · FPGA</span>
        </div>
        <div className="home-stat">
          <span className="stat-value">ISRO RESPOND</span>
          <span className="stat-label">Ongoing Research</span>
        </div>
        <div className="home-stat">
          <span className="stat-value">PhD — Upcoming</span>
          <span className="stat-label">PDEU · Nov/Dec 2026</span>
        </div>
      </div>
    </div>
  );
}
