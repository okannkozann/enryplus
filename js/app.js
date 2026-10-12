/* ==========================================================================
   Lumen AI Console — dashboard behaviour
   Data is synthetic + seeded so each range is deterministic.
   ========================================================================== */

import { ModelsController } from './models.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const nf = new Intl.NumberFormat('en-US');
const pct = (v, d = 0) => `${(v * 100).toFixed(d)}%`;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const ICON = {
  more: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>',
  hide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 3l18 18M10.6 6.1A10 10 0 0 1 12 6c5 0 9 6 9 6a17 17 0 0 1-2.6 3.2M6.2 6.2C4 7.7 3 12 3 12s4 6 9 6a9 9 0 0 0 4.2-1"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5v.5"/></svg>',
  empty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 13h5l2 3h4l2-3h5M5 5h14l2 8v6H3v-6l2-8Z"/></svg>',
};

/* ---------- Seeded data ---------- */
function rng(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const RANGES = {
  '24h': { seed: 11, name: 'last 24 hours', labels: ['00', '03', '06', '09', '12', '15', '18', '21'] },
  '7d': { seed: 23, name: 'last 7 days', labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  '30d': { seed: 37, name: 'last 30 days', labels: ['Sep 13', 'Sep 18', 'Sep 23', 'Sep 28', 'Oct 3', 'Oct 8', 'Oct 12'] },
  '90d': { seed: 51, name: 'last 90 days', labels: ['Jul 14', 'Jul 28', 'Aug 11', 'Aug 25', 'Sep 8', 'Sep 22', 'Oct 6'] },
};

function buildData(key) {
  const { seed, labels } = RANGES[key];
  const r = rng(seed);
  const n = labels.length;
  const wave = (base, amp, phase = 0) =>
    Array.from({ length: n }, (_, i) => Math.max(2, base + Math.sin(i / (n - 1) * Math.PI * 2 + phase) * amp + (r() - 0.5) * amp * 0.6));
  const delta = (spread = 8) => +(r() * spread - spread * 0.3).toFixed(1);
  const models = ['Orion', 'Vega', 'Lyra', 'Atlas', 'Nova'];

  return {
    labels,
    users: {
      value: Math.round(1500 + r() * 800), delta: delta(),
      rows: [['Chat completions', 0.6 + r() * 0.35], ['Vision', 0.35 + r() * 0.4], ['Agents', 0.5 + r() * 0.45]],
    },
    inference: { series: wave(60, 22, 1), unit: 'k req' },
    accuracy: {
      value: (10 + r() * 9).toFixed(1), labels: models,
      groups: models.map(() => [0.4 + r() * 0.6, 0.25 + r() * 0.6, 0.15 + r() * 0.5]),
    },
    growth: { series: wave(30, 10, -1.2).map((v, i) => v + i * 6), rows: [['Signups', r()], ['Activated', r()], ['Paid', r()]] },
    tokens: { bars: Array.from({ length: 12 }, () => [0.2 + r() * 0.8, 0.1 + r() * 0.5]) },
    throughput: {
      a: wave(55, 25, 0.4), b: wave(35, 18, 2.2),
      regions: [
        ['eu-west-1', 3.2], ['us-east-1', 4.8], ['ap-south-1', 1.9], ['us-west-2', 2.7], ['eu-central-1', 2.1], ['ap-northeast-1', 1.4],
      ].map(([name, v]) => [name, +(v * (0.8 + r() * 0.4)).toFixed(1)]),
    },
    latency: { value: (16 + r() * 9).toFixed(2), delta: delta(4), max: (30 + r() * 20).toFixed(0) },
    revenue: { mrr: (15 + r() * 8).toFixed(2), delta: delta(14), nrr: (88 + r() * 12).toFixed(2), gauge: 0.25 + r() * 0.5 },
    weekly: { groups: labels.slice(0, 6).map(() => [0.25 + r() * 0.75, 0.2 + r() * 0.8, 0.15 + r() * 0.85]), labels: labels.slice(0, 6) },
    capacity: { rings: [['GPU', 0.55 + r() * 0.4, '--color-data-1'], ['Memory', 0.4 + r() * 0.4, '--color-data-3'], ['Storage', 0.2 + r() * 0.5, '--color-data-2']] },
    cost: { value: (38 + r() * 14).toFixed(2), budget: 0.4 + r() * 0.5, candles: Array.from({ length: 9 }, () => { const lo = r() * 0.5; return [lo, Math.min(1, lo + 0.2 + r() * 0.4)]; }) },
    cache: { value: 0.3 + r() * 0.4, rows: [r(), r(), r()] },
    jobs: [
      ['support-intent-v4', 'Running', 0.4 + r() * 0.5],
      ['legal-summarizer', 'Succeeded', 1],
      ['sql-copilot-ft-2026-10', 'Succeeded', 1],
      ['vision-defects', 'Failed', 0.2 + r() * 0.3],
    ],
    donut: (() => {
      const raw = models.map(() => 0.3 + r());
      const sum = raw.reduce((a, b) => a + b, 0);
      return models.map((m, i) => [m, raw[i] / sum]);
    })(),
  };
}

/* ---------- Chart primitives (SVG strings; colours via semantic tokens) ---------- */
function smooth(pts) {
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

let gid = 0;
function areaSVG(series, { w = 600, h = 200, max, grid = 4, label }) {
  const top = max ?? Math.max(...series.flatMap((s) => s.values)) * 1.15;
  const lines = Array.from({ length: grid + 1 }, (_, i) => `<line class="area__grid" x1="0" x2="${w}" y1="${(h / grid) * i}" y2="${(h / grid) * i}" vector-effect="non-scaling-stroke"/>`).join('');
  const paths = series.map((s) => {
    const id = `ag${++gid}`;
    const pts = s.values.map((v, i) => [(i / (s.values.length - 1)) * w, h - (v / top) * h]);
    const line = smooth(pts);
    return `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(${s.color});stop-opacity:${s.opacity ?? 0.55}"/><stop offset="1" style="stop-color:var(${s.color});stop-opacity:0.04"/></linearGradient></defs>
      <path d="${line} L${w},${h} L0,${h} Z" fill="url(#${id})"/>
      <path d="${line}" fill="none" style="stroke:var(${s.stroke || s.color})" stroke-width="2" vector-effect="non-scaling-stroke"/>`;
  }).join('');
  return `<svg class="area" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" role="img" aria-label="${esc(label)}">${lines}${paths}</svg>`;
}

function barsHTML(groups, labels, colors, { h = 160, label, wide = false, fmt = (v) => pct(v) }) {
  const max = Math.max(...groups.flat());
  const body = groups.map((g, i) => {
    const tip = `${labels?.[i] ?? `#${i + 1}`}: ${g.map(fmt).join(' · ')}`;
    return `<div class="bars__group" data-tip="${esc(tip)}">${g.map((v, j) => `<span class="bar${wide ? ' bar--wide' : ''}" style="--h:${((v / max) * 100).toFixed(1)}%;--c:var(${colors[j % colors.length]});animation-delay:${i * 30}ms"></span>`).join('')}</div>`;
  }).join('');
  const axis = labels ? `<div class="axis-x" aria-hidden="true">${labels.map((l) => `<span>${esc(l)}</span>`).join('')}</div>` : '';
  return `<div class="chart"><div class="bars" style="--chart-h:${h}px" role="img" aria-label="${esc(label)}">${body}</div>${axis}</div>`;
}

function ringSVG(value, { stroke = 10, color = '--color-data-1', label }) {
  const r = 50 - stroke / 2;
  return `<svg viewBox="0 0 100 100" role="img" aria-label="${esc(label)}">
    <circle cx="50" cy="50" r="${r}" fill="none" style="stroke:var(--color-data-track)" stroke-width="${stroke}"/>
    <circle cx="50" cy="50" r="${r}" fill="none" style="stroke:var(${color})" stroke-width="${stroke}" stroke-linecap="round" pathLength="100" stroke-dasharray="${(value * 100).toFixed(1)} 100" transform="rotate(-90 50 50)"/>
  </svg>`;
}

function radialSVG(rings, label) {
  const widths = [14, 12, 10];
  let r = 52;
  const arcs = rings.map(([, v, c], i) => {
    const sw = widths[i]; r -= sw / 2;
    const out = `<circle cx="60" cy="60" r="${r}" fill="none" style="stroke:var(--color-data-track)" stroke-width="${sw}"/>
      <circle cx="60" cy="60" r="${r}" fill="none" style="stroke:var(${c})" stroke-width="${sw}" pathLength="100" stroke-dasharray="${(v * 100).toFixed(1)} 100" transform="rotate(-90 60 60)"/>`;
    r -= sw / 2 + 4;
    return out;
  }).join('');
  return `<svg viewBox="0 0 120 120" role="img" aria-label="${esc(label)}">${arcs}</svg>`;
}

function gaugeSVG(value, label) {
  return `<svg viewBox="0 0 100 56" role="img" aria-label="${esc(label)}" style="width:100%;max-width:96px;height:auto">
    <path d="M8 50a42 42 0 0 1 84 0" fill="none" style="stroke:var(--color-data-track)" stroke-width="8" stroke-linecap="round"/>
    <path d="M8 50a42 42 0 0 1 84 0" fill="none" style="stroke:var(--color-data-4)" stroke-width="8" stroke-linecap="round" pathLength="100" stroke-dasharray="${(value * 100).toFixed(1)} 100"/>
  </svg>`;
}

function donutSVG(segs, label) {
  const colors = ['--color-data-5', '--color-data-1', '--color-data-4', '--color-data-2', '--color-data-3'];
  let off = 0;
  const arcs = segs.map(([, v], i) => {
    const len = Math.max(0, v * 100 - 1.2);
    const s = `<circle cx="50" cy="50" r="38" fill="none" style="stroke:var(${colors[i]})" stroke-width="16" pathLength="100" stroke-dasharray="${len.toFixed(2)} 100" stroke-dashoffset="${(-off).toFixed(2)}" transform="rotate(-90 50 50)"/>`;
    off += v * 100;
    return s;
  }).join('');
  return { svg: `<svg viewBox="0 0 100 100" role="img" aria-label="${esc(label)}">${arcs}</svg>`, colors };
}

/* ---------- Card renderers ---------- */
const deltaHTML = (d, suffix = 'vs previous period', invert = false) => {
  const good = invert ? d <= 0 : d >= 0;
  return `<span class="delta ${good ? '' : 'delta--down'}"><span aria-hidden="true">${d >= 0 ? '▲' : '▼'}</span>${Math.abs(d)}%<span class="sr-only"> ${d >= 0 ? 'increase' : 'decrease'} ${suffix}</span></span>`;
};
const progressHTML = (rows) => `<ul class="progress-list">${rows.map(([l, v]) => `
  <li><div class="progress__row"><span>${esc(l)}</span><span>${pct(v)}</span></div>
  <div class="track" role="progressbar" aria-label="${esc(l)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(v * 100)}"><div class="track__fill" style="--v:${pct(v, 1)}"></div></div></li>`).join('')}</ul>`;

const RENDER = {
  users: (d) => `<div class="kpi"><span class="kpi__value">${nf.format(d.users.value)}</span>${deltaHTML(d.users.delta)}</div>${progressHTML(d.users.rows)}`,

  inference: (d) => `<p class="card__meta">${nf.format(Math.round(d.inference.series.reduce((a, b) => a + b, 0)))}k requests</p>
    <div class="chart area-chart" data-series="${d.inference.series.map((v) => v.toFixed(1)).join(',')}" data-labels="${d.labels.join(',')}" data-unit="k req" style="--chart-h:110px">
      ${areaSVG([{ values: d.inference.series, color: '--color-data-4', stroke: '--color-data-3', opacity: 0.8 }], { h: 110, label: `Inference volume trend, peak ${Math.round(Math.max(...d.inference.series))}k requests` })}
      <div class="area-cursor"></div></div>
    <div class="axis-x" aria-hidden="true">${d.labels.map((l) => `<span>${l}</span>`).join('')}</div>`,

  accuracy: (d) => `<div class="kpi"><span class="kpi__value">${d.accuracy.value}%</span></div>
    <p class="card__meta">Fewer eval failures vs baseline across 5 models</p>
    ${barsHTML(d.accuracy.groups, d.accuracy.labels, ['--color-data-3', '--color-data-1', '--color-data-2'], { h: 220, label: 'Eval pass rate per model: precision, recall, safety', wide: true })}`,

  growth: (d) => `<div class="duo">
      <div class="chart area-chart" data-series="${d.growth.series.map((v) => v.toFixed(0)).join(',')}" data-labels="${d.labels.join(',')}" data-unit=" workspaces" style="--chart-h:80px">
        ${areaSVG([{ values: d.growth.series, color: '--color-data-1', stroke: '--color-data-1', opacity: 0.15 }], { h: 80, grid: 0, label: 'Workspace growth trend, rising' })}<div class="area-cursor"></div></div>
      ${progressHTML(d.growth.rows)}
    </div>`,

  tokens: (d) => barsHTML(d.tokens.bars, null, ['--color-data-4', '--color-data-1'], { h: 96, label: 'Token usage per hour: input and output tokens', fmt: (v) => `${Math.round(v * 120)}M` }),

  throughput: (d) => {
    const max = Math.max(...d.throughput.regions.map((x) => x[1]));
    const colors = ['--color-data-2', '--color-data-1', '--color-data-2', '--color-data-3', '--color-data-1', '--color-data-3'];
    const top = Math.max(...d.throughput.a, ...d.throughput.b) * 1.15;
    const ticks = Array.from({ length: 5 }, (_, i) => Math.round(top - (top / 4) * i));
    return `<div class="split">
      <div class="area-wrap" style="--chart-h:220px">
        <div class="axis-y" aria-hidden="true">${ticks.map((t) => `<span>${t}</span>`).join('')}</div>
        <div class="chart area-chart" data-series="${d.throughput.a.map((v) => v.toFixed(0)).join(',')}" data-labels="${d.labels.join(',')}" data-unit=" GPU-h">
          ${areaSVG([
      { values: d.throughput.a, color: '--color-data-4', stroke: '--color-data-3', opacity: 0.7 },
      { values: d.throughput.b, color: '--color-data-1', stroke: '--color-data-1', opacity: 0.6 },
    ], { h: 220, max: top, label: `Compute throughput in GPU hours, ${RANGES[state.range].name}. Inference peaks at ${Math.round(Math.max(...d.throughput.a))}, training at ${Math.round(Math.max(...d.throughput.b))}.` })}
          <div class="area-cursor"></div></div>
        <div class="axis-x" aria-hidden="true">${d.labels.map((l) => `<span>${l}</span>`).join('')}</div>
      </div>
      <ul class="legend" aria-label="Requests per second by region">${d.throughput.regions.map(([n, v], i) => `
        <li class="legend__item" style="--c:var(${colors[i]})"><span class="legend__swatch" aria-hidden="true"></span><span class="legend__name" title="${n}">${n}</span><span class="legend__value">${v}k rps</span></li>`).join('')}
      </ul></div>`;
  },

  latency: (d) => `<div class="kpi kpi--split"><span class="kpi__value">${d.latency.value}<span class="kpi__unit">ms</span></span>
    <span class="kpi__side">${deltaHTML(d.latency.delta, 'vs previous period', true)}<span class="card__meta">max ${d.latency.max} ms</span></span></div>`,

  revenue: (d) => `<div class="kpi kpi--split"><span class="kpi__value">$${d.revenue.mrr}k</span><span class="kpi__side">${deltaHTML(d.revenue.delta)}<span class="card__meta">MRR</span></span></div>
    <hr class="divider" />
    <div class="kpi kpi--split"><div><p class="card__meta">Net revenue retention</p><span class="kpi__value">${d.revenue.nrr}%</span></div>
      <div class="ring-wrap">${gaugeSVG(d.revenue.gauge, `Quarterly target ${pct(d.revenue.gauge)} reached`)}<span class="ring-wrap__label" style="top:55%">${pct(d.revenue.gauge)}</span></div></div>`,

  weekly: (d) => barsHTML(d.weekly.groups, d.weekly.labels, ['--color-data-2', '--color-data-1', '--color-data-3'], { h: 150, label: 'Deployments per day: staging, production, rollback', fmt: (v) => Math.round(v * 40) }),

  capacity: (d) => `<div class="ring-wrap radial">${radialSVG(d.capacity.rings, 'Cluster capacity: ' + d.capacity.rings.map(([l, v]) => `${l} ${pct(v)}`).join(', '))}</div>
    <ul class="legend legend--inline">${d.capacity.rings.map(([l, v, c]) => `<li class="legend__item" style="--c:var(${c})"><span class="legend__swatch" aria-hidden="true"></span><span class="legend__name">${l}</span><span class="legend__value">${pct(v)}</span></li>`).join('')}</ul>`,

  cost: (d) => `<div class="duo"><div><span class="kpi__value">$${d.cost.value}</span>
      <div class="track track--pill" role="progressbar" aria-label="Monthly budget used" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(d.cost.budget * 100)}" style="margin-top:var(--space-2)"><div class="track__fill" style="--v:${pct(d.cost.budget, 1)}"></div></div>
      <p class="card__meta" style="margin-top:var(--space-1)">${pct(d.cost.budget)} of monthly budget</p></div>
    <div class="candles" role="img" aria-label="Daily cost range, low to high">${d.cost.candles.map(([lo, hi], i) => `<span class="candle" data-tip="Day ${i + 1}: $${(30 + lo * 30).toFixed(2)} – $${(30 + hi * 30).toFixed(2)}"><span class="candle__body" style="--lo:${pct(lo)};--hi:${pct(hi)}"></span></span>`).join('')}</div></div>`,

  cache: (d) => `<div class="duo"><div><span class="kpi__value">${pct(d.cache.value, 1)}</span>${progressHTML(d.cache.rows.map((v, i) => [['Prompt', 'Embedding', 'Response'][i], v]))}</div>
    <div class="ring-wrap">${ringSVG(d.cache.value, { stroke: 8, color: '--color-data-1', label: `Cache hit rate ${pct(d.cache.value, 1)}` })}</div></div>`,

  outputs: () => {
    const arts = [
      ['Rocket concept', 'linear-gradient(140deg,#fff 10%,#9fb4ff 45%,#ff7a59 70%,#3540c9)'],
      ['Teal landscape', 'radial-gradient(circle at 70% 30%,#e9fff9,#5fe0cc 55%,#2a8f9a)'],
      ['Light burst', 'radial-gradient(circle at 50% 50%,#d6f3ff 0,#4f7bff 25%,#0b1250 70%)'],
      ['Ocean flight', 'linear-gradient(160deg,#a9c4ff,#2d48d4 60%,#131a5e)'],
      ['Data skyline', 'repeating-linear-gradient(90deg,#4a55e0 0 4px,#e8ecff 4px 9px),linear-gradient(#fff,#cfd6ff)'],
      ['Glacier mist', 'linear-gradient(180deg,#f3f6ff,#bcd1f5 60%,#7fa2e6)'],
    ];
    return `<div class="gallery">${arts.map(([n, a]) => `<button class="thumb" type="button" style="--art:${a}" aria-label="Open generation: ${n}" data-tip="${n}"></button>`).join('')}</div>`;
  },

  jobs: (d) => `<div class="table-scroll" role="region" aria-label="Fine-tuning jobs table" tabindex="0"><table class="table">
    <thead><tr><th scope="col">Job</th><th scope="col">Status</th><th scope="col" class="num">Progress</th></tr></thead>
    <tbody>${d.jobs.map(([n, s, p]) => `<tr><td title="${n}">${n}</td><td><span class="status status--${s === 'Running' ? 'run' : s === 'Failed' ? 'fail' : 'ok'}">${s}</span></td><td class="num">${pct(p)}</td></tr>`).join('')}</tbody>
  </table></div>`,

  donut: (d) => {
    const { svg, colors } = donutSVG(d.donut, 'Traffic share by model: ' + d.donut.map(([m, v]) => `${m} ${pct(v)}`).join(', '));
    return `<div class="duo"><div class="ring-wrap">${svg}</div>
      <ul class="legend legend--inline" style="flex-direction:column">${d.donut.map(([m, v], i) => `<li class="legend__item" style="--c:var(${colors[i]})"><span class="legend__swatch" aria-hidden="true"></span><span class="legend__name">${m}</span><span class="legend__value">${pct(v)}</span></li>`).join('')}</ul></div>`;
  },
};

/* ---------- State ---------- */
const state = { range: '7d', data: null, preview: 'ready' };
const cards = $$('.card');
const grid = $('#grid');

function renderCard(card) {
  const key = card.dataset.card;
  $('.card__body', card).innerHTML = RENDER[key](state.data);
}

function setCardState(card, s) {
  card.dataset.state = s;
  card.setAttribute('aria-busy', String(s === 'loading'));
}

function renderAll() {
  state.data = buildData(state.range);
  cards.forEach(renderCard);
}

/* ---------- Card chrome: menu + state layers ---------- */
function enhanceCard(card) {
  const key = card.dataset.card;
  const titleEl = $('.card__title', card);
  const title = titleEl.textContent.trim();
  titleEl.id = `title-${key}`;
  titleEl.title = title;
  card.setAttribute('aria-labelledby', titleEl.id);

  const menu = document.createElement('div');
  menu.className = 'menu';
  menu.innerHTML = `
    <button class="icon-btn" type="button" id="menu-btn-${key}" aria-haspopup="menu" aria-expanded="false" aria-controls="menu-${key}" aria-label="${esc(title)} options">${ICON.more}</button>
    <ul class="menu__list" role="menu" id="menu-${key}" aria-labelledby="menu-btn-${key}" hidden>
      <li role="none"><button class="menu__item" role="menuitem" type="button" tabindex="-1" data-action="refresh">${ICON.refresh}Refresh data</button></li>
      <li role="none"><button class="menu__item" role="menuitem" type="button" tabindex="-1" data-action="download">${ICON.download}Download CSV</button></li>
      <li role="none"><button class="menu__item" role="menuitem" type="button" tabindex="-1" data-action="hide">${ICON.hide}Hide widget</button></li>
    </ul>`;
  $('.card__head', card).append(menu);

  card.insertAdjacentHTML('beforeend', `
    <div class="card__state state-loading" aria-hidden="true"><span class="skel skel--lg"></span><span class="skel skel--md"></span><span class="skel skel--sm"></span></div>
    <div class="card__state state-error" role="alert">
      <p class="state-msg">${ICON.alert}Couldn’t load ${esc(title.toLowerCase())}</p>
      <p class="state-hint">The metrics service timed out. Your data is safe.</p>
      <button class="btn btn--ghost btn--sm" type="button" data-action="retry"><span class="btn__label">Retry loading ${esc(title.toLowerCase())}</span></button>
    </div>
    <div class="card__state state-empty">
      <p class="state-msg">No data for this range yet</p>
      <p class="state-hint">Metrics appear within 5 minutes of the first request.</p>
    </div>`);
  setCardState(card, 'ready');
}

function reload(card, ms = 700) {
  setCardState(card, 'loading');
  setTimeout(() => { renderCard(card); setCardState(card, state.preview === 'ready' ? 'ready' : state.preview); }, ms);
}

/* ---------- Menu (WAI-ARIA menu button pattern) ---------- */
let openMenu = null;

function showMenu(btn, focus = 'first') {
  closeMenu(false);
  const list = $(`#${btn.getAttribute('aria-controls')}`);
  list.hidden = false;
  btn.setAttribute('aria-expanded', 'true');
  btn.closest('.card').classList.add('is-menu-open');
  openMenu = { btn, list };
  const items = $$('[role="menuitem"]', list);
  (focus === 'last' ? items.at(-1) : items[0]).focus();
}

function closeMenu(returnFocus = true) {
  if (!openMenu) return;
  const { btn, list } = openMenu;
  list.hidden = true;
  btn.setAttribute('aria-expanded', 'false');
  btn.closest('.card').classList.remove('is-menu-open');
  openMenu = null;
  if (returnFocus) btn.focus();
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('[aria-haspopup="menu"]');
  if (btn) {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : showMenu(btn);
    return;
  }
  const item = e.target.closest('[role="menuitem"]');
  if (item) {
    const card = item.closest('.card');
    closeMenu();
    runAction(item.dataset.action, card);
    return;
  }
  const retry = e.target.closest('[data-action="retry"]');
  if (retry) { const card = retry.closest('.card'); state.preview = 'ready'; $('#state-preview').value = 'ready'; reload(card); return; }
  if (openMenu && !e.target.closest('.menu')) closeMenu(false);
});

document.addEventListener('keydown', (e) => {
  const btn = e.target.closest?.('[aria-haspopup="menu"]');
  if (btn && ['ArrowDown', 'ArrowUp'].includes(e.key)) {
    e.preventDefault();
    showMenu(btn, e.key === 'ArrowUp' ? 'last' : 'first');
    return;
  }
  if (!openMenu) return;
  const items = $$('[role="menuitem"]', openMenu.list);
  const i = items.indexOf(document.activeElement);
  const go = (n) => { e.preventDefault(); items[(n + items.length) % items.length].focus(); };
  switch (e.key) {
    case 'ArrowDown': go(i + 1); break;
    case 'ArrowUp': go(i - 1); break;
    case 'Home': go(0); break;
    case 'End': go(items.length - 1); break;
    case 'Escape': e.preventDefault(); closeMenu(); break;
    case 'Tab': closeMenu(false); break;
  }
});

/* ---------- Actions ---------- */
function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }

function download(name, text) {
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([text], { type: 'text/csv' })), download: name });
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function runAction(action, card) {
  const title = $('.card__title', card).textContent.trim();
  if (action === 'refresh') { reload(card); toast(`${title} refreshed`); }
  if (action === 'download') {
    const rows = [['widget', 'range', 'text'], [title, state.range, $('.card__body', card).innerText.replace(/\s+/g, ' ').trim()]];
    download(`${slug(title)}-${state.range}.csv`, rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n'));
    toast(`Downloaded ${slug(title)}-${state.range}.csv`);
  }
  if (action === 'hide') {
    card.hidden = true;
    updateGridMode();
    focusNextCard(card);
    toast(`${title} hidden`, { label: `Undo hiding ${title}`, text: 'Undo', run: () => { card.hidden = false; updateGridMode(); $('[aria-haspopup="menu"]', card).focus(); } });
  }
}

function focusNextCard(card) {
  const visible = cards.filter((c) => !c.hidden);
  const next = visible.find((c) => c.compareDocumentPosition(card) & Node.DOCUMENT_POSITION_PRECEDING) || visible.at(-1);
  (next ? $('[aria-haspopup="menu"]', next) : $('#search')).focus();
}

/* ---------- Toasts ---------- */
function toast(msg, action) {
  const el = document.createElement('div');
  el.className = 'toast surface-inverse';
  el.innerHTML = `<p class="toast__msg">${esc(msg)}</p>`;
  if (action) {
    const b = document.createElement('button');
    b.className = 'btn btn--ghost btn--sm'; b.type = 'button';
    b.innerHTML = `<span class="btn__label">${esc(action.text)}</span>`;
    b.setAttribute('aria-label', action.label);
    b.addEventListener('click', () => { action.run(); el.remove(); });
    el.append(b);
  }
  $('#toasts').append(el);
  let t = setTimeout(() => el.remove(), 6000);
  el.addEventListener('focusin', () => clearTimeout(t));
  el.addEventListener('pointerenter', () => clearTimeout(t));
  el.addEventListener('pointerleave', () => { t = setTimeout(() => el.remove(), 3000); });
}

/* ---------- Search / filtering ---------- */
function updateGridMode() {
  grid.classList.toggle('is-filtered', cards.some((c) => c.hidden));
}

const search = $('#search');
let searchTimer;
search.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    cards.forEach((c) => {
      const hay = `${$('.card__title', c).textContent} ${c.dataset.keywords}`.toLowerCase();
      const match = !q || hay.includes(q);
      c.hidden = !match; if (match) shown++;
    });
    updateGridMode();
    $('#grid-empty').hidden = shown > 0;
    $('#grid-empty-title').textContent = q ? `No widgets match “${search.value.trim()}”` : 'No widgets match your search';
    $('#search-count').textContent = q ? `${shown} of ${cards.length} widgets shown` : '';
  }, 120);
});
search.addEventListener('keydown', (e) => { if (e.key === 'Escape' && search.value) { search.value = ''; search.dispatchEvent(new Event('input')); } });
$('#clear-search').addEventListener('click', () => { search.value = ''; search.dispatchEvent(new Event('input')); search.focus(); });

