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

// Font utilities
export const fontClass = {
  mulish: "font-mulish",
  notoSansTC: "font-noto-sans-tc",
  sans: "font-sans",
} as const;

export const getFontClass = (font: keyof typeof fontClass) => {
  return fontClass[font];
};

// Get font class based on locale
export const getFontClassByLocale = (locale: string) => {
  switch (locale) {
    case "zh-TW":
    case "zh-CN":
      return fontClass.notoSansTC;
    case "en-US":
    case "en":
      return fontClass.mulish;
    default:
      return fontClass.mulish;
  }
};
