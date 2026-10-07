import { Rule } from "./Rule";
import { Wordmark } from "./Masthead";

export function Footer() {
  return (
    <footer>
      <Rule />
      <div className="wrap" style={{ paddingTop: 28 }}>
        <Wordmark />
        <div className="links">
          <a href="/#how">How it works</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#faq">FAQ</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/sms">Text STOP to opt out</a>
        </div>
        <p className="label soft">© 2026 Big Deal · Made in Austin, Texas</p>
      </div>
    </footer>
  );
}
