// lib/formatDate.ts

const formatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function formatDate(isoDate: string): string {
  return formatter.format(new Date(isoDate));
}
