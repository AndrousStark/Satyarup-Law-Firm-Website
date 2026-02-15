import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Base path for GitHub Pages deployment. Must match next.config.ts basePath. */
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/Satyarup-Law-Firm-Website" : "";

/** Prefix a local asset path with the basePath for static export. */
export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}
