"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon, Play } from "lucide-react";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroVideoProps {
  animationStyle?: AnimationStyle;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

const animationVariants = {
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  // ... (add other animation styles as needed)
};

export default function HeroVideoDialog({
  animationStyle = "top-in-bottom-out",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const selectedAnimation =
    animationVariants[animationStyle as keyof typeof animationVariants];

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const VideoDialog = () => (
    <AnimatePresence>
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            {...selectedAnimation}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-[90%] max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
          >
            <motion.button
              className="absolute top-4 right-4 text-white text-xl bg-neutral-900/50 hover:bg-neutral-900/70 ring-1 ring-white/10 backdrop-blur-md rounded-full p-2 z-10 transition-colors"
              onClick={() => setIsVideoOpen(false)}
            >
              <XIcon className="w-6 h-6" />
            </motion.button>
            <iframe
              src={videoSrc}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div className={className}>
        <div
          className="relative cursor-pointer group"
          onClick={() => setIsVideoOpen(true)}
        >
          <img
            src={thumbnailSrc}
            alt={thumbnailAlt}
            className="w-full h-full object-cover rounded-lg transition-all duration-200 group-hover:brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/30 rounded-full p-3 transition-all duration-200 group-hover:bg-black/50">
              <Play className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
      {isMounted && createPortal(<VideoDialog />, document.body)}
    </>
  );
}
