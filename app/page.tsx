const data = {
  "id": 3,
  "kind": "Corporate",
  "theme": "vantage",
  "brand": "VANTAGE",
  "kicker": "Infrastructure for the next century",
  "title": "We build places that move economies forward.",
  "intro": "An independent engineering group delivering resilient energy, mobility, and civic infrastructure across complex environments.",
  "primary": "Explore our work",
  "secondary": "Start a project",
  "metrics": [
    [
      "32",
      "active regions"
    ],
    [
      "18GW",
      "clean energy delivered"
    ],
    [
      "96%",
      "on-time completion"
    ]
  ],
  "sectionTitle": "Built for consequential work.",
  "sectionCopy": "From first feasibility study to long-term operations, one senior team stays accountable for every decision.",
  "cards": [
    [
      "01",
      "Energy systems",
      "Grid-scale renewable systems designed for reliability, resilience, and measurable impact."
    ],
    [
      "02",
      "Future mobility",
      "Transit networks and urban corridors that connect communities without compromising the landscape."
    ],
    [
      "03",
      "Civic infrastructure",
      "Water, public realm, and essential systems built to serve generations—not election cycles."
    ]
  ],
  "showcaseTitle": "Selected work",
  "showcases": [
    [
      "Northline Grid",
      "Renewable energy · Denmark",
      "A modular 4.2GW coastal energy network.",
      "42"
    ],
    [
      "Alba Transit",
      "Mobility · Portugal",
      "A zero-emission regional mobility system.",
      "18"
    ],
    [
      "Aster Water",
      "Civic systems · Jordan",
      "Climate-resilient water access for 1.8m people.",
      "64"
    ]
  ],
  "quote": "Vantage gave us the clarity of a small senior team with the delivery power of a global practice.",
  "quoteBy": "Maya Chen — Director, Northline",
  "cta": "Let’s build what lasts.",
  "footerLine": "Engineering progress with consequence."
} as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

export default function Home() {
  return (
    <main data-theme={data.theme}>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top"><Mark />{data.brand}</a>
        <div className="navLinks">
          <a href="#expertise">Expertise</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </div>
        <a className="navCta" href="#contact">Let&apos;s talk <Arrow /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">{data.kicker}</p>
          <h1>{data.title}</h1>
          <p className="lede">{data.intro}</p>
          <div className="actions">
            <a className="button primary" href="#work">{data.primary} <Arrow /></a>
            <a className="button secondary" href="#expertise">{data.secondary}</a>
          </div>
        </div>
        <div className="heroVisual" aria-label="Featured project preview">
          <div className="orb orbOne" />
          <div className="orb orbTwo" />
          <div className="visualTop"><span>Live overview</span><span className="status">● Updated now</span></div>
          <div className="visualCenter">
            <span className="visualLabel">Current signal</span>
            <strong>{data.metrics[0][0]}</strong>
            <span>{data.metrics[0][1]}</span>
          </div>
          <div className="bars" aria-hidden="true">
            {[42, 66, 54, 82, 72, 96, 84].map((height, index) => <i key={index} style={{ height: height + "%" }} />)}
          </div>
          <div className="visualFoot"><span>{data.kind}</span><span>© 2026</span></div>
        </div>
      </section>

      <section className="metrics shell" aria-label="Key metrics">
        {data.metrics.map(([value, label]) => (
          <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>

      <section className="section shell" id="expertise">
        <header className="sectionHead">
          <p className="sectionIndex">01 / Approach</p>
          <div><h2>{data.sectionTitle}</h2><p>{data.sectionCopy}</p></div>
        </header>
        <div className="featureGrid">
          {data.cards.map(([code, title, copy], index) => (
            <article className="feature" key={title}>
              <span className="featureCode">{code}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="featureArrow">0{index + 1} <Arrow /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="shell">
          <header className="workHead"><p className="sectionIndex">02 / Selected</p><h2>{data.showcaseTitle}</h2></header>
          <div className="showcaseGrid">
            {data.showcases.map(([title, meta, copy, badge], index) => (
              <article className="showcase" key={title}>
                <div className={'art art' + (index + 1)}>
                  <span className="artNumber">0{index + 1}</span>
                  <div className="artShape" />
                  <span className="artBadge">{badge}</span>
                </div>
                <p className="showMeta">{meta}</p>
                <h3>{title}</h3>
                <p>{copy}</p>
                <a href="#contact" aria-label={'Learn more about ' + title}>View details <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote shell" id="about">
        <p className="sectionIndex">03 / Perspective</p>
        <blockquote>“{data.quote}”</blockquote>
        <p className="quoteBy">{data.quoteBy}</p>
      </section>

      <section className="contact" id="contact">
        <div className="shell contactInner">
          <p className="eyebrow">Start a conversation</p>
          <h2>{data.cta}</h2>
          <a className="roundLink" href="mailto:hello@example.com" aria-label="Send an email"><Arrow /></a>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top"><Mark />{data.brand}</a>
        <p>{data.footerLine}</p>
        <div><a href="#top">Instagram</a><a href="#top">LinkedIn</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
