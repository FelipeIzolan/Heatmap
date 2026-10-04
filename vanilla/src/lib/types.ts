type HexColor = `#${string}`;

export type Color = {
  max: number,
  palette: [
    HexColor,
    HexColor,
    HexColor,
    HexColor,
    HexColor
  ]
};

export type Options = {
  data?: Record<string, number>
  year?: number,
  color?: Color,
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
  className?: string,
  onclick?: GlobalEventHandlers['onclick'], 
  onmouseout?: GlobalEventHandlers['onmouseout'],
  onmouseover?: GlobalEventHandlers['onmouseover']
};
