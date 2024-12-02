import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ShineBorder from "@/components/ui/shine-border";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <ShineBorder
        className="w-full"
        color={["#335ec1", "#f57c34"]}
        borderWidth={2}
        borderRadius={0}
      >
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[#335ec1]/10 before:backdrop-blur-sm before:border-b before:border-[#335ec1]/20" />

        <div className="container relative mx-auto px-4 h-16">
          <div className="flex items-center justify-between h-full text-white">
            <div className="w-10" />

            {/* Center logo */}
            <Link href="/" className="relative w-40 h-12">
              <Image
                src="https://utfs.io/f/LdeD9gRtL6zR5lo9hngR2apmkB7EeDsSzWNvubwc4rT6CAQ5"
                alt="Splachcap Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Right section - Instagram */}
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
          </div>
        </div>
      </ShineBorder>
    </header>
  );
};

export default Header;
