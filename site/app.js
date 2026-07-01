/**
 * ACHI Analyst Reference Hub — app.js
 *
 * Loads all content from /content/ JSON files and .sas snippet files,
 * then renders the full site dynamically. No content is hardcoded here.
 *
 * Content lives in:
 *   /content/sections/  — section JSON files (numbered 01- through 12-)
 *   /content/snippets/  — manifest.json + individual .sas files
 *
 * To update content: edit the JSON or .sas files and redeploy.
 * To add a new section: add a new numbered JSON file in /content/sections/.
 */

'use strict';

// ─── State ───────────────────────────────────────────────────────────────────

const State = {
  sections: [],
  snippets: [],        // manifest entries
  config: {},          // loaded from config.json
  snippetCode: {},     // id -> raw SAS string
  activeSection: null,
  activeSubsection: null,
  searchIndex: [],     // flat list of searchable entries
  sidebarOpen: true,
  quickRefOpen: false,
};

// ─── Bootstrap ───────────────────────────────────────────────────────────────

async function boot() {
  await Promise.all([
    loadConfig(),
    loadSections(),
    loadSnippets(),
  ]);
  buildSearchIndex();
  renderSidebar();
  renderQuickRef();
  bindGlobalEvents();
  navigateToHash() || renderHome();
}

// ─── Data loading ────────────────────────────────────────────────────────────

async function loadConfig() {
  try {
    const res = await fetch('config.json');
    State.config = await res.json();
  } catch (e) {
    console.warn('Could not load config.json:', e);
    State.config = { github: { repo: '', branch: 'main', snippets_path: 'site/content/snippets' } };
  }
}

function ghUrl(path) {
  const { repo } = State.config.github || {};
  return repo ? `https://github.com/${repo}/${path}` : '#';
}

function ghEditUrl(filePath) {
  const { branch = 'main' } = State.config.github || {};
  return ghUrl(`edit/${branch}/${filePath}`);
}

