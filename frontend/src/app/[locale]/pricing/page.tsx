import PricingCard from "@/app/components/pricing/PricingCard";
import { pricing } from "@/constants/pricing";
import Link from "next/link";

export default function PricingPage() {
  return (
    <section className="min-h-screen py-16 mt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-fg mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our competitive pricing plans tailored to meet your
            teaching needs. Start with our free plan and upgrade as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricing.map((plan) => (
            <div key={plan.type} className="flex justify-center">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-md text-muted-foreground mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-md text-muted-foreground">
            Need a custom plan?{" "}
            <Link
              href="/contact"
              className="text-brand-fg font-black hover:underline"
            >
              Contact us 👍
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
