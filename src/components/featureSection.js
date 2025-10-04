import React from "react";
import { Card, CardContent } from "./ui/card";
import { Smartphone } from "lucide-react";
import { Download } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { Star } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/badge";

const FeatureSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="px-10 max-sm:px-5">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] text-white hover:opacity-90 border-0">
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why you need MealTyme
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-[700px] mx-auto">
            Our app combines powerful features with an intuitive interface to
            provide the best user experience.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Your Personal AI Chef",
              description:
                "Instant meal plans that know what you want before you do. Adapts to your taste, budget, and dietary needs in real-time.",
              icon: <CheckCircle2 className="h-10 w-10 text-white" />,
            },
            {
              title: "Shop Like a Pro in Minutes",
              description:
                "Auto-generated grocery lists organized by store layout. Syncs everywhere. Never forget ingredients or waste money again.",
              icon: <Smartphone className="h-10 w-10 text-white" />,
            },
            {
              title: "Get Healthier on Autopilot",
              description:
                "Smart nutrition tracking that learns your habits and gently guides you to better choices. Results without the restrictive diet drama.",
              icon: <Star className="h-10 w-10 text-white" />,
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="border cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] p-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;