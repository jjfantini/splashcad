import React from "react";

interface ModernDividerProps {
  className?: string;
}

const ModernDivider: React.FC<ModernDividerProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-full flex items-center justify-center my-8 ${className}`}
    >
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="mx-4 text-blue-500 -translate-x-[50%]">
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
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </div>
  );
};

export default ModernDivider;
