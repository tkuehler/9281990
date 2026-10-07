"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Wordmark } from "../../components/Masthead";
import { Button } from "../../components/Button";
import { FunnelProgress, FunnelStep } from "../../components/FunnelStep";
import { TileSelect } from "../../components/TileSelect";

const TOTAL = 9;

type Data = {
  occasion: string; name: string; relation: string;
  buyer: string; email: string; phone: string;
  tone: string; look: string; contributors: string; details: string; plan: string;
};

const occasions = ["Birthday", "Retirement", "Anniversary", "Congrats", "Memorial"];
const plans = ["Digital", "Cover Story", "Party Pack"];

const tones = [
  { value: "roast", title: "Roast", sample: "“Dave’s about to find out what we really think.”" },
  { value: "heartfelt", title: "Heartfelt", sample: "“The quiet things he did that we never thanked him for.”" },
  { value: "funny", title: "Funny, with heart", sample: "“Fifty years, one very questionable mustache.”" },
  { value: "tribute", title: "Tribute", sample: "“A life well lived, told by the people in it.”" },
];
const looks = [
  { value: "newsstand", title: "Newsstand", sample: "Big serif headlines, bold red. Looks like the cover of a great regional magazine." },
  { value: "field", title: "Field Guide", sample: "Earthy and outdoorsy, with river-green accents." },
  { value: "quiet", title: "Kinfolk", sample: "Soft, airy, lots of white space and room for photos." },
  { value: "business", title: "Business Weekly", sample: "Sharp and punchy, built for the office crowd." },
];

