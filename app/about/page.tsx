export const metadata = {
  title: "About — Anjali Patel",
};

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">About</h1>
        <p className="page-subtitle">Background · Interests · Contact</p>
      </div>

      {/* ── Research Interests ───────────────────────────── */}
      <section className="about-section">
        <div className="about-section-title">Research Interests</div>
        <ul className="interest-list">
          <li>Multimodal AI — integrating heterogeneous data (optical, LiDAR)</li>
          <li>Machine learning for remote sensing and space-related data</li>
          <li>Data representation and alignment across modalities</li>
          <li>System-level behavior and limitations in ML pipelines</li>
          <li>Astronomy — computational and observational perspectives</li>
        </ul>
      </section>

      {/* ── Education ────────────────────────────────────── */}
      <section className="about-section">
        <div className="about-section-title">Education</div>

        <div className="edu-entry">
          <div className="edu-degree">PhD — Upcoming</div>
          <div className="edu-institution">
            Pandit Deendayal Energy University (PDEU)
          </div>
        </div>

        <div className="edu-entry">
          <div className="edu-degree">B.Tech, Computer Science Engineering (AI/ML)</div>
          <div className="edu-institution">
            NEW LJ Institute of Engineering and Technology (GTU) · 2022–2025
          </div>
        </div>

        <div className="edu-entry">
          <div className="edu-degree">Diploma, Information Technology</div>
          <div className="edu-institution">
            RC Technical Institute (GTU) · 2019–2022
          </div>
        </div>
      </section>

      {/* ── Personal Interests ───────────────────────────── */}
      <section className="about-section">
        <div className="about-section-title">Personal Interests</div>
        <p className="about-text">
          I have a longstanding interest in observational astronomy, which
          informs how I approach space-related data and motivates my research direction.
        </p>

        <p className="about-text">
          More broadly, I am interested in how large-scale physical systems can be
          understood through data, and how computational models can support that understanding.
        </p>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section className="about-section">
        <div className="about-section-title">Contact</div>
        <div className="contact-list">
          <div>
            <span className="contact-label">Email</span>
            <a href="mailto:anjalijpatel.45@gmail.com">anjalijpatel.45@gmail.com</a>
          </div>
          <div>
            <span className="contact-label">GitHub</span>
            <a href="https://github.com/Anjalii-Patel" target="_blank" rel="noopener noreferrer">
              github.com/Anjalii-Patel
            </a>
          </div>
          <div>
            <span className="contact-label">LinkedIn</span>
            <a href="https://linkedin.com/in/anjalipatel45" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/anjalipatel45
            </a>
          </div>
        </div>
      </section>
    </>
  );
}