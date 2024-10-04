"use client";

import React from "react";
import HyperText from "@/components/ui/hyper-text";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <div className="mt-8 mb-12">
        {" "}
        {/* New wrapper div */}
        <div className="flex flex-col sm:flex-row gap-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          <HyperText
            text="portable."
            className="text-blue-500"
            duration={1500}
            animateOnLoad={true}
          />
          <HyperText
            text="splashing."
            className="text-orange-500"
            duration={1500}
            animateOnLoad={true}
          />
          <HyperText
            text="vessel."
            className="text-blue-500"
            duration={1500}
            animateOnLoad={true}
          />
        </div>
      </div>
      {/* You can add more content here */}
    </div>
  );
}
