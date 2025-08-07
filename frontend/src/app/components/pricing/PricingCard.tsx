import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Check } from "lucide-react";
import { PricingPlan } from "@/constants/pricing";

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card
      className={`relative w-full max-w-sm border-2 transition-all duration-300 hover:shadow-lg ${
        plan.isPopular
          ? "border-brand-fg shadow-[7px_8px_0_0_rgba(0,0,0,1)]"
          : "border-brand-fg shadow-[7px_8px_0_0_rgba(0,0,0,1)]"
      }`}
    >
      {plan.isPopular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-fg text-white px-4 py-2 rounded-full font-bold">
          Most Popular
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <h3 className="text-2xl font-black text-brand-fg">{plan.name}</h3>
        <div className="flex items-baseline justify-center gap-1 mt-2">
          <span className="text-4xl font-black text-brand-fg">
            {plan.price}
          </span>
          {plan.period !== "forever" && (
            <span className="text-md text-muted-foreground">
              / {plan.period}
            </span>
          )}
        </div>
        <p className="text-md text-muted-foreground mt-2">{plan.description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-brand-fg flex-shrink-0 mt-0.5" />
              <span className="text-md text-brand-fg">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full text-lg mt-6 h-12 ${
            plan.buttonVariant === "outline"
              ? "border-brand-fg text-white"
              : plan.buttonVariant === "secondary"
              ? "bg-brand-fg text-white hover:bg-brand-fg/90"
              : "bg-brand-fg text-white hover:bg-brand-fg/90"
          }`}
        >
          {plan.buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
