import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Verify function
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export const validateLoginCode = (loginCode: string): boolean => {
  return loginCode.length >= 4;
};

export const validateName = (name: string): boolean => {
  return name.trim().length > 0;
};

export const validateInviteCode = (inviteCode: string): boolean => {
  return inviteCode.trim().length > 0;
};
