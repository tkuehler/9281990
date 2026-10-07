type Props = { name: string; line: string; tone?: "red" | "river" | "mustard"; shape?: 0 | 1 | 2 };

const fills = { red: "#C8352B", river: "#1F4E5A", mustard: "#E3A82B" };

/** Placeholder cover. Swap the SVG portrait for real photography when it exists. */
export function CoverCard({ name, line, tone = "red", shape = 0 }: Props) {
  const c = fills[tone];
  return (
    <div className="cover grain" role="img" aria-label={`Sample cover: ${name}. ${line}`}>
      <div className="mast">Big Deal<i>.</i></div>
      <div className="portrait" aria-hidden="true">
        <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMax slice">
          <rect width="200" height="260" fill={c} opacity="0.92" />
          {shape === 1 && <circle cx="100" cy="80" r="14" fill="#F6F0E4" opacity="0.35" />}
          <ellipse cx="100" cy={shape === 2 ? 120 : 110} rx="38" ry="46" fill="#14110F" opacity="0.85" />
          <path d="M20 260 C 30 180, 70 165, 100 165 C 130 165, 170 180, 180 260 Z" fill="#14110F" opacity="0.85" />
          {shape === 2 && <path d="M60 85 Q100 40 140 85 L140 92 L60 92 Z" fill="#14110F" />}
        </svg>
      </div>
      <div className="lines">
        <b>{name}</b>
        <span>{line}</span>
      </div>
    </div>
  );
}
