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
      <div className="mx-4 text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14"></path>
          <path d="M18 13l-6 6"></path>
          <path d="M6 13l6 6"></path>
        </svg>
      </div>
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </div>
  );
};

export default ModernDivider;
