/* @ds-bundle: {"format":3,"namespace":"ACHIDesignSystem_cd4297","components":[{"name":"ArticleCard","sourcePath":"components/content/ArticleCard.jsx"},{"name":"Avatar","sourcePath":"components/content/Avatar.jsx"},{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/content/ArticleCard.jsx":"237700d105aa","components/content/Avatar.jsx":"b6791a58b5d8","components/content/Callout.jsx":"afd4bf5a9f90","components/content/SectionHeading.jsx":"e08baa4843fe","components/content/Stat.jsx":"8fdf2404b4db","components/core/Badge.jsx":"38fceac2ed1a","components/core/Button.jsx":"2d19aca0e8d3","components/core/Checkbox.jsx":"8d8280b5c422","components/core/Input.jsx":"93905d977c06","components/core/Switch.jsx":"603bf3818ab1","components/core/Tag.jsx":"50e6a8af7ac2","ui_kits/website/HomePage.jsx":"4b6ba2e08281","ui_kits/website/PublicationsPage.jsx":"070e5777e9d4","ui_kits/website/SiteChrome.jsx":"28a2a7a4e383","uploads/achi-hub-scaffold/site/app.js":"9a2a5e78e5cf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ACHIDesignSystem_cd4297 = window.ACHIDesignSystem_cd4297 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'achi-avatar-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('');
}
function Avatar({
  name = '',
  src,
  size = 'md',
  color = 'navy',
  className = '',
  ...rest
}) {
  const cls = ['achi-avatar', `achi-avatar--${size}`, !src ? `achi-avatar--${color}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'achi-callout-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-5m0-4h.01M12 21a9 9 0 100-18 9 9 0 000 18z"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L14.7 3.9a2 2 0 00-3.4 0z"
  }),
  danger: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4m0 4h.01M12 21a9 9 0 100-18 9 9 0 000 18z"
  }),
  brand: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-5m0-4h.01M12 21a9 9 0 100-18 9 9 0 000 18z"
  })
};
function Callout({
  tone = 'info',
  title,
  children,
  className = '',
  ...rest
}) {
  const cls = ['achi-callout', `achi-callout--${tone}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "note"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "achi-callout__icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[tone])), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("p", {
    className: "achi-callout__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "achi-callout__body"
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'achi-sh-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function SectionHeading({
  eyebrow,
  title,
  description,
  size = 'lg',
  align = 'left',
  inverse = false,
  rule = true,
  className = '',
  ...rest
}) {
  const cls = ['achi-sh', align === 'center' ? 'achi-sh--center' : '', inverse ? 'achi-sh--inverse' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "achi-sh__eyebrow"
  }, eyebrow), rule && /*#__PURE__*/React.createElement("div", {
    className: "achi-sh__rule"
  }), title && /*#__PURE__*/React.createElement("h2", {
    className: `achi-sh__title achi-sh__title--${size}`
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "achi-sh__desc"
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.achi-stat{ font-family:var(--font-body); }
.achi-stat__value{
  font-family:var(--font-mono); font-weight:600; letter-spacing:-0.01em; line-height:1;
  color:var(--brand-primary); display:block;
}
.achi-stat__value--lg{ font-size:56px; }
.achi-stat__value--md{ font-size:40px; }
.achi-stat__value--sm{ font-size:28px; }
.achi-stat--teal .achi-stat__value{ color:var(--brand-accent-strong); }
.achi-stat--maroon .achi-stat__value{ color:var(--brand-secondary); }
.achi-stat--inverse .achi-stat__value{ color:#fff; }
.achi-stat__label{ margin:8px 0 0; font-size:var(--fs-small); font-weight:var(--fw-semibold); color:var(--text-strong); line-height:1.4; }
.achi-stat--inverse .achi-stat__label{ color:var(--achi-blue-100); }
.achi-stat__source{ margin:4px 0 0; font-size:var(--fs-caption); color:var(--text-faint); }
`;
if (typeof document !== 'undefined' && !document.getElementById('achi-stat-css')) {
  const s = document.createElement('style');
  s.id = 'achi-stat-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Stat({
  value,
  label,
  source,
  size = 'md',
  color = 'navy',
  className = '',
  ...rest
}) {
  const cls = ['achi-stat', `achi-stat--${color}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: `achi-stat__value achi-stat__value--${size}`
  }, value), label && /*#__PURE__*/React.createElement("p", {
    className: "achi-stat__label"
  }, label), source && /*#__PURE__*/React.createElement("p", {
    className: "achi-stat__source"
  }, source));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'achi-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  tone = 'neutral',
  dot = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['achi-badge', `achi-badge--${tone}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "achi-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'achi-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
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
  const cls = ['achi-btn', `achi-btn--${variant}`, `achi-btn--${size}`, block ? 'achi-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'achi-check-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  type = 'checkbox',
  className = '',
  ...rest
}) {
  const cls = ['achi-check', type === 'radio' ? 'achi-check--radio' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "achi-check__box"
  }, type === 'checkbox' && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "3,8.5 6.5,12 13,4"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'achi-input-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  required = false,
  id,
  multiline = false,
  className = '',
  ...rest
}) {
  const fid = id || (label ? `f-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const Tag = multiline ? 'textarea' : 'input';
  const inputCls = ['achi-input', error ? 'achi-input--invalid' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "achi-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "achi-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "achi-field__req"
  }, "*")), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fid,
    className: inputCls,
    "aria-invalid": !!error
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "achi-field__err"
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "achi-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'achi-switch-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Switch({
  label,
  className = '',
  ...rest
}) {
  const cls = ['achi-switch', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "achi-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "achi-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'achi-tag-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tag({
  color = 'neutral',
  as,
  className = '',
  children,
  ...rest
}) {
  const Tag = as || (rest.href ? 'a' : 'span');
  const cls = ['achi-tag', `achi-tag--${color}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/ArticleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = 'achi-acard-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function ArticleCard({
  image,
  imageAlt = '',
  category,
  categoryColor = 'teal',
  meta,
  title,
  excerpt,
  cta = 'Read more',
  href,
  className = '',
  ...rest
}) {
  const Tag2 = href ? 'a' : 'div';
  const cls = ['achi-acard', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag2, _extends({
    className: cls,
    href: href
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: `achi-acard__media${image ? '' : ' achi-acard__media--ph'}`
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt
  }), category && /*#__PURE__*/React.createElement("span", {
    className: "achi-acard__tag"
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    color: categoryColor
  }, category))), /*#__PURE__*/React.createElement("div", {
    className: "achi-acard__body"
  }, meta && /*#__PURE__*/React.createElement("span", {
    className: "achi-acard__meta"
  }, meta), title && /*#__PURE__*/React.createElement("h3", {
    className: "achi-acard__title"
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    className: "achi-acard__excerpt"
  }, excerpt), cta && href && /*#__PURE__*/React.createElement("span", {
    className: "achi-acard__more"
  }, cta, " \u2192")));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
/* ACHI website — Home page. Loaded as Babel script; exposes HomePage on window. */
const {
  Button,
  Tag,
  SectionHeading,
  Stat,
  ArticleCard
} = window.ACHIDesignSystem_cd4297;
const PILLARS = [['Healthy Systems', 'Quality care, equitable practices, and affordable methods.', 'var(--achi-navy)'], ['Healthy Communities', 'Culturally informed solutions and accessible opportunities.', 'var(--achi-teal)'], ['Healthy Choices', 'Ideas and strategies affecting lifestyles, decisions, and outcomes.', 'var(--achi-maroon)']];
const PUBS = [['Maternal & Infant Health', 'teal', 'June 24, 2026 · Infographic', 'C-Section Rates in Arkansas, 2021–2023', 'Mothers in some parts of the state had the procedure at much higher rates than others.'], ['Maternal & Infant Health', 'teal', 'June 9, 2026 · Infographic', 'Travel Time to Delivery Facilities for Arkansas Mothers', 'Closures of labor and delivery services have led to longer travel times for many mothers.'], ['Arkansas Medicaid', 'navy', 'April 30, 2026 · Dashboard', 'Medicare Advantage Enrollment in Arkansas', 'How enrollment in Medicare Advantage and traditional Medicare has changed over time.']];
function HomePage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero__eyebrow"
  }, "Arkansas Center for Health Improvement"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "Status quo is not the future state of health."), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "A nonpartisan, independent health policy center serving as a catalyst for improving the health of all Arkansans through evidence-based research, advocacy, and collaboration."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('Publications')
  }, "Explore publications"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    className: "hero__ghost"
  }, "About ACHI")))), /*#__PURE__*/React.createElement("section", {
    className: "band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__inner"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "25+",
    label: "years shaping Arkansas health policy",
    color: "inverse"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1 in 3",
    label: "Arkansans with Medicaid coverage",
    color: "inverse"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2003",
    label: "hosting the Arkansas Health Data Initiative",
    color: "inverse"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "44%",
    label: "of rural L&D units at risk of closing",
    color: "inverse"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "wrap section"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Featured publication",
    title: "Travel Time to Delivery Facilities for Arkansas Mothers",
    description: "Longer travel times to delivery facilities have been associated with higher risks of adverse maternal and neonatal outcomes. Our updated infographic examines mothers\u2019 travel times across the state."
  }), /*#__PURE__*/React.createElement("div", {
    className: "feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature__media"
  }), /*#__PURE__*/React.createElement("div", {
    className: "feature__body"
  }, /*#__PURE__*/React.createElement(Tag, {
    color: "teal"
  }, "Maternal & Infant Health"), /*#__PURE__*/React.createElement("p", null, "This analysis maps drive times from each ZIP code to the nearest delivery facility, revealing widening gaps as rural hospitals close labor and delivery units."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Read the infographic")))), /*#__PURE__*/React.createElement("section", {
    className: "wrap section section--tint"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Publications",
    title: "Latest research"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => onNav('Publications')
  }, "See all publications \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "grid3"
  }, PUBS.map(p => /*#__PURE__*/React.createElement(ArticleCard, {
    key: p[3],
    category: p[0],
    categoryColor: p[1],
    meta: p[2],
    title: p[3],
    excerpt: p[4],
    href: "#",
    cta: "Read more"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "wrap section"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our priorities",
    title: "A healthier Arkansas, three ways",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pillars"
  }, PILLARS.map(([h, d, c]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    className: "pillar",
    style: {
      '--c': c
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pillar__mark"
  }), /*#__PURE__*/React.createElement("h3", null, h), /*#__PURE__*/React.createElement("p", null, d))))), /*#__PURE__*/React.createElement("section", {
    className: "cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Subscribe to our newsletter"), /*#__PURE__*/React.createElement("p", null, "Regular updates on Arkansas health policy, research, and data \u2014 straight to your inbox.")), /*#__PURE__*/React.createElement("form", {
    className: "cta__form",
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "you@example.com",
    "aria-label": "Email"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg"
  }, "Sign up")))));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PublicationsPage.jsx
try { (() => {
/* ACHI website — Publications listing with topic filter. Exposes PublicationsPage on window. */
const {
  Tag,
  Button,
  SectionHeading,
  ArticleCard
} = window.ACHIDesignSystem_cd4297;
const ALL = [['Maternal & Infant Health', 'teal', 'June 24, 2026 · Infographic', 'C-Section Rates in Arkansas, 2021–2023', 'Mothers in some parts of the state had the procedure at much higher rates than others.'], ['Maternal & Infant Health', 'teal', 'June 9, 2026 · Infographic', 'Travel Time to Delivery Facilities', 'Closures of labor & delivery services have led to longer travel times for many mothers.'], ['Arkansas Medicaid', 'navy', 'April 30, 2026 · Dashboard', 'Medicare Advantage Enrollment in Arkansas', 'How enrollment in Medicare Advantage and traditional Medicare has changed over time.'], ['Rural Health Insights', 'maroon', 'June 3, 2026 · Report', '44% of Rural L&D Units at Risk of Closing', 'Rural communities continue to experience decreasing access to maternity care.'], ['Oral Health', 'navy', 'May 19, 2026 · Brief', 'Dental Benefits Expanding for ARHOME Enrollees', 'A new CMS rule could make dental coverage available to marketplace enrollees.'], ['Arkansas Healthcare Workforce', 'teal', 'May 2, 2026 · Fact Sheet', 'Primary Care Physicians per 10,000 Residents', 'Many Arkansas counties had very few full-time primary care physicians in 2020.']];
const TOPICS = ['All topics', 'Maternal & Infant Health', 'Arkansas Medicaid', 'Rural Health Insights', 'Oral Health', 'Arkansas Healthcare Workforce'];
function PublicationsPage() {
  const [topic, setTopic] = React.useState('All topics');
  const list = topic === 'All topics' ? ALL : ALL.filter(p => p[0] === topic);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "page-hd"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Library",
    title: "Publications",
    description: "Infographics, dashboards, reports, and briefs converting Arkansas health data into knowledge and insight."
  }))), /*#__PURE__*/React.createElement("section", {
    className: "wrap section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filters"
  }, TOPICS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: 'filter' + (t === topic ? ' is-on' : ''),
    onClick: () => setTopic(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "grid3"
  }, list.map(p => /*#__PURE__*/React.createElement(ArticleCard, {
    key: p[3],
    category: p[0],
    categoryColor: p[1],
    meta: p[2],
    title: p[3],
    excerpt: p[4],
    href: "#",
    cta: "Read more"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pager"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "\u2190 Newer"), /*#__PURE__*/React.createElement("span", {
    className: "pager__n"
  }, "Page 1 of 12"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Older \u2192"))));
}
window.PublicationsPage = PublicationsPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PublicationsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
/* ACHI website — shared chrome (utility bar, header nav, footer).
   Loaded as a Babel script; reads DS primitives from the namespace and
   exposes SiteHeader / SiteFooter on window. */
const {
  Button,
  Tag
} = window.ACHIDesignSystem_cd4297;
const NAV = ['Home', 'Publications', 'Capabilities', 'Topics', 'About', 'Blog'];
const TOPICS = ['Arkansas Healthcare Workforce', 'Arkansas Medicaid', 'Colorectal Cancer', 'Maternal & Infant Health', 'Oral Health', 'Rural Health Insights', 'Social Media & Youth Mental Health', 'Vaping Updates'];
function Logo({
  light
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wmark",
    style: {
      color: light ? '#fff' : 'var(--brand-primary)'
    }
  }, "ACH", /*#__PURE__*/React.createElement("span", {
    style: {
      color: light ? 'var(--achi-teal-300)' : 'var(--brand-accent)'
    }
  }, "I"));
}
function SiteHeader({
  current,
  onNav,
  onSearch
}) {
  const [topicsOpen, setTopicsOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "site-hd"
  }, /*#__PURE__*/React.createElement("div", {
    className: "util"
  }, /*#__PURE__*/React.createElement("div", {
    className: "util__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "util__latest"
  }, /*#__PURE__*/React.createElement("span", {
    className: "util__dot"
  }), " Latest: Fireworks Injured 13,000 in U.S. in 2025"), /*#__PURE__*/React.createElement("div", {
    className: "util__social"
  }, /*#__PURE__*/React.createElement("span", null, "Facebook"), /*#__PURE__*/React.createElement("span", null, "X"), /*#__PURE__*/React.createElement("span", null, "LinkedIn"), /*#__PURE__*/React.createElement("span", null, "YouTube")))), /*#__PURE__*/React.createElement("div", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav__logo",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('Home');
    }
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("nav", {
    className: "nav__links"
  }, NAV.map(item => /*#__PURE__*/React.createElement("div", {
    key: item,
    className: "nav__item",
    onMouseEnter: () => item === 'Topics' && setTopicsOpen(true),
    onMouseLeave: () => item === 'Topics' && setTopicsOpen(false)
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: 'nav__link' + (current === item ? ' is-active' : ''),
    onClick: e => {
      e.preventDefault();
      onNav(item);
    }
  }, item, item === 'Topics' && /*#__PURE__*/React.createElement("span", {
    className: "nav__caret"
  }, "\u25BE")), item === 'Topics' && topicsOpen && /*#__PURE__*/React.createElement("div", {
    className: "nav__menu"
  }, TOPICS.map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    onClick: e => e.preventDefault()
  }, t)))))), /*#__PURE__*/React.createElement("button", {
    className: "nav__search",
    onClick: onSearch,
    "aria-label": "Search"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.5-3.5"
  }))))));
}
function SiteFooter({
  onNav
}) {
  const cols = [['Initiatives', ['100 Arkansans', 'Body Mass Index Program', 'Healthcare Transparency Initiative', 'Healthy Birthing Journey Podcast']], ['Resources', ['Arkansas All-Payer Claims Database', 'AR Health Matters Calendar', 'Regional View: Northwest Arkansas']], ['About', ['Meet the Experts', 'Structure', 'Request a Speaker', 'Careers']]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-ft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-ft__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-ft__brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    light: true
  }), /*#__PURE__*/React.createElement("p", {
    className: "site-ft__addr"
  }, "1401 West Capitol, Suite 300", /*#__PURE__*/React.createElement("br", null), "Little Rock, AR 72201"), /*#__PURE__*/React.createElement("p", {
    className: "site-ft__addr"
  }, "501-526-2244")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    className: "site-ft__col"
  }, /*#__PURE__*/React.createElement("h4", null, h), /*#__PURE__*/React.createElement("ul", null, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    className: "site-ft__bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Arkansas Center for Health Improvement"), /*#__PURE__*/React.createElement("div", {
    className: "site-ft__social"
  }, /*#__PURE__*/React.createElement("span", null, "Facebook"), /*#__PURE__*/React.createElement("span", null, "X"), /*#__PURE__*/React.createElement("span", null, "LinkedIn"), /*#__PURE__*/React.createElement("span", null, "YouTube"))));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  AchiLogo: Logo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// uploads/achi-hub-scaffold/site/app.js
try { (() => {
/**
 * ACHI Analyst Reference Hub — app.js
 *
 * Loads all content from /content/ JSON files and .sas snippet files,
 * then renders the full site dynamically. No content is hardcoded here.
 *
 * Content lives in:
 *   /content/sections/  — section JSON files (numbered 01- through 12-)
 *   /content/projects/  — all-projects.json
 *   /content/snippets/  — manifest.json + individual .sas files
 *
 * To update content: edit the JSON or .sas files and redeploy.
 * To add a new section: add a new numbered JSON file in /content/sections/.
 */

'use strict';

// ─── State ───────────────────────────────────────────────────────────────────
const State = {
  sections: [],
  projects: [],
  snippets: [],
  // manifest entries
  snippetCode: {},
  // id -> raw SAS string
  activeSection: null,
  activeSubsection: null,
  searchIndex: [],
  // flat list of searchable entries
  sidebarOpen: true,
  quickRefOpen: false
};

// ─── Bootstrap ───────────────────────────────────────────────────────────────

async function boot() {
  await Promise.all([loadSections(), loadProjects(), loadSnippets()]);
  buildSearchIndex();
  renderSidebar();
  renderQuickRef();
  bindGlobalEvents();
  navigateToHash() || renderHome();
}

// ─── Data loading ────────────────────────────────────────────────────────────

async function loadSections() {
  // Section files are numbered 01-12; fetch them in order
  const indices = Array.from({
    length: 12
  }, (_, i) => String(i + 1).padStart(2, '0'));

  // Fetch the file list from a manifest or just try known filenames
  // We use a sections-manifest.json generated at build time (see netlify.toml)
  // Fallback: try each known filename
  const filenames = ['01-code-structure', '02-sql-best-practices', '03-ids-deduplication', '04-concurrent-claims', '05-claims-classification', '06-member-enrollment', '07-validation-practices', '08-macro-patterns', '09-provider-taxonomy', '10-project-notes', '11-visualizations', '12-quick-reference'];
  const results = await Promise.allSettled(filenames.map(f => fetch(`../content/sections/${f}.json`).then(r => r.json())));
  State.sections = results.filter(r => r.status === 'fulfilled').map(r => r.value).sort((a, b) => a.order - b.order);
}
async function loadProjects() {
  try {
    const res = await fetch('../content/projects/all-projects.json');
    State.projects = await res.json();
  } catch (e) {
    console.warn('Could not load projects:', e);
    State.projects = [];
  }
}
async function loadSnippets() {
  try {
    const res = await fetch('../content/snippets/manifest.json');
    const manifest = await res.json();
    State.snippets = manifest;

    // Load actual .sas file content for active snippets
    await Promise.allSettled(manifest.filter(s => s.file && s.status === 'active').map(async s => {
      try {
        const r = await fetch(`../content/snippets/${s.file}`);
        State.snippetCode[s.id] = await r.text();
      } catch (e) {
        console.warn(`Could not load snippet: ${s.file}`);
      }
    }));
  } catch (e) {
    console.warn('Could not load snippet manifest:', e);
  }
}

// ─── Search index ────────────────────────────────────────────────────────────

function buildSearchIndex() {
  State.searchIndex = [];
  State.sections.forEach(section => {
    // Index section title
    State.searchIndex.push({
      type: 'section',
      label: section.title,
      text: section.title,
      nav: section.id
    });
    (section.subsections || []).forEach(sub => {
      State.searchIndex.push({
        type: 'subsection',
        label: `${section.title} — ${sub.title}`,
        text: sub.title,
        nav: `${section.id}/${sub.id}`,
        section: section.title
      });
      (sub.rules || []).forEach(rule => {
        State.searchIndex.push({
          type: 'rule',
          label: rule.title,
          text: `${rule.title} ${rule.body || ''} ${(rule.list || []).join(' ')}`,
          nav: `${section.id}/${sub.id}`,
          section: section.title,
          subsection: sub.title
        });
      });
    });
  });

  // Index projects
  State.projects.forEach(project => {
    project.notes.forEach(note => {
      State.searchIndex.push({
        type: 'project-note',
        label: `${project.title}: ${note.text.substring(0, 60)}...`,
        text: `${project.title} ${note.text}`,
        nav: `project-notes/${project.id}`,
        section: 'Project-Specific Notes'
      });
    });
  });

  // Index snippets
  State.snippets.forEach(snippet => {
    State.searchIndex.push({
      type: 'snippet',
      label: `Snippet: ${snippet.title}`,
      text: `${snippet.title} ${snippet.tags.join(' ')} ${State.snippetCode[snippet.id] || ''}`,
      nav: snippet.section_ref,
      section: 'Code Snippets'
    });
  });
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function renderSidebar() {
  const nav = document.getElementById('nav-list');
  nav.innerHTML = '';

  // Home link
  const homeItem = el('div', {
    class: 'nav-item nav-home',
    role: 'treeitem',
    tabindex: '0'
  });
  homeItem.innerHTML = `<span class="icon ti-home" aria-hidden="true"></span> Home`;
  homeItem.addEventListener('click', () => {
    renderHome();
    setActiveNav(homeItem);
  });
  homeItem.addEventListener('keydown', e => e.key === 'Enter' && homeItem.click());
  nav.appendChild(homeItem);
  State.sections.forEach(section => {
    const group = el('div', {
      class: 'nav-group',
      role: 'treeitem'
    });
    const groupLabel = el('div', {
      class: 'nav-group-label',
      tabindex: '0',
      'aria-expanded': 'false'
    });
    groupLabel.innerHTML = `
      <span class="icon ${section.icon || 'ti-file'}" aria-hidden="true"></span>
      <span class="nav-label-text">${section.title}</span>
      <span class="nav-count">${(section.subsections || []).length}</span>
      <span class="icon ti-chevron-right nav-chevron" aria-hidden="true"></span>
    `;
    const subList = el('div', {
      class: 'nav-sub-list',
      role: 'group',
      hidden: true
    });
    (section.subsections || []).forEach(sub => {
      const subItem = el('div', {
        class: 'nav-item nav-sub-item',
        role: 'treeitem',
        tabindex: '0',
        'data-section': section.id,
        'data-sub': sub.id
      });
      subItem.textContent = sub.title;
      subItem.addEventListener('click', () => {
        navigateTo(section.id, sub.id);
        setActiveNav(subItem);
      });
      subItem.addEventListener('keydown', e => e.key === 'Enter' && subItem.click());
      subList.appendChild(subItem);
    });
    groupLabel.addEventListener('click', () => {
      const open = !subList.hidden;
      subList.hidden = open;
      groupLabel.setAttribute('aria-expanded', String(!open));
      groupLabel.classList.toggle('open', !open);
    });
    groupLabel.addEventListener('keydown', e => e.key === 'Enter' && groupLabel.click());
    group.appendChild(groupLabel);
    group.appendChild(subList);
    nav.appendChild(group);
  });
}
function setActiveNav(target) {
  document.querySelectorAll('.nav-item.active, .nav-home.active').forEach(n => n.classList.remove('active'));
  target.classList.add('active');
}

// ─── Navigation ──────────────────────────────────────────────────────────────

function navigateTo(sectionId, subId) {
  const section = State.sections.find(s => s.id === sectionId);
  if (!section) return;
  State.activeSection = section;
  const hash = subId ? `#${sectionId}/${subId}` : `#${sectionId}`;
  history.pushState({
    sectionId,
    subId
  }, '', hash);
  renderSection(section, subId);
  updateBreadcrumb(section, subId);
  document.getElementById('main').scrollTop = 0;
}
function navigateToHash() {
  const hash = location.hash.replace('#', '');
  if (!hash) return false;
  const [sectionId, subId] = hash.split('/');
  const section = State.sections.find(s => s.id === sectionId);
  if (!section) return false;
  renderSection(section, subId);
  updateBreadcrumb(section, subId);
  State.activeSection = section;

  // Highlight the right nav item
  requestAnimationFrame(() => {
    const navItem = document.querySelector(`[data-section="${sectionId}"][data-sub="${subId}"]`);
    if (navItem) {
      setActiveNav(navItem);
      // Open the parent group
      const group = navItem.closest('.nav-group');
      if (group) {
        const subList = group.querySelector('.nav-sub-list');
        const label = group.querySelector('.nav-group-label');
        if (subList) subList.hidden = false;
        if (label) {
          label.setAttribute('aria-expanded', 'true');
          label.classList.add('open');
        }
      }
    }
  });
  return true;
}
window.addEventListener('popstate', e => {
  if (e.state) navigateTo(e.state.sectionId, e.state.subId);else renderHome();
});

// ─── Home ────────────────────────────────────────────────────────────────────

function renderHome() {
  history.pushState({}, '', '#');
  updateBreadcrumb(null, null);
  const area = document.getElementById('content-area');
  area.innerHTML = '';
  area.appendChild(el('h1', {
    class: 'page-title'
  }, 'ACHI Analyst Reference Hub'));
  area.appendChild(el('p', {
    class: 'page-subtitle'
  }, 'Your go-to reference for analytical standards, SAS patterns, and project guidance.'));

  // Quick-access cards for four most-referenced rules
  const quickLinks = [{
    label: 'SELECT DISTINCT',
    desc: 'Use it by default in every PROC SQL query',
    nav: ['sql-best-practices', 'select-distinct'],
    badge: 'rule'
  }, {
    label: 'NODUPKEY pitfalls',
    desc: "Don't use it to select a ranked row per ID",
    nav: ['ids-deduplication', 'deduplication'],
    badge: 'danger'
  }, {
    label: 'Date overlap logic',
    desc: 'Three conditions to catch all concurrent claims',
    nav: ['concurrent-claims', 'date-overlap-definition'],
    badge: 'danger'
  }, {
    label: 'Date conditions in joins',
    desc: 'Put right-table filters in ON, not WHERE',
    nav: ['sql-best-practices', 'date-conditions-joins'],
    badge: 'danger'
  }];
  const grid = el('div', {
    class: 'home-grid'
  });
  quickLinks.forEach(link => {
    const card = el('div', {
      class: `home-card home-card--${link.badge}`
    });
    card.innerHTML = `
      <div class="home-card-badge badge--${link.badge}">${link.badge.toUpperCase()}</div>
      <div class="home-card-title">${link.label}</div>
      <div class="home-card-desc">${link.desc}</div>
      <span class="icon ti-arrow-right home-card-arrow" aria-hidden="true"></span>
    `;
    card.addEventListener('click', () => navigateTo(...link.nav));
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', e => e.key === 'Enter' && card.click());
    grid.appendChild(card);
  });
  area.appendChild(grid);

  // Section overview list
  area.appendChild(el('h2', {
    class: 'section-h'
  }, 'All sections'));
  const sectionList = el('div', {
    class: 'section-overview'
  });
  State.sections.forEach(section => {
    const item = el('div', {
      class: 'section-overview-item'
    });
    item.innerHTML = `
      <span class="icon ${section.icon || 'ti-file'}" aria-hidden="true"></span>
      <span class="section-overview-title">${section.title}</span>
      <span class="section-overview-count">${(section.subsections || []).length} topics</span>
    `;
    item.addEventListener('click', () => {
      const firstSub = (section.subsections || [])[0];
      if (firstSub) navigateTo(section.id, firstSub.id);
    });
    sectionList.appendChild(item);
  });
  area.appendChild(sectionList);
}

// ─── Section rendering ───────────────────────────────────────────────────────

function renderSection(section, subId) {
  const area = document.getElementById('content-area');
  area.innerHTML = '';

  // Special rendering for project notes section
  if (section.id === 'project-notes' || section.id.includes('project')) {
    renderProjectNotes(area, subId);
    return;
  }

  // Find which subsection(s) to render
  const subsToRender = subId ? (section.subsections || []).filter(s => s.id === subId) : section.subsections || [];
  if (subsToRender.length === 0) {
    area.appendChild(el('p', {
      class: 'empty-state'
    }, 'No content found for this section.'));
    return;
  }
  area.appendChild(el('h1', {
    class: 'page-title'
  }, section.title));
  subsToRender.forEach(sub => {
    const subSection = el('section', {
      class: 'subsection',
      id: sub.id
    });
    subSection.appendChild(el('h2', {
      class: 'subsection-title'
    }, sub.title));

    // Render rules
    (sub.rules || []).forEach(rule => {
      subSection.appendChild(renderRuleCard(rule));
    });

    // Render taxonomy cards if present
    if (sub.taxonomy_cards) {
      const taxGrid = el('div', {
        class: 'taxonomy-grid'
      });
      sub.taxonomy_cards.forEach(card => {
        taxGrid.appendChild(renderTaxonomyCard(card));
      });
      subSection.appendChild(taxGrid);
    }

    // Render placeholder visualization cards
    if (sub.placeholder_cards) {
      const vizGrid = el('div', {
        class: 'viz-grid'
      });
      sub.placeholder_cards.forEach(card => {
        vizGrid.appendChild(renderVizPlaceholder(card));
      });
      subSection.appendChild(vizGrid);
    }

    // Render decision tree if present
    if (section.decision_trees) {
      section.decision_trees.forEach(tree => {
        subSection.appendChild(renderDecisionTree(tree));
      });
    }

    // Render do/don't table if this is the quick-reference section
    if (sub.dos_donts) {
      subSection.appendChild(renderDosDonts(sub.dos_donts));
    }
    area.appendChild(subSection);
  });
}

// ─── Rule card rendering ─────────────────────────────────────────────────────

function renderRuleCard(rule) {
  const tpl = document.getElementById('tpl-rule-card').content.cloneNode(true);
  const card = tpl.querySelector('.rule-card');
  card.dataset.type = rule.type || 'rule';
  card.classList.add(`rule-card--${rule.type || 'rule'}`);
  const badgeLabels = {
    rule: 'RULE',
    danger: 'DANGER',
    warning: 'WATCH OUT',
    tip: 'TIP',
    placeholder: 'PLACEHOLDER'
  };
  card.querySelector('.rule-badge').textContent = badgeLabels[rule.type] || 'RULE';
  card.querySelector('.rule-badge').className = `rule-badge badge--${rule.type || 'rule'}`;
  card.querySelector('.rule-title').textContent = rule.title;
  const body = card.querySelector('.rule-body');
  body.textContent = rule.body || '';

  // List
  if (rule.list && rule.list.length) {
    const listEl = card.querySelector('.rule-list');
    listEl.hidden = false;
    rule.list.forEach(item => {
      listEl.appendChild(el('li', {}, item));
    });
  }

  // Table
  if (rule.table) {
    const tableWrap = renderTable(rule.table);
    card.querySelector('.rule-body').after(tableWrap);
  }

  // Callout
  if (rule.callout) {
    const callout = card.querySelector('.rule-callout');
    callout.hidden = false;
    callout.className = `rule-callout callout--${rule.callout.type || 'tip'}`;
    callout.innerHTML = `
      <strong class="callout-title">${rule.callout.title}</strong>
      <span class="callout-body">${rule.callout.body}</span>
    `;
  }

  // Tip box
  if (rule.tip) {
    const tipBox = el('div', {
      class: 'tip-box'
    });
    tipBox.innerHTML = `<span class="icon ti-bulb" aria-hidden="true"></span> ${rule.tip}`;
    card.querySelector('.rule-body').after(tipBox);
  }

  // Checklist (interactive)
  if (rule.checklist) {
    const tplCl = document.getElementById('tpl-checklist').content.cloneNode(true);
    const ul = tplCl.querySelector('.interactive-checklist');
    rule.checklist.forEach((item, i) => {
      const tplItem = document.getElementById('tpl-checklist-item').content.cloneNode(true);
      const input = tplItem.querySelector('input');
      input.id = `check-${rule.id}-${i}`;
      tplItem.querySelector('label').setAttribute('for', input.id);
      tplItem.querySelector('.checklist-text').textContent = item;
      ul.appendChild(tplItem);
    });
    card.appendChild(ul);
  }

  // Comparison (wrong vs correct snippets)
  if (rule.comparison) {
    const compWrap = el('div', {
      class: 'snippet-comparison'
    });
    const wrongWrap = el('div', {
      class: 'comparison-side comparison-side--wrong'
    });
    wrongWrap.appendChild(el('div', {
      class: 'comparison-label'
    }, rule.comparison.wrong.label));
    wrongWrap.appendChild(renderSnippet(rule.comparison.wrong.snippet_ref));
    const correctWrap = el('div', {
      class: 'comparison-side comparison-side--correct'
    });
    correctWrap.appendChild(el('div', {
      class: 'comparison-label'
    }, rule.comparison.correct.label));
    correctWrap.appendChild(renderSnippet(rule.comparison.correct.snippet_ref));
    compWrap.appendChild(wrongWrap);
    compWrap.appendChild(correctWrap);
    card.querySelector('.rule-snippet-slot').replaceWith(compWrap);
  }

  // Single snippet
  if (rule.snippet_ref && !rule.comparison) {
    const slot = card.querySelector('.rule-snippet-slot');
    slot.hidden = false;
    slot.replaceWith(renderSnippet(rule.snippet_ref));
  }

  // Flag button
  card.querySelector('.flag-btn').addEventListener('click', () => {
    showToast('Flagging coming soon — this will open a GitHub Issue');
  });
  return card;
}

// ─── Snippet rendering ───────────────────────────────────────────────────────

function renderSnippet(snippetId) {
  const meta = State.snippets.find(s => s.id === snippetId);
  const code = State.snippetCode[snippetId];
  if (!meta) {
    const unknown = el('div', {
      class: 'snippet-block snippet-error'
    });
    unknown.textContent = `Snippet "${snippetId}" not found in manifest`;
    return unknown;
  }
  if (meta.status === 'placeholder' || !code) {
    const tpl = document.getElementById('tpl-placeholder-snippet').content.cloneNode(true);
    const block = tpl.querySelector('.snippet-block');
    block.querySelector('.snippet-title').textContent = meta.title;
    block.querySelector('.copy-btn').addEventListener('click', () => {
      const placeholder = '/* [Code snippet to be added] */';
      copyToClipboard(placeholder);
    });
    block.querySelector('.contribute-btn').addEventListener('click', () => {
      const url = `https://github.com/YOUR_ORG/achi-hub/issues/new?title=Add+snippet:+${encodeURIComponent(meta.title)}&labels=snippet-contribution&body=**Snippet+ID:**+${meta.id}%0A%0A**Suggested+code:**%0A%0A\`\`\`sas%0A%0A\`\`\``;
      window.open(url, '_blank');
    });
    return block;
  }
  const tpl = document.getElementById('tpl-snippet-block').content.cloneNode(true);
  const block = tpl.querySelector('.snippet-block');
  block.querySelector('.snippet-lang').textContent = (meta.language || 'sas').toUpperCase();
  block.querySelector('.snippet-title').textContent = meta.title;
  block.querySelector('code').textContent = code;
  block.querySelector('.copy-btn').addEventListener('click', () => {
    copyToClipboard(code);
    const btn = block.querySelector('.copy-btn');
    btn.innerHTML = '<span class="icon ti-check"></span> Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = '<span class="icon ti-copy"></span> Copy';
      btn.classList.remove('copied');
    }, 2000);
  });
  block.querySelector('.suggest-btn').addEventListener('click', () => {
    const url = `https://github.com/YOUR_ORG/achi-hub/issues/new?title=Suggest+edit:+${encodeURIComponent(meta.title)}&labels=snippet-edit&body=**Snippet+ID:**+${meta.id}%0A%0A**Suggested+change:**`;
    window.open(url, '_blank');
  });
  return block;
}

