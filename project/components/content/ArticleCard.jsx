import React from 'react';
import { Tag } from '../core/Tag.jsx';

const CSS = `
.achi-acard{
  display:flex; flex-direction:column; background:var(--surface-card);
  border:1px solid var(--border-subtle); border-radius:var(--radius-lg); overflow:hidden;
  text-decoration:none; color:inherit; font-family:var(--font-body);
  transition:box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard);
}
a.achi-acard:hover{ box-shadow:var(--shadow-lg); transform:translateY(-3px); border-color:var(--border-default); }
.achi-acard__media{ position:relative; aspect-ratio:16/9; background:var(--achi-mist); overflow:hidden; }
.achi-acard__media img{ width:100%; height:100%; object-fit:cover; display:block; }
.achi-acard__media--ph{ background:linear-gradient(135deg, var(--achi-teal) 0%, var(--achi-navy) 100%); }
.achi-acard__tag{ position:absolute; top:12px; left:12px; }
.achi-acard__body{ padding:18px 20px 20px; display:flex; flex-direction:column; gap:10px; flex:1; }
.achi-acard__meta{ font-size:var(--fs-caption); color:var(--text-faint); font-family:var(--font-mono); letter-spacing:.02em; }
.achi-acard__title{ font-family:var(--font-display); font-weight:var(--fw-bold); font-size:var(--fs-h6); line-height:1.25; color:var(--text-strong); margin:0; letter-spacing:-0.01em; text-wrap:balance; }
.achi-acard:hover .achi-acard__title{ color:var(--brand-primary); }
.achi-acard__excerpt{ font-size:var(--fs-small); color:var(--text-muted); line-height:1.55; margin:0; }
.achi-acard__more{ margin-top:auto; padding-top:6px; font-size:var(--fs-small); font-weight:var(--fw-semibold); color:var(--text-link); }
`;
if (typeof document !== 'undefined' && !document.getElementById('achi-acard-css')) {
  const s = document.createElement('style'); s.id = 'achi-acard-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function ArticleCard({
  image, imageAlt = '', category, categoryColor = 'teal',
  meta, title, excerpt, cta = 'Read more', href, className = '', ...rest
}) {
  const Tag2 = href ? 'a' : 'div';
  const cls = ['achi-acard', className].filter(Boolean).join(' ');
  return (
    <Tag2 className={cls} href={href} {...rest}>
      <div className={`achi-acard__media${image ? '' : ' achi-acard__media--ph'}`}>
        {image && <img src={image} alt={imageAlt} />}
        {category && <span className="achi-acard__tag"><Tag color={categoryColor}>{category}</Tag></span>}
      </div>
      <div className="achi-acard__body">
        {meta && <span className="achi-acard__meta">{meta}</span>}
        {title && <h3 className="achi-acard__title">{title}</h3>}
        {excerpt && <p className="achi-acard__excerpt">{excerpt}</p>}
        {cta && href && <span className="achi-acard__more">{cta} →</span>}
      </div>
    </Tag2>
  );
}
