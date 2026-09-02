export default function HomePage() {
  return (
    <div className="home-page">
      {/* ── Hero Section ── */}
      <div className="home-layout">
        <div className="home-left">
          <h1 className="home-name">Anjali Patel</h1>
          <p className="home-tagline">Applied AI/ML Engineer · Researcher</p>

          <div className="home-divider" />

          <p className="home-description">
            Project Associate-I at PDEU, working on an ISRO-funded research project
            involving cross-modal registration of LiDAR intensity images, Digital Elevation
            Models, and optical imagery for lunar terrain-relative navigation.
          </p>

          <p className="home-description" style={{ marginTop: '0.75rem' }}>
            My broader interests and engineering experience span NLP, generative AI,
            speech processing, computer vision, and geospatial data processing.
          </p>

          <div className="home-links">
            <a href="https://github.com/Anjalii-Patel" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/anjalipatel45" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <a href="mailto:anjalijpatel.45@gmail.com">Email</a>
          </div>
        </div>

        <div className="home-photo-wrap">
          <img src="https://res.cloudinary.com/ymvvetap/image/upload/v1782456427/profile_photo.jpg" alt="Anjali Patel" className="home-photo" />
        </div>
      </div>

      {/* ── Technical Expertise ── */}
      <div className="home-stats">
        <div className="home-stat">
          <span className="stat-value">Generative AI &amp; NLP</span>
          <span className="stat-label">LLMs · RAG · Fine-Tuning</span>
        </div>
        <div className="home-stat">
          <span className="stat-value">Computer Vision</span>
          <span className="stat-label">Image Registration · Change Detection</span>
        </div>
        <div className="home-stat">
          <span className="stat-value">Speech AI</span>
          <span className="stat-label">ASR · Whisper · Diarization</span>
        </div>
        <div className="home-stat">
          <span className="stat-value">Geospatial AI</span>
          <span className="stat-label">LiDAR · DEM · Remote Sensing</span>
        </div>
      </div>
    </div>
  );
}
