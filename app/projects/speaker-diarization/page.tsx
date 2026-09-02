import Link from "next/link";

export const metadata = {
  title: "Speaker Diarization & ASR | Case Study",
};

export default function SpeakerDiarizationPage() {
  return (
    <>
      <div className="detail-nav-bar">
        <Link href="/projects" className="detail-back-link">
          &larr; Back to Selected Projects
        </Link>
      </div>

      <header className="detail-header">
        <div className="project-badge-row">
          <span className="project-domain">Speech AI · Automatic Speech Recognition · Speaker Diarization</span>
        </div>
        <h1 className="detail-title">
          Speaker Diarization &amp; ASR Toolkit
        </h1>
        <p className="page-subtitle">
          A modular Python toolkit combining neural voice activity detection, deep speaker embeddings,
          unsupervised clustering, and Whisper-based transcription to generate speaker-attributed transcripts.
        </p>

        <div className="project-action-links" style={{ marginTop: "1.25rem", borderTop: "none", paddingTop: 0 }}>
          <a
            href="https://github.com/Anjalii-Patel/speaker-diarization-asr-toolkit"
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-link-primary"
          >
            View GitHub: speaker-diarization-asr-toolkit
          </a>
        </div>
      </header>

      {/* ── Problem & Objective ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Problem &amp; Objective</div>
        <div className="detail-prose">
          <p>
            Standard automatic speech recognition systems transcribe spoken words but do not identify
            who spoke each phrase. In multi-speaker conversations (such as meetings, consultations, and
            interviews), downstream language models and human reviewers require speaker-labeled turns to preserve
            dialogue context and conversational accountability.
          </p>
          <p>
            The objective of this project was to design and build a modular speech-processing toolkit that
            couples speech recognition with speaker diarization. The goal was to provide an accessible,
            decoupled pipeline where developers can experiment with alternative voice activity detectors,
            speaker embedding extractors, and clustering strategies without modifying application logic.
          </p>
        </div>
      </section>

      {/* ── Audio Inputs & Preprocessing ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Audio Inputs &amp; Preprocessing</div>
        <div className="detail-prose">
          <p>
            The pipeline accepts standard single-channel audio formats (WAV, MP3, FLAC, M4A) and standardizes
            them for acoustic modeling:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Sampling &amp; Channel Normalization:</strong> Ingested audio is resampled to a uniform 16 kHz mono format, matching the expected input sample rate of acoustic and speech-recognition backends.
            </li>
            <li>
              <strong>Signal Conditioning:</strong> Removes direct current (DC) offset and performs peak normalization across the audio buffer.
            </li>
            <li>
              <strong>Sliding Window Framing:</strong> Active speech segments are subdivided into uniform sub-windows (1.5-second duration with 0.75-second overlap) to extract localized speaker representation vectors while maintaining temporal alignment.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Architecture & Methodology ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Architecture &amp; Methodology</div>
        <div className="detail-prose">
          <p>
            The pipeline is organized into four sequential processing stages:
          </p>

          <div className="metrics-highlight-grid">
            <div className="metric-card">
              <div className="metric-val">1. Voice Activity Detection</div>
              <div className="metric-desc">Neural VAD (Silero VAD) to detect speech regions and eliminate non-speech silence.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">2. Speaker Embeddings</div>
              <div className="metric-desc">Extracting acoustic vectors using ECAPA-TDNN and NeMo TitaNet extractors.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">3. Unsupervised Clustering</div>
              <div className="metric-desc">Agglomerative Hierarchical Clustering (AHC) and Spectral clustering on cosine distances.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">4. ASR &amp; Alignment</div>
              <div className="metric-desc">Transcribing audio via faster-whisper and mapping word intervals to speaker clusters.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Implementation ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Implementation</div>
        <div className="detail-prose">
          <p>
            The toolkit is implemented in Python with a clean module layout:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Inference Engine:</strong> Utilizes <code>faster-whisper</code> with the CTranslate2 backend, allowing low-memory execution across CPU and GPU environments.
            </li>
            <li>
              <strong>Modular Embeddings:</strong> Supports plug-and-play selection between SpeechBrain ECAPA-TDNN models and NVIDIA NeMo TitaNet checkpoints, allowing configuration based on available compute resources.
            </li>
            <li>
              <strong>Standard Output Export:</strong> Generates NIST-standard Rich Transcription Time Marked (RTTM) files for evaluation alongside JSON and SRT subtitle outputs for downstream pipelines.
            </li>
            <li>
              <strong>CLI &amp; API:</strong> Exposes both a command-line interface for batch file processing and Python classes for embedding within larger services.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Results & Limitations ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Results &amp; Limitations</div>
        <div className="detail-prose">
          <p>
            The engineering outcome of this project is an integrated, reproducible pipeline that produces
            speaker-attributed transcripts from raw audio without relying on proprietary third-party APIs.
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Evaluation Support:</strong> The inclusion of standardized RTTM export enables direct compatibility with the NIST <code>md-eval</code> scoring harness to calculate Diarization Error Rate (DER) when ground-truth turn annotations are available.
            </li>
            <li>
              <strong>Overlapping Speech Constraint:</strong> Single-channel clustering assumes only one dominant speaker per segment. Concurrent speech by multiple speakers remains a challenge without a dedicated multi-channel separation front-end.
            </li>
            <li>
              <strong>Short Utterance Limitations:</strong> Utterances shorter than 0.5 seconds provide limited acoustic context, increasing the likelihood of speaker assignment errors in rapid dialogue.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

