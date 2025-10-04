import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 px-10 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] text-white">
      <div className="">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Get Started
            </h2>
            <p className="text-white/90 text-lg max-w-[500px]">
              Wake up to breakfast ideas. Get lunch inspiration at noon. Receive dinner suggestions before you leave work. Our AI sends perfectly-timed meal notifications based on your schedule and preferences.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#DC2626] cursor-pointer hover:bg-white/90 font-semibold"
               onClick={() => window.open('https://github.com/Nwizy11/mealtyme/releases/download/v1.0.0/MealTyme.apk', '_blank')}
            >
              <Download className="mr-2 h-4 w-4" /> Download Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white cursor-pointer hover:bg-white hover:text-[#DC2626] font-semibold transition-all"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;