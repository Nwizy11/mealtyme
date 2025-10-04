import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Smartphone } from "lucide-react";
import { Twitter, Facebook, Instagram, Linkedin} from "lucide-react";

const socials = [
  { name: "Twitter", icon: Twitter, href: "https://x.com/Mealtyme194?t=fsryWZgpkX4nvtIlzyP1ZA&s=09" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];
const Footer = () => {
  return (
    <footer className="border-t py-12 md:py-16 px-10">
      <div className="">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
             <img
  src="/log.jpg" 
  alt="Description"
  className="h-7 w-7"
/>
              <span className="text-xl font-bold text-neutral-600">
                Meal<span className="text-red-400">Tyme</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              The smart app for modern life.  </p>
              <p>Contact us: Mealtips194@gmail.com</p>
              <p>Phone: +2348109275056</p>
          
            <div className="flex gap-4">
              {socials.map(({ name, icon: Icon, href }) => (
                <Link key={name} href={href} aria-label={name}>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-muted-foreground hover:bg-violet-600 hover:text-white transition cursor-pointer"
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div>
            {/* <h3 className="font-medium mb-4">Product</h3> */}
            {/* <ul className="space-y-2">
              {["Features", "Pricing", "Testimonials", "FAQ", "Download"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-violet-600"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul> */}
          </div>
          <div>
            {/* <h3 className="font-medium mb-4">Company</h3> */}
            {/* <ul className="space-y-2">
              {["About Us", "Careers", "Press", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-violet-600"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul> */}
          </div>
          <div>
            {/* <h3 className="font-medium mb-4">Legal</h3> */}
            {/* <ul className="space-y-2">
              {[
                "Terms of Service",
                "Privacy Policy",
                "Cookie Policy",
                "GDPR",
                "Accessibility",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-violet-600"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} MealTyme. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