// ─── Decision tree ───────────────────────────────────────────────────────────

function renderDecisionTree(treeDef) {
  const tpl = document.getElementById('tpl-decision-tree').content.cloneNode(true);
  const container = tpl.querySelector('.decision-tree');
  container.querySelector('.tree-title').textContent = treeDef.title;
  container.querySelector('.tree-description').textContent = treeDef.description;
  const body = container.querySelector('.tree-body');
  const resultArea = container.querySelector('.tree-result');
  let currentNodeId = 'start';
  function renderNode(nodeId) {
    body.innerHTML = '';
    resultArea.hidden = true;
    const node = treeDef.nodes.find(n => n.id === nodeId);
    if (!node) return;
    if (node.type === 'result-success' || node.type === 'result-fail') {
      resultArea.hidden = false;
      resultArea.className = `tree-result tree-result--${node.type === 'result-success' ? 'success' : 'fail'}`;
      resultArea.innerHTML = `
        <div class="result-title">${node.text}</div>
        <div class="result-body">${node.body || ''}</div>
      `;
      if (node.snippet_ref) {
        resultArea.appendChild(renderSnippet(node.snippet_ref));
      }
      return;
    }
    const questionEl = el('div', {
      class: 'tree-question'
    });
    questionEl.innerHTML = `<p class="tree-question-text">${node.text}</p>`;
    if (node.condition) {
      questionEl.innerHTML += `<code class="tree-condition">${node.condition}</code>`;
    }
    const buttonsEl = el('div', {
      class: 'tree-buttons'
    });
    if (node.yes) {
      const yesBtn = el('button', {
        class: 'tree-btn tree-btn--yes'
      });
      yesBtn.innerHTML = '<span class="icon ti-check"></span> Yes';
      yesBtn.addEventListener('click', () => {
        currentNodeId = node.yes;
        renderNode(node.yes);
      });
      buttonsEl.appendChild(yesBtn);
    }
    if (node.no) {
      const noBtn = el('button', {
        class: 'tree-btn tree-btn--no'
      });
      noBtn.innerHTML = '<span class="icon ti-x"></span> No';
      noBtn.addEventListener('click', () => {
        currentNodeId = node.no;
        renderNode(node.no);
      });
      buttonsEl.appendChild(noBtn);
    }
    questionEl.appendChild(buttonsEl);
    body.appendChild(questionEl);
  }
  renderNode('start');
  container.querySelector('.tree-reset-btn').addEventListener('click', () => {
    currentNodeId = 'start';
    renderNode('start');
  });
  return container;
}

