const tags = [
  "Full Stack Developer",
  "MERN Specialist",
  "C++ Engineer",
  "System Design",
  "Cybersecurity",
  "Cloud Computing",
  "AI Enthusiast",
]

function MarqueeRow() {
  return (
    <div className="line-border-track" aria-hidden="true">
      {tags.map((tag, index) => (
        <span key={`${tag}-${index}`} className="line-border-pill">
          {tag}
        </span>
      ))}
    </div>
  )
}

export default function LineBorder() {
  return (
    <section className="line-border-shell" aria-label="Core expertise">
      <div className="line-border-fade-left" />
      <div className="line-border-fade-right" />

      <div className="line-border-marquee">
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </section>
  )
}
