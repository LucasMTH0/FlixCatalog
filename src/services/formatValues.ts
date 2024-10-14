export function formatDate(date: string) {
  return `${new Date(date).getDay()}/${new Date(date).getMonth()}/${new Date(
    date
  ).getFullYear()}`;
}
