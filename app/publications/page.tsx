import Link from "next/link";

export const metadata = {
  title: "Publications | Anjali Patel",
};

export default function PublicationsPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Publications</h1>
        <p className="page-subtitle">Conference Papers · Presentations · Talks</p>
      </div>

      {/* ── Peer-Reviewed Publications ── */}
      <section className="work-section">
        <div className="section-label">Accepted Conference Papers</div>

        <div className="work-entry">
          <h2 className="entry-title">
            Cross-Modal Registration of Lunar DEM and Optical Imagery: A Benchmark Study of Classical and Learning-Based Methods
          </h2>
          <div className="entry-meta">
            <span className="entry-time">2026</span>
            <span className="entry-time">|</span>
            <span className="entry-context">
              IEEE InGARSS 2026 · Accepted
            </span>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Venue</div>
            <div className="entry-field-value">
              IEEE India Geoscience and Remote Sensing Symposium (InGARSS 2026)
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Dates &amp; Location</div>
            <div className="entry-field-value">
              December 1-4, 2026 · Hyderabad, India
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Status</div>
            <div className="entry-field-value">
              Accepted
            </div>
          </div>

          <div className="entry-field">
            <div className="entry-field-label">Publication Details</div>
            <div className="entry-field-value">
              Co-authors, DOI, and proceedings link will be added when available upon publication.
            </div>
          </div>

          <div className="entry-field" style={{ marginTop: "1.25rem" }}>
            <Link href="/projects/lunar-image-registration" className="project-action-link-primary">
              View Project Case Study &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Talks & Presentations ── */}
      <section className="work-section">
        <div className="section-label">Talks &amp; Presentations</div>

        <div className="work-entry">
          <h2 className="entry-title">
            Multimodal Image Registration for Lunar Terrain Navigation
          </h2>
          <div className="entry-meta">
            <span className="entry-time">2026</span>
            <span className="entry-time">|</span>
            <span className="entry-context">
              Progress Presentation · SAC-ISRO, Ahmedabad
            </span>
          </div>
          <div className="entry-field">
            <div className="entry-field-label">Context</div>
            <div className="entry-field-value">
              Presented research progress on cross-modal registration of lunar terrain
              data to senior scientists at the Space Applications Centre, ISRO, Ahmedabad.
              Covered pipeline methodology, terrain challenges, and benchmarking approach.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
