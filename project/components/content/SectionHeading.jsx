import React from 'react';

const CSS = `
.achi-sh{ font-family:var(--font-body); }
.achi-sh--center{ text-align:center; }
.achi-sh--center .achi-sh__rule{ margin-left:auto; margin-right:auto; }
.achi-sh--inverse .achi-sh__title{ color:#fff; }
.achi-sh--inverse .achi-sh__desc{ color:var(--achi-blue-100); }
.achi-sh__eyebrow{
  font-family:var(--font-display); font-size:var(--fs-overline); font-weight:var(--fw-bold);
  letter-spacing:var(--ls-overline); text-transform:uppercase; color:var(--brand-accent-strong); margin:0;
}
.achi-sh--inverse .achi-sh__eyebrow{ color:var(--achi-teal-300); }
.achi-sh__rule{ width:56px; height:var(--rule-accent); background:var(--brand-accent); border-radius:var(--radius-pill); margin:12px 0; }
.achi-sh__title{
  font-family:var(--font-display); font-weight:var(--fw-bold); letter-spacing:var(--ls-tight);
  color:var(--text-strong); line-height:var(--lh-heading); margin:0; text-wrap:balance;
}
.achi-sh__title--xl{ font-size:var(--fs-h2); }
.achi-sh__title--lg{ font-size:var(--fs-h3); }
.achi-sh__title--md{ font-size:var(--fs-h4); }
.achi-sh__desc{ margin:14px 0 0; color:var(--text-muted); font-size:var(--fs-body-lg); line-height:var(--lh-body); max-width:60ch; }
.achi-sh--center .achi-sh__desc{ margin-left:auto; margin-right:auto; }
`;
if (typeof document !== 'undefined' && !document.getElementById('achi-sh-css')) {
  const s = document.createElement('style'); s.id = 'achi-sh-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function SectionHeading({
  eyebrow, title, description, size = 'lg', align = 'left',
  inverse = false, rule = true, className = '', ...rest
}) {
  const cls = [
    'achi-sh',
    align === 'center' ? 'achi-sh--center' : '',
    inverse ? 'achi-sh--inverse' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {eyebrow && <p className="achi-sh__eyebrow">{eyebrow}</p>}
      {rule && <div className="achi-sh__rule" />}
      {title && <h2 className={`achi-sh__title achi-sh__title--${size}`}>{title}</h2>}
      {description && <p className="achi-sh__desc">{description}</p>}
    </div>
  );
}
