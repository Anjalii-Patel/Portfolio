import Link from "next/link";

export const metadata = {
  title: "RAG Question Answering | Case Study",
};

export default function RagQaSystemPage() {
  return (
    <>
      <div className="detail-nav-bar">
        <Link href="/projects" className="detail-back-link">
          &larr; Back to Selected Projects
        </Link>
      </div>

      <header className="detail-header">
        <div className="project-badge-row">
          <span className="project-domain">NLP · Transformer Fine-Tuning · Retrieval-Augmented Generation</span>
        </div>
        <h1 className="detail-title">
          RAG PDF Question Answering with Fine-Tuned FLAN-T5-XL
        </h1>
        <p className="page-subtitle">
          A domain-adapted question-answering system combining a fine-tuned FLAN-T5-XL model
          with persistent ChromaDB vector retrieval for financial document comprehension.
        </p>

        <div className="project-action-links" style={{ marginTop: "1.25rem", borderTop: "none", paddingTop: 0 }}>
          <a
            href="https://github.com/Anjalii-Patel/rag_qa_system"
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-link-primary"
          >
            View GitHub: rag_qa_system
          </a>
        </div>
      </header>

      {/* ── Problem & Objective ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Problem &amp; Objective</div>
        <div className="detail-prose">
          <p>
            Extracting precise facts and quantitative answers from financial filings (10-K, 10-Q, quarterly
            earnings releases) requires synthesizing both unstructured narrative paragraphs and structured
            tabular matrices. Off-the-shelf language models frequently hallucinate or produce non-committal
            answers when prompted without direct context grounding.
          </p>
          <p>
            The objective of this project was to construct a domain-adapted retrieval-augmented generation (RAG)
            pipeline that couples semantic document retrieval with a fine-tuned FLAN-T5-XL sequence-to-sequence
            model specifically adapted to financial questions over mixed table and text data.
          </p>
        </div>
      </section>

      {/* ── Dataset & Model Adaptation ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Dataset &amp; Model Adaptation</div>
        <div className="detail-prose">
          <p>
            The model adaptation is grounded in the TAT-QA (Tabular And Textual Question Answering) benchmark:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Base Architecture:</strong> Google FLAN-T5-XL (3B parameters), an encoder-decoder model pre-trained on instructional multi-task datasets.
            </li>
            <li>
              <strong>Fine-Tuned Checkpoint:</strong> <code>anjalipatel03/flan-t5-xl_finance_QA</code>, trained using Hugging Face Transformers on TAT-QA financial contexts.
            </li>
            <li>
              <strong>Preprocessing:</strong> Converted tabular cells and descriptive narrative sections into structured prompt sequences to preserve numerical relationships during tokenization.
            </li>
          </ul>
        </div>
      </section>

      {/* ── RAG Architecture ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">RAG Architecture</div>
        <div className="detail-prose">
          <p>
            The system coordinates three core processing stages:
          </p>

          <div className="metrics-highlight-grid">
            <div className="metric-card">
              <div className="metric-val">1. PDF Ingestion</div>
              <div className="metric-desc">Text extraction via PyMuPDF with recursive sliding-window paragraph chunking.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">2. Vector Retrieval</div>
              <div className="metric-desc">Dense embeddings generated with SentenceTransformers (all-MiniLM-L6-v2) and indexed in ChromaDB.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">3. Answer Generation</div>
              <div className="metric-desc">Top 3 retrieved chunks injected into prompt template for sequence generation via fine-tuned FLAN-T5-XL.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Implementation ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Implementation</div>
        <div className="detail-prose">
          <p>
            The system is organized into modular Python components with an interactive Streamlit user interface:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li><code>app.py</code>: Interactive Streamlit application providing document upload, query input, and contextual answer rendering.</li>
            <li><code>rag.py</code>: Handles document ingestion, vector storage in persistent ChromaDB, top-k similarity search, and prompt synthesis.</li>
            <li><code>model.py</code>: Sequence-to-sequence fine-tuning pipeline with AdamW optimizer and learning rate scheduling.</li>
            <li><code>evaluation.py</code>: Automated benchmark harness comparing base FLAN-T5-XL against the fine-tuned checkpoint.</li>
            <li><code>hf_push.py</code>: Deployment script for publishing trained model weights and tokenizers to the Hugging Face Hub.</li>
          </ul>
        </div>
      </section>

      {/* ── Results & Limitations ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Results &amp; Limitations</div>
        <div className="detail-prose">
          <p>
            The engineering outcome is a functional, evaluation-oriented RAG system for financial documents:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Multi-Metric Evaluation Harness:</strong> Implemented automated evaluation tracking ROUGE-L, BLEU, Token F1, Exact Match, Edit Similarity, and BERT Similarity across test queries, exporting results to reproducible CSV reports.
            </li>
            <li>
              <strong>Context Retrieval:</strong> Relevant document chunks are retrieved and included in the generation prompt to provide source context for answering questions.
            </li>
            <li>
              <strong>Evaluation Scope:</strong> The evaluation harness benchmarks model generation quality between the base and fine-tuned FLAN-T5-XL checkpoints on domain prompts, while overall PDF QA accuracy additionally depends on upstream document parsing and retrieval precision.
            </li>
            <li>
              <strong>Arithmetic Reasoning Limitation:</strong> While domain fine-tuning improves financial vocabulary alignment, multi-step quantitative calculations (e.g., compound ratios) remain challenging for pure sequence generation without external symbolic calculation tools.
            </li>
          </ul>
          <p style={{ marginTop: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)" }}>
            Technologies: Python · PyTorch · Hugging Face Transformers · FLAN-T5-XL · ChromaDB · SentenceTransformers · PyMuPDF · Streamlit · TAT-QA
          </p>
        </div>
      </section>
    </>
  );
}

