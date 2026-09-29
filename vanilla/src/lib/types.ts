export type Options = {
  year?: number,
  lday?: [
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ] | false,
  lmonth?: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ] | false,
  onclick?: GlobalEventHandlers['onclick'], 
  onmouseout?: GlobalEventHandlers['onmouseout'],
  onmouseover?: GlobalEventHandlers['onmouseover']
};