// Returns a mailto: or GitHub Issues URL for flag/suggest actions.
// Set feedback.email in config.json to use email; leave blank to use GitHub.
function feedbackUrl(subject, body) {
  const email = (State.config.feedback || {}).email;
  if (email) {
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  const { repo } = State.config.github || {};
  if (repo) {
    return ghUrl(`issues/new?title=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }
  return '#';
}

// Returns a mailto: or GitHub edit URL for "Suggest edit" on a code block.
function suggestEditUrl(meta) {
  const email = (State.config.feedback || {}).email;
  if (email) {
    const subject = `Suggest edit: ${meta.title}`;
    const body = [`Code: ${meta.title}`, ``, `Suggested change:`, ``].join('\n');
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  const { snippets_path = 'site/content/snippets' } = State.config.github || {};
  return meta.file ? ghEditUrl(`${snippets_path}/${meta.file}`) : '#';
}

async function loadSections() {
  // Section files are numbered 01-12; fetch them in order
  const indices = Array.from({length: 12}, (_, i) =>
    String(i + 1).padStart(2, '0'));

  // Fetch the file list from a manifest or just try known filenames
  // We use a sections-manifest.json generated at build time (see netlify.toml)
  // Fallback: try each known filename
  const filenames = [
    '01-code-structure',
    '02-sql-best-practices',
    '03-ids-deduplication',
    '04-concurrent-claims',
    '05-claims-classification',
    '06-member-enrollment',
    '07-validation-practices',
    '08-macro-patterns',
    '09-provider-taxonomy',
    '11-visualizations',
    '12-quick-reference',
  ];

  const results = await Promise.allSettled(
    filenames.map(f => fetch(`content/sections/${f}.json`).then(r => r.json()))
  );

  State.sections = results
    .filter(r => r.status === 'fulfilled')
    .map(r => r.value)
    .sort((a, b) => a.order - b.order);
}

async function loadSnippets() {
  try {
    const res = await fetch('content/snippets/manifest.json');
    const manifest = await res.json();
    State.snippets = manifest;

    // Load actual .sas file content for active snippets
    await Promise.allSettled(
      manifest
        .filter(s => s.file && s.status === 'active')
        .map(async s => {
          try {
            const r = await fetch(`content/snippets/${s.file}`);
            State.snippetCode[s.id] = await r.text();
          } catch (e) {
            console.warn(`Could not load snippet: ${s.file}`);
          }
        })
    );
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
      nav: section.id,
    });

    (section.subsections || []).forEach(sub => {
      State.searchIndex.push({
        type: 'subsection',
        label: `${section.title} — ${sub.title}`,
        text: sub.title,
        nav: `${section.id}/${sub.id}`,
        section: section.title,
      });

      (sub.rules || []).forEach(rule => {
        State.searchIndex.push({
          type: rule.type || 'sop',
          label: rule.title,
          text: `${rule.title} ${rule.body || ''} ${(rule.list || []).join(' ')}`,
          nav: `${section.id}/${sub.id}`,
          section: section.title,
          subsection: sub.title,
        });
      });
    });
  });

  // Index snippets
  State.snippets.forEach(snippet => {
    State.searchIndex.push({
      type: 'code',
      label: `Code: ${snippet.title}`,
      text: `${snippet.title} ${snippet.tags.join(' ')} ${State.snippetCode[snippet.id] || ''}`,
      nav: snippet.section_ref,
      section: 'Code Examples',
    });
  });
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function renderSidebar() {
  const nav = document.getElementById('nav-list');
  nav.innerHTML = '';

  // Home link
  const homeItem = el('div', {class: 'nav-item nav-home', role: 'treeitem', tabindex: '0'});
  homeItem.innerHTML = `<span class="icon ti-home" aria-hidden="true"></span> Home`;
  homeItem.addEventListener('click', () => { renderHome(); setActiveNav(homeItem); });
  homeItem.addEventListener('keydown', e => e.key === 'Enter' && homeItem.click());
  nav.appendChild(homeItem);

  State.sections.forEach(section => {
    const group = el('div', {class: 'nav-group', role: 'treeitem'});

    const groupLabel = el('div', {class: 'nav-group-label', tabindex: '0',
      'aria-expanded': 'false', 'data-section-id': section.id});
    groupLabel.innerHTML = `
      <span class="icon ${section.icon || 'ti-file'}" aria-hidden="true"></span>
      <span class="nav-label-text">${section.title}</span>
      <span class="nav-count">${(section.subsections || []).length}</span>
      <span class="icon ti-chevron-right nav-chevron" aria-hidden="true"></span>
    `;

    const subList = el('div', {class: 'nav-sub-list', role: 'group', hidden: true});

    (section.subsections || []).forEach(sub => {
      const subItem = el('div', {
        class: 'nav-item nav-sub-item',
        role: 'treeitem',
        tabindex: '0',
        'data-section': section.id,
        'data-sub': sub.id,
      });
      subItem.textContent = sub.title;
      subItem.addEventListener('click', () => {
        navigateTo(section.id, sub.id);
        setActiveNav(subItem);
      });
      subItem.addEventListener('keydown', e => e.key === 'Enter' && subItem.click());
      subList.appendChild(subItem);
    });

    // Chevron: toggle expand/collapse only
    groupLabel.querySelector('.nav-chevron').addEventListener('click', e => {
      e.stopPropagation();
      const open = !subList.hidden;
      subList.hidden = open;
      groupLabel.setAttribute('aria-expanded', String(!open));
      groupLabel.classList.toggle('open', !open);
    });

    // Label (non-chevron area): navigate to section home + expand
    groupLabel.addEventListener('click', () => {
      subList.hidden = false;
      groupLabel.setAttribute('aria-expanded', 'true');
      groupLabel.classList.add('open');
      navigateSectionHome(section);
      setActiveNav(groupLabel);
    });
    groupLabel.addEventListener('keydown', e => e.key === 'Enter' && groupLabel.click());

    group.appendChild(groupLabel);
    group.appendChild(subList);
    nav.appendChild(group);
  });
}

function setActiveNav(target) {
  document.querySelectorAll('.nav-item.active, .nav-home.active')
    .forEach(n => n.classList.remove('active'));
  target.classList.add('active');
}

// ─── Navigation ──────────────────────────────────────────────────────────────

function navigateSectionHome(section) {
  State.activeSection = section;
  history.pushState({sectionId: section.id}, '', `#${section.id}`);
  updateBreadcrumb(section, null);
  renderSectionHome(section);
  document.getElementById('main').scrollTop = 0;
}

function navigateTo(sectionId, subId) {
  const section = State.sections.find(s => s.id === sectionId);
  if (!section) return;

  if (!subId) {
    navigateSectionHome(section);
    return;
  }

  State.activeSection = section;
  history.pushState({sectionId, subId}, '', `#${sectionId}/${subId}`);
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

  State.activeSection = section;

  if (!subId) {
    renderSectionHome(section);
    updateBreadcrumb(section, null);
    requestAnimationFrame(() => {
      const label = document.querySelector(`.nav-group-label[data-section-id="${sectionId}"]`);
      if (label) setActiveNav(label);
    });
    return true;
  }

  renderSection(section, subId);
  updateBreadcrumb(section, subId);

  // Highlight the right nav item
  requestAnimationFrame(() => {
    const navItem = document.querySelector(
      `[data-section="${sectionId}"][data-sub="${subId}"]`
    );
    if (navItem) {
      setActiveNav(navItem);
      // Open the parent group
      const group = navItem.closest('.nav-group');
      if (group) {
        const subList = group.querySelector('.nav-sub-list');
        const label = group.querySelector('.nav-group-label');
        if (subList) subList.hidden = false;
        if (label) { label.setAttribute('aria-expanded', 'true'); label.classList.add('open'); }
      }
    }
  });
  return true;
}

window.addEventListener('popstate', e => {
  if (e.state) navigateTo(e.state.sectionId, e.state.subId);
  else renderHome();
});

// ─── Home ────────────────────────────────────────────────────────────────────

function renderHome() {
  history.pushState({}, '', '#');
  updateBreadcrumb(null, null);

  const area = document.getElementById('content-area');
  area.innerHTML = '';

  area.appendChild(el('h1', {class: 'page-title'}, 'ACHI Analytics Hub'));
  area.appendChild(el('p', {class: 'page-subtitle'},
    'Your go-to reference for analytical standards, SAS code, and project guidance.'));

  // Analytics Tip of the Day — rotates daily
  const TIPS = [
    { label: 'SELECT DISTINCT by default', desc: 'Use SELECT DISTINCT in your PROC SQL queries unless you have a documented reason not to. It surfaces unintended fan-out early — if your row count exceeds your distinct ID count, something is causing duplication.', nav: ['sql-best-practices', 'select-distinct'], badge: 'remember' },
    { label: 'Avoid NODUPKEY for ranked rows', desc: "PROC SORT with NODUPKEY makes it hard to keep track of which rows are dropped. Use FIRST. logic after sorting by your ranking variable to reliably select the top-ranked row per ID.", nav: ['ids-deduplication', 'deduplication'], badge: 'remember' },
    { label: 'Pull claims with an inline subquery', desc: 'Pull claims using an inline subquery in the WHERE clause first, then join for additional fields. Never pull entire claim lines — use &med_varis. to select only the variables you need.', nav: ['sql-best-practices', 'claim-pull-pattern'], badge: 'rule' },
    { label: 'Log your row counts', desc: 'Add a commented-out row count from the SAS log next to the code that created each key table. Validators can then confirm they are reproducing the same result.', nav: ['sql-best-practices', 'select-distinct'], badge: 'rule' },
    { label: 'FIRST. dedup — pick the ranked row', desc: 'Sort by ID and your ranking variable, then use a Data Step with FIRST.id to keep only the top row per ID. This gives you full control over which record is retained.', nav: ['ids-deduplication', 'single-row-per-id'], badge: 'rule' },
    { label: 'Year loops with %do %while', desc: 'Use %do %while with %scan to iterate over a space-separated list of years. This makes it easy to add or remove years without renumbering loop indices.', nav: ['macro-patterns', 'year-loops'], badge: 'rule' },
    { label: 'Standardize your folder structure', desc: 'All project work lives on G:\\ or R:\\. Create the primary project folder before the project starts and place a "Previous Versions" subfolder inside it from day one.', nav: ['code-structure', 'analytics-folder-structure'], badge: 'rule' },
    { label: 'Check the claims classification tab for tips on labeling claims', desc: 'professional/facility or inpatient/outpatient and more.', nav: ['claims-classification', 'professional-facility'], badge: 'remember' },
    { label: 'Payer assignment priority order', desc: 'When a member has multiple coverage records on the same date, follow the documented priority order: Medicare > Medicaid > Commercial. Applying the wrong payer inflates or deflates attributed spend.', nav: ['member-enrollment', 'payer-assignment-medical'], badge: 'remember' },
    { label: 'Use Step 0 for all library setup', desc: 'Put every %let, libname, and global macro variable definition in a dedicated Step 0 file. Include it at the top of every program so paths never need to be changed in more than one place.', nav: ['code-structure', 'library-path-setup'], badge: 'rule' }
  ];

  const today = new Date();
  const yearStart = new Date(today.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((today - yearStart) / 86400000);
  const tip = TIPS[dayOfYear % TIPS.length];

  const tipCard = el('div', {class: `home-card home-card--tip home-card--${tip.badge}`});
  const dateStr = today.toLocaleDateString('en-US', {weekday: 'long', month: 'long', day: 'numeric'});
  tipCard.innerHTML = `
    <div class="home-tip-header">
      <span class="home-tip-label">Analytics Tip of the Day</span>
      <span class="home-tip-date">${dateStr}</span>
    </div>
    <div class="home-card-badge badge--${tip.badge}">${tip.badge.toUpperCase()}</div>
    <div class="home-card-title">${tip.label}</div>
    <div class="home-card-desc">${tip.desc}</div>
    <span class="icon ti-arrow-right home-card-arrow" aria-hidden="true"></span>
  `;
  tipCard.addEventListener('click', () => navigateTo(...tip.nav));
  tipCard.setAttribute('role', 'button');
  tipCard.setAttribute('tabindex', '0');
  tipCard.addEventListener('keydown', e => e.key === 'Enter' && tipCard.click());
  area.appendChild(tipCard);

  // About this site
  const about = el('div', {class: 'about-card'});
  about.innerHTML = `
    <div class="about-card-title"><span class="icon ti-info-circle" aria-hidden="true"></span> About this site</div>
    <p>The ACHI Analytucs Hub is a living reference for ACHI's analytical standards, SAS/SQL patterns, and project conventions. It exists so we can all learn from each other and standardize the way we pull and analyze data.</p>
    <p>Found something out of date, or have a pattern worth adding? Use the <span class="icon ti-flag" aria-hidden="true"></span> flag icon on any rule to mark it as outdated, or use "Suggest edit" on a code snippet to propose a change. Both open a GitHub issue so the team can review it.</p>
  `;
  area.appendChild(about);

  // Section overview list
  area.appendChild(el('h2', {class: 'section-h'}, 'All sections'));
  const sectionList = el('div', {class: 'section-overview'});
  State.sections.forEach(section => {
    const item = el('div', {class: 'section-overview-item'});
    item.innerHTML = `
      <span class="icon ${section.icon || 'ti-file'}" aria-hidden="true"></span>
      <span class="section-overview-title">${section.title}</span>
      <span class="section-overview-count">${(section.subsections || []).length} topics</span>
    `;
    item.addEventListener('click', () => navigateSectionHome(section));
    sectionList.appendChild(item);
  });
  area.appendChild(sectionList);
}

// ─── Section home ────────────────────────────────────────────────────────────

function renderSectionHome(section) {
  const area = document.getElementById('content-area');
  area.innerHTML = '';

  const titleEl = el('h1', {class: 'page-title'});
  titleEl.innerHTML = `<span class="icon ${section.icon || 'ti-file'}" style="font-size:34px;vertical-align:-.1em;margin-right:14px;color:var(--teal)"></span>${section.title}`;
  area.appendChild(titleEl);

  const subs = section.subsections || [];
  area.appendChild(el('h2', {class: 'section-h'}, `${subs.length} topic${subs.length !== 1 ? 's' : ''}`));

  const list = el('div', {class: 'section-overview'});
  subs.forEach(sub => {
    const ruleCount = (sub.rules || []).length;
    const item = el('div', {class: 'section-overview-item'});
    item.innerHTML = `
      <span class="icon ti-article" aria-hidden="true"></span>
      <span class="section-overview-title">${sub.title}</span>
      <span class="section-overview-count">${ruleCount} item${ruleCount !== 1 ? 's' : ''}</span>
    `;
    item.addEventListener('click', () => navigateTo(section.id, sub.id));
    list.appendChild(item);
  });
  area.appendChild(list);
}

// ─── Section rendering ───────────────────────────────────────────────────────

function renderSection(section, subId) {
  const area = document.getElementById('content-area');
  area.innerHTML = '';

  // Find which subsection(s) to render
  const subsToRender = subId
    ? (section.subsections || []).filter(s => s.id === subId)
    : (section.subsections || []);

  if (subsToRender.length === 0) {
    area.appendChild(el('p', {class: 'empty-state'}, 'No content found for this section.'));
    return;
  }

  area.appendChild(el('h1', {class: 'page-title'}, section.title));

  subsToRender.forEach(sub => {
    const subSection = el('section', {class: 'subsection', id: sub.id});
    subSection.appendChild(el('h2', {class: 'subsection-title'}, sub.title));

    // Render rules
    (sub.rules || []).forEach(rule => {
      subSection.appendChild(renderRuleCard(rule, section, sub));
    });

    // Render taxonomy cards if present
    if (sub.taxonomy_cards) {
      const taxGrid = el('div', {class: 'taxonomy-grid'});
      sub.taxonomy_cards.forEach(card => {
        taxGrid.appendChild(renderTaxonomyCard(card));
      });
      subSection.appendChild(taxGrid);
    }

    // Render placeholder visualization cards
    if (sub.placeholder_cards) {
      const vizGrid = el('div', {class: 'viz-grid'});
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

function renderRuleCard(rule, section, sub) {
  const tpl = document.getElementById('tpl-rule-card').content.cloneNode(true);
  const card = tpl.querySelector('.rule-card');

  card.dataset.type = rule.type || 'sop';
  card.classList.add(`rule-card--${rule.type || 'sop'}`);

  const badgeLabels = {
    sop: 'SOP', danger: 'DANGER', remember: 'REMEMBER', warning: 'WATCH OUT',
    tip: 'TIP', placeholder: 'PLACEHOLDER', reference: 'REFERENCE', code: 'CODE',
  };
  card.querySelector('.rule-badge').textContent = badgeLabels[rule.type] || 'RULE';
  card.querySelector('.rule-badge').className = `rule-badge badge--${rule.type || 'sop'}`;
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
    const tipBox = el('div', {class: 'tip-box'});
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
    const compWrap = el('div', {class: 'snippet-comparison'});
    const wrongWrap = el('div', {class: 'comparison-side comparison-side--wrong'});
    wrongWrap.appendChild(el('div', {class: 'comparison-label'}, rule.comparison.wrong.label));
    wrongWrap.appendChild(renderSnippet(rule.comparison.wrong.snippet_ref));
    const correctWrap = el('div', {class: 'comparison-side comparison-side--correct'});
    correctWrap.appendChild(el('div', {class: 'comparison-label'}, rule.comparison.correct.label));
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

  // Flag button → email or GitHub issue pre-filled with context
  card.querySelector('.flag-btn').addEventListener('click', () => {
    const subject = `FLAG: ${rule.title}`;
    const body = [
      `Section: ${section ? section.title : '—'}`,
      `Subsection: ${sub ? sub.title : '—'}`,
      `Rule: ${rule.title}`,
      ``,
      `What's outdated or incorrect:`,
      ``,
    ].join('\n');
    window.open(feedbackUrl(subject, body), '_blank');
  });

  return card;
}

// ─── Snippet rendering ───────────────────────────────────────────────────────

function renderSnippet(snippetId) {
  const meta = State.snippets.find(s => s.id === snippetId);
  const code = State.snippetCode[snippetId];

  if (!meta) {
    const unknown = el('div', {class: 'snippet-block snippet-error'});
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
      const subject = `Contribute: ${meta.title}`;
      const body = [
        `Code: ${meta.title}`,
        ``,
        `Suggested code:`,
        ``,
      ].join('\n');
      window.open(feedbackUrl(subject, body), '_blank');
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
    window.open(suggestEditUrl(meta), '_blank');
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

    const questionEl = el('div', {class: 'tree-question'});
    questionEl.innerHTML = `<p class="tree-question-text">${node.text}</p>`;
    if (node.condition) {
      questionEl.innerHTML += `<code class="tree-condition">${node.condition}</code>`;
    }

    const buttonsEl = el('div', {class: 'tree-buttons'});

    if (node.yes) {
      const yesBtn = el('button', {class: 'tree-btn tree-btn--yes'});
      yesBtn.innerHTML = '<span class="icon ti-check"></span> Yes';
      yesBtn.addEventListener('click', () => {
        currentNodeId = node.yes;
        renderNode(node.yes);
      });
      buttonsEl.appendChild(yesBtn);
    }

    if (node.no) {
      const noBtn = el('button', {class: 'tree-btn tree-btn--no'});
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
  const div = el('div', {class: 'taxonomy-card'});
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

// ─── Do/Don't table ──────────────────────────────────────────────────────────

function renderDosDonts(dosDonts) {
  const wrap = el('div', {class: 'dos-donts'});
  const table = el('table', {class: 'dos-donts-table'});
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
  const div = el('div', {class: 'viz-placeholder-card'});
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
  const wrap = el('div', {class: 'rule-table-wrap'});
  const table = el('table', {class: 'rule-table'});
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
      const td = el(i === 0 ? 'th' : 'td', {scope: i === 0 ? 'row' : undefined}, cell);
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
  if (!section) { bc.innerHTML = ''; return; }

  const sub = subId
    ? (section.subsections || []).find(s => s.id === subId)
    : null;

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
    if (!q) { results.hidden = true; return; }

    const hits = State.searchIndex
      .filter(entry => entry.text.toLowerCase().includes(q))
      .slice(0, 12);

    results.innerHTML = '';
    if (hits.length === 0) {
      results.innerHTML = `
        <div class="search-empty">
          No results for "${input.value}"
          <a class="search-suggest-link" href="${ghUrl(`issues/new?title=${encodeURIComponent(`Add content: ${input.value}`)}&labels=content-request`)}" target="_blank">
            Suggest adding this topic →
          </a>
        </div>`;
    } else {
      hits.forEach(hit => {
        const item = el('div', {class: 'search-result-item', role: 'option', tabindex: '0'});
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
    if (e.key === 'Escape') { results.hidden = true; input.blur(); }
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
  navigator.clipboard.writeText(text)
    .then(() => showToast('Copied to clipboard'))
    .catch(() => {
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
