export function slugify(input: string): string {
  if (!input || typeof input !== "string") return "";
  return input
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing whitespace
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters (except spaces and hyphens)
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Collapse multiple hyphens into one
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
