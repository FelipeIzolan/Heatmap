#   svelte5-heatmap

![image](https://github.com/user-attachments/assets/f1ada592-c3ac-445f-a664-558010203500)

A Svelte 5 heatmap component inspired by GitHub’s contribution graph

##  Getting Started

```
npm install svelte5-heatmap
```

```svelte
<script>
  import Heatmap from "svelte5-heatmap";

  let data = $state<{ [key: string]: number }>({});
  let year = 2025;
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

<div style="font-size:12px">
  <Heatmap
    {data}
    {year}
    onclick={(e) => alert(`${e.target.dataset.date} | ${e.target.dataset.value}`)}
  />
</div>
```
## ⚙️ Props

-   **`data`** (object, **required**)  
    An object containing chart data where each key is a date in ISO format (`YYYY-MM-DD`) and the value is a number.  
    Example: `{ '2025-01-02': 5 }`

-   **`colors`** (array, optional)  
    An array of color values used for the heatmap cells, ordered from the lowest to highest value.  
    _Default:_ GitHub's contribution graph colors.

-   **`className`** (string, optional)  
    Custom CSS class name applied to the heatmap. 
    _Default:_ `"Heatmap"`

-   **`year`** (number, optional)  
    The year to display in the heatmap.  
    _Default:_ Current year.
    
-   **`lday`** (boolean, optional)  
    Whether to display day-of-week labels on the left side.  
    _Default:_ `true`
    
-   **`lmonth`** (boolean, optional)  
    Whether to display month labels above the calendar.  
    _Default:_ `true`
    
-   **`onclick`** (function, optional)  
    Function to be called when a heatmap cell is clicked.
    
-   **`onmouseover`** (function, optional)  
    Function to be called when the mouse hovers over a cell.
    
-   **`onmouseout`** (function, optional)  
    Function to be called when the mouse leaves a cell.

> [!NOTE]
> The heatmap size is determined by the parent element's font size, as it uses **em** units.

## 📜 License

- [svelte](https://github.com/sveltejs/svelte) - MIT
- [sveltekit](https://github.com/sveltejs/kit) - MIT
- [svelte5-heatmap](https://github.com/FelipeIzolan/svelte5-heatmap) - MIT
