"use client";

import React from "react";
import Video from "next-video";
import splashcapPoolVideo from "../splashcapPool.mp4";

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Features</h1>
      <div className="aspect-w-16 aspect-h-9">
        <Video
          src={splashcapPoolVideo}
          className="w-full h-full object-cover rounded-lg shadow-lg"
          controls
        />
      </div>
    </div>
  );
}
