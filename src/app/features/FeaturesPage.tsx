"use client";

import React, { useState } from "react";
import HyperText from "@/components/ui/hyper-text";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Icon } from "@iconify/react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconMail, IconBeer } from "@tabler/icons-react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import ShineBorder from "@/components/ui/shine-border";
import ModernDivider from "@/components/ui/modern-divider";

// Define the props interface for the Modal component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

// Update the Modal component with type annotations
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#1E3A8A] dark:bg-[#0F2A59] p-6 rounded-lg w-full max-w-md text-white">
        {children}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 bg-blue-400 dark:bg-blue-500 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent text-blue-900 dark:text-white placeholder-blue-700 dark:placeholder-blue-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-3 py-2 bg-blue-400 dark:bg-blue-500 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent text-blue-900 dark:text-white placeholder-blue-700 dark:placeholder-blue-200"
            ></textarea>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function FeaturesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const dockItems = [
    { title: "Home", icon: <IconHome className="h-6 w-6" />, href: "/" },
    {
      title: "Features",
      icon: <IconBeer className="h-6 w-6" />,
      href: "/features",
    },
    {
      title: "Contact Us",
      icon: <IconMail className="h-6 w-6" />,
      href: "/contact",
      onClick: openModal,
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-4 pb-32 bg-[#020814] relative">
      <div className="mt-8 mb-12">
        <div className="flex flex-col sm:flex-row gap-1 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          <HyperText
            text="portable."
            className="text-blue-400"
            duration={1500}
            animateOnLoad={true}
          />
          <HyperText
            text="splashing."
            className="text-orange-400"
            duration={1500}
            animateOnLoad={true}
          />
          <HyperText
            text="vessel."
            className="text-blue-400"
            duration={1500}
            animateOnLoad={true}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch flex-wrap">
        <CardContainer className="inter-var w-full sm:w-[30rem] max-w-[calc(100vw-2rem)]">
          <CardBody className="bg-[#1E3A8A] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#0F2A59] dark:border-white/[0.2] border-black/[0.1] h-[400px] rounded-xl p-6 border flex flex-col justify-between">
            <div>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-white"
              >
                A World First Innovation
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-blue-100 text-sm mt-2 dark:text-blue-200"
              >
                Introducing our patented pre-loaded dynamically mixing beverage
                vessel. Experience a revolutionary way to enjoy your favorite
                drinks with unparalleled convenience and style.
              </CardItem>
            </div>
            <CardItem translateZ="100" className="w-full mt-4">
              <div className="w-full h-40 flex items-center justify-center">
                <Icon
                  icon="solar:cup-first-bold-duotone"
                  width="120"
                  height="120"
                  className="text-blue-300"
                />
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var w-full sm:w-[30rem] max-w-[calc(100vw-2rem)]">
          <CardBody className="bg-orange-600 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-orange-700 dark:border-white/[0.2] border-black/[0.1] h-[400px] rounded-xl p-6 border flex flex-col justify-between">
            <div>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-white"
              >
                Experience Unmatched Convenience
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-orange-100 text-sm mt-2 dark:text-orange-200"
              >
                Our vessel is designed for easy transport and use, perfect for
                any adventure or party. Enjoy the quickest way to mix and serve
                your jager bombs, sake bombs, or vegas bombs with style and
                ease.
              </CardItem>
            </div>
            <CardItem translateZ="100" className="w-full mt-4">
              <div className="w-full h-40 flex items-center justify-center">
                <Icon
                  icon="solar:bomb-emoji-bold-duotone"
                  width="120"
                  height="120"
                  className="text-orange-300"
                />
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var w-full sm:w-[30rem] max-w-[calc(100vw-2rem)]">
          <CardBody className="bg-[#1E3A8A] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#0F2A59] dark:border-white/[0.2] border-black/[0.1] h-[400px] rounded-xl p-6 border flex flex-col justify-between">
            <div>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-white mb-4"
              >
                Easy to Purchase
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-blue-100 text-sm mt-2 dark:text-blue-200"
              >
                Available at your local grocery, liquor, or general store.
                Can&apos;t find it nearby? No worries! Order online for
                convenient delivery right to your doorstep.
              </CardItem>
            </div>
            <CardItem translateZ="100" className="w-full mt-4">
              <div className="w-full h-40 flex items-center justify-center">
                <Icon
                  icon="solar:shop-2-bold-duotone"
                  width="120"
                  height="120"
                  className="text-blue-300"
                />
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Add the ModernDivider here */}
        <ModernDivider className="w-full" />

        {/* "See It in Action" with ShineBorder */}
        <ShineBorder
          className="w-full sm:w-[30rem] max-w-[calc(100vw-2rem)]"
          color={["#3B82F6", "#F97316", "#FFFFFF"]}
          borderWidth={2}
          borderRadius={12}
        >
          <div className="bg-[#1E3A8A] w-full min-h-[400px] rounded-xl p-4 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4">
              See It in Action
            </h3>
            <div className="flex-1 flex items-center justify-center p-2">
              <div className="w-full rounded-lg overflow-hidden">
                <HeroVideoDialog
                  animationStyle="top-in-bottom-out"
                  videoSrc="https://www.youtube.com/embed/3e8PDUBPBLo"
                  thumbnailSrc="/splashThumb.png"
                  thumbnailAlt="Portable Splashing Vessel in action"
                />
              </div>
            </div>
          </div>
        </ShineBorder>

        {/* "How It Works" with ShineBorder */}
        <ShineBorder
          className="w-full sm:w-[30rem] max-w-[calc(100vw-2rem)]"
          color={["#3B82F6", "#F97316", "#FFFFFF"]}
          borderWidth={2}
          borderRadius={12}
        >
          <div className="bg-[#1E3A8A] w-full min-h-[400px] rounded-xl p-4 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4">How It Works</h3>
            <div className="flex-1 flex items-center justify-center p-2">
              <div className="w-full rounded-lg overflow-hidden">
                <HeroVideoDialog
                  animationStyle="top-in-bottom-out"
                  videoSrc="https://www.youtube.com/embed/UOwgxWrWdEc"
                  thumbnailSrc="/splashThumb3.png"
                  thumbnailAlt="How the Portable Splashing Vessel works"
                />
              </div>
            </div>
          </div>
        </ShineBorder>
      </div>
      <FloatingDock
        items={dockItems}
        desktopClassName="fixed bottom-8 left-1/2 transform -translate-x-1/2"
        mobileClassName="fixed bottom-8 left-1/2 transform -translate-x-1/2 scale-75" // Added scale-75 for better mobile fit
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>
          This is where you can add your contact form or contact information.
        </p>
      </Modal>
    </div>
  );
}
