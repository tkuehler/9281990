export function Dateline({ children }: { children?: React.ReactNode }) {
  return (
    <div className="dateline label">
      {children ?? "Issue No. 1 · Austin & the Hill Country · Since 2026"}
    </div>
  );
}
