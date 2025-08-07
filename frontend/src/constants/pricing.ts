export interface PricingPlan {
  type: string;
  name: string;
  price: string;
  originalPrice?: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isRecommended?: boolean;
  buttonText: string;
  buttonVariant: "default" | "outline" | "secondary";
}

export const pricing: PricingPlan[] = [
  {
    type: "free",
    name: "Free",
    price: "FREE",
    period: "forever",
    description: "Perfect for individual teachers getting started",
    features: [
      "Up to 5 students",
      "Basic lesson management",
      "Email support",
      // "Standard templates",
      // "1GB storage",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
  },
  {
    type: "basic",
    name: "Basic",
    price: "$30",
    period: "per month",
    description: "Ideal for growing teaching practices",
    features: [
      "Up to 20 students",
      "Advanced lesson management",
      "Priority email support",
      // "Custom templates",
      // "10GB storage",
      "Basic analytics",
      "Invite code management",
      "Audio file uploads",
      "Basic reporting",
    ],
    isPopular: true,
    isRecommended: true,
    buttonText: "Start Free Trial",
    buttonVariant: "default",
  },
  // {
  //   type: "pro",
  //   name: "Professional",
  //   price: "$150",
  //   period: "per month",
  //   description: "For established teaching businesses",
  //   features: [
  //     "Uo to 40 students",
  //     "Premium lesson management",
  //     "Priority phone support",
  //     "Custom branding",
  //     // "100GB storage",
  //     "Advanced analytics & insights",
  //     "Bulk invite codes",
  //     "Audio & video uploads",
  //     "Advanced reporting",
  //     // "API access",
  //     // "White-label options",
  //     "Dedicated account manager",
  //   ],
  //   buttonText: "Start Free Trial",
  //   buttonVariant: "default",
  // },
  // {
  //   type: "enterprise",
  //   name: "Enterprise",
  //   price: "Custom",
  //   period: "contact us",
  //   description: "For large educational institutions",
  //   features: [
  //     "Unlimited everything",
  //     "Custom integrations",
  //     "24/7 phone support",
  //     "Custom branding & domain",
  //     "Unlimited storage",
  //     "Advanced analytics & AI insights",
  //     "Bulk operations",
  //     "All file types supported",
  //     "Custom reporting",
  //     "Full API access",
  //     "White-label solution",
  //     "Dedicated success manager",
  //     "SLA guarantees",
  //     "Custom training sessions",
  //   ],
  //   buttonText: "Contact Sales",
  //   buttonVariant: "secondary",
  // },
];

export const pricingFeatures = {
  studentManagement: {
    free: "Up to 5 students",
    basic: "Up to 25 students",
    pro: "Unlimited students",
    enterprise: "Unlimited students",
  },
  storage: {
    free: "1GB",
    basic: "10GB",
    pro: "100GB",
    enterprise: "Unlimited",
  },
  support: {
    free: "Email support",
    basic: "Priority email support",
    pro: "Priority phone support",
    enterprise: "24/7 phone support",
  },
  analytics: {
    free: "Basic analytics",
    basic: "Advanced analytics",
    pro: "Advanced analytics & insights",
    enterprise: "Advanced analytics & AI insights",
  },
};

export const billingPeriods = {
  monthly: "monthly",
  yearly: "yearly",
  forever: "forever",
} as const;

export type BillingPeriod =
  (typeof billingPeriods)[keyof typeof billingPeriods];
