# Heatmap

<img width="1087" height="157" alt="image" src="https://github.com/user-attachments/assets/d84414b6-bf61-46ce-8d60-ffbc6f2822f8" />

Heatmap inspired by GitHub’s contribution graph. (~2kB)

## 🚀 Getting Started

```html
<script src="heatmap.umd.js"></script>
```

```js
const year = 2026;
const data = {
    '2026-01-01': 2,
    '2026-01-02': 4,
    '2026-01-03': 6,
    '2026-01-04': 8,
    '2026-01-05': 10
};

let table = document.createElement('table');
let heatmap = new Heatmap(table, { data, year });

heatmap.setValue('2026-02-01', 2);
heatmap.setValue('2026-02-02', 4);
heatmap.setValue('2026-02-03', 6);
heatmap.setValue('2026-02-04', 8);
heatmap.setValue('2026-02-05', 10);

document.body.append(table);
```

## 📄 Documentation

- `new Heatmap(table, options)`:
  - **table** *(HTMLTableElement)* 
  - **options** *(object, optional)*
- `Heatmap.setValue(date, value)`: Set value to cell by ISO date.
  - **date** *(string)*: ISO date.
  - **value** *(number)*
- `Heatmap.getValue(date)`: Get value from cell by ISO date.
  - **date** *(string)*: ISO date.
- `Heatmap.cell(date)`: Get cell element by ISO date.
  - **date** *(string)*: ISO date;
- `Heatmap.render(data, year)`:
  - **data** *(object)*
  - **year** *(number)*

### Options

-   **data** *(object, optional)*:\
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
