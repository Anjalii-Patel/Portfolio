import Link from "next/link";

export const metadata = {
  title: "Projects | Anjali Patel",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Selected Projects</h1>
        <p className="page-subtitle">
          Applied AI/ML · Deep Learning · Speech AI · Computer Vision · Remote Sensing
        </p>
      </div>

      <p className="projects-intro">
        A selection of technical projects spanning geometric deep learning, transformer optimization,
        conversational speech AI, and geospatial intelligence. Detailed architecture diagrams, evaluation
        methodologies, and code links are available within each case study.
      </p>

      {/* ── 1. Featured Research ── */}
      <section className="project-category-section">
        <div className="section-label">Featured Research</div>

        <div className="project-card project-card-featured">
          <div className="project-badge-row">
            <span className="project-featured-badge">Featured Research</span>
            <span className="project-domain">Computer Vision · Remote Sensing · Registration</span>
          </div>

          <h2 className="project-card-heading">
            <Link href="/projects/lunar-image-registration">
              Cross-Modal Lunar Image Registration
            </Link>
          </h2>

          <p className="project-card-desc">
            Matching LiDAR intensity, DEM, and optical imagery for lunar terrain-relative navigation.
            Evaluated classical and deep feature matching under extreme illumination differences across
            Mare Imbrium and Tycho crater regions.
          </p>

          <div className="project-card-tech">
            <span>LoFTR</span>
            <span>SuperPoint</span>
            <span>SIFT</span>
            <span>DEM Analysis</span>
            <span>FPGA Optimization</span>
          </div>

          <div className="project-action-links">
            <Link href="/projects/lunar-image-registration" className="project-action-link-primary">
              View Case Study &rarr;
            </Link>
            <span className="project-publication-pill">
              Accepted at IEEE InGARSS 2026
            </span>
            <Link href="/publications" className="project-action-link-secondary">
              Publication Details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Applied Engineering & Research Projects ── */}
      <section className="project-category-section">
        <div className="section-label">Applied Projects</div>

        <div className="project-cards-grid">
          {/* Card 1: Clinical FLAN-T5 */}
          <div className="project-card project-card-compact">
            <div className="project-badge-row">
              <span className="project-domain">NLP · Model Compression</span>
            </div>
            <h2 className="project-card-heading">
              <Link href="/projects/clinical-flan-t5">
                Clinical FLAN-T5 Optimization
              </Link>
            </h2>
            <p className="project-card-desc">
              Fine-tuning and model-compression experiments for clinical summarization,
              evaluating knowledge distillation, pruning bounds, and INT8 quantization.
            </p>
            <div className="project-card-tech">
              <span>Transformers</span>
              <span>PyTorch</span>
              <span>Distillation</span>
              <span>INT8</span>
            </div>
            <div className="project-action-links">
              <Link href="/projects/clinical-flan-t5" className="project-action-link-primary">
                Case Study &rarr;
              </Link>
              <a
                href="https://github.com/Anjalii-Patel/clinical-flan-t5-finetuning-distillation"
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-link-secondary"
              >
                GitHub &rarr;
              </a>
            </div>
          </div>

          {/* Card 2: Medinova */}
          <div className="project-card project-card-compact">
            <div className="project-badge-row">
              <span className="project-domain">RAG · Conversational AI</span>
            </div>
            <h2 className="project-card-heading">
              <Link href="/projects/medinova">
                Medinova
              </Link>
            </h2>
            <p className="project-card-desc">
              Document retrieval, conversational AI, and speech recognition pipeline
              integrating vector search, LangGraph workflows, and locally hosted LLM inference.
            </p>
            <div className="project-card-tech">
              <span>RAG</span>
              <span>FastAPI</span>
              <span>Ollama</span>
              <span>LangGraph</span>
            </div>
            <div className="project-action-links">
              <Link href="/projects/medinova" className="project-action-link-primary">
                Case Study &rarr;
              </Link>
              <a
                href="https://github.com/Anjalii-Patel/Medinova"
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-link-secondary"
              >
                GitHub &rarr;
              </a>
            </div>
          </div>

          {/* Card 3: Speaker Diarization & ASR */}
          <div className="project-card project-card-compact">
            <div className="project-badge-row">
              <span className="project-domain">Speech AI · Audio Processing</span>
            </div>
            <h2 className="project-card-heading">
              <Link href="/projects/speaker-diarization">
                Speaker Diarization &amp; ASR
              </Link>
            </h2>
            <p className="project-card-desc">
              Speaker attribution and transcription pipeline modularizing voice activity detection,
              speaker embedding extraction, spectral clustering, and Whisper transcription.
            </p>
            <div className="project-card-tech">
              <span>Whisper</span>
              <span>VAD</span>
              <span>Embeddings</span>
              <span>Clustering</span>
            </div>
            <div className="project-action-links">
              <Link href="/projects/speaker-diarization" className="project-action-link-primary">
                Case Study &rarr;
              </Link>
              <a
                href="https://github.com/Anjalii-Patel/speaker-diarization-asr-toolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-link-secondary"
              >
                GitHub &rarr;
              </a>
            </div>
          </div>

          {/* Card 4: Satellite Change Detection */}
          <div className="project-card project-card-compact">
            <div className="project-badge-row">
              <span className="project-domain">Computer Vision · Remote Sensing</span>
            </div>
            <h2 className="project-card-heading">
              <Link href="/projects/satellite-change-detection">
                Satellite Change Detection
              </Link>
            </h2>
            <p className="project-card-desc">
              Classical and deep-learning approaches to bi-temporal imagery, evaluating difference
              thresholding, Siamese feature extractors, and U-Net segmentations on Sentinel-2 data.
            </p>
            <div className="project-card-tech">
              <span>U-Net</span>
              <span>Siamese Networks</span>
              <span>PyTorch</span>
              <span>OSCD</span>
            </div>
            <div className="project-action-links">
              <Link href="/projects/satellite-change-detection" className="project-action-link-primary">
                Case Study &rarr;
              </Link>
              <a
                href="https://github.com/Anjalii-Patel/satellite-change-detection"
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-link-secondary"
              >
                GitHub &rarr;
              </a>
            </div>
          </div>

          {/* Card 5: Remote Sensing Toolkit */}
          <div className="project-card project-card-compact">
            <div className="project-badge-row">
              <span className="project-domain">Geospatial Processing · Tooling</span>
            </div>
            <h2 className="project-card-heading">
              <Link href="/projects/remote-sensing-toolkit">
                Remote Sensing Toolkit
              </Link>
            </h2>
            <p className="project-card-desc">
              Reusable geospatial raster processing and dataset preparation library supporting GeoTIFF
              windowed reads, multi-spectral indices, and leak-resistant patch generation.
            </p>
            <div className="project-card-tech">
              <span>Python</span>
              <span>Rasterio</span>
              <span>GeoTIFF</span>
              <span>Multiprocessing</span>
            </div>
            <div className="project-action-links">
              <Link href="/projects/remote-sensing-toolkit" className="project-action-link-primary">
                Case Study &rarr;
              </Link>
              <a
                href="https://github.com/Anjalii-Patel/remotesensing-toolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-link-secondary"
              >
                GitHub &rarr;
              </a>
            </div>
          </div>

          {/* Card 6: RAG Question Answering */}
          <div className="project-card project-card-compact">
            <div className="project-badge-row">
              <span className="project-domain">NLP · Document Intelligence</span>
            </div>
            <h2 className="project-card-heading">
              <Link href="/projects/rag-qa-system">
                RAG Question Answering
              </Link>
            </h2>
            <p className="project-card-desc">
              Financial document QA using fine-tuned FLAN-T5-XL and retrieval, coupling semantic
              vector search with supervised adaptation on domain financial QA datasets.
            </p>
            <div className="project-card-tech">
              <span>FLAN-T5</span>
              <span>ChromaDB</span>
              <span>LangChain</span>
              <span>Evaluation</span>
            </div>
            <div className="project-action-links">
              <Link href="/projects/rag-qa-system" className="project-action-link-primary">
                Case Study &rarr;
              </Link>
              <a
                href="https://github.com/Anjalii-Patel/rag_qa_system"
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-link-secondary"
              >
                GitHub &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
