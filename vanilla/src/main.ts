import Heatmap from './lib/Heatmap.ts';

const app = document.querySelector('#app') as HTMLDivElement;

const heatmap1 = new Heatmap(document.createElement('table'), { year: 2026, lmonth: false, lday: false });
const heatmap2 = new Heatmap(document.createElement('table'), { year: 2026, lday: false });
const heatmap3 = new Heatmap(document.createElement('table'), { year: 2026, lmonth: false });
const heatmap4 = new Heatmap(document.createElement('table'), { year: 2026 });

const base = new Date(2026, 0, 0, 0, 0, 0);
for (let x = 0; x < 365; x++) {
  let d = new Date(base);
  let v = Math.floor(Math.random() * 8);
  d.setDate(d.getDate() + x);
  let iso = d.toISOString().split('T')[0];
  heatmap1.set(iso, v);
  heatmap2.set(iso, v);
  heatmap3.set(iso, v);
  heatmap4.set(iso, v);
}

app.append(heatmap1.table);
app.append(heatmap2.table);
app.append(heatmap3.table);
app.append(heatmap4.table);
