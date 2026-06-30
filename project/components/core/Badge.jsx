import React from 'react';

const CSS = `
.achi-badge{
  display:inline-flex; align-items:center; gap:.35em;
  font-family:var(--font-body); font-weight:var(--fw-semibold);
  font-size:11px; letter-spacing:.04em; text-transform:uppercase; line-height:1;
  padding:4px 8px; border-radius:var(--radius-xs);
}
.achi-badge .achi-badge__dot{ width:6px; height:6px; border-radius:50%; background:currentColor; }
.achi-badge--success{ background:var(--achi-success-bg); color:var(--achi-success); }
.achi-badge--warning{ background:var(--achi-warning-bg); color:var(--achi-warning); }
.achi-badge--danger{ background:var(--achi-danger-bg); color:var(--achi-danger); }
.achi-badge--info{ background:var(--achi-info-bg); color:var(--achi-navy-800); }
.achi-badge--neutral{ background:var(--surface-sunken); color:var(--text-muted); }
`;
if (typeof document !== 'undefined' && !document.getElementById('achi-badge-css')) {
  const s = document.createElement('style'); s.id = 'achi-badge-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function Badge({ tone = 'neutral', dot = false, className = '', children, ...rest }) {
  const cls = ['achi-badge', `achi-badge--${tone}`, className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot && <span className="achi-badge__dot" />}
      {children}
    </span>
  );
}
