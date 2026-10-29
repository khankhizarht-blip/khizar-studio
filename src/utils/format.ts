export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}


export function truncate(
  text: string,
  length: number
) {
  if (text.length <= length) {
    return text;
  }

  return `${text.slice(0, length)}...`;
}