import { Masthead } from "../../../components/Masthead";
import { Footer } from "../../../components/Footer";
import { Rule } from "../../../components/Rule";
import { Button } from "../../../components/Button";

export const metadata = { title: "Your magazine · Big Deal" };

const stages = [
  ["Order placed", true],
  ["Invites sent to contributors", false],
  ["Stories coming in", false],
  ["Proof ready for your approval", false],
  ["At the printer", false],
  ["On its way", false],
] as const;

export default async function Dashboard({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  return (
    <>
      <Masthead />
      <main className="section" style={{ paddingTop: 48 }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <span className="kicker">Your magazine · {code.toUpperCase()}</span>
          <h1 className="h2" style={{ fontSize: "clamp(40px, 8vw, 72px)" }}>Stop the presses. <span className="accent">Almost.</span></h1>
          <p className="lede">Here&apos;s where things stand. This page updates as stories come in.</p>
          <Rule />
          <div style={{ marginTop: 24 }}>
            {stages.map(([s, done]) => (
              <div className="status-row" key={s}>
                <span>{s}</span>
                <span className={`pill ${done ? "in" : ""}`}>{done ? "Done" : "Waiting"}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}><Button href="/" variant="secondary">Back to the front page</Button></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
