import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  yearlyPrice: number;
  isYearly: boolean;
  features: string[];
  badge?: string;
  isPopular?: boolean;
  isBestDeal?: boolean;
}

export function PricingCard({
  title,
  description,
  price,
  yearlyPrice,
  isYearly,
  features,
  badge,
  isPopular,
  isBestDeal,
}: PricingCardProps) {
  const monthlyPrice = isYearly
    ? (yearlyPrice / 12).toFixed(2)
    : price.toFixed(2);
  const yearlyPriceTotal = isYearly ? yearlyPrice : price * 12;
  const savings = (price * 12 - yearlyPrice).toFixed(0);

  return (
    <Card className={`relative ${isPopular ? "border-primary shadow-lg" : ""}`}>
      {badge && (
        <Badge variant="destructive" className="absolute -top-2 right-4">
          {badge}
        </Badge>
      )}
      <CardHeader>
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="text-2xl font-bold">{title}</h3>
          {isPopular && (
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Most popular
            </Badge>
          )}
          {isBestDeal && (
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              Best deal
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">$</span>
            <span className="text-4xl font-bold">{monthlyPrice}</span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Billed as ${yearlyPriceTotal}/year
          </div>
          {isYearly && (
            <div className="text-sm text-green-600 mt-1">
              Save ${savings} with yearly pricing (40% off)
            </div>
          )}
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button className="w-full" variant={isPopular ? "default" : "outline"}>
          Start 7 day free trial →
        </Button>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          $0.00 due today, cancel anytime
        </div>
      </CardFooter>
    </Card>
  );
}
