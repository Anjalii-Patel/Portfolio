import Link from "next/link";

export const metadata = {
  title: "Clinical FLAN-T5 Optimization | Case Study",
};

export default function ClinicalFlanT5Page() {
  return (
    <>
      <div className="detail-nav-bar">
        <Link href="/projects" className="detail-back-link">
          &larr; Back to Selected Projects
        </Link>
      </div>

      <header className="detail-header">
        <div className="project-badge-row">
          <span className="project-domain">NLP · Transformers · Model Compression &amp; Optimization</span>
        </div>
        <h1 className="detail-title">
          Clinical FLAN-T5: Fine-Tuning, Distillation &amp; Quantization
        </h1>
        <p className="page-subtitle">
          An end-to-end model compression pipeline exploring supervised fine-tuning, knowledge distillation,
          magnitude pruning, and dynamic INT8 quantization for resource-efficient clinical summarization.
        </p>

        <div className="project-action-links" style={{ marginTop: "1.25rem", borderTop: "none", paddingTop: 0 }}>
          <a
            href="https://github.com/Anjalii-Patel/clinical-flan-t5-finetuning-distillation"
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-link-primary"
          >
            View GitHub: clinical-flan-t5-finetuning-distillation
          </a>
        </div>
      </header>

      {/* ── Problem & Objective ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Problem &amp; Objective</div>
        <div className="detail-prose">
          <p>
            Automated clinical text summarization can reduce documentation overhead by condensing lengthy
            patient encounters, discharge notes, and histories into concise clinical overviews. While sequence-to-sequence
            transformers like FLAN-T5 produce coherent summaries, deploying them in latency-critical healthcare
            workflows or local hospital hardware is limited by model parameter size and memory footprint.
          </p>
          <p>
            The objective of this project was to construct an end-to-end experimental workflow covering supervised
            fine-tuning and compounding model compression strategies. By combining <strong>Knowledge Distillation</strong>,
            <strong>Task-Aware Pruning</strong>, and <strong>INT8 Quantization</strong>, the work evaluates the
            trade-offs between model footprint, inference latency, and summarization quality.
          </p>
        </div>
      </section>

      {/* ── Dataset / Inputs ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Dataset / Inputs</div>
        <div className="detail-prose">
          <p>
            The project evaluates clinical summarization workflows on public, de-identified medical dialogue
            and note benchmark corpora (such as MTS-Dialog and open summarization datasets; no private patient
            records were used):
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Context Budgeting:</strong> Analyzed source token length distributions to configure input sequence windows (up to 1024 tokens) and summary target budgets (up to 256 tokens).
            </li>
            <li>
              <strong>Medical Terminology Preservation:</strong> Utilized the FLAN-T5 SentencePiece subword tokenizer, ensuring medical abbreviations and dosage syntax were encoded without excessive sub-token fragmentation.
            </li>
            <li>
              <strong>Data Sanitization:</strong> Formatted multi-section notes with consistent section delimiters and stripped anomalous formatting.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Architecture & Methodology ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Architecture &amp; Methodology</div>
        <div className="detail-prose">
          <p>
            The optimization workflow is structured into four progressive stages:
          </p>

          <div className="metrics-highlight-grid">
            <div className="metric-card">
              <div className="metric-val">1. Supervised SFT</div>
              <div className="metric-desc">Fine-tuning FLAN-T5-Base on clinical paired data using cross-entropy with label smoothing.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">2. Distillation</div>
              <div className="metric-desc">Teacher-student distillation transferring soft token distributions to a compact FLAN-T5-Small model.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">3. Pruning</div>
              <div className="metric-desc">Magnitude-based unstructured weight pruning across non-critical attention and linear matrices.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">4. INT8 Quantization</div>
              <div className="metric-desc">Post-training dynamic INT8 quantization mapping linear weights from FP32 down to 8-bit integers.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Implementation ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Implementation</div>
        <div className="detail-prose">
          <p>
            Implemented in Python within the PyTorch and Hugging Face Transformers ecosystem:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Distillation Loss:</strong> Formulated a combined objective function blending student-teacher Kullback-Leibler (KL) divergence with ground-truth cross-entropy loss, modulated by temperature scaling (&tau; = 2.0).
            </li>
            <li>
              <strong>Training Pipeline:</strong> Leveraged Hugging Face Accelerate, gradient checkpointing, and AdamW optimizer with cosine learning rate decay and warmup.
            </li>
            <li>
              <strong>Dynamic Quantization:</strong> Executed post-training dynamic INT8 quantization on linear projection layers, benchmarking PyTorch dynamic quantization against ONNX Runtime.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Results & Limitations ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Results &amp; Limitations</div>
        <div className="detail-prose">
          <p>
            The experimental workflow provided key insights into transformer compression for healthcare NLP:
          </p>

          <div className="metrics-highlight-grid">
            <div className="metric-card">
              <div className="metric-val">~50-60%</div>
              <div className="metric-desc">Reduction in serialized model footprint following distillation and INT8 quantization.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">&gt; 92%</div>
              <div className="metric-desc">Relative ROUGE-L retention compared to the full-precision teacher model.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">CPU Efficient</div>
              <div className="metric-desc">Quantized INT8 linear layers enable low-latency generation on standard CPU environments.</div>
            </div>
          </div>

          <p>
            <strong>Experimental Observations &amp; Limitations:</strong>
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Distillation Dynamics:</strong> In comparative evaluation on the benchmark split, student models trained with distillation objectives tracked clinical vocabulary and negation structures more reliably than identically sized small architectures trained solely from scratch.
            </li>
            <li>
              <strong>Pruning Safety Limits:</strong> Moderate global unstructured pruning (up to 15-20% sparsity) preserved general summary coherence, whereas more aggressive pruning (&gt; 30%) led to omission of numerical entities (such as dosages and lab intervals), demonstrating the sensitivity of clinical numerical extraction to unstructured weight removal.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

