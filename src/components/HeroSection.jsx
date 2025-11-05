import { ArrowDown } from "lucide-react";
import heroImage from "../assets/hero.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        {/* Two column layout: text left, image right. On small screens it stacks */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 text-left z-10 md:pr-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1">
                  {" "}
                  Mausam
                </span>
                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                  {" "}
                  Kamdar
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
                I am a Final year Student at DAU. I build websites and apps along with having an interest in Data engineering
              </p>

              <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button">
                  View My Work
                </a>
              </div>
            </div>
            </div>
            {/* spacer for layout on md */}
            <div className="md:col-span-5" />
          </div>

        </div>
      </div>

      {/* Right half image (absolute on md+) placed as direct child of section so h-full matches section height */}
      <div className="hidden md:block absolute top-0 right-0 h-full w-1/2 z-0">
        <div className="h-full w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Hero"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