// ─── Taxonomy cards ──────────────────────────────────────────────────────────

function renderTaxonomyCard(card) {
  const div = el('div', {
    class: 'taxonomy-card'
  });
  div.innerHTML = `
    <div class="taxonomy-badge">${card.abbreviation}</div>
    <div class="taxonomy-name">${card.full_name}</div>
    <div class="taxonomy-meta">
      ${card.funding ? `<span class="taxonomy-tag">${card.funding}</span>` : ''}
      ${card.coverage ? `<span class="taxonomy-tag">${card.coverage}</span>` : ''}
    </div>
    <div class="taxonomy-services">${card.services || ''}</div>
    ${card.identification.length ? `
      <div class="taxonomy-id-label">How to identify</div>
      <ul class="taxonomy-id-list">
        ${card.identification.map(i => `<li>${i}</li>`).join('')}
      </ul>
    ` : ''}
    ${card.notes.length ? `
      <ul class="taxonomy-notes">
        ${card.notes.map(n => `<li class="taxonomy-note">${n}</li>`).join('')}
      </ul>
    ` : ''}
  `;
  return div;
}

// ─── Project notes ───────────────────────────────────────────────────────────

function renderProjectNotes(area, activeProjectId) {
  area.appendChild(el('h1', {
    class: 'page-title'
  }, 'Project-Specific Notes'));
  const chipRow = el('div', {
    class: 'project-chips'
  });
  const noteAreas = {};
  const defaultProject = activeProjectId || State.projects[0] && State.projects[0].id;
  State.projects.forEach(project => {
    const chip = el('button', {
      class: 'project-chip'
    });
    chip.textContent = project.title;
    if (project.id === defaultProject) chip.classList.add('active');
    const notesDiv = el('div', {
      class: 'project-notes',
      hidden: project.id !== defaultProject
    });
    notesDiv.id = `proj-${project.id}`;
    const ul = el('ul', {
      class: 'project-checklist'
    });
    project.notes.forEach(note => {
      const li = el('li', {
        class: `project-note project-note--${note.type || 'rule'}`
      });
      li.textContent = note.text;
      if (note.link_ref) {
        const link = el('a', {
          class: 'note-link',
          href: `#${note.link_ref}`
        });
        link.textContent = ' → See rule';
        li.appendChild(link);
      }
      ul.appendChild(li);
    });
    notesDiv.appendChild(ul);
    noteAreas[project.id] = notesDiv;
    chip.addEventListener('click', () => {
      document.querySelectorAll('.project-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      Object.values(noteAreas).forEach(n => n.hidden = true);
      notesDiv.hidden = false;
    });
    chipRow.appendChild(chip);
    area.appendChild(notesDiv); // append first so we can reorder
  });
  area.insertBefore(chipRow, area.querySelector('.project-notes'));
}

// ─── Do/Don't table ──────────────────────────────────────────────────────────

function renderDosDonts(dosDonts) {
  const wrap = el('div', {
    class: 'dos-donts'
  });
  const table = el('table', {
    class: 'dos-donts-table'
  });
  const thead = el('thead');
  thead.innerHTML = `<tr>
    <th class="do-header">DO</th>
    <th class="dont-header">DON'T</th>
  </tr>`;
  const tbody = el('tbody');
  dosDonts.forEach(row => {
    const tr = el('tr');
    tr.innerHTML = `
      <td class="do-cell">${row.do}</td>
      <td class="dont-cell">${row.dont}</td>
    `;
    tbody.appendChild(tr);
  });
  table.appendChild(thead);
  table.appendChild(tbody);
  wrap.appendChild(table);
  return wrap;
}

// ─── Quick reference panel ───────────────────────────────────────────────────

function renderQuickRef() {
  const qrSection = State.sections.find(s => s.id === 'quick-reference');
  if (!qrSection) return;
  const body = document.getElementById('quick-ref-body');
  const sub = (qrSection.subsections || [])[0];
  if (sub && sub.dos_donts) {
    body.appendChild(renderDosDonts(sub.dos_donts));
  }
}

// ─── Viz placeholders ────────────────────────────────────────────────────────

function renderVizPlaceholder(card) {
  const div = el('div', {
    class: 'viz-placeholder-card'
  });
  div.innerHTML = `
    <span class="icon ${card.icon}" aria-hidden="true"></span>
    <div class="viz-card-title">${card.title}</div>
    <div class="viz-card-desc">${card.description}</div>
    <span class="viz-card-status">Coming soon</span>
  `;
  return div;
}

// ─── Table helper ────────────────────────────────────────────────────────────

function renderTable(tableDef) {
  const wrap = el('div', {
    class: 'rule-table-wrap'
  });
  const table = el('table', {
    class: 'rule-table'
  });
  const thead = el('thead');
  const headerRow = el('tr');
  tableDef.headers.forEach(h => {
    headerRow.appendChild(el('th', {}, h));
  });
  thead.appendChild(headerRow);
  const tbody = el('tbody');
  tableDef.rows.forEach(row => {
    const tr = el('tr');
    row.forEach((cell, i) => {
      const td = el(i === 0 ? 'th' : 'td', {
        scope: i === 0 ? 'row' : undefined
      }, cell);
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(thead);
  table.appendChild(tbody);
  wrap.appendChild(table);
  return wrap;
}

// ─── Breadcrumb ──────────────────────────────────────────────────────────────

function updateBreadcrumb(section, subId) {
  const bc = document.getElementById('breadcrumb');
  if (!section) {
    bc.innerHTML = '';
    return;
  }
  const sub = subId ? (section.subsections || []).find(s => s.id === subId) : null;
  bc.innerHTML = `
    <span class="bc-home" role="button" tabindex="0">Home</span>
    <span class="bc-sep" aria-hidden="true">›</span>
    <span class="bc-section">${section.title}</span>
    ${sub ? `<span class="bc-sep" aria-hidden="true">›</span><span class="bc-sub">${sub.title}</span>` : ''}
  `;
  bc.querySelector('.bc-home').addEventListener('click', renderHome);
}

// ─── Search ──────────────────────────────────────────────────────────────────

function bindSearch() {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      results.hidden = true;
      return;
    }
    const hits = State.searchIndex.filter(entry => entry.text.toLowerCase().includes(q)).slice(0, 12);
    results.innerHTML = '';
    if (hits.length === 0) {
      results.innerHTML = `
        <div class="search-empty">
          No results for "${input.value}"
          <a class="search-suggest-link" href="https://github.com/YOUR_ORG/achi-hub/issues/new?title=Add+content:+${encodeURIComponent(input.value)}&labels=content-request" target="_blank">
            Suggest adding this topic →
          </a>
        </div>`;
    } else {
      hits.forEach(hit => {
        const item = el('div', {
          class: 'search-result-item',
          role: 'option',
          tabindex: '0'
        });
        const highlighted = highlight(hit.label, q);
        item.innerHTML = `
          <span class="search-result-type search-type--${hit.type}">${hit.type.replace('-', ' ')}</span>
          <span class="search-result-label">${highlighted}</span>
          ${hit.section ? `<span class="search-result-section">${hit.section}</span>` : ''}
        `;
        item.addEventListener('click', () => {
          input.value = '';
          results.hidden = true;
          const [sectionId, subId] = (hit.nav || '').split('/');
          if (sectionId) navigateTo(sectionId, subId);
        });
        item.addEventListener('keydown', e => e.key === 'Enter' && item.click());
        results.appendChild(item);
      });
    }
    results.hidden = false;
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      results.hidden = true;
      input.blur();
    }
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('#search-wrap') && !e.target.closest('#search-results')) {
      results.hidden = true;
    }
  });

  // ⌘K / Ctrl+K shortcut
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      input.focus();
      input.select();
    }
  });
}
function highlight(text, query) {
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}

