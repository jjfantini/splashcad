import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import ShineBorder from "../../components/ui/shine-border";

const Footer: React.FC = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;
      setShowFooter(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`fixed bottom-0 left-0 w-full transition-transform duration-300 z-10 ${
        showFooter ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <ShineBorder
        className="w-full"
        color={["#335ec1", "#f57c34"]}
        borderWidth={2}
        borderRadius={0}
        variant="footer"
      >
        <div
          className="absolute inset-0 before:absolute before:inset-0 before:bg-[#335ec1]/10 before:backdrop-blur-sm before:border-t before:border-[#335ec1]/20 
          before:[clip-path:polygon(0_0,calc(50%_-_clamp(80px,8vw,140px))_0,calc(50%_-_clamp(70px,7vw,120px))_25%,calc(50%_-_clamp(60px,6vw,100px))_35%,calc(50%_-_clamp(40px,4vw,80px))_35%,calc(50%_+_clamp(40px,4vw,80px))_35%,calc(50%_+_clamp(60px,6vw,100px))_35%,calc(50%_+_clamp(70px,7vw,120px))_25%,calc(50%_+_clamp(80px,8vw,140px))_0,100%_0,100%_100%,0_100%)]"
        />

        <div className="container relative mx-auto px-4 py-3">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-2">
              <a
                href="https://www.instagram.com/splash_cap/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#f57c34] transition-colors"
              >
                <Icon icon="mdi:instagram" className="h-5 w-5" />
                <span className="text-sm hidden sm:inline">@splash_cap</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-1">
              <span className="text-sm">© 2024</span>
              <span className="text-sm">SplashCap</span>
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1">
            <span className="text-sm font-medium text-white text-bold">
              Patented
            </span>
          </div>
        </div>
      </ShineBorder>
    </footer>
  );
};

export default Footer;
