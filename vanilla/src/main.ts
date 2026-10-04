import Heatmap from './lib/Heatmap.ts';

const app = document.querySelector('#app') as HTMLDivElement;

function onclick(e: MouseEvent) {
  let target = e.target as HTMLTableCellElement;
  alert(`${target.dataset.date}\n${target.dataset.value}`);
}

function format(x: number) {
  return x < 10 ? '0' + x : '' + x;
}

const year = 2026;
const data: Record<string, number> = {};
for (let month = 0; month < 12; month++) {
  for (let day = 0; day < 30; day++) {
    data[`${year}-${format(month + 1)}-${format(day + 1)}`] = Math.floor(Math.random() * 11);
  }
}

const heatmap1 = new Heatmap(document.createElement('table'), { data, onclick, lmonth: false, lday: false });
const heatmap2 = new Heatmap(document.createElement('table'), { data, onclick, lday: false });
const heatmap3 = new Heatmap(document.createElement('table'), { data, onclick, lmonth: false });
const heatmap4 = new Heatmap(document.createElement('table'), { data, onclick });

setTimeout(() => {
  for (let i = 0; i < 30; i++) {
    heatmap1.setValue(`${year}-02-${format(i)}`, 0);
  }
}, 2000);

app.append(heatmap1.table);
app.append(heatmap2.table);
app.append(heatmap3.table);
app.append(heatmap4.table);
