export { cn } from "cn";

export function isValidHttpUrl(value?: string): value is string {
  if (!value) {
    return false;
  }

  try {
    const { protocol } = new URL(value);
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}