/* ---------- Range ---------- */
$$('.segmented__btn').forEach((b) => b.addEventListener('click', () => {
  if (b.getAttribute('aria-pressed') === 'true') return;
  $$('.segmented__btn').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  state.range = b.dataset.range;
  state.data = buildData(state.range);
  cards.forEach((c) => reload(c, 450 + Math.random() * 300));
  $('#search-count').textContent = `Showing ${RANGES[state.range].name}`;
}));

/* ---------- Density + state preview ---------- */
$('#density').addEventListener('change', (e) => document.body.classList.toggle('is-compact', e.target.checked));
$('#state-preview').addEventListener('change', (e) => {
  state.preview = e.target.value;
  cards.forEach((c) => setCardState(c, state.preview));
});

/* ---------- Export ---------- */
$('#export-btn').addEventListener('click', (e) => {
  const b = e.currentTarget;
  if (b.getAttribute('aria-busy') === 'true') return;
  b.setAttribute('aria-busy', 'true');
  b.setAttribute('aria-disabled', 'true');
  setTimeout(() => {
    const rows = [['widget', 'summary']].concat(cards.map((c) => [$('.card__title', c).textContent.trim(), $('.card__body', c).innerText.replace(/\s+/g, ' ').trim()]));
    download(`lumen-report-${state.range}.csv`, rows.map((r) => r.map((x) => `"${String(x).replace(/"/g, '""')}"`).join(',')).join('\n'));
    b.removeAttribute('aria-busy');
    b.removeAttribute('aria-disabled');
    toast(`Report exported for ${RANGES[state.range].name}`);
  }, 1100);
});

