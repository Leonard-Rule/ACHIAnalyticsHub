/* ACHI website — shared chrome (utility bar, header nav, footer).
   Loaded as a Babel script; reads DS primitives from the namespace and
   exposes SiteHeader / SiteFooter on window. */
const { Button, Tag } = window.ACHIDesignSystem_cd4297;

const NAV = ['Home', 'Publications', 'Capabilities', 'Topics', 'About', 'Blog'];
const TOPICS = [
  'Arkansas Healthcare Workforce', 'Arkansas Medicaid', 'Colorectal Cancer',
  'Maternal & Infant Health', 'Oral Health', 'Rural Health Insights',
  'Social Media & Youth Mental Health', 'Vaping Updates',
];

function Logo({ light }) {
  return (
    <div className="wmark" style={{ color: light ? '#fff' : 'var(--brand-primary)' }}>
      ACH<span style={{ color: light ? 'var(--achi-teal-300)' : 'var(--brand-accent)' }}>I</span>
    </div>
  );
}

function SiteHeader({ current, onNav, onSearch }) {
  const [topicsOpen, setTopicsOpen] = React.useState(false);
  return (
    <header className="site-hd">
      <div className="util">
        <div className="util__inner">
          <span className="util__latest">
            <span className="util__dot" /> Latest: Fireworks Injured 13,000 in U.S. in 2025
          </span>
          <div className="util__social">
            <span>Facebook</span><span>X</span><span>LinkedIn</span><span>YouTube</span>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="nav__inner">
          <a className="nav__logo" href="#" onClick={(e) => { e.preventDefault(); onNav('Home'); }}>
            <Logo />
          </a>
          <nav className="nav__links">
            {NAV.map((item) => (
              <div key={item}
                   className="nav__item"
                   onMouseEnter={() => item === 'Topics' && setTopicsOpen(true)}
                   onMouseLeave={() => item === 'Topics' && setTopicsOpen(false)}>
                <a href="#"
                   className={'nav__link' + (current === item ? ' is-active' : '')}
                   onClick={(e) => { e.preventDefault(); onNav(item); }}>
                  {item}{item === 'Topics' && <span className="nav__caret">▾</span>}
                </a>
                {item === 'Topics' && topicsOpen && (
                  <div className="nav__menu">
                    {TOPICS.map((t) => <a key={t} href="#" onClick={(e) => e.preventDefault()}>{t}</a>)}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <button className="nav__search" onClick={onSearch} aria-label="Search">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
                 strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter({ onNav }) {
  const cols = [
    ['Initiatives', ['100 Arkansans', 'Body Mass Index Program', 'Healthcare Transparency Initiative', 'Healthy Birthing Journey Podcast']],
    ['Resources', ['Arkansas All-Payer Claims Database', 'AR Health Matters Calendar', 'Regional View: Northwest Arkansas']],
    ['About', ['Meet the Experts', 'Structure', 'Request a Speaker', 'Careers']],
  ];
  return (
    <footer className="site-ft">
      <div className="site-ft__inner">
        <div className="site-ft__brand">
          <Logo light />
          <p className="site-ft__addr">1401 West Capitol, Suite 300<br />Little Rock, AR 72201</p>
          <p className="site-ft__addr">501-526-2244</p>
        </div>
        {cols.map(([h, items]) => (
          <div key={h} className="site-ft__col">
            <h4>{h}</h4>
            <ul>{items.map((i) => <li key={i}><a href="#" onClick={(e) => e.preventDefault()}>{i}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="site-ft__bar">
        <span>© 2026 Arkansas Center for Health Improvement</span>
        <div className="site-ft__social"><span>Facebook</span><span>X</span><span>LinkedIn</span><span>YouTube</span></div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter, AchiLogo: Logo });
