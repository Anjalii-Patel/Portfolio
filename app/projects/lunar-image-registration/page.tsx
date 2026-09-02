import Link from "next/link";

export const metadata = {
  title: "Cross-Modal Lunar Image Registration | Case Study",
};

export default function LunarImageRegistrationPage() {
  return (
    <>
      <div className="detail-nav-bar">
        <Link href="/projects" className="detail-back-link">
          &larr; Back to Selected Projects
        </Link>
      </div>

      <header className="detail-header">
        <div className="project-badge-row">
          <span className="project-featured-badge">Featured Research Case Study</span>
          <span className="project-domain">Computer Vision · Remote Sensing · Geometric Deep Learning</span>
        </div>
        <h1 className="detail-title">
          Cross-Modal Lunar Image Registration
        </h1>
        <p className="page-subtitle">
          A benchmark study evaluating classical, area-based, geometric, and deep-learning registration methods
          between lunar Digital Elevation Models (DEM) and optical imagery for autonomous descent navigation.
        </p>

        <div className="project-action-links" style={{ marginTop: "1.25rem", borderTop: "none", paddingTop: 0 }}>
          <span className="project-publication-pill">
            Publication: Accepted at IEEE InGARSS 2026
          </span>
          <Link href="/publications" className="project-action-link-secondary">
            View Publication Details &rarr;
          </Link>
        </div>
      </header>

      {/* ── Problem & Objective ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Problem &amp; Objective</div>
        <div className="detail-prose">
          <p>
            Autonomous lunar landing missions require precise, real-time Terrain-Relative Navigation (TRN)
            during spacecraft descent. TRN registers live sensor imagery against pre-stored onboard orbital
            reference maps to estimate spacecraft horizontal position without GPS infrastructure.
          </p>
          <p>
            However, onboard sensors and orbital maps operate across fundamentally heterogeneous modalities:
            passive optical images (e.g., Chandrayaan-2 TMC-2), Digital Elevation Models (e.g., LRO LOLA DEM),
            and active LiDAR intensity images. These sensors display severe radiometric discrepancies,
            inverted contrast, and illumination variations due to low solar incidence angles, causing classical
            intensity-based and feature-based matching algorithms to break down.
          </p>
          <p>
            The objective of this research under the ISRO RESPOND program is to formulate, benchmark, and optimize
            a cross-modal registration framework that bridges radiometric and elevation discrepancies using
            structural representations, while establishing candidate algorithms for onboard space-grade FPGA realization.
          </p>
        </div>
      </section>

      {/* ── Dataset & Preprocessing ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Dataset &amp; Preprocessing</div>
        <div className="detail-prose">
          <p>
            The benchmark utilizes planetary remote-sensing archives evaluated across two contrasting lunar terrains:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Chandrayaan-2 TMC-2:</strong> High-resolution panchromatic optical orthoimagery capturing crater rims and regolith surface reflectance.
            </li>
            <li>
              <strong>LRO LOLA DEM:</strong> Lunar Orbiter Laser Altimeter topographic elevation rasters.
            </li>
            <li>
              <strong>Benchmark Terrains:</strong> Evaluated on <em>Mare Imbrium</em> (low-relief volcanic basalt plains with sparse crater distribution) and <em>Tycho Crater</em> (high-relief impact crater with dramatic topography and steep slopes).
            </li>
          </ul>
          <p>
            <strong>Modality Bridging &amp; Preprocessing:</strong> To eliminate dependence on raw pixel intensities,
            inputs are converted into structural representation domains:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li><strong>Slope &amp; Gradient Magnitude:</strong> Derived via 2D spatial finite differences on elevation rasters.</li>
            <li><strong>Phase Congruency:</strong> Frequency-domain feature extraction using logarithmic Gabor wavelets, capturing edges and ridges invariant to illumination and contrast changes.</li>
            <li><strong>Synthetic Perturbation Benchmark:</strong> Generated 20 controlled transformation pairs per terrain region with known ground-truth rigid/affine transformations (rotations up to &plusmn;15&deg;, translations up to &plusmn;50 pixels).</li>
          </ul>
        </div>
      </section>

      {/* ── Architecture & Methodology ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Architecture &amp; Methodology</div>
        <div className="detail-prose">
          <p>
            The benchmark evaluates four distinct registration paradigms across identical terrain pairs:
          </p>

          <div className="metrics-highlight-grid">
            <div className="metric-card">
              <div className="metric-val">Classical Feature</div>
              <div className="metric-desc">SIFT &amp; ORB keypoint detectors paired with RANSAC geometric transformation estimation.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">Area-Based</div>
              <div className="metric-desc">Mutual Information (MI) and Phase Correlation operating on structural edge and slope maps.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">Geometric Point-Set</div>
              <div className="metric-desc">Contour point clouds matched via Iterative Closest Point (ICP) and Procrustes analysis.</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">Learning-Based</div>
              <div className="metric-desc">SuperPoint self-supervised keypoint detection and LoFTR dense feature transformer matching.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Implementation & Hardware Considerations ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Implementation &amp; Hardware Considerations</div>
        <div className="detail-prose">
          <p>
            The software pipeline was developed in Python utilizing PyTorch, OpenCV, Kornia, Open3D, and SciPy:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Geometric Estimation:</strong> Employed MAGSAC++ and progressive sample consensus for outlier rejection under high outlier ratios common in cross-modal correspondences.
            </li>
            <li>
              <strong>FPGA Acceleration Path:</strong> Profiling arithmetic operations (matrix inversions, FFTs, convolutions) to assess suitability for hardware synthesis in AMD/Xilinx Vivado and Vitis HLS.
            </li>
            <li>
              <strong>Fixed-Point Precision:</strong> Investigating conversion from floating-point32 to fixed-point representations (Q8.8 and Q4.12) to minimize DSP slice utilization and latency in space-grade FPGAs.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Results, Findings & Limitations ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Results, Findings &amp; Limitations</div>
        <div className="detail-prose">
          <p>
            The empirical benchmark revealed distinct performance characteristics across algorithmic families:
          </p>

          <div className="metrics-highlight-grid">
            <div className="metric-card">
              <div className="metric-val">15-17 / 20</div>
              <div className="metric-desc">SuperPoint Success Rate in Mare Imbrium (low-texture plains).</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">18 / 20</div>
              <div className="metric-desc">SuperPoint Success Rate in Tycho Crater (high-relief topography).</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">&lt; 40%</div>
              <div className="metric-desc">Classical SIFT/ORB Success Rate due to radiometric inversion.</div>
            </div>
          </div>

          <p>
            <strong>Key Findings &amp; Constraints:</strong>
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>
              <strong>Learning-based Superiority:</strong> SuperPoint and LoFTR demonstrated stronger registration performance than traditional feature-based methods by capturing structural morphology rather than raw pixel intensities.
            </li>
            <li>
              <strong>Runtime Bottlenecks:</strong> Mutual Information (MI) and ICP exhibited severe computational latency and narrow basins of convergence, making them unsuitable for real-time onboard descent without accurate prior initialization.
            </li>
            <li>
              <strong>Grazing Illumination Failure Mode:</strong> Very low sun elevation angles (&lt; 10&deg;) create deep cast shadows that masquerade as geometric features, introducing bias into keypoint localization.
            </li>
            <li>
              <strong>Publication:</strong> Peer-reviewed and accepted for presentation at <strong>IEEE InGARSS 2026</strong> (December 1-4, 2026, Hyderabad, India).
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
