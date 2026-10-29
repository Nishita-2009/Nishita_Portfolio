import React from 'react';

/**
 * Reusable layered ambient background (pure SVG + CSS, no canvas, no React updates).
 * - far layer: morphing/breathing orbital paths (draw in once the section has been seen)
 * - mid layer: connected-network hairlines with flowing dashes
 * - near layer: drifting nodes with soft twinkle
 * Parallax is driven by CSS variables (--hero-px/--hero-py pointer, --sp scroll progress)
 * written by App.jsx / Hero.jsx; animations pause when the parent section is off-screen.
 */
const NODES = [
  [120, 140], [260, 300], [180, 520], [340, 690], [470, 180], [560, 430],
  [640, 640], [720, 120], [820, 310], [900, 520], [980, 200], [1040, 660],
  [1110, 380], [430, 760], [700, 420], [250, 60]
];

const LINKS = (() => {
  const out = [];
  for (let i = 0; i < NODES.length; i++) {
    for (let j = i + 1; j < NODES.length; j++) {
      const dx = NODES[i][0] - NODES[j][0];
      const dy = NODES[i][1] - NODES[j][1];
      if (Math.hypot(dx, dy) < 250) out.push([i, j]);
    }
  }
  return out;
})();

const CENTERS = {
  hero: [840, 400],
  dark: [900, 340],
  light: [820, 380],
  contact: [600, 400]
};

export default function AmbientField({
  tone = 'light',
  variant = 'light',
  lights = true,
  nodes = true,
  grain = true
}) {
  const [cx, cy] = CENTERS[variant] || CENTERS.light;
  const nodeCount = nodes ? NODES.length : 0;

  return (
    <div
      className={`amb amb-tone-${tone} amb-variant-${variant}`}
      aria-hidden="true"
    >
      {lights && (
        <>
          <div className="amb-glow amb-glow-a"></div>
          <div className="amb-glow amb-glow-b"></div>
        </>
      )}

      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <g className="amb-layer amb-layer-far">
          <ellipse className="amb-orbit amb-orbit-1" pathLength="1" cx={cx} cy={cy} rx="420" ry="300" />
          <ellipse className="amb-orbit amb-orbit-2" pathLength="1" cx={cx} cy={cy} rx="320" ry="360" />
          <ellipse className="amb-orbit amb-orbit-3" cx={cx} cy={cy} rx="520" ry="220" />
        </g>

        {nodeCount > 0 && (
          <g className="amb-layer amb-layer-mid">
            {LINKS.map(([a, b]) => (
              <line
                key={`${a}-${b}`}
                className="amb-link"
                x1={NODES[a][0]}
                y1={NODES[a][1]}
                x2={NODES[b][0]}
                y2={NODES[b][1]}
              />
            ))}
          </g>
        )}

        {nodeCount > 0 && (
          <g className="amb-layer amb-layer-near">
            {NODES.map(([x, y], i) => (
              <circle
                key={i}
                className="amb-node"
                cx={x}
                cy={y}
                r={i % 4 === 0 ? 3.4 : 2.2}
                style={{
                  '--dur': `${9 + (i % 5) * 2.3}s`,
                  '--tw': `${4 + (i % 4) * 1.4}s`,
                  '--dx': `${(i % 2 ? 1 : -1) * (6 + (i % 3) * 3)}px`,
                  '--dy': `${(i % 3 ? -1 : 1) * (5 + (i % 4) * 2)}px`
                }}
              />
            ))}
          </g>
        )}
      </svg>

      {grain && <div className="amb-grain"></div>}
    </div>
  );
}

