<script lang="ts">
  import "../global.css";
  import Heatmap from "$lib/Heatmap.svelte";

  function onclick(e: MouseEvent) {
    let target = e.target as HTMLTableCellElement;
    alert(`${target.dataset.date}\n${target.dataset.value}`);
  }

  function format(x: number) {
    return x < 10 ? '0' + x : '' + x;
  }

  let year = new Date().getFullYear();
  let data: Record<string, number> = $state({});
  for (let month = 0; month < 12; month++) {
    for (let day = 0; day < 30; day++) {
      data[`${year}-${format(month + 1)}-${format(day + 1)}`] = Math.floor(Math.random() * 11);
    }
  }
 
  setTimeout(() => {
    for (let i = 0; i < 30; i++) {
      data[`${year}-02-${format(i)}`] = 0;
    }
  }, 2000);
</script>

<svelte:head>
  <title>Svelte Heatmap</title>
</svelte:head>

<div id='app'>
  <h1>Heatmap</h1>
  <Heatmap {data} {year} {onclick} lmonth={false} lday={false} />
  <Heatmap {data} {year} {onclick} lday={false} />
  <Heatmap {data} {year} {onclick} lmonth={false} />
  <Heatmap {data} {year} {onclick} />
</div>
