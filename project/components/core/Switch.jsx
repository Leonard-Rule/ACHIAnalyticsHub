import React from 'react';

const CSS = `
.achi-switch{ display:inline-flex; align-items:center; gap:10px; font-family:var(--font-body); font-size:var(--fs-body); color:var(--text-body); cursor:pointer; }
.achi-switch input{ position:absolute; opacity:0; width:0; height:0; }
.achi-switch__track{
  width:42px; height:24px; border-radius:var(--radius-pill); background:var(--achi-gray-300);
  position:relative; transition:background var(--dur-base) var(--ease-standard); flex:0 0 auto;
}
.achi-switch__thumb{
  position:absolute; top:2px; left:2px; width:20px; height:20px; border-radius:50%;
  background:#fff; box-shadow:var(--shadow-sm); transition:transform var(--dur-base) var(--ease-out);
}
.achi-switch input:checked + .achi-switch__track{ background:var(--brand-accent); }
.achi-switch input:checked + .achi-switch__track .achi-switch__thumb{ transform:translateX(18px); }
.achi-switch input:focus-visible + .achi-switch__track{ box-shadow:var(--focus-ring); }
.achi-switch input:disabled + .achi-switch__track{ opacity:.5; }
`;
if (typeof document !== 'undefined' && !document.getElementById('achi-switch-css')) {
  const s = document.createElement('style'); s.id = 'achi-switch-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function Switch({ label, className = '', ...rest }) {
  const cls = ['achi-switch', className].filter(Boolean).join(' ');
  return (
    <label className={cls}>
      <input type="checkbox" {...rest} />
      <span className="achi-switch__track"><span className="achi-switch__thumb" /></span>
      {label && <span>{label}</span>}
    </label>
  );
}
