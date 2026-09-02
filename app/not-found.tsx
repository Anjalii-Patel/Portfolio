import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "4rem 0" }}>
      <div className="page-header">
        <h1 className="page-title">404: Page Not Found</h1>
        <p className="page-subtitle">The requested page could not be located</p>
      </div>
      <p style={{ fontFamily: "var(--font-serif)", color: "var(--text-secondary)", marginBottom: "2rem" }}>
        The link you followed may be broken or the page may have been moved.
      </p>
      <Link href="/" className="project-action-link-primary">
        &larr; Return to Home
      </Link>
    </div>
  );
}

