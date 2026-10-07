"use client";
import { useRef, useState } from "react";
import { Button } from "../../../components/Button";

export function Contribute({ name }: { name: string }) {
  const photos = useRef<HTMLInputElement>(null);
  const voice = useRef<HTMLInputElement>(null);
  const [story, setStory] = useState("");
  const [files, setFiles] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const onFiles = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFiles((f) => [...f, ...Array.from(e.target.files ?? []).map((x) => x.name)]);

  if (sent)
    return (
      <div className="card" style={{ marginTop: 32 }}>
        <h2 className="h3">Got it. Thank you.</h2>
        <p>Keep it quiet. {name} has no idea.</p>
      </div>
    );

  return (
    <div style={{ marginTop: 32 }}>
      <a href="#story" className="invite-option" style={{ textDecoration: "none" }}>
        <b>Text a story</b><span className="soft">Type it out below.</span>
      </a>
      <button type="button" className="invite-option" onClick={() => voice.current?.click()}>
        <b>Send a voice note</b><span className="soft">Just talk. We&apos;ll handle the rest.</span>
      </button>
      <button type="button" className="invite-option" onClick={() => photos.current?.click()}>
        <b>Upload photos</b><span className="soft">The funnier the better.</span>
      </button>
      <input ref={voice} type="file" accept="audio/*" hidden onChange={onFiles} />
      <input ref={photos} type="file" accept="image/*" multiple hidden onChange={onFiles} />
      {files.length > 0 && <p className="soft" style={{ fontSize: 16 }}>Attached: {files.join(", ")}</p>}

      <div className="field" id="story" style={{ marginTop: 32 }}>
        <label htmlFor="story-text">Your story about {name}</label>
        <p className="hint">A favorite memory, a nickname, the thing only you know.</p>
        <textarea id="story-text" value={story} onChange={(e) => setStory(e.target.value)} />
      </div>
      <Button type="button" block disabled={!story.trim() && files.length === 0} onClick={() => setSent(true)}>Send it in</Button>
    </div>
  );
}
