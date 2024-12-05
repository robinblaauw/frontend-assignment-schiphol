export function convertDate(dateString: string, language: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString(language, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
