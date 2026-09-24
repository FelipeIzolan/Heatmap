<script lang="ts">
  import "../global.css";
  import Heatmap from "$lib/Heatmap.svelte";

  let data = $state<{ [key: string]: number }>({});
  let curr = $state("0000-00-00");
  let year = $state(2025);

  let colors;
  // colors = ["#0D41E1", "#0C63E7", "#0A85ED", "#09A6F3", "#07C8F9"];

  function fillMap() {
    let map: { [key: string]: number } = {};
    let max = Math.round(Math.random() * 24) + 8;
    for (let m = 0; m <= 12; m++) {
      for (let d = 0; d <= 31; d++) {
        let key = `${year}-${("0" + m).slice(-2)}-${("0" + d).slice(-2)}`;
        map[key] = Math.round(Math.random() * max);
      }
    }
    data = map;
  }

  fillMap();
</script>

<svelte:head>
  <title>Heatmap.svelte</title>
</svelte:head>

<div style="text-align:center;margin:2em 0">
  <img
    src="https://svelte.dev/favicon.png"
    alt="svelte logo"
    width="32"
    height="32"
  />
  <h2>Heatmap.svelte</h2>
  <span>{curr}</span>
  <span>{data[curr]}</span>
</div>
<div style="font-size:16px">
  <Heatmap
    {data}
    {year}
    {colors}
    onclick={(e) =>
      alert(`${e.target.dataset.date} | ${e.target.dataset.value}`)}
    onmouseover={(e) => (curr = e.target.dataset.date)}
  />
</div>
