import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#991B1B] via-[#7F1D1D] to-[#5F1515] py-20 md:py-10 px-5">
      <div className=" relative z-10">
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col items-center text-center gap-8">
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm border border-white/30 font-semibold rounded-lg backdrop-blur">
              v.1.0
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              AI that recommends breakfast, lunch, and dinner
              <span className="block text-white mt-2">—right when you need it.</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-[600px] mx-auto lg:mx-0 leading-relaxed">
              No more "what's for dinner?" stress. It Adapts to your taste and dietary needs. Zero decisions, smart suggestions, and zero boring food.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-[#DC2626] hover:bg-white/90 cursor-pointer font-semibold shadow-xl shadow-black/25 transition-all hover:shadow-2xl hover:scale-105"
                onClick={() => window.open('https://github.com/Nwizy11/mealtyme/releases/download/v1.0.0/MealTyme.apk', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" /> Download Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#DC2626] cursor-pointer font-semibold transition-all backdrop-blur"
              >
                Learn More <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-3 border-[#991B1B] bg-white flex items-center justify-center text-sm font-bold text-[#991B1B] shadow-lg"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 ">
            <div className="relative z-10  ">
              <Image
                src="/4x.png"
                width={16000}
                height={12000}
                alt="App screenshot"
                className="drop-shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-[350px] w-[350px] rounded-full bg-white opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-white opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-white opacity-10 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;