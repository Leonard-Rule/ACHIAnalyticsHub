import React from 'react';

const CSS = `
.achi-check{ display:inline-flex; align-items:flex-start; gap:10px; font-family:var(--font-body); font-size:var(--fs-body); color:var(--text-body); cursor:pointer; }
.achi-check input{ position:absolute; opacity:0; width:0; height:0; }
.achi-check__box{
  flex:0 0 auto; width:20px; height:20px; margin-top:1px;
  border:1px solid var(--border-strong); border-radius:var(--radius-xs);
  background:var(--surface-card); display:inline-flex; align-items:center; justify-content:center;
  transition:background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard);
}
.achi-check__box svg{ width:13px; height:13px; stroke:#fff; stroke-width:3; fill:none; opacity:0; }
.achi-check input:checked + .achi-check__box{ background:var(--brand-accent); border-color:var(--brand-accent); }
.achi-check input:checked + .achi-check__box svg{ opacity:1; }
.achi-check input:focus-visible + .achi-check__box{ box-shadow:var(--focus-ring); }
.achi-check--radio .achi-check__box{ border-radius:var(--radius-pill); }
.achi-check--radio .achi-check__box::after{ content:""; width:9px; height:9px; border-radius:50%; background:#fff; opacity:0; transition:opacity var(--dur-fast); }
.achi-check--radio input:checked + .achi-check__box::after{ opacity:1; }
.achi-check input:disabled + .achi-check__box{ background:var(--surface-sunken); border-color:var(--border-default); }
.achi-check input:disabled ~ *{ color:var(--text-faint); }
`;
if (typeof document !== 'undefined' && !document.getElementById('achi-check-css')) {
  const s = document.createElement('style'); s.id = 'achi-check-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function Checkbox({ label, type = 'checkbox', className = '', ...rest }) {
  const cls = ['achi-check', type === 'radio' ? 'achi-check--radio' : '', className].filter(Boolean).join(' ');
  return (
    <label className={cls}>
      <input type={type} {...rest} />
      <span className="achi-check__box">
        {type === 'checkbox' && (
          <svg viewBox="0 0 16 16"><polyline points="3,8.5 6.5,12 13,4" /></svg>
        )}
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