/* ---------- Dock ---------- */
$$('.dock__btn').forEach((b) => b.addEventListener('click', () => toast(`${b.dataset.app} opens in a new panel soon`)));

/* ---------- Tooltip (pointer + touch; data also exposed via aria-label) ---------- */
const tip = $('#tooltip');
let tipTimer;
function showTip(text, x, y) { tip.textContent = text; tip.hidden = false; tip.style.left = `${x}px`; tip.style.top = `${y}px`; }
function hideTip() { tip.hidden = true; }

document.addEventListener('pointermove', (e) => {
  const t = e.target.closest?.('[data-tip]');
  const area = e.target.closest?.('.area-chart');
  $$('.area-cursor').forEach((c) => (c.style.opacity = 0));
  if (t) return showTip(t.dataset.tip, e.clientX, e.clientY);
  if (area) {
    const vals = area.dataset.series.split(',');
    const labels = area.dataset.labels.split(',');
    const rect = area.getBoundingClientRect();
    const i = Math.round(((e.clientX - rect.left) / rect.width) * (vals.length - 1));
    const idx = Math.min(vals.length - 1, Math.max(0, i));
    const cursor = $('.area-cursor', area);
    cursor.style.left = `${(idx / (vals.length - 1)) * 100}%`;
    cursor.style.opacity = 0.35;
    return showTip(`${labels[idx]}: ${vals[idx]}${area.dataset.unit}`, e.clientX, e.clientY);
  }
  hideTip();
});
document.addEventListener('pointerdown', (e) => {
  if (e.pointerType !== 'touch') return;
  clearTimeout(tipTimer);
  tipTimer = setTimeout(hideTip, 2000);
});
document.addEventListener('pointerleave', hideTip);
window.addEventListener('scroll', hideTip, { passive: true });

