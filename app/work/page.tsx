export const metadata = {
  title: "Research — Anjali Patel",
};

export default function WorkPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Research</h1>
        <p className="page-subtitle">Research · Experience</p>
      </div>

      {/* A. Current Work */}
      <section className="work-section">
        <div className="section-label">Current Work</div>

        <div className="work-entry">
          <h2 className="entry-title">
            ISRO-Funded Research Project — Pandit Deendayal Energy University
          </h2>
          <div className="entry-meta">
            <span className="entry-time">Feb. 2026 — Present</span>
            <span className="entry-time">|</span>
            <span className="entry-context">Project Associate – I, PDEU</span>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Context</div>
            <div className="entry-field-value">
              Research project under the Indian Space Research Organisation focused on
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
              affect feature matching and representation. Structural and geometric
              representations are used as the primary modality bridge to reduce radiometric
              dependence across sensors.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Methods &amp; Tools</div>
            <div className="entry-field-value mono">
              Phase Correlation · ICP · LoFTR · SuperPoint · RANSAC · Procrustes Alignment ·
              LiDAR Processing · DEM Analysis
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Key Outcomes</div>
            <div className="entry-field-value">
              Benchmarked hybrid registration pipelines across multiple lunar terrain regions
              using LOLA DEM and TMC-2 orthoimage pairs. Presented progress at SAC-ISRO,
              Ahmedabad.
            </div>
          </div>
        </div>
      </section>

      {/* B. Professional Experience */}
      <section className="work-section">
        <div className="section-label">Professional Experience</div>

        <div className="work-entry">
          <h2 className="entry-title">Associate AI/ML Engineer — Artem Health Tech Pvt. Ltd.</h2>
          <div className="entry-meta">
            <span className="entry-time">July 2025 — Jan. 2026</span>
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
          <h2 className="entry-title">AI/ML Intern — Artem Health Tech Pvt. Ltd.</h2>
          <div className="entry-meta">
            <span className="entry-time">Dec. 2024 — June 2025</span>
            <span className="entry-time">|</span>
            <span className="entry-context">Internship</span>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Context</div>
            <div className="entry-field-value">
              Early-stage experimentation and prototyping in speech processing systems.
              Transitioned into full-time role.
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

      {/* C. Prior Projects */}
      <section className="work-section">
        <div className="section-label">Prior Projects</div>

        <div className="work-entry">
          <h2 className="entry-title">
            Medinova — AI-Assisted Medical Information System ·{" "}
            <a href="https://github.com/Anjalii-Patel/Medinova" target="_blank">GitHub</a>
          </h2>
          <div className="entry-meta">
            <span className="entry-time">July — Aug. 2025</span>
            <span className="entry-time">|</span>
            <span className="entry-context">Independent</span>
          </div>
          <div className="entry-field">
            <div className="entry-field-label">Context</div>
            <div className="entry-field-value">
              Multimodal pipeline combining speech input, document ingestion, and
              retrieval-based generation within a single end-to-end system.
            </div>
          </div>
          <div className="entry-field">
            <div className="entry-field-label">Methods &amp; Tools</div>
            <div className="entry-field-value mono">
              Python · RAG · FAISS · Whisper · FastAPI · Redis
            </div>
          </div>
        </div>

        <div className="work-entry">
          <h2 className="entry-title">
            RAG Finance QA System ·{" "}
            <a href="https://github.com/Anjalii-Patel/rag_qa_system" target="_blank">GitHub</a>
          </h2>
          <div className="entry-meta">
            <span className="entry-time">Dec. 2024 — May 2025</span>
            <span className="entry-time">|</span>
            <span className="entry-context">Academic Project</span>
          </div>
          <div className="entry-field">
            <div className="entry-field-label">Context</div>
            <div className="entry-field-value">
              Retrieval-augmented generation system for structured financial document
              question answering, with domain adaptation via fine-tuned Flan-T5.
            </div>
          </div>
          <div className="entry-field">
            <div className="entry-field-label">Methods &amp; Tools</div>
            <div className="entry-field-value mono">
              Python · ChromaDB · sentence-transformers · HuggingFace Transformers · Streamlit
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
