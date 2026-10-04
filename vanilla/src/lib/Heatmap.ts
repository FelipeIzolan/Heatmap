import type { Color, Options } from './types.ts';

class Heatmap {
  head: HTMLTableSectionElement;
  body: HTMLTableSectionElement;
  table: HTMLTableElement;
  color: Color;

  constructor(table: HTMLTableElement, options: Options = {}) {
    let {
      data = {},
      year = new Date().getFullYear(),
      color = {
        max: 10,
        palette: [
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
      onclick = null,
      onmouseout = null,
      onmouseover = null
    } = options;
    
    table.classList.add(className);

    this.head = document.createElement('thead');
    this.body = document.createElement('tbody');
    this.table = table;
    this.color = color;

    if (lmonth) {
      let tr = document.createElement('tr');
      if (lday) {
        let td = document.createElement('td');
        tr.append(td);
      }
      for (let i = 0; i < lmonth.length; i++) {
        let td = document.createElement('td');
        td.colSpan = i % 3 ? 4 : 5;
        td.innerText = lmonth[i];
        tr.append(td);
      }
      this.head.style.fontSize = '0.75em';
      this.head.append(tr);
    }

    for (let day_of_week = 0; day_of_week < 7; day_of_week++) {
      let tr = document.createElement('tr');
      if (lday) {
        let td = document.createElement('td');
        td.innerText = lday[day_of_week];
        td.style.fontSize = '0.75em';
        tr.append(td);
      }
      for (let day_index = 0; day_index < 53; day_index++) {
        let td = document.createElement('td');
        td.style.background = color.palette[0];
        td.style.width = '1em';
        td.style.height = '1em';
        td.onclick = onclick;
        td.onmouseout = onmouseout;
        td.onmouseover = onmouseover;
        tr.append(td);
      }
      this.body.append(tr);
    }

    this.render(data, year);
    table.append(this.head, this.body);
  }

  getColor(value: number) {
    if (value < this.color.max) {
      let index = Math.ceil(value / this.color.max * 3);
      return this.color.palette[index];
    } else {
      return this.color.palette[4]
    }
  }

  setValue(date: string, value: number) {
    let cell = this.cell(date);
    console.log(cell);
    if (cell) {
      cell.dataset.value = value.toString();
      cell.style.background = this.getColor(value);
    }
  }

  getValue(date: string) {
    let cell = this.cell(date);
    if (cell) {
      return parseInt(cell.dataset.value as string);
    } else { 
      return 0;
    }
  }

  cell(date: string) {
    let td = this.body.querySelector(`td[data-date='${date}']`);
    if (td) {
      return td as HTMLTableCellElement;
    } else {
      return null;
    }
  }

  render(data: Record<string, number>, year: number) {
    let base = new Date(year, 0, 1, 0, 0, 0);
    let delta = (base.getDay() + 6) % 7; // last monday
    base.setDate(base.getDate() - delta); 

    let offset = this.body.children[0].children.length - 53;
    for (let day_of_week = 0; day_of_week < 7; day_of_week++) {
      let tr = this.body.children[day_of_week];
      for (let day_index = 0; day_index < 53; day_index++) {
        let td = tr.children[day_index + offset] as HTMLTableCellElement;
        let day = day_index * 7;
        base.setDate(base.getDate() + day_of_week + day);
        td.dataset.date = base.toISOString().split('T')[0];
        let value = data[td.dataset.date] ?? 0;
        td.dataset.value = value.toString();
        td.style.background = this.getColor(value);
        base.setDate(base.getDate() - day_of_week - day);
      }
    }
  }
}

export default Heatmap;
