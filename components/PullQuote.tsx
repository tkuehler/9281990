export function PullQuote({ children, cite }: { children: React.ReactNode; cite?: string }) {
  return (
    <blockquote className="pull">
      <p>{children}</p>
      {cite && <cite className="label soft">{cite}</cite>}
    </blockquote>
  );
}
