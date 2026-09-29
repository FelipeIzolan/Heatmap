# Heatmap

A heatmap inspired by GitHub’s contribution graph.

# 🚀 Getting Started

```html
<link rel="stylesheet" href="heatmap.css">
<script src="heatmap.js"></script>
```

```js
let table = document.createElement('table');
let heatmap = new Heatmap(table);
heatmap.set('2026-01-01', 1);
heatmap.set('2026-01-02', 3);
heatmap.set('2026-01-03', 5);
heatmap.set('2026-01-04', 7);
document.body.append(table);
```

## 📄 Documentation

- `new Heatmap(table, options)`:
  - **table** *(HTMLTableElement)* 
  - **options** *(object)*:
    - **year** *(number, optional)*  
    - **lmonth** *(string[12], optional)*: Months labels.
    - **lday** *(string[7], optional)*: Days labels.
    - **onclick** *(function, optional)*
    - **onmouseout** *(function, optional)*
    - **onmouseover** *(function, optional)*
- `Heatmap.set(date, value)`:
  - **date** *(string)*: ISO date.
  - **value** *(number)*
- `Heatmap.get(date)`:
  - **date** *(string)*: ISO date.
- `Heatmap.setYear(year)`:
  - **year** *(number)*
