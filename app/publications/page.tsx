export const metadata = {
  title: "Outputs — Anjali Patel",
};

export default function PublicationsPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Outputs</h1>
        <p className="page-subtitle">Talks · Reports · Publications</p>
      </div>

      <section className="work-section">
        <div className="section-label">Talks & Presentations</div>

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

      <section className="work-section">
        <div className="section-label">In Progress</div>
        <p className="publications-empty">
          Research manuscript in preparation. Will be updated as work develops.
        </p>
      </section>
    </>
  );
}
