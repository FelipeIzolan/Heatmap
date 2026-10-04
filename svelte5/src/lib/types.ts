import type { MouseEventHandler } from "svelte/elements";

type Color = `#${string}`;

export type Props = {
  data: Record<string, number>,
  year?: number,
  color?: {
    max: number,
    palette: [
      Color,
      Color,
      Color,
      Color,
      Color
    ]
  },
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
  onclick?: MouseEventHandler<HTMLTableCellElement>,
  onmouseout?: MouseEventHandler<HTMLTableCellElement>,
  onmouseover?: MouseEventHandler<HTMLTableCellElement>
};
