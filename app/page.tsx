import { Masthead } from "../components/Masthead";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { CoverCard } from "../components/CoverCard";
import { PullQuote } from "../components/PullQuote";
import { Rule } from "../components/Rule";
import { Reveal } from "../components/Reveal";

const occasions = [
  { name: "Birthday", note: "Another lap. Make it count." },
  { name: "Retirement", note: "Forty years. Put it in print." },
  { name: "Anniversary", note: "Who's been paying attention." },
  { name: "Congrats", note: "New job, new baby, new house." },
  { name: "Memorial", note: "A quiet, lasting tribute.", quiet: true },
];

const plans = [
  { name: "Digital", price: "$39", items: ["Full magazine as a PDF", "Up to 20 contributors", "Delivered in 7 days"], cta: "Start digital" },
  { name: "Cover Story", price: "$89", hot: true, items: ["One printed, saddle-stitched magazine", "Up to 40 contributors", "Digital copy included", "Shipped to their door"], cta: "Start a Cover Story" },
  { name: "Party Pack", price: "$149", items: ["Five printed copies", "Up to 60 contributors", "Digital copy included", "Hand one to everybody"], cta: "Start a Party Pack" },
];

const faqs = [
  ["How long does it take?", "About two weeks from the day you start. We give contributors a week to send stories, then we lay it out and print. Need it faster? Tell us the date when you start and we'll work backward."],
  ["Does shipping cost extra?", "Standard US shipping is included. Rush shipping is available at checkout."],
  ["Who sees what people write?", "You, us, and nobody else. Contributors know their words are going in the magazine, and we never sell or share contact details. Texts stop the second someone replies STOP."],
  ["What if people don't respond?", "We follow up, politely at first and then less politely. If a story never arrives, we fill the pages with the ones that did. A shorter magazine from people who mean it beats a long one padded with filler."],
  ["Can I read it before it prints?", "Yes. You get a full proof to approve or change before a single page goes to press."],
];

