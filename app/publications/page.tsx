export const metadata = {
  title: "Publications — Anjali Patel",
};

export default function PublicationsPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Publications</h1>
        <p className="page-subtitle">Research Output</p>
      </div>

      <p className="publications-empty">
        No publications at this stage.
      </p>

      <p className="publications-note">
        Current research work at PDEU is ongoing and will be
        reflected here as it develops.
      </p>
    </>
  );
}