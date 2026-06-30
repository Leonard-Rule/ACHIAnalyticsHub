import React from 'react';

const CSS = `
.achi-avatar{
  display:inline-flex; align-items:center; justify-content:center; flex:0 0 auto;
  border-radius:50%; overflow:hidden; background:var(--achi-navy);
  color:#fff; font-family:var(--font-display); font-weight:var(--fw-bold);
  letter-spacing:.02em; text-transform:uppercase; user-select:none;
}
.achi-avatar img{ width:100%; height:100%; object-fit:cover; display:block; }
.achi-avatar--sm{ width:32px; height:32px; font-size:12px; }
.achi-avatar--md{ width:48px; height:48px; font-size:16px; }
.achi-avatar--lg{ width:72px; height:72px; font-size:24px; }
.achi-avatar--teal{ background:var(--achi-teal); }
.achi-avatar--maroon{ background:var(--achi-maroon); }
`;
if (typeof document !== 'undefined' && !document.getElementById('achi-avatar-css')) {
  const s = document.createElement('style'); s.id = 'achi-avatar-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('');
}

export function Avatar({ name = '', src, size = 'md', color = 'navy', className = '', ...rest }) {
  const cls = ['achi-avatar', `achi-avatar--${size}`, !src ? `achi-avatar--${color}` : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls} title={name} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}
