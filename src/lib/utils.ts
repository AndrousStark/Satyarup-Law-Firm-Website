import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefix a local asset path (no-op now that custom domain is used). */
export function assetPath(path: string): string {
  return path;
}
