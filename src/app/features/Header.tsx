import { Icon } from "@iconify/react";
import ShineBorder from "@/components/ui/shine-border";
import { useEffect, useState } from "react";

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
      className={`fixed top-0 right-8 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ShineBorder
        className="w-auto"
        color={["#335ec1", "#f57c34"]}
        borderWidth={2}
        borderRadius={0}
      >
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[#335ec1]/10 before:backdrop-blur-sm before:border-b before:border-[#335ec1]/20" />

        <div className="relative px-6 h-12">
          <div className="flex items-center h-full text-white">
            <a
              href="https://www.instagram.com/splash_cap/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-[#f57c34] transition-colors"
            >
              <Icon icon="mdi:instagram" className="h-5 w-5" />
              <span className="text-sm">@splash_cap</span>
            </a>
          </div>
        </div>
      </ShineBorder>
    </header>
  );
};

export default Header;
