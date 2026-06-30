/* ACHI website — Publications listing with topic filter. Exposes PublicationsPage on window. */
const { Tag, Button, SectionHeading, ArticleCard } = window.ACHIDesignSystem_cd4297;

const ALL = [
  ['Maternal & Infant Health', 'teal', 'June 24, 2026 · Infographic', 'C-Section Rates in Arkansas, 2021–2023', 'Mothers in some parts of the state had the procedure at much higher rates than others.'],
  ['Maternal & Infant Health', 'teal', 'June 9, 2026 · Infographic', 'Travel Time to Delivery Facilities', 'Closures of labor & delivery services have led to longer travel times for many mothers.'],
  ['Arkansas Medicaid', 'navy', 'April 30, 2026 · Dashboard', 'Medicare Advantage Enrollment in Arkansas', 'How enrollment in Medicare Advantage and traditional Medicare has changed over time.'],
  ['Rural Health Insights', 'maroon', 'June 3, 2026 · Report', '44% of Rural L&D Units at Risk of Closing', 'Rural communities continue to experience decreasing access to maternity care.'],
  ['Oral Health', 'navy', 'May 19, 2026 · Brief', 'Dental Benefits Expanding for ARHOME Enrollees', 'A new CMS rule could make dental coverage available to marketplace enrollees.'],
  ['Arkansas Healthcare Workforce', 'teal', 'May 2, 2026 · Fact Sheet', 'Primary Care Physicians per 10,000 Residents', 'Many Arkansas counties had very few full-time primary care physicians in 2020.'],
];
const TOPICS = ['All topics', 'Maternal & Infant Health', 'Arkansas Medicaid', 'Rural Health Insights', 'Oral Health', 'Arkansas Healthcare Workforce'];

function PublicationsPage() {
  const [topic, setTopic] = React.useState('All topics');
  const list = topic === 'All topics' ? ALL : ALL.filter((p) => p[0] === topic);
  return (
    <main>
      <section className="page-hd">
        <div className="wrap">
          <SectionHeading eyebrow="Library" title="Publications"
            description="Infographics, dashboards, reports, and briefs converting Arkansas health data into knowledge and insight." />
        </div>
      </section>
      <section className="wrap section">
        <div className="filters">
          {TOPICS.map((t) => (
            <button key={t} className={'filter' + (t === topic ? ' is-on' : '')} onClick={() => setTopic(t)}>{t}</button>
          ))}
        </div>
        <div className="grid3">
          {list.map((p) => (
            <ArticleCard key={p[3]} category={p[0]} categoryColor={p[1]} meta={p[2]} title={p[3]} excerpt={p[4]} href="#" cta="Read more" />
          ))}
        </div>
        <div className="pager">
          <Button variant="secondary">← Newer</Button>
          <span className="pager__n">Page 1 of 12</span>
          <Button variant="secondary">Older →</Button>
        </div>
      </section>
    </main>
  );
}

window.PublicationsPage = PublicationsPage;
