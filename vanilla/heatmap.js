class Heatmap extends HTMLElement {
  constructor() {
    super();
  }

  static head(parent, lmonth) {
    let child = document.createElement('tr'); 
    child.append(document.createElement('td'));
    
    for (const [label, colspan] of lmonth) {
      let element = document.createElement('td');

      element.innerText = label;
      element.setAttribute('colspan', colspan);
      
      child.append(element);
    }

    parent.append(child);
  }

  static body(parent, lday) {
    for (let row = 0; row < 7; row++) {    
      let child = document.createElement('tr');
      let label = document.createElement('td');
      
      label.innerText = lday[row];
      child.append(label);
      
      for (let col = 0; col < 53; col++) {
        let td = document.createElement('td');
        child.append(td);
      }

      parent.append(child);
    }
  }

  connectedCallback() {
    let table = document.createElement('table');
    let head = document.createElement('thead');
    let body = document.createElement('tbody');
   
    let lmonth = [
      ['Jan', 5],
      ['Feb', 4],
      ['Mar', 4],
      ['Apr', 5],
      ['May', 4],
      ['Jun', 4],
      ['Jul', 5],
      ['Aug', 4],
      ['Sep', 4],
      ['Oct', 5],
      ['Nov', 4],
      ['Dec', 4]
    ];

    let lday = [
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun'
    ];

    Heatmap.head(head, lmonth);
    Heatmap.body(body, lday);
    table.append(head, body);

    this.append(table);
    this.setYear(new Date().getFullYear());
  }
  
  setYear(year) {
    let base = new Date(year, 0, 0, 0, 0, 0);
    let body = this.querySelector('tbody'); 
    
    base.setDate(base.getDate() - (base.getDay() + 6) % 7); // last Monday
    
    for (let row = 0; row < 7; row++) {
      let start = new Date(base);
      
      start.setDate(start.getDate() + row);
      
      for (let col = 0; col < 53; col++) {
        let element = body.children[row].children[col + 1];
        let day = new Date(start);   
        
        day.setDate(day.getDate() + col * 7);
        
        element.dataset.date = day.toJSON().split('T')[0];
        element.dataset.value = 0;
      } 
    }
  }
}

customElements.define(
  'heat-map',
  Heatmap
);
