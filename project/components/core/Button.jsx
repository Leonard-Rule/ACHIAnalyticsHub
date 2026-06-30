import React from 'react';

/* Inject component CSS once when the bundle loads. */
const CSS = `
.achi-btn{
  display:inline-flex; align-items:center; justify-content:center; gap:.5em;
  font-family:var(--font-body); font-weight:var(--fw-semibold);
  border-radius:var(--radius-sm); border:1px solid transparent;
  cursor:pointer; text-decoration:none; white-space:nowrap; user-select:none;
  transition:background var(--dur-fast) var(--ease-standard),
             color var(--dur-fast) var(--ease-standard),
             border-color var(--dur-fast) var(--ease-standard),
             box-shadow var(--dur-fast) var(--ease-standard),
             transform var(--dur-fast) var(--ease-standard);
}
.achi-btn:focus-visible{ outline:none; box-shadow:var(--focus-ring); }
.achi-btn:active{ transform:translateY(1px); }
.achi-btn[disabled],.achi-btn[aria-disabled="true"]{ opacity:.5; pointer-events:none; }

/* sizes */
.achi-btn--sm{ font-size:var(--fs-small); padding:6px 12px; }
.achi-btn--md{ font-size:var(--fs-body); padding:9px 18px; }
.achi-btn--lg{ font-size:var(--fs-body-lg); padding:13px 26px; }

/* variants */
.achi-btn--primary{ background:var(--brand-primary); color:#fff; }
.achi-btn--primary:hover{ background:var(--brand-primary-strong); }
.achi-btn--accent{ background:var(--brand-accent); color:#fff; }
.achi-btn--accent:hover{ background:var(--brand-accent-strong); }
.achi-btn--secondary{ background:var(--surface-card); color:var(--brand-primary); border-color:var(--border-strong); }
.achi-btn--secondary:hover{ border-color:var(--brand-primary); background:var(--surface-subtle); }
.achi-btn--ghost{ background:transparent; color:var(--brand-primary); }
.achi-btn--ghost:hover{ background:var(--surface-sunken); }
.achi-btn--link{ background:transparent; color:var(--text-link); padding-left:0; padding-right:0; border-radius:0; }
.achi-btn--link:hover{ color:var(--text-link-hover); text-decoration:underline; text-underline-offset:3px; }
.achi-btn--block{ display:flex; width:100%; }
`;
if (typeof document !== 'undefined' && !document.getElementById('achi-btn-css')) {
  const s = document.createElement('style'); s.id = 'achi-btn-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  as,
  iconLeft,
  iconRight,
  className = '',
  children,
  ...rest
}) {
  const Tag = as || (rest.href ? 'a' : 'button');
  const cls = [
    'achi-btn',
    `achi-btn--${variant}`,
    `achi-btn--${size}`,
    block ? 'achi-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <Tag className={cls} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
