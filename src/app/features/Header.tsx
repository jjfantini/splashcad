import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(currentScrollY < lastScrollY);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 right-4 sm:right-8 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative w-16 sm:w-auto">
        <div
          className="absolute inset-0 bg-[#335ec1]/5 backdrop-blur-sm border-b border-[#335ec1]/10"
          style={{
            clipPath:
              "polygon(0% 0%, 100% 0%, calc(100% - 15px) 100%, 15px 100%)",
          }}
        />

        <div className="relative px-4 sm:px-8 h-12 sm:h-12">
          <div className="flex items-center justify-center sm:justify-start h-full">
            <a
              href="https://www.instagram.com/splash_cap/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center sm:space-x-2"
            >
              <Icon
                icon="mdi:instagram"
                className="h-6 w-6 sm:h-5 sm:w-5 text-orange-500"
              />
              <AnimatedGradientText>
                <span className="hidden sm:inline text-sm font-medium">
                  @splash_cap
                </span>
              </AnimatedGradientText>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
