class Heatmap extends HTMLElement {
  static observedAttributes = ['year'];

  constructor() {
    super();
    this.table = document.createElement('table');
    this.head = document.createElement('thead');
    this.body = document.createElement('tbody');

    for (let r = 0; r < 7; r++) {    
      let tr = document.createElement('tr');
      for (let c = 0; c < 53; c++) {
        let td = document.createElement('td');
        tr.append(td);
      }
      this.body.append(tr);
    }

    this.table.append(this.head, this.body);
  }

  get(date) {
    return this.body.querySelector(`[data-date='${date}']`);
  }

  set(date, value) {
    let el = this.body.querySelector(`[data-date='${date}']`);
    if (el) {
      el.dataset.value = value;
    }
  }
  
  connectedCallback() {
    this.append(this.table);
  }

  attributeChangedCallback(name, prev, curr) {
    if (name == 'year') {
      let base = new Date(curr);
      base.setDate(base.getDate() - (base.getDay() + 6) % 7);
  
      for (let r = 0; r < 7; r++) {    
        let w = new Date(base);
        w.setDate(w.getDate() + r);
        for (let c = 0; c < 53; c++) {
          let el = this.body.children[r].children[c];
          let d = new Date(w);
          d.setDate(d.getDate() + c * 7);
          el.dataset.date = d.toISOString().split('T')[0];
          el.dataset.value = 0;
        }
      }
    }
  }
}

customElements.define(
  'heat-map',
  Heatmap
);
