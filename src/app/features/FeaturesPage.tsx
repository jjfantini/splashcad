"use client";

import React from "react";
import HyperText from "@/components/ui/hyper-text";

export default function FeaturesPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <HyperText
        text="portable.splashing.vessel"
        className="text-5xl font-bold"
        duration={1500}
        animateOnLoad={true}
      />
    </div>
  );
}
