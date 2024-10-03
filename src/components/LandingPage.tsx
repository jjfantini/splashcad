import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import ShinyButton from "./magicui/shiny-button";

const LandingPage: React.FC = () => {
  return (
    <BackgroundBeamsWithCollision className="h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-white mb-8">
          Splash Cap
        </h1>
        <ShinyButton className="bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500">
          Discover the Splash Revolution
        </ShinyButton>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default LandingPage;