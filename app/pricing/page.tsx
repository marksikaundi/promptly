"use client";

import { PricingCard } from "@/features/price/pricing-card";
import { PricingToggle } from "@/features/price/pricing-toggle";
import { SocialPlatforms } from "@/features/price/social-platforms";
import { useState } from "react";
// import { PricingToggle } from "./components/pricing-toggle";
// import { PricingCard } from "./components/pricing-card";
// import { SocialPlatforms } from "./components/social-platforms";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="text-primary mb-2">Pricing</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Get more views, with less effort.
        </h1>
        <PricingToggle onPeriodChange={setIsYearly} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingCard
          title="Starter"
          description="Best for beginner creators"
          price={8.99}
          yearlyPrice={64}
          isYearly={isYearly}
          badge="40% OFF"
          features={[
            "5 connected social accounts",
            "Unlimited posts",
            "Schedule posts",
            "Carousel posts",
          ]}
        />

        <PricingCard
          title="Creator"
          description="Best for growing creators"
          price={17.99}
          yearlyPrice={129}
          isYearly={isYearly}
          isPopular={true}
          badge="40% OFF"
          features={[
            "15 connected social accounts",
            "Unlimited posts",
            "Schedule posts",
            "Carousel posts",
            "Content studio access",
            "Limited growth consulting",
          ]}
        />

        <PricingCard
          title="Pro"
          description="Best for scaling brands"
          price={27.99}
          yearlyPrice={194}
          isYearly={isYearly}
          isBestDeal={true}
          badge="40% OFF"
          features={[
            "Unlimited connected accounts",
            "Unlimited posts",
            "Schedule posts",
            "Carousel posts",
            "Content studio access",
            "Priority growth consulting",
          ]}
        />
      </div>

      <SocialPlatforms />
    </div>
  );
}
