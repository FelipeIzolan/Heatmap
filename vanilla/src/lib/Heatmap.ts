import './Heatmap.css';
import type { Options } from './types.ts';

export default class Heatmap {
  head: HTMLTableSectionElement;
  body: HTMLTableSectionElement;
  table: HTMLTableElement;
  
  constructor(table: HTMLTableElement, options: Options = {}) {
    table.classList.add('heatmap');
 
    let {
      year = new Date().getFullYear(),
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
      onclick = null,
      onmouseout = null,
      onmouseover = null
    } = options;

    this.body = document.createElement('tbody');
    this.head = document.createElement('thead');
    this.table = table;

    if (lmonth) {
      let child = document.createElement('tr');

      if (lday)
        child.append(document.createElement('td'));

      for (let i = 0; i < 12; i++) {
        let element = document.createElement('td');
        element.innerText = lmonth[i];
        element.setAttribute('colspan', i % 3 == 0 ? '5' : '4');
        child.append(element);
      }

      this.head.append(child);
    }

    for (let row = 0; row < 7; row++) {    
      let child = document.createElement('tr');
      
      if (lday) {
        let label = document.createElement('td');
        label.innerText = lday[row];
        child.append(label);
      }
      
      for (let col = 0; col < 53; col++) {
        let td = document.createElement('td');
        td.onclick = onclick;
        td.onmouseout = onmouseout;
        td.onmouseover = onmouseover;
        child.append(td);
      }

      this.body.append(child);
    }
    
    table.append(this.head, this.body);
    this.setYear(year);
  }

  get(date: string) {
    let element = this.body.querySelector(`td[data-date='${date}']`);
    return element as (HTMLTableCellElement | null);
  }

  set(date: string, value: number) {
    let element = this.get(date);
    if (element) {
      element.dataset.value = value.toString();
    }
  }

  setYear(year: number) {
    let base = new Date(year, 0, 0, 0, 0, 0);
    let pad = this.body.children[0].children.length - 53;
    
    base.setDate(base.getDate() - (base.getDay() + 6) % 7); // last Monday

    for (let row = 0; row < 7; row++) { 
      for (let col = 0; col < 53; col++) {
        let element = this.body.children[row].children[col + pad] as HTMLTableCellElement;
        
        element.dataset.date = base.toJSON().split('T')[0];
        element.dataset.value = '0';

        base.setDate(base.getDate() + 7);
      }
      
      base.setDate(base.getDate() - 370);
    }
  }
}