// ─── Global event bindings ────────────────────────────────────────────────────

function bindGlobalEvents() {
  bindSearch();
  document.getElementById('sidebar-toggle').addEventListener('click', () => {
    State.sidebarOpen = !State.sidebarOpen;
    document.getElementById('sidebar').classList.toggle('collapsed', !State.sidebarOpen);
    document.getElementById('layout').classList.toggle('sidebar-collapsed', !State.sidebarOpen);
  });
  document.getElementById('quick-ref-toggle').addEventListener('click', () => {
    State.quickRefOpen = !State.quickRefOpen;
    const panel = document.getElementById('quick-ref-panel');
    panel.hidden = !State.quickRefOpen;
    document.getElementById('layout').classList.toggle('quick-ref-open', State.quickRefOpen);
  });
  document.getElementById('quick-ref-close').addEventListener('click', () => {
    State.quickRefOpen = false;
    document.getElementById('quick-ref-panel').hidden = true;
    document.getElementById('layout').classList.remove('quick-ref-open');
  });
}

// ─── Utilities ───────────────────────────────────────────────────────────────

function el(tag, attrs = {}, text = '') {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (v !== undefined) node.setAttribute(k, v);
  });
  if (text) node.textContent = text;
  return node;
}
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard')).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Copied to clipboard');
  });
}
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('toast-show');
  setTimeout(() => toast.classList.remove('toast-show'), 2500);
}

// ─── Init ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', boot);
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/achi-hub-scaffold/site/app.js", error: String((e && e.message) || e) }); }

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tag = __ds_scope.Tag;

})();
