<script lang="ts">
  import "../global.css";
  import Heatmap from "$lib/Heatmap.svelte";

  let onclick = (e: any) => alert(e.target.dataset.date + ' ' + e.target.dataset.value);

  let year = $state(new Date().getFullYear());
  let data = $derived.by(() => {
    function format(x: number) {
      return x < 10 ? '0' + x : '' + x;
    }

    let map: { [key: string]: number } = {};
    for (let month = 0; month < 12; month++) {
      for (let day = 0; day < 30; day++) {
        map[`${year}-${format(month + 1)}-${format(day + 1)}`] = Math.floor(Math.random() * 11);
      }
    }
    return map;
  });
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