export default function Home() {
  return (
    <>
      <Masthead />
      <main>
        {/* 1. Hero */}
        <section className="hero">
          <div className="wrap grid">
            <div>
              <span className="kicker">The gift they&apos;ll actually keep</span>
              <h1>Make someone a <span className="accent">Big Deal.</span></h1>
              <p className="lede">
                Give us a name and a few of their people. We collect the stories, the photos, and the dirt, then print it as a real magazine with them on the cover.
              </p>
              <Button href="/start">Start a magazine</Button>
              <p className="label soft" style={{ marginTop: 16 }}>From $39 · No account needed</p>
            </div>
            <div className="collage" aria-label="Three sample covers">
              <div className="pin"><CoverCard name="Dave Gets Old" line="Fifty and still can't parallel park" tone="red" shape={0} /></div>
              <div className="pin"><CoverCard name="Maria Retires" line="Thirty-one years of running the place" tone="river" shape={1} /></div>
              <div className="pin"><CoverCard name="Big Jim" line="The man, the myth, the brisket" tone="mustard" shape={2} /></div>
            </div>
          </div>
        </section>

        <Rule />

        {/* 2. How it works */}
        <section className="section" id="how">
          <div className="wrap">
            <Reveal>
              <span className="kicker">How it works</span>
              <h2>Everybody has a story. Most of them never get <span className="accent">printed.</span></h2>
            </Reveal>
            <div className="grid cols-3" style={{ marginTop: 48 }}>
              {[
                ["1", "Tell us who.", "A name, an occasion, a few details only you know. Takes about five minutes."],
                ["2", "We hound their people.", "Friends and family get a text. They send a story, a voice note, or photos. We do the nagging."],
                ["3", "You get a real magazine.", "Cover, features, pull quotes, the works. It shows up at the door, ready to be left on the coffee table."],
              ].map(([n, t, d]) => (
                <Reveal key={n}>
                  <div className="step">
                    <span className="num" aria-hidden="true">{n}</span>
                    <h3>{t}</h3>
                    <p className="soft">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* 3. Sample spread */}
        <section className="section" id="samples">
          <div className="wrap grid cols-2" style={{ alignItems: "center" }}>
            <Reveal>
              <span className="kicker">Inside the issue</span>
              <h2>Real pages. <span className="accent">Real</span> people.</h2>
              <p className="dropcap">
                Every issue is laid out like the magazines you&apos;d actually pick up: a cover story, a profile, a timeline, a letters page, and a back-cover list of everything they should never live down.
              </p>
            </Reveal>
            <Reveal>
              <figure style={{ margin: 0 }}>
                <div className="spread">
                  <div className="spread-inner">
                    <div className="pg">
                      <span className="kicker" style={{ fontSize: 9, marginBottom: 4 }}>The Profile</span>
                      <h4>Dave doesn&apos;t do small.</h4>
                      <div className="ph" />
                      <p>&ldquo;He once drove four hours for a taco and called it a short trip,&rdquo; says his brother Mike.</p>
                    </div>
                    <div className="pg">
                      <span className="kicker" style={{ fontSize: 9, marginBottom: 4 }}>Letters</span>
                      <p><b>From Linda, college roommate:</b> He&apos;s the reason I know every word to three songs I hate.</p>
                      <p><b>From Coach Reyes:</b> Worst arm I ever coached. Best teammate.</p>
                      <p><b>From Mom:</b> Call more.</p>
                    </div>
                  </div>
                </div>
                <figcaption>Sample pages. Yours will have their name on it, and their friends&apos; words.</figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        <Rule />

        {/* 4. Pull quote */}
        <section className="section">
          <div className="wrap">
            <Reveal>
              <PullQuote cite="Sample copy · Replace with a real reader quote">
                I cried at page three and laughed at page four. He read it twice before dinner.
              </PullQuote>
            </Reveal>
          </div>
        </section>

        <Rule />

        {/* 5. Occasions */}
        <section className="section">
          <div className="wrap">
            <Reveal>
              <span className="kicker">Occasions</span>
              <h2>Pick a reason.</h2>
            </Reveal>
            <div className="tiles" style={{ marginTop: 36 }}>
              {occasions.map((o) => (
                <a key={o.name} href={`/start?occasion=${o.name.toLowerCase()}`} className={`tile ${o.quiet ? "quiet" : ""}`}>
                  <b>{o.name}</b>
                  <span className="soft" style={{ fontSize: 16 }}>{o.note}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* 6. Pricing */}
        <section className="section" id="pricing">
          <div className="wrap">
            <Reveal>
              <span className="kicker">Pricing</span>
              <h2>Pick your <span className="accent">edition.</span></h2>
              <p className="soft">Sample pricing. Final numbers land at launch.</p>
            </Reveal>
            <div className="price-grid" style={{ marginTop: 48 }}>
              {plans.map((p) => (
                <div key={p.name} className={`card price ${p.hot ? "hot" : ""}`}>
                  {p.hot && <span className="badge label">Most popular</span>}
                  <h3>{p.name}</h3>
                  <div className="amt">{p.price}</div>
                  <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
                  <Button href={`/start?plan=${encodeURIComponent(p.name)}`} variant={p.hot ? "primary" : "secondary"} block>{p.cta}</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {/* 7. FAQ */}
        <section className="section" id="faq">
          <div className="wrap" style={{ maxWidth: 860 }}>
            <Reveal>
              <span className="kicker">The fine print</span>
              <h2>Straight answers.</h2>
            </Reveal>
            <div style={{ marginTop: 32 }}>
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <div className="ans">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final CTA */}
        <section className="section band">
          <div className="wrap">
            <Reveal>
              <span className="kicker">Go on</span>
              <h2 style={{ fontSize: "clamp(44px, 9vw, 104px)" }}>Get the dirt on the guy.</h2>
              <p className="lede" style={{ margin: "0 auto 32px" }}>Five minutes from you. A magazine they&apos;ll keep for thirty years.</p>
              <Button href="/start">Start a magazine</Button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
