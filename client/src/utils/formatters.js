import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount, currencySymbol = "₹") {
  if (typeof amount !== "number" || isNaN(amount)) return `${currencySymbol}0`;
  return `${currencySymbol}${amount.toLocaleString("en-IN")}`;
}

export function formatDateRange(checkIn, checkOut) {
  if (!checkIn || !checkOut) return "";
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const options = { month: "short", day: "numeric" };
  return `${d1.toLocaleDateString("en-US", options)} - ${d2.toLocaleDateString("en-US", options)}`;
}

export function calculateNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 5;
  const diffTime = Math.abs(new Date(checkOut) - new Date(checkIn));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}
