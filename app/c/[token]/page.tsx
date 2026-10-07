import { Wordmark } from "../../../components/Masthead";
import { Rule } from "../../../components/Rule";
import { Reveal } from "../../../components/Reveal";
import { Contribute } from "./Contribute";

export const metadata = { title: "Add your story · Big Deal" };

// TODO: look the token up in the database. Placeholder data until the backend exists.
function lookup(token: string) {
  return { token, name: "Dave", buyer: "Linda", quiet: false };
}

export default async function InvitePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const t = lookup(token);
  return (
    <div className={t.quiet ? "quiet-mode" : ""}>
      <div style={{ padding: "16px var(--gutter)", maxWidth: 1180, margin: "0 auto" }}><Wordmark /></div>
      <Rule />
      <main className="wrap" style={{ maxWidth: 760, padding: "40px var(--gutter) 96px" }}>
        <Reveal>
          <span className="kicker">Psst. It&apos;s a secret.</span>
          <div className="invite-name">{t.name}</div>
          <p className="label" style={{ fontSize: 18 }}>{t.buyer} is secretly making {t.name} a magazine.</p>
          <p className="lede">Send a story, a voice note, or a few photos. It takes two minutes, and it&apos;ll end up in print.</p>
        </Reveal>
        <Contribute name={t.name} />
      </main>
    </div>
  );
}