export function Funnel() {
  const router = useRouter();
  const params = useSearchParams();
  const qOccasion = params.get("occasion");
  const qPlan = params.get("plan");
  const [page, setPage] = useState(1);
  const [back, setBack] = useState(false);
  const [d, setD] = useState<Data>({
    occasion: occasions.find((o) => o.toLowerCase() === qOccasion) ?? "",
    name: "", relation: "", buyer: "", email: "", phone: "",
    tone: "", look: "newsstand", contributors: "", details: "",
    plan: plans.find((p) => p === qPlan) ?? "Cover Story",
  });
  const set = (k: keyof Data) => (v: string) => setD((s) => ({ ...s, [k]: v }));
  const memorial = d.occasion === "Memorial";
  const first = d.name.trim().split(" ")[0] || "them";

  const valid: Record<number, boolean> = {
    1: !!d.occasion,
    2: d.name.trim().length > 1,
    3: d.buyer.trim().length > 1 && /\S+@\S+\.\S+/.test(d.email),
    4: !!d.tone,
    5: !!d.look,
    6: d.contributors.trim().length > 3,
    7: true,
    8: !!d.plan,
    9: true,
  };

  const go = (n: number) => { setBack(n < page); setPage(n); window.scrollTo({ top: 0 }); };
  const submit = () => {
    try { sessionStorage.setItem("bigdeal:draft", JSON.stringify(d)); } catch {}
    const code = Math.random().toString(36).slice(2, 8).toUpperCase();
    router.push(`/p/${code}`);
  };

  const input = (id: keyof Data, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}, hint?: string) => (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {hint && <p className="hint">{hint}</p>}
      <input id={id} type="text" value={d[id]} onChange={(e) => set(id)(e.target.value)} {...props} />
    </div>
  );

  return (
    <div className={memorial ? "quiet-mode" : ""}>
      <div style={{ padding: "16px var(--gutter)", maxWidth: 1180, margin: "0 auto" }}><Wordmark /></div>
      <FunnelProgress page={page} total={TOTAL} />
      <main className="funnel wrap">
        {page === 1 && (
          <FunnelStep key={1} back={back} kicker="The occasion" title={<>What are we <span className="accent">celebrating?</span></>}>
            <TileSelect label="Occasion" value={d.occasion} onChange={set("occasion")} columns={2}
              options={occasions.map((o) => ({ value: o, title: o }))} />
          </FunnelStep>
        )}
        {page === 2 && (
          <FunnelStep key={2} back={back} kicker="The subject" title={memorial ? "Who are we remembering?" : <>Who&apos;s the <span className="accent">Big Deal?</span></>}>
            {input("name", "Their full name", { autoComplete: "off", placeholder: "Dave Henderson" })}
            {input("relation", "How do you know them?", { placeholder: "My husband, my boss, my dad" })}
          </FunnelStep>
        )}
        {page === 3 && (
          <FunnelStep key={3} back={back} kicker="About you" title="Now, who are you?" hint="We'll send the proof and updates here. Nobody else sees it.">
            {input("buyer", "Your name", { autoComplete: "name" })}
            {input("email", "Email", { type: "email", autoComplete: "email", inputMode: "email" })}
            {input("phone", "Mobile (optional)", { type: "tel", autoComplete: "tel", inputMode: "tel" }, "For delivery updates. Reply STOP anytime.")}
          </FunnelStep>
        )}
        {page === 4 && (
          <FunnelStep key={4} back={back} kicker="The tone" title="How should it sound?">
            <TileSelect label="Tone" value={d.tone} onChange={set("tone")}
              options={memorial ? tones.filter((t) => ["heartfelt", "tribute"].includes(t.value)) : tones} />
          </FunnelStep>
        )}
        {page === 5 && (
          <FunnelStep key={5} back={back} kicker="The look" title="Pick a cover style.">
            <TileSelect label="Look" value={d.look} onChange={set("look")} columns={2} options={looks} />
          </FunnelStep>
        )}
        {page === 6 && (
          <FunnelStep key={6} back={back} kicker="The people" title={`Who should we ask about ${first}?`}
            hint="One per line: name and mobile number or email. We send each person a private link.">
            <div className="field">
              <label htmlFor="contributors" className="flabel">Contributors</label>
              <textarea id="contributors" value={d.contributors} onChange={(e) => set("contributors")(e.target.value)}
                placeholder={"Mike Henderson, 512-555-0101\nLinda Park, linda@example.com"} />
            </div>
          </FunnelStep>
        )}
        {page === 7 && (
          <FunnelStep key={7} back={back} kicker="The inside scoop" title={`Anything we should know about ${first}?`}
            hint="Inside jokes, nicknames, the story everyone tells. Skip it if you like.">
            <div className="field">
              <label htmlFor="details" className="flabel">Details</label>
              <textarea id="details" value={d.details} onChange={(e) => set("details")(e.target.value)} />
            </div>
          </FunnelStep>
        )}
        {page === 8 && (
          <FunnelStep key={8} back={back} kicker="The edition" title="Pick your edition.">
            <TileSelect label="Edition" value={d.plan} onChange={set("plan")}
              options={[
                { value: "Digital", title: "Digital · $39", sample: "PDF magazine, delivered in 7 days." },
                { value: "Cover Story", title: "Cover Story · $89 (most popular)", sample: "One printed copy shipped to their door, plus the PDF." },
                { value: "Party Pack", title: "Party Pack · $149", sample: "Five printed copies, plus the PDF." },
              ]} />
          </FunnelStep>
        )}
        {page === 9 && (
          <FunnelStep key={9} back={back} kicker="Last page" title={memorial ? "Ready when you are." : <>Here&apos;s the <span className="accent">plan.</span></>}>
            <div className="card">
              {[["For", d.name], ["Occasion", d.occasion], ["Tone", d.tone], ["Look", d.look], ["Edition", d.plan]].map(([k, v]) => (
                <div className="status-row" key={k}><span className="label">{k}</span><span>{v}</span></div>
              ))}
            </div>
            <p className="soft" style={{ marginTop: 20, fontSize: 16 }}>Payment comes next. You won&apos;t be charged until you approve the contributor list.</p>
          </FunnelStep>
        )}

        <div className="nav" style={{ maxWidth: 720, margin: "36px auto 0" }}>
          {page > 1 && <Button variant="secondary" type="button" onClick={() => go(page - 1)}>Back</Button>}
          {page < TOTAL
            ? <Button type="button" disabled={!valid[page]} onClick={() => go(page + 1)}>Next page</Button>
            : <Button type="button" onClick={submit}>{memorial ? "Continue" : "Start the presses"}</Button>}
        </div>
      </main>
    </div>
  );
}
