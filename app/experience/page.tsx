import Link from "next/link";

export const metadata = {
  title: "Experience | Anjali Patel",
};

export default function ExperiencePage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Experience</h1>
        <p className="page-subtitle">Research Appointments · Engineering Roles</p>
      </div>

      {/* ── Research Experience ── */}
      <section className="work-section">
        <div className="section-label">Research Experience</div>

        <div className="work-entry">
          <h2 className="entry-title">
            ISRO-Funded Research Project | Pandit Deendayal Energy University
          </h2>
          <div className="entry-meta">
            <span className="entry-time">March 2026 - Present</span>
            <span className="entry-time">|</span>
            <span className="entry-context">Project Associate - I, PDEU</span>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Context</div>
            <div className="entry-field-value">
              Research project under the Indian Space Research Organisation (ISRO) RESPOND program focused on
              cross-modal image registration of lunar terrain data for autonomous descent
              navigation, targeting onboard FPGA deployment.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">What I work on</div>
            <div className="entry-field-value">
              Working on the problem of cross-modal alignment between LiDAR intensity
              images, Digital Elevation Models (DEM), and optical imagery. The focus is
              on structural and geometric differences across these modalities and how they
              affect feature matching and representation. Structural representations (slope, gradient magnitude, phase congruency)
              are formulated as the primary modality bridge to reduce sensitivity to radiometric differences across sensors.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Methods &amp; Tools</div>
            <div className="entry-field-value mono">
              Phase Correlation · ICP · LoFTR · SuperPoint · RANSAC · Procrustes Alignment ·
              LiDAR Processing · DEM Analysis · FPGA Constraints
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Key Outcomes</div>
            <div className="entry-field-value">
              Established synthetic benchmark protocols across multiple lunar terrain regions
              (Mare Imbrium and Tycho) using LOLA DEM and Chandrayaan-2 TMC-2 orthoimage pairs.
              Presented progress at SAC-ISRO, Ahmedabad, and paper accepted at IEEE InGARSS 2026.
            </div>
          </div>

          <div className="project-action-links">
            <Link href="/projects/lunar-image-registration" className="project-action-link-primary">
              View Research Case Study &rarr;
            </Link>
            <Link href="/publications" className="project-action-link-secondary">
              View Publication Details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Professional Experience ── */}
      <section className="work-section">
        <div className="section-label">Professional Experience</div>

        <div className="work-entry">
          <h2 className="entry-title">Associate AI/ML Engineer | Artem Health Tech Pvt. Ltd.</h2>
          <div className="entry-meta">
            <span className="entry-time">June 2025 - Feb. 2026</span>
            <span className="entry-time">|</span>
            <span className="entry-context">Full-time</span>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Context</div>
            <div className="entry-field-value">
              Industry role focused on deploying machine learning systems for real-world
              applications, particularly in speech and language processing.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">What I worked on</div>
            <div className="entry-field-value">
              Worked on integrating speech-to-text systems with downstream NLP pipelines,
              focusing on robustness under noisy real-world data. Contributed to backend ML
              services and inference pipelines with emphasis on evaluation, reproducibility,
              and system stability.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Methods &amp; Tools</div>
            <div className="entry-field-value mono">
              Python · Whisper · HuggingFace Transformers · LangChain · FastAPI · Docker
            </div>
          </div>
        </div>

        <div className="work-entry">
          <h2 className="entry-title">AI/ML Intern | Artem Health Tech Pvt. Ltd.</h2>
          <div className="entry-meta">
            <span className="entry-time">Dec. 2024 - May 2025</span>
            <span className="entry-time">|</span>
            <span className="entry-context">Internship</span>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Context</div>
            <div className="entry-field-value">
              Early-stage experimentation and prototyping in speech processing systems.
              Transitioned into full-time engineering role.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Methods &amp; Tools</div>
            <div className="entry-field-value mono">
              Python · Librosa · Speech Processing · Jupyter
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

