import React from "react";

interface ModernDividerProps {
  className?: string;
  animate?: boolean;
}

const ModernDivider: React.FC<ModernDividerProps> = ({
  className = "",
  animate = false,
}) => {
  return (
    <div
      className={`w-full flex items-center justify-center my-8 ${className}`}
    >
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#335ec1] to-transparent"></div>
      <div
        className={`mx-4 text-[#335ec1] flex-shrink-0 ${
          animate ? "animate-bounce" : ""
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </div>
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#335ec1] to-transparent"></div>
    </div>
  );
};

export default ModernDivider;
