import Link from "next/link";

export const metadata = {
  title: "Remote Sensing Toolkit | Case Study",
};

export default function RemoteSensingToolkitPage() {
  return (
    <>
      <div className="detail-nav-bar">
        <Link href="/projects" className="detail-back-link">
          &larr; Back to Selected Projects
        </Link>
      </div>

      <header className="detail-header">
        <div className="project-badge-row">
          <span className="project-domain">Geospatial Processing · Raster Analysis · Multimodal Remote Sensing</span>
        </div>
        <h1 className="detail-title">
          Remote Sensing Processing Toolkit
        </h1>
        <p className="page-subtitle">
          A modular Python toolkit for preprocessing, analyzing, and preparing optical, SAR, LiDAR-intensity,
          and DEM raster data for remote-sensing and machine-learning workflows.
        </p>

        <div className="project-action-links" style={{ marginTop: "1.25rem", borderTop: "none", paddingTop: 0 }}>
          <a
            href="https://github.com/Anjalii-Patel/remotesensing-toolkit"
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-link-primary"
          >
            View GitHub: remotesensing-toolkit
          </a>
        </div>
      </header>

      {/* ── Problem & Objective ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Problem &amp; Objective</div>
        <div className="detail-prose">
          <p>
            Remote-sensing workflows frequently require repetitive raster operations, including coordinate
            reprojection, cloud and NoData masking, radiometric normalization, spectral-index calculation,
            terrain analysis, and patch extraction. Implementing these operations independently across separate
            projects leads to duplicated code and inconsistent preprocessing standards.
          </p>
          <p>
            The objective of this project was to develop a reusable processing toolkit that consolidates common
            geospatial raster operations into a consistent Python API and command-line interface. A central focus
            is placed on spatially aware dataset splitting to reduce data leakage during machine-learning model
            evaluation.
          </p>
        </div>
      </section>

      {/* ── Architecture & Methodology ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Architecture &amp; Methodology</div>
        <div className="detail-prose">
          <p>
            The toolkit is organized into modular processing components:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li><strong>Raster I/O:</strong> GeoTIFF reading and writing, NoData handling, and preservation of spatial metadata and affine transforms.</li>
            <li><strong>Preprocessing:</strong> Cloud and NoData masking, QA bitmask operations, multi-band stacking, and CRS reprojection.</li>
            <li><strong>Normalization:</strong> Min-max scaling, z-score normalization, and percentile-based contrast clipping.</li>
            <li><strong>Spectral Analysis:</strong> Computation of NDVI, NDWI, NDBI, SAVI, EVI, NBR, NDSI, and BSI from specified band indices.</li>
            <li><strong>Terrain Analysis:</strong> Topographic slope, aspect, hillshade generation, and DEM void filling.</li>
            <li><strong>Patch Extraction:</strong> Grid-based tiling with configurable patch dimensions and spatial stride.</li>
            <li><strong>Visualization:</strong> Raster display, spectral-index maps, histograms, patch grids, and spatial split maps.</li>
          </ul>
        </div>
      </section>

      {/* ── Spatially Aware Dataset Preparation ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Spatially Aware Dataset Preparation</div>
        <div className="detail-prose">
          <p>
            A key technical feature of the toolkit is block-based spatial splitting.
          </p>
          <p>
            Randomly assigning adjacent raster patches to training and testing sets introduces spatial autocorrelation
            leakage because geographically contiguous samples share near-identical features. The toolkit reduces
            the risk of spatial leakage by assigning complete spatial blocks to individual dataset partitions instead.
          </p>
          <p>
            The implementation:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>Extracts raster patches with configurable size and overlap.</li>
            <li>Maps patch centroid coordinates to coarse spatial partition blocks.</li>
            <li>Assigns entire blocks to training, validation, and testing partitions.</li>
            <li>Supports configurable split ratios and reproducible random seeds.</li>
          </ul>
        </div>
      </section>

      {/* ── Implementation ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Implementation</div>
        <div className="detail-prose">
          <p>
            Developed in Python with a modular package architecture and command-line tooling:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li><strong>Tiling:</strong> Tiling GeoTIFF imagery into standard 256 &times; 256 patches with configurable overlap.</li>
            <li><strong>Reprojection:</strong> Reprojecting rasters to target Coordinate Reference Systems (CRS) via Rasterio and GDAL bindings.</li>
            <li><strong>Terrain Products:</strong> Deriving numerical slope and hillshade surfaces from Digital Elevation Models.</li>
            <li><strong>Testing Infrastructure:</strong> Includes unit test suites with Pytest, synthetic scene generators, example notebooks, and a reproducibility benchmark script.</li>
          </ul>
        </div>
      </section>

      {/* ── Results & Benchmark ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Results &amp; Benchmark</div>
        <div className="detail-prose">
          <p>
            The repository includes a benchmark implementation executed on a synthetic 2048 &times; 2048 raster
            scene. The benchmark runs each operation five times and records mean runtimes:
          </p>

          <div className="metrics-highlight-grid">
            <div className="metric-card">
              <div className="metric-val">493 ms</div>
              <div className="metric-desc">GeoTIFF loading (2048 &times; 2048 synthetic raster)</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">27 ms</div>
              <div className="metric-desc">NDVI computation</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">73 ms</div>
              <div className="metric-desc">256 px patch extraction</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">0.2 ms</div>
              <div className="metric-desc">Block-based spatial splitting</div>
            </div>
          </div>

          <p style={{ fontSize: "0.825rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            * These timings represent reference benchmark runs on synthetic raster data under the experimental setup.
            Runtimes naturally depend on host CPU, memory bandwidth, and raster dimensions, and are reported to demonstrate
            relative component costs rather than comparative speedups over underlying libraries like GDAL or Rasterio.
          </p>
        </div>
      </section>

      {/* ── Outcome & Applications ── */}
      <section className="detail-section-block">
        <div className="detail-block-title">Outcome &amp; Applications</div>
        <div className="detail-prose">
          <p>
            The project provides a clean, tested engineering foundation for raster preprocessing and dataset preparation
            across remote-sensing machine-learning pipelines:
          </p>
          <ul className="project-bullet-list" style={{ margin: "1rem 0" }}>
            <li>Multispectral optical and SAR imagery preprocessing.</li>
            <li>Digital Elevation Model (DEM) and terrain-feature extraction.</li>
            <li>LiDAR-intensity raster conditioning.</li>
            <li>Spatially separated training and evaluation of geospatial deep-learning models.</li>
          </ul>
          <p style={{ marginTop: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)" }}>
            Technologies: Python · NumPy · Rasterio · GeoTIFF · Pytest · CLI Tooling
          </p>
        </div>
      </section>
    </>
  );
}

