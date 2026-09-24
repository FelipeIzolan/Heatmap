<script lang="ts">
  import { getCalendar, getColor } from "./utils.js";
  import type { Props } from "./utils.js";

  let {
    data,
    onclick,
    onmouseout,
    onmouseover,
    colors = ["#eff2f5", "#aceebb", "#4ac26b", "#2da44e", "#116329"],
    className = "Heatmap",
    year = new Date().getFullYear(),
    lday = true,
    lmonth = true,
  }: Props = $props();

  // --

  let { max, calendar } = $derived(getCalendar(data, year));
</script>

<table class={className} style="font-size:1em">
  {#if lmonth}
    <thead>
      <tr style="font-size:0.75em">
        <td style="padding-bottom:0.5em">‎</td>
        <td colspan="5">Jan</td>
        <td colspan="4">Feb</td>
        <td colspan="4">Mar</td>
        <td colspan="5">Apr</td>
        <td colspan="4">May</td>
        <td colspan="4">Jun</td>
        <td colspan="5">Jul</td>
        <td colspan="4">Aug</td>
        <td colspan="4">Sep</td>
        <td colspan="5">Oct</td>
        <td colspan="4">Nov</td>
        <td colspan="4">Dec</td>
      </tr>
    </thead>
  {/if}
  <tbody>
    {#each calendar as w, i}
      <tr>
        {#if lday}
          <td style="padding-right:0.5em;font-size:0.75em">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
          </td>
        {/if}
        {#each w as d}
          {#if d}
            <td
              style={`width:1em;height:1em;background:${getColor(colors, max, d.value)}`}
              data-date={d.date}
              data-value={d.value}
              {onclick}
              {onmouseout}
              {onmouseover}
            />
          {:else}
            <td />
          {/if}
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
