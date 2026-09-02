import Link from "next/link";

export const metadata = {
  title: "Medinova | Case Study",
};

export default function MedinovaPage() {
  return (
    <>
      <div className="detail-nav-bar">
        <Link href="/projects" className="detail-back-link">
          &larr; Back to Selected Projects
        </Link>
      </div>

      <header className="detail-header">
        <div className="project-badge-row">
          <span className="project-domain">Generative AI · Retrieval-Augmented Generation · Speech Recognition · Conversational Systems</span>
        </div>
        <h1 className="detail-title">
          Medinova: AI-Powered Medical Assistant
        </h1>
        <p className="page-subtitle">
          An interactive medical document assistant combining document ingestion, vector retrieval,
          speech recognition, and persistent conversational memory with locally hosted language models.
        </p>

        <div className="project-action-links" style={{ marginTop: "1.25rem", borderTop: "none", paddingTop: 0 }}>
          <a
            href="https://github.com/Anjalii-Patel/Medinova"
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-link-primary"
          >
            View GitHub: Medinova
          </a>
        </div>
      </header>

      {/* ── Problem & Objective ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Problem &amp; Objective</div>
        <div className="detail-prose">
          <p>
            Clinical knowledge is frequently fragmented across disparate sources: unstructured PDF lab reports,
            doctor progress notes, dictations, and continuous dialogue. For a digital assistant to be practical,
            it must ingest multi-format clinical documentation, retrieve semantically relevant context,
            support both speech and text input, and maintain coherent conversational memory across turns.
          </p>
          <p>
            Medinova was built to unify these capabilities into a modular full-stack AI application. The project
            focuses on robust systems integration: orchestrating document ingestion, FAISS vector indexing,
            local language model inference via Ollama, speech-to-text processing, and session-based Redis state
            management.
          </p>
        </div>
      </section>

      {/* ── System Architecture ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">System Architecture</div>
        <div className="detail-prose">
          <p>
            The application follows a decoupled multi-tier architecture:
          </p>

          <div className="metrics-highlight-grid">
            <div className="metric-card">
              <div className="metric-val">Frontend</div>
              <div className="metric-desc">Web interface supporting document upload, text chat, and real-time audio interaction.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">FastAPI Backend</div>
              <div className="metric-desc">REST endpoints and WebSocket channels managing transcription and session states.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">LangGraph Workflow</div>
              <div className="metric-desc">Orchestrates retrieval routing, context assembly, and model response generation.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">Local Inference</div>
              <div className="metric-desc">Local LLM generation through Ollama with FAISS vector search and Redis session caching.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Components ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Core Components</div>
        <div className="detail-prose">
          <ul className="project-bullet-list" style={{ margin: "0.5rem 0 1rem" }}>
            <li>
              <strong>Document Processing:</strong> Ingests PDF and DOCX documents using PyMuPDF and python-docx, parsing text blocks and chunking content with recursive character splitting.
            </li>
            <li>
              <strong>Vector Retrieval:</strong> Computes dense embeddings with SentenceTransformers (<code>all-MiniLM-L6-v2</code>) and indexes document chunks using FAISS for vector similarity search.
            </li>
            <li>
              <strong>Conversational Memory:</strong> Utilizes a Redis-backed session store to maintain conversational history and metadata across interaction turns, with an auxiliary index for retrieving relevant past dialogue.
            </li>
            <li>
              <strong>Speech Recognition:</strong> Integrates <code>faster-whisper</code> for file-based audio transcription and streaming speech input over WebSocket connections.
            </li>
            <li>
              <strong>Local Inference Support:</strong> Interfaces with open-weight language models via locally hosted Ollama instances for model inference.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Implementation ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Implementation</div>
        <div className="detail-prose">
          <p>
            The backend exposes structured REST and WebSocket endpoints:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li><code>POST /upload</code>: Ingests documents, extracts text, computes embeddings, and updates the session FAISS index.</li>
            <li><code>POST /ask</code>: Executes RAG workflow via LangGraph, retrieving top document passages and generating grounded answers.</li>
            <li><code>POST /transcribe</code>: File-based speech-to-text transcription powered by faster-whisper.</li>
            <li><code>WebSocket /ws/audio</code>: Interactive streaming audio transcription for voice-driven queries.</li>
            <li><code>Session Management</code>: Endpoints to list sessions, retrieve chat history, and clear document indices.</li>
          </ul>
        </div>
      </section>

      {/* ── Results & Limitations ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Results &amp; Limitations</div>
        <div className="detail-prose">
          <p>
            The principal engineering outcome is a functional, end-to-end multimodal assistant architecture
            that coordinates document extraction, vector indexing, speech recognition, and generative AI
            in a self-contained local environment.
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Medical Disclaimer:</strong> Medinova is an experimental software prototype designed to demonstrate multimodal system engineering. It has not undergone clinical validation or regulatory evaluation, and its outputs must not be used for medical diagnosis, triage, or clinical decision-making.
            </li>
            <li>
              <strong>Source Grounding:</strong> While the RAG pipeline conditions prompts on retrieved chunks, future enhancements should incorporate strict token-level source citation and hallucination detection checks.
            </li>
            <li>
              <strong>Security &amp; Compliance Bounds:</strong> The system is a development prototype; healthcare production deployments would require rigorous PHI compliance protocols, end-to-end encryption, and role-based access controls.
            </li>
          </ul>
          <p style={{ marginTop: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)" }}>
            Technologies: Python · FastAPI · LangGraph · LangChain · Ollama · FAISS · Redis · SentenceTransformers · faster-whisper · WebSockets
          </p>
        </div>
      </section>
    </>
  );
}

