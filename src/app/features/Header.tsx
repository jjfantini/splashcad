import { Icon } from "@iconify/react";
import ShineBorder from "@/components/ui/shine-border";

const Header = () => {
  return (
    <header className="fixed top-0 right-8 z-50">
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
