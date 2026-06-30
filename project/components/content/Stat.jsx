import React from 'react';

const CSS = `
.achi-stat{ font-family:var(--font-body); }
.achi-stat__value{
  font-family:var(--font-mono); font-weight:600; letter-spacing:-0.01em; line-height:1;
  color:var(--brand-primary); display:block;
}
.achi-stat__value--lg{ font-size:56px; }
.achi-stat__value--md{ font-size:40px; }
.achi-stat__value--sm{ font-size:28px; }
.achi-stat--teal .achi-stat__value{ color:var(--brand-accent-strong); }
.achi-stat--maroon .achi-stat__value{ color:var(--brand-secondary); }
.achi-stat--inverse .achi-stat__value{ color:#fff; }
.achi-stat__label{ margin:8px 0 0; font-size:var(--fs-small); font-weight:var(--fw-semibold); color:var(--text-strong); line-height:1.4; }
.achi-stat--inverse .achi-stat__label{ color:var(--achi-blue-100); }
.achi-stat__source{ margin:4px 0 0; font-size:var(--fs-caption); color:var(--text-faint); }
`;
if (typeof document !== 'undefined' && !document.getElementById('achi-stat-css')) {
  const s = document.createElement('style'); s.id = 'achi-stat-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function Stat({ value, label, source, size = 'md', color = 'navy', className = '', ...rest }) {
  const cls = ['achi-stat', `achi-stat--${color}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <span className={`achi-stat__value achi-stat__value--${size}`}>{value}</span>
      {label && <p className="achi-stat__label">{label}</p>}
      {source && <p className="achi-stat__source">{source}</p>}
    </div>
  );
}
