import Link from "next/link";

export const metadata = {
  title: "Satellite Change Detection | Case Study",
};

export default function SatelliteChangeDetectionPage() {
  return (
    <>
      <div className="detail-nav-bar">
        <Link href="/projects" className="detail-back-link">
          &larr; Back to Selected Projects
        </Link>
      </div>

      <header className="detail-header">
        <div className="project-badge-row">
          <span className="project-domain">Remote Sensing · Semantic Change Detection · Siamese Deep Learning</span>
        </div>
        <h1 className="detail-title">
          Bi-Temporal Satellite Image Change Detection
        </h1>
        <p className="page-subtitle">
          An experimental framework for detecting land-cover changes between Sentinel-2 observations,
          comparing classical spectral-difference baselines with deep-learning architectures.
        </p>

        <div className="project-action-links" style={{ marginTop: "1.25rem", borderTop: "none", paddingTop: 0 }}>
          <a
            href="https://github.com/Anjalii-Patel/satellite-change-detection"
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-link-primary"
          >
            View GitHub: satellite-change-detection
          </a>
        </div>
      </header>

      {/* ── Problem & Objective ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Problem &amp; Objective</div>
        <div className="detail-prose">
          <p>
            Comparing satellite images acquired at different timestamps is a foundational approach to tracking
            environmental shifts, urban expansion, and infrastructure development. However, not every pixel-level
            spectral difference represents an actual physical land-cover change.
          </p>
          <p>
            Seasonal vegetation cycles, differing solar azimuth and elevation angles, soil moisture variations,
            and atmospheric scattering produce substantial spectral discrepancies across bi-temporal observations.
            The objective of this project was to establish an experimental framework comparing classical
            image-differencing baselines against deep-learning architectures to evaluate whether learned bi-temporal
            representations better isolate meaningful structural changes from environmental nuisance factors.
          </p>
        </div>
      </section>

      {/* ── Dataset & Input Characteristics ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Dataset &amp; Input Characteristics</div>
        <div className="detail-prose">
          <p>
            The framework utilizes the Onera Satellite Change Detection (OSCD) benchmark:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Sensors:</strong> Multispectral Sentinel-2 observations across 13 spectral bands.
            </li>
            <li>
              <strong>Scene Pairs:</strong> Bi-temporal image pairs collected across 24 global metropolitan regions (14 official training scenes and 10 held-out evaluation scenes).
            </li>
            <li>
              <strong>Annotations:</strong> Manually verified binary change masks focusing specifically on urban developments and construction.
            </li>
            <li>
              <strong>Dataset Limitations:</strong> The dataset comprises Level-1C top-of-atmosphere (TOA) reflectance rather than bottom-of-atmosphere (BOA) surface reflectance, leaving lingering atmospheric effects. Additionally, annotations prioritize urban changes, meaning non-urban events (such as forestry loss) are categorized as unchanged.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Architecture & Methodology ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Architecture &amp; Methodology</div>
        <div className="detail-prose">
          <p>
            The project structures the investigation across classical differencing baselines and deep convolutional pipelines:
          </p>

          <div className="metrics-highlight-grid">
            <div className="metric-card">
              <div className="metric-val">Classical Baselines</div>
              <div className="metric-desc">Implemented RGB difference with Otsu thresholding, NDVI differencing, and multispectral Change Vector Analysis (CVA).</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">Early-Fusion U-Net</div>
              <div className="metric-desc">Implemented encoder-decoder pipeline concatenating bi-temporal Sentinel-2 bands along the channel dimension.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">Siamese Feature Modeling</div>
              <div className="metric-desc">Formulated shared-weight feature extraction to study metric distance learning between paired temporal embeddings.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Evaluation Protocol ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Evaluation Protocol</div>
        <div className="detail-prose">
          <p>
            Because changed pixels typically constitute less than 5% of total scene pixels, overall pixel accuracy
            is heavily distorted by class imbalance. The evaluation protocol therefore emphasizes:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Change-Class Intersection over Union (IoU):</strong> Jaccard index calculated specifically on the positive change class to accurately reflect mask overlap.
            </li>
            <li>
              <strong>Precision, Recall &amp; F1-Score:</strong> Balancing false positive alarms triggered by seasonal phenology against missed real construction.
            </li>
            <li>
              <strong>Separation of Partitions:</strong> Official test scenes are held out entirely from threshold tuning and model fitting to ensure realistic generalization.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Implementation ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Implementation</div>
        <div className="detail-prose">
          <p>
            Built using Python and PyTorch:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Data Augmentation:</strong> Implemented random spatial flips, rotations, and subtle illumination shifts to regularize training on the compact 24-scene dataset.
            </li>
            <li>
              <strong>Loss Formulation:</strong> Evaluated balanced Cross-Entropy combined with soft Dice loss to supervise change boundaries under extreme class imbalance.
            </li>
            <li>
              <strong>Patch Inference:</strong> Sliding-window inference with Gaussian blending to reduce boundary stitching artifacts across large satellite footprints.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Implementation Insights & Limitations ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Implementation Insights &amp; Limitations</div>
        <div className="detail-prose">
          <p>
            The project demonstrates the architectural trade-offs between heuristic thresholding and deep feature representation:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Classical Differencing Vulnerability:</strong> Unsupervised CVA and Otsu thresholding frequently trigger false alarms across agricultural zones during seasonal crop transitions.
            </li>
            <li>
              <strong>Design Motivation for Siamese Encoders:</strong> Shared-weight Siamese encoders are designed to map paired scenes into a common latent space, with the hypothesis of decoupling structural variations from seasonal illumination shifts.
            </li>
            <li>
              <strong>Dataset Constraints:</strong> The 24 scene pairs in OSCD limit architectural depth without pre-training on broader Earth-observation corpora.
            </li>
            <li>
              <strong>Future Directions:</strong> Incorporating bottom-of-atmosphere atmospheric correction (e.g., Sen2Cor) and scaling to multi-class semantic change benchmarks.
            </li>
          </ul>
          <p style={{ marginTop: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)" }}>
            Technologies: Python · PyTorch · U-Net · Siamese Networks · Sentinel-2 · OSCD · CVA · NDVI
          </p>
        </div>
      </section>
    </>
  );
}

