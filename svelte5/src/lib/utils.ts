import type { MouseEventHandler } from "svelte/elements";

export const getLastMonday = (start: Date) => {
  let diff = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - diff);
  return start;
}

export const getColor = (colors: string[], max: number, value: number) => {
  if (!value) return colors[0];
  let p = (value / max) * (colors.length - 1);
  return colors[Math.ceil(p)];
}

export const getCalendar = (data: { [key: string]: number }, year: number) => {
  let base = getLastMonday(new Date(year, 0, 1));
  let out: any = {} // >:)

  out.max = 0;
  out.calendar = Array.from({ length: 7 }, (_, i) => {
    let start = new Date(base);
    start.setDate(start.getDate() + i);
    return Array.from({ length: 53 }, (_, j) => {
      let day = new Date(start);
      day.setDate(start.getDate() + j * 7);
      if (day.getFullYear() == year) {
        let date = day.toISOString().split("T")[0];
        let value = data[date] ?? 0;
        if (value > out.max) {
          out.max = value;
        }
        return { date, value };
      }
    });
  })

  return out;
}

export type Props = {
  data: { [key: string]: number };

  year?: number;
  lday?: boolean;
  lmonth?: boolean;
  colors?: string[];
  className?: string;

  onclick?: MouseEventHandler<HTMLTableCellElement>;
  onmouseout?: MouseEventHandler<HTMLTableCellElement>;
  onmouseover?: MouseEventHandler<HTMLTableCellElement>;
};
