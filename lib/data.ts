export type NavLink = {
  label: string;
  href: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  image: string;
  badge?: string;
  isNew?: boolean;
  isSale?: boolean;
};

// ─── Brand constants ───────────────────────────────────────────────────────────
export const APP_NAME = "Zest store";
export const APP_TAGLINE = "Fresh Finds, Bold Prices";
export const ACCENT = "#f97316"; // orange-500

// ─── Navigation (single source of truth) ──────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "#products" },
  { label: "Categories", href: "#categories" },
  { label: "Deals", href: "#deals" },
  { label: "About", href: "#about" },
];

export const navCTA = { label: "Shop Now", href: "#products" };