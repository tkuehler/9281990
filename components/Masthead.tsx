import Link from "next/link";
import { Button } from "./Button";
import { Dateline } from "./Dateline";
import { Rule } from "./Rule";

export function Wordmark() {
  return (
    <Link href="/" className="wordmark" aria-label="Big Deal home">
      Big Deal<i>.</i>
    </Link>
  );
}

export function Masthead() {
  return (
    <header className="topbar">
      <Dateline />
      <div className="wrap">
        <Wordmark />
        <nav aria-label="Primary">
          <a href="/#how">How it works</a>
          <a href="/#samples">Samples</a>
          <a href="/#pricing">Pricing</a>
          <Button href="/start">Start a magazine</Button>
        </nav>
        <Button href="/start" className="mobile-cta">
          Start
        </Button>
      </div>
      <Rule />
    </header>
  );
}
