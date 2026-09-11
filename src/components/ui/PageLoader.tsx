export function PageLoader() {
  return (
    <div
      className="page-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <span className="page-loader__spinner" />
    </div>
  );
}
