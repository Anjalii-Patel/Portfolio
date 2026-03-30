export const metadata = {
  title: "Work & Research — Anjali Patel",
};

export default function WorkPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Work &amp; Research</h1>
        <p className="page-subtitle">Experience · Projects · Ongoing Research</p>
      </div>

      {/* ── A. Current Work ──────────────────────────────── */}
      <section className="work-section">
        <div className="section-label">Current Work</div>

        <div className="work-entry">
          <h2 className="entry-title">
            ISRO-Funded Research Project — Pandit Deendayal Energy University
          </h2>
          <div className="entry-meta">
            <span className="entry-time">Feb. 2026 — Present</span>
            <span className="entry-context">Project Associate – I, PDEU</span>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Context</div>
            <div className="entry-field-value">
              Research project under the Indian Space Research Organisation,
              focused on computational approaches for space-derived data.
              The work lies at the intersection of remote sensing and machine learning.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">What I work on</div>
            <div className="entry-field-value">
              Design and implementation of multimodal AI pipelines for processing
              remote sensing imagery, LiDAR point clouds, and optical sensor data.
              Research involves data preprocessing, feature extraction, and building
              models capable of handling heterogeneous space data modalities.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Methods &amp; Tools</div>
            <div className="entry-field-value mono">
              Python · PyTorch · Remote Sensing · LiDAR Processing ·
              Multimodal Architectures · Earth Observation Datasets
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Key Outcomes</div>
            <div className="entry-field-value">
              Ongoing. Current work is shaping an understanding of representation challenges
              across modalities, forming the basis for future research contributions and PhD work.
            </div>
          </div>
        </div>
      </section>

      {/* ── B. Professional Experience ───────────────────── */}
      <section className="work-section">
        <div className="section-label">Professional Experience</div>

        <div className="work-entry">
          <h2 className="entry-title">Associate AI/ML Engineer — Artem Health Tech Pvt. Ltd.</h2>
          <div className="entry-meta">
            <span className="entry-time">July 2025 — Jan. 2026</span>
            <span className="entry-context">Full-time</span>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Context</div>
            <div className="entry-field-value">
              Industry role focused on deploying machine learning systems for
              real-world applications, particularly in speech and language processing.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">What I worked on</div>
            <div className="entry-field-value">
              Developed and deployed ASR pipelines integrated with LLM-based systems.
              Work involved handling noisy data, optimizing inference performance,
              and designing retrieval layers for downstream applications.
              This phase emphasized system reliability and practical constraints.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Methods &amp; Tools</div>
            <div className="entry-field-value mono">
              Python · Whisper · HuggingFace Transformers · LangChain · FastAPI · Docker
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Key Outcomes</div>
            <div className="entry-field-value">
              Improved ASR pipeline efficiency and contributed to production
              systems used by active clients. Gained experience in evaluation,
              deployment, and failure analysis of ML systems.
            </div>
          </div>
        </div>

        <div className="work-entry">
          <h2 className="entry-title">AI/ML Intern — Artem Health Tech Pvt. Ltd.</h2>
          <div className="entry-meta">
            <span className="entry-time">Dec. 2024 — June 2025</span>
            <span className="entry-context">Internship</span>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Context</div>
            <div className="entry-field-value">
              Early-stage work focused on experimentation and prototyping in
              speech processing systems.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">What I worked on</div>
            <div className="entry-field-value">
              Explored speaker diarization, noise-robust ASR, and dataset
              preparation for Indian-language speech. Built evaluation pipelines
              to benchmark model performance under varying conditions.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Methods &amp; Tools</div>
            <div className="entry-field-value mono">
              Python · Librosa · Speech Processing · Jupyter
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Key Outcomes</div>
            <div className="entry-field-value">
              Developed baseline systems and evaluation methods that informed
              later production work. Transitioned into full-time role.
            </div>
          </div>
        </div>
      </section>

      {/* ── C. Selected Projects ─────────────────────────── */}
      <section className="work-section">
        <div className="section-label">Selected Projects</div>

        <div className="work-entry">
          <h2 className="entry-title">Medinova — AI-Assisted Medical Information System</h2>
          <div className="entry-meta">
            <span className="entry-time">July - Aug 2025</span>
            <span className="entry-context">Independent</span>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Context</div>
            <div className="entry-field-value">
              Exploration of combining structured medical knowledge with language
              models for query-based interaction.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">What I worked on</div>
            <div className="entry-field-value">
              Designed a system integrating speech input, document ingestion,
              and retrieval-based generation. The focus was on how different
              input types interact within a single pipeline.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Methods &amp; Tools</div>
            <div className="entry-field-value mono">
              Python · RAG · FAISS · Whisper · FastAPI · Redis
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Key Outcomes</div>
            <div className="entry-field-value">
              Demonstrated measurable improvement in answer relevance over a
              direct LLM baseline on a held-out medical Q&amp;A dataset.
            </div>
          </div>
        </div>

        <div className="work-entry">
          <h2 className="entry-title">RAG Finance QA System</h2>
          <div className="entry-meta">
            <span className="entry-time">Dec. 2024 - May 2025</span>
            <span className="entry-context">Academic Project</span>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Context</div>
            <div className="entry-field-value">
              Exploration of retrieval-augmented generation for structured
              financial document question answering.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">What I worked on</div>
            <div className="entry-field-value">
              Designed a full RAG pipeline ingesting financial reports (10-K,
              quarterly filings) and enabling precise natural-language queries
              over structured numerical and textual content. Focused on chunk
              strategy, embedding quality, and reranking.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Methods &amp; Tools</div>
            <div className="entry-field-value mono">
              Python · ChromaDB · sentence-transformers · Huggingface Transformers · Streamlit
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Key Outcomes</div>
            <div className="entry-field-value">
              Achieved competitive retrieval precision on financial QA benchmarks.
              Documented chunking strategies and trade-offs in an internal report.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}