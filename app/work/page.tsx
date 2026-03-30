export const metadata = {
  title: "Work & Research — Anjali Patel",
};

export default function WorkPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Work &amp; Research</h1>
        <p className="page-subtitle">Research · Systems · Experience</p>
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
              Research project under the Indian Space Research Organisation,
              focused on computational approaches for space-derived data.
              The work lies at the intersection of remote sensing and machine learning.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">What I work on</div>
            <div className="entry-field-value">
              Working on the problem of cross-modal alignment between LiDAR intensity images,
              Digital Elevation Models (DEM), and optical imagery.

              The focus is on how structural, geometric, and radiometric differences across
              these modalities affect feature matching and representation.

              Current work involves exploring hybrid approaches combining handcrafted
              feature extractors with learned representations to achieve robust matching
              under real-world conditions.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Methods &amp; Tools</div>
            <div className="entry-field-value mono">
              Feature Matching · Cross-Modal Registration · LiDAR Processing ·
              DEM Analysis · Hybrid Feature Design · CNN-based Representations
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Key Outcomes</div>
            <div className="entry-field-value">
              Ongoing. Current work is focused on understanding how feature representation
              affects matching accuracy across modalities, and how hybrid approaches can
              balance robustness with real-time deployment constraints.
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
              Industry role focused on deploying machine learning systems for
              real-world applications, particularly in speech and language processing.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">What I worked on</div>
            <div className="entry-field-value">
              Worked on integrating speech-to-text systems with downstream NLP pipelines,
              focusing on robustness under noisy real-world data.

              Contributed to backend ML services and inference pipelines, with emphasis on
              evaluation, reproducibility, and system stability rather than isolated model performance.
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
              Contributed to production ML systems used in real-world workflows, gaining
              experience in handling data variability, evaluation challenges, and deployment constraints.
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
              Early-stage work focused on experimentation and prototyping in
              speech processing systems.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">What I worked on</div>
            <div className="entry-field-value">
              Explored foundational problems in speech processing, including dataset
              preparation, noise handling, and model evaluation.

              Built initial experimentation pipelines and benchmarked model performance
              under varying conditions, which informed later production work.
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

      {/* C. Systems & Experiments */}
      <section className="work-section">
        <div className="section-label">Systems & Experiments</div>

        <div className="work-entry">
          <h2 className="entry-title">Medinova — AI-Assisted Medical Information System · <a href="https://github.com/Anjalii-Patel/Medinova" target="_blank">GitHub</a></h2>
          <div className="entry-meta">
            <span className="entry-time">July - Aug 2025</span>
            <span className="entry-time">|</span>
            <span className="entry-context">Independent</span>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Context</div>
            <div className="entry-field-value">
              Exploration of multimodal pipelines combining speech, document data,
              and retrieval-based generation within a single system.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">What I worked on</div>
            <div className="entry-field-value">
              Built an end-to-end system integrating speech input, document ingestion,
              and retrieval-based generation.

              The system involved transcription using Whisper, preprocessing of
              PDF/DOCX medical documents, and embedding-based retrieval using vector
              similarity search.

              Focus was on how multiple input modalities (audio + text) interact within
              a single pipeline, and how retrieval quality affects downstream responses.
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
              Developed a working multimodal pipeline and evaluated retrieval-based
              responses against direct LLM outputs. Identified limitations in context
              selection and embedding quality through iterative testing.
            </div>
          </div>
        </div>

        <div className="work-entry">
          <h2 className="entry-title">RAG Finance QA System · <a href="https://github.com/Anjalii-Patel/rag_qa_system" target="_blank">GitHub</a></h2>
          <div className="entry-meta">
            <span className="entry-time">Dec. 2024 - May 2025</span>
            <span className="entry-time">|</span>
            <span className="entry-context">Academic Project</span>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Context</div>
            <div className="entry-field-value">
              Implementation of retrieval-augmented generation for structured
              financial document question answering.
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">What I worked on</div>
            <div className="entry-field-value">
              Built a retrieval-augmented QA system over financial documents,
              including annual reports and structured filings.

              Implemented document preprocessing, chunking strategies, and embedding-based
              retrieval using SentenceTransformers and ChromaDB.

              Additionally explored domain adaptation by fine-tuning a Flan-T5 model,
              and evaluated system performance using ROUGE, BLEU, and similarity metrics.
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
              Improved answer relevance over baseline retrieval through iterative tuning
              of chunking and embedding strategies. Documented trade-offs between retrieval
              precision and generation quality across evaluation metrics.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}