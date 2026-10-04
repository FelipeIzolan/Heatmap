#   svelte5-heatmap

<img width="1087" height="157" alt="image" src="https://github.com/user-attachments/assets/d84414b6-bf61-46ce-8d60-ffbc6f2822f8" />

Svelte 5 Heatmap component inspired by GitHub’s contribution graph

##  Getting Started

```
npm install svelte5-heatmap
```

```svelte
<script>
    import Heatmap from "svelte5-heatmap";
    let year = 2026;
    let data = $state({
        '2026-02-12': 2,
        '2026-02-13': 4,
        '2026-02-14': 6,
        '2026-02-15': 8,
        '2026-02-16': 10
    });
</script>

<div>
  <Heatmap
    {data}
    {year}
    onclick={(e) => alert(`${e.target.dataset.date} | ${e.target.dataset.value}`)}
  />
</div>

```

## 📄 Props

-   **data** *(object, required)*:\
    An object containing chart data where each key is a date in ISO format (`YYYY-MM-DD`) and the value is a number.\
    Example: `{ '2025-01-02': 5 }`

-   **year** *(number, optional)*
-   **color** *(object, optional)*:  
    -    **max** *(number, required)*:\
          The max value to color be the strongest.
    -    **pallete** *(string[5], required)*:\
          Array of 5 hex colors.

-   **lday** *(string[7] | false, optional)*:\
    Array of 7 days labels. If set to false, no labels are added.

-   **lmonth** *(string[12] | false, optional)*:\
    Array of 12 months labels. If set to false, no labels are added.

-   **className** *(string, optional)*

-   **onclick** *(function, optional)*:\
    Heatmap cell onclick event.

-   **onmouseover** *(function, optional)*:\
    Heatmap cell onmouseover event.

-   **onmouseout** *(function, optional)*:\
    Heatmap cell onmouseout event.

## 📜 License

- [svelte](https://github.com/sveltejs/svelte) - MIT
- [sveltekit](https://github.com/sveltejs/kit) - MIT
- [svelte5-heatmap](https://github.com/FelipeIzolan/svelte5-heatmap) - MIT