/* ---------- Boot ---------- */
cards.forEach(enhanceCard);
cards.forEach((c, i) => (c.style.animationDelay = `${i * 40}ms`));
renderAll();

// Global toast referansı
window.showToast = toast;

// Models Görünümü ve Hash Yönlendirme (Routing)
const overviewView = $('#overview-view');
const modelsView = $('#models-view');
const modelsCtrl = modelsView ? new ModelsController(modelsView) : null;

function handleRoute() {
  const hash = window.location.hash || '#overview';
  const isModels = hash === '#models' || hash.startsWith('#models/');

  // Sol sidebar aktif bağlantı durumunu güncelle (aria-current="page")
  $$('.rail__link').forEach(link => {
    const href = link.getAttribute('href');
    if ((isModels && href === '#models') || (!isModels && href === '#overview')) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  document.body.classList.toggle('is-models-active', isModels);

  if (isModels) {
    if (overviewView) overviewView.hidden = true;
    if (modelsView) {
      modelsView.hidden = false;
      const parts = hash.split('/');
      const districtId = parts[1] || null;
      const projectId = parts[2] || null;
      if (modelsCtrl) modelsCtrl.navigate(districtId, projectId);
      document.title = projectId 
        ? `Proje Detayı — Models` 
        : (districtId ? `${districtId.charAt(0).toUpperCase() + districtId.slice(1)} Projeleri — Models` : 'Models — Bölge Klasörleri (3x3)');
    }
  } else {
    if (modelsView) modelsView.hidden = true;
    if (overviewView) overviewView.hidden = false;
    document.title = 'Lumen AI Console — Operations Overview';
  }
}

window.addEventListener('hashchange', handleRoute);
handleRoute();

// Diğer yan menü linkleri için bilgilendirme
$$('.rail__link').forEach(link => {
  const href = link.getAttribute('href');
  if (href && !['#overview', '#models'].includes(href)) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const label = link.querySelector('.rail__label')?.textContent || 'Bu sayfa';
      toast(`${label} modülü Faz 2 kapsamında geliştirilmektedir.`);
    });
  }
});

