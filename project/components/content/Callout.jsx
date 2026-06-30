import React from 'react';

const CSS = `
.achi-callout{
  display:flex; gap:14px; font-family:var(--font-body);
  border:1px solid var(--border-default); border-left-width:4px;
  border-radius:var(--radius-md); padding:16px 18px; background:var(--surface-card);
}
.achi-callout__icon{ flex:0 0 auto; width:22px; height:22px; display:flex; align-items:center; justify-content:center; }
.achi-callout__icon svg{ width:20px; height:20px; }
.achi-callout__title{ margin:0 0 4px; font-family:var(--font-display); font-weight:var(--fw-bold); font-size:var(--fs-body); color:var(--text-strong); }
.achi-callout__body{ margin:0; font-size:var(--fs-small); color:var(--text-body); line-height:1.55; }
.achi-callout--info{ border-left-color:var(--achi-blue); background:var(--achi-info-bg); }
.achi-callout--info .achi-callout__icon{ color:var(--achi-navy-800); }
.achi-callout--success{ border-left-color:var(--achi-success); background:var(--achi-success-bg); }
.achi-callout--success .achi-callout__icon{ color:var(--achi-success); }
.achi-callout--warning{ border-left-color:var(--achi-warning); background:var(--achi-warning-bg); }
.achi-callout--warning .achi-callout__icon{ color:var(--achi-warning); }
.achi-callout--danger{ border-left-color:var(--achi-danger); background:var(--achi-danger-bg); }
.achi-callout--danger .achi-callout__icon{ color:var(--achi-danger); }
.achi-callout--brand{ border-left-color:var(--brand-accent); background:var(--achi-teal-100); }
.achi-callout--brand .achi-callout__icon{ color:var(--brand-accent-strong); }
`;
if (typeof document !== 'undefined' && !document.getElementById('achi-callout-css')) {
  const s = document.createElement('style'); s.id = 'achi-callout-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

const ICONS = {
  info: <path d="M12 16v-5m0-4h.01M12 21a9 9 0 100-18 9 9 0 000 18z" />,
  success: <path d="M5 13l4 4L19 7" />,
  warning: <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L14.7 3.9a2 2 0 00-3.4 0z" />,
  danger: <path d="M12 9v4m0 4h.01M12 21a9 9 0 100-18 9 9 0 000 18z" />,
  brand: <path d="M12 16v-5m0-4h.01M12 21a9 9 0 100-18 9 9 0 000 18z" />,
};

export function Callout({ tone = 'info', title, children, className = '', ...rest }) {
  const cls = ['achi-callout', `achi-callout--${tone}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} role="note" {...rest}>
      <span className="achi-callout__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round">{ICONS[tone]}</svg>
      </span>
      <div>
        {title && <p className="achi-callout__title">{title}</p>}
        <p className="achi-callout__body">{children}</p>
      </div>
    </div>
  );
}
