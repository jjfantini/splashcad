import React from "react";
import { Icon } from "@iconify/react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full border-t border-gray-200 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Instagram Logo + Link */}
          <div className="flex items-center space-x-2">
            <Icon icon="mdi:instagram" className="h-5 w-5" />
            <span className="text-sm">Logo & Link</span>
          </div>

          {/* Right side - Copyright */}
          <div className="flex items-center space-x-1">
            <span className="text-sm">©</span>
            <span className="text-sm">2024 SplashCap.US</span>
          </div>
        </div>

        {/* Patent Pending text centered */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="text-sm font-medium">**Patent Pending**</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
