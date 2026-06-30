import React from 'react';

const CSS = `
.achi-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-body); }
.achi-field__label{ font-size:var(--fs-small); font-weight:var(--fw-semibold); color:var(--text-strong); }
.achi-field__req{ color:var(--achi-danger); margin-left:2px; }
.achi-field__hint{ font-size:var(--fs-caption); color:var(--text-muted); }
.achi-field__err{ font-size:var(--fs-caption); color:var(--achi-danger); }
.achi-input{
  font-family:var(--font-body); font-size:var(--fs-body); color:var(--text-strong);
  background:var(--surface-card); border:1px solid var(--border-strong);
  border-radius:var(--radius-sm); padding:10px 12px; width:100%;
  transition:border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard);
}
.achi-input::placeholder{ color:var(--text-faint); }
.achi-input:hover{ border-color:var(--achi-gray-400); }
.achi-input:focus{ outline:none; border-color:var(--brand-accent); box-shadow:var(--focus-ring); }
.achi-input[disabled]{ background:var(--surface-sunken); color:var(--text-faint); cursor:not-allowed; }
.achi-input--invalid{ border-color:var(--achi-danger); }
.achi-input--invalid:focus{ box-shadow:0 0 0 3px var(--achi-danger-bg); }
`;
if (typeof document !== 'undefined' && !document.getElementById('achi-input-css')) {
  const s = document.createElement('style'); s.id = 'achi-input-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

export function Input({
  label, hint, error, required = false, id,
  multiline = false, className = '', ...rest
}) {
  const fid = id || (label ? `f-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const Tag = multiline ? 'textarea' : 'input';
  const inputCls = ['achi-input', error ? 'achi-input--invalid' : '', className].filter(Boolean).join(' ');
  return (
    <div className="achi-field">
      {label && (
        <label className="achi-field__label" htmlFor={fid}>
          {label}{required && <span className="achi-field__req">*</span>}
        </label>
      )}
      <Tag id={fid} className={inputCls} aria-invalid={!!error} {...rest} />
      {error
        ? <span className="achi-field__err">{error}</span>
        : hint && <span className="achi-field__hint">{hint}</span>}
    </div>
  );
}
