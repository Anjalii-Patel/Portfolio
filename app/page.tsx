export default function HomePage() {
  return (
    <div className="home-page">
      {/* ── Hero Section ── */}
      <div className="home-layout">
        <div className="home-left">
          <h1 className="home-name">Anjali Patel</h1>
          <p className="home-tagline">AI · Multimodal Systems · Cross-Modal Learning</p>

          <div className="home-divider" />          
          <p className="home-description">
            Working as a Project Associate – I at PDEU on an ISRO-funded research project
            focused on cross-modal alignment between LiDAR intensity images, Digital Elevation
            Models (DEM), and optical imagery.
          </p>

          <p className="home-description" style={{ marginTop: '0.75rem' }}>
            The work centers on how differences in structure, resolution, and signal across
            these modalities affect feature matching and representation. Current efforts involve
            designing hybrid approaches that balance robustness with real-time constraints,
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
          <span className="stat-value">Multimodal Systems</span>
          <span className="stat-label">Optical · DEM · LiDAR</span>
        </div>
        <div className="home-stat">
          <span className="stat-value">ISRO-Funded Work</span>
          <span className="stat-label">Ongoing Research</span>
        </div>
        <div className="home-stat">
          <span className="stat-value">RAG & Speech Systems</span>
          <span className="stat-label">Previous Work</span>
        </div>
        <div className="home-stat">
          <span className="stat-value">Research Focus</span>
          <span className="stat-label">Remote Sensing Data</span>
        </div>
      </div>
    </div>
  );
}
