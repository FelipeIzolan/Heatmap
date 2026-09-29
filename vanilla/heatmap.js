const HEATMAP = {
  year: new Date().getFullYear(),
  lmonth: [
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
  lday: [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ]
}

class Heatmap {
  static head(parent, { lmonth }) {
    if (!lmonth)
      return;

    let child = document.createElement('tr');
    child.append(document.createElement('td'));

    for (let i = 0; i < 12; i++) {
      let element = document.createElement('td');
      element.innerText = lmonth[i];
      element.setAttribute('colspan', i % 3 == 0 ? 5 : 4);
      child.append(element);
    }

    parent.append(child);
  }

  static body(parent, { lday, onclick, onmouseout, onmouseover }) {
    for (let row = 0; row < 7; row++) {    
      let child = document.createElement('tr');
      let label = document.createElement('td');
      
      label.innerText = lday ? lday[row] : '';
      child.append(label);
      
      for (let col = 0; col < 53; col++) {
        let td = document.createElement('td');
        td.onclick = onclick;
        td.onmouseout = onmouseout;
        td.onmouseover = onmouseover;
        child.append(td);
      }

      parent.append(child);
    }
  }

  constructor(table, options = {}) {
    options = {...HEATMAP, ...options};
    table.classList.add('heatmap');

    this.table = table;
    this.body = document.createElement('tbody');
    this.head = document.createElement('thead');

    Heatmap.head(this.head, options);
    Heatmap.body(this.body, options);
    
    table.append(this.head, this.body);
    this.setYear(options.year);
  }

  get(date) {
    return this.body.querySelector(`td[data-date='${date}']`);
  }

  set (date, value) {
    let element = this.get(date);
    if (element) {
      element.dataset.value = value;
    }
  }

  setYear(year) {
    let base = new Date(year, 0, 0, 0, 0, 0);
    base.setDate(base.getDate() - (base.getDay() + 6) % 7); // last Monday

    for (let row = 0; row < 7; row++) { 
      for (let col = 0; col < 53; col++) {
        let element = this.body.children[row].children[col + 1];
        
        element.dataset.date = base.toJSON().split('T')[0];
        element.dataset.value = 0;

        base.setDate(base.getDate() + 7);
      }
      
      base.setDate(base.getDate() - 370);
    }
  }
}
