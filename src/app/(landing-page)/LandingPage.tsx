import React from "react";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "../../components/ui/background-beams-with-collision";
import ShinyButton from "../../components/magicui/shiny-button";

const LandingPage: React.FC = () => {
  return (
    <BackgroundBeamsWithCollision className="h-screen">
      <div className="flex flex-col items-center justify-center h-full text-center p-4">
        <h1 className="text-7xl font-bold text-[#335ec1] mb-8">SPLASH CAP</h1>
        <Link href="/features" className="mt-8">
          <ShinyButton className="bg-[#335ec1] text-white hover:bg-[#2a4b9b] focus:ring-[#f57c34] text-sm md:text-base">
            Discover the Revolution
          </ShinyButton>
        </Link>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default LandingPage;
