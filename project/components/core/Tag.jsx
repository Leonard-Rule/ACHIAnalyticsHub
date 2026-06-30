import React from 'react';

const CSS = `
.achi-tag{
  display:inline-flex; align-items:center; gap:.4em;
  font-family:var(--font-body); font-weight:var(--fw-semibold);
  font-size:var(--fs-caption); line-height:1;
  padding:6px 12px; border-radius:var(--radius-pill);
  border:1px solid transparent; text-decoration:none; cursor:default;
  transition:background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard);
}
a.achi-tag{ cursor:pointer; }
.achi-tag--neutral{ background:var(--surface-sunken); color:var(--text-body); border-color:var(--border-default); }
a.achi-tag--neutral:hover{ background:var(--surface-tint); color:var(--brand-primary); }
.achi-tag--teal{ background:var(--achi-teal-100); color:var(--achi-teal-700); }
.achi-tag--navy{ background:var(--achi-blue-100); color:var(--achi-navy-800); }
.achi-tag--maroon{ background:var(--achi-maroon-100); color:var(--achi-maroon-700); }
.achi-tag--solid{ background:var(--brand-primary); color:#fff; }
.achi-tag--outline{ background:transparent; color:var(--brand-primary); border-color:var(--border-strong); }
`;
if (typeof document !== 'undefined' && !document.getElementById('achi-tag-css')) {
  const s = document.createElement('style'); s.id = 'achi-tag-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function Tag({ color = 'neutral', as, className = '', children, ...rest }) {
  const Tag = as || (rest.href ? 'a' : 'span');
  const cls = ['achi-tag', `achi-tag--${color}`, className].filter(Boolean).join(' ');
  return <Tag className={cls} {...rest}>{children}</Tag>;
}
