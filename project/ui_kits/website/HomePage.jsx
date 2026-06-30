/* ACHI website — Home page. Loaded as Babel script; exposes HomePage on window. */
const { Button, Tag, SectionHeading, Stat, ArticleCard } = window.ACHIDesignSystem_cd4297;

const PILLARS = [
  ['Healthy Systems', 'Quality care, equitable practices, and affordable methods.', 'var(--achi-navy)'],
  ['Healthy Communities', 'Culturally informed solutions and accessible opportunities.', 'var(--achi-teal)'],
  ['Healthy Choices', 'Ideas and strategies affecting lifestyles, decisions, and outcomes.', 'var(--achi-maroon)'],
];

const PUBS = [
  ['Maternal & Infant Health', 'teal', 'June 24, 2026 · Infographic', 'C-Section Rates in Arkansas, 2021–2023', 'Mothers in some parts of the state had the procedure at much higher rates than others.'],
  ['Maternal & Infant Health', 'teal', 'June 9, 2026 · Infographic', 'Travel Time to Delivery Facilities for Arkansas Mothers', 'Closures of labor and delivery services have led to longer travel times for many mothers.'],
  ['Arkansas Medicaid', 'navy', 'April 30, 2026 · Dashboard', 'Medicare Advantage Enrollment in Arkansas', 'How enrollment in Medicare Advantage and traditional Medicare has changed over time.'],
];

function HomePage({ onNav }) {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__inner">
          <p className="hero__eyebrow">Arkansas Center for Health Improvement</p>
          <h1 className="hero__title">Status quo is not the future state of health.</h1>
          <p className="hero__lead">
            A nonpartisan, independent health policy center serving as a catalyst for improving
            the health of all Arkansans through evidence-based research, advocacy, and collaboration.
          </p>
          <div className="hero__cta">
            <Button variant="accent" size="lg" onClick={() => onNav('Publications')}>Explore publications</Button>
            <Button variant="secondary" size="lg" className="hero__ghost">About ACHI</Button>
          </div>
        </div>
      </section>

      {/* Stat band */}
      <section className="band">
        <div className="band__inner">
          <Stat value="25+" label="years shaping Arkansas health policy" color="inverse" />
          <Stat value="1 in 3" label="Arkansans with Medicaid coverage" color="inverse" />
          <Stat value="2003" label="hosting the Arkansas Health Data Initiative" color="inverse" />
          <Stat value="44%" label="of rural L&D units at risk of closing" color="inverse" />
        </div>
      </section>

      {/* Featured publication */}
      <section className="wrap section">
        <SectionHeading eyebrow="Featured publication" title="Travel Time to Delivery Facilities for Arkansas Mothers"
          description="Longer travel times to delivery facilities have been associated with higher risks of adverse maternal and neonatal outcomes. Our updated infographic examines mothers’ travel times across the state." />
        <div className="feature">
          <div className="feature__media" />
          <div className="feature__body">
            <Tag color="teal">Maternal &amp; Infant Health</Tag>
            <p>This analysis maps drive times from each ZIP code to the nearest delivery facility,
              revealing widening gaps as rural hospitals close labor and delivery units.</p>
            <Button variant="primary">Read the infographic</Button>
          </div>
        </div>
      </section>

      {/* Latest publications */}
      <section className="wrap section section--tint">
        <div className="section__head">
          <SectionHeading eyebrow="Publications" title="Latest research" />
          <Button variant="link" onClick={() => onNav('Publications')}>See all publications →</Button>
        </div>
        <div className="grid3">
          {PUBS.map((p) => (
            <ArticleCard key={p[3]} category={p[0]} categoryColor={p[1]} meta={p[2]} title={p[3]} excerpt={p[4]} href="#" cta="Read more" />
          ))}
        </div>
      </section>

      {/* Three pillars */}
      <section className="wrap section">
        <SectionHeading eyebrow="Our priorities" title="A healthier Arkansas, three ways" align="center" />
        <div className="pillars">
          {PILLARS.map(([h, d, c]) => (
            <div key={h} className="pillar" style={{ '--c': c }}>
              <span className="pillar__mark" />
              <h3>{h}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="cta">
        <div className="cta__inner">
          <div>
            <h2>Subscribe to our newsletter</h2>
            <p>Regular updates on Arkansas health policy, research, and data — straight to your inbox.</p>
          </div>
          <form className="cta__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@example.com" aria-label="Email" />
            <Button variant="accent" size="lg">Sign up</Button>
          </form>
        </div>
      </section>
    </main>
  );
}

window.HomePage = HomePage;
