<script lang="ts">
  import type { Props } from "./types.ts";

  let {
    data,
    year = new Date().getFullYear(),
    color = {
      max: 10,
      pallete: [
        '#EFF2F5',
        '#ACEEBB',
        '#4AC26B',
        '#2DA44E',
        '#116329'
      ]
    },
    lmonth = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    lday = [
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun'
    ],
    className = 'heatmap',
  }: Props = $props();
  
  // --
  
  function toBase(year: number) {
    let base = new Date(year, 0, 1, 0, 0, 0);
    let delta = (base.getDay() + 6) % 7; // last monday
    base.setDate(base.getDate() - delta);
    return base;
  };

  function toISO(date: Date) {
    let year = date.getFullYear();
    let month: string | number = date.getMonth() + 1;
    let day: string | number = date.getDate();
    
    if (month < 10)
      month = '0' + month;

    if (day < 10)
      day = '0' + day;

    return `${year}-${month}-${day}`;
  }
  
  function getAttributes(base: Date, day_of_week: number, day: number) {
    base.setDate(base.getDate() + day_of_week + day);
    let date = toISO(base);
    let value = data[date] ?? 0;
    let hex = value < color.max ? color.pallete[Math.floor((value / color.max) * 5)] : color.pallete[4];
    base.setDate(base.getDate() - day_of_week - day);
    return {
      'data-date': date,
      'data-value': value,
      'style': `width:1em; height:1em; background:${hex};`
    };
  }
 
  let base = $derived(toBase(year));
</script>

<table class={className}>
  {#if lmonth}
    <thead style='font-size:0.75em'>
      <tr>
        {#if lday}
        <td></td>
        {/if}
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
  {#each { length: 7 }, day_of_week}
    <tr>
    {#if lday}
      <td style='font-size:0.75em'>{lday[day_of_week]}</td>
    {/if}
    {#each { length: 53 }, day_index}
      <td {...getAttributes(base, day_of_week,  day_index * 7)}></td>
    {/each}
    </tr>
  {/each}
  </tbody>
</table>
