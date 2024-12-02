"use client";

import React, { useState } from "react";
import HyperText from "@/components/ui/hyper-text";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Icon } from "@iconify/react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconMail, IconBeer } from "@tabler/icons-react";
import ShineBorder from "@/components/ui/shine-border";
import ModernDivider from "@/components/ui/modern-divider";
import Image from "next/image";
import Footer from "./Footer";
import Header from "./Header";

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
    console.log("Form submitted");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#335ec1] dark:bg-[#0F2A59] p-6 rounded-lg w-full max-w-md text-white">
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
              className="w-full px-3 py-2 bg-[#335ec1] dark:bg-[#335ec1] border border-[#335ec1] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#335ec1] focus:border-transparent text-blue-900 dark:text-white placeholder-blue-700 dark:placeholder-blue-200"
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
              className="w-full px-3 py-2 bg-[#335ec1] dark:bg-[#335ec1] border border-[#335ec1] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#335ec1] focus:border-transparent text-blue-900 dark:text-white placeholder-blue-700 dark:placeholder-blue-200"
            ></textarea>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[#335ec1] text-white rounded hover:bg-[#2a4b9b] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#f57c34] text-white rounded hover:bg-[#f57c34] transition-colors"
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
    <div className="flex flex-col items-center min-h-screen bg-[#020814] relative">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="h-screen w-full flex flex-col items-center pt-32 relative">
          {/* Logo - with drop and bounce animation */}
          <div className="relative w-[1000px] h-80 mb-16 animate-drop-bounce">
            <Image
              src="https://utfs.io/f/LdeD9gRtL6zR5lo9hngR2apmkB7EeDsSzWNvubwc4rT6CAQ5"
              alt="Splachcap Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Text */}
          <div className="flex flex-col sm:flex-row gap-1 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4">
            <HyperText
              text="portable."
              className="text-[#335ec1]"
              duration={1500}
              animateOnLoad={true}
            />
            <HyperText
              text="splashing."
              className="text-[#f57c34]"
              duration={1500}
              animateOnLoad={true}
            />
            <HyperText
              text="vessel."
              className="text-[#335ec1]"
              duration={1500}
              animateOnLoad={true}
            />
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-[80vw]">
            <ModernDivider animate={true} />
          </div>
        </div>

        {/* Content Section - Adding margin-bottom */}
        <div className="w-full px-4 py-4 max-w-7xl mx-auto mb-32">
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch flex-wrap">
            {/* Video Section */}
            <ShineBorder
              className="w-full max-w-[440px] mx-auto"
              color={["#335ec1", "#f57c34", "#FFFFFF"]}
              borderWidth={2}
              borderRadius={12}
            >
              <div className="bg-[#335ec1] w-full rounded-xl p-4 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">
                  See It in Action
                </h3>
                <div className="flex items-center justify-center">
                  <div className="w-full aspect-[9/16] relative rounded-xl overflow-hidden">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover rounded-xl"
                    >
                      <source
                        src="https://utfs.io/f/LdeD9gRtL6zRkabv8MX0gxd3QBYMiIl1GsoLP6nh2CZmTuNK"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </ShineBorder>

            <ModernDivider animate={false} />

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {/* First Card */}
              <CardContainer className="inter-var w-full">
                <CardBody className="bg-[#335ec1] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#0F2A59] dark:border-white/[0.2] border-black/[0.1] h-[400px] rounded-xl p-6 border flex flex-col justify-between">
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
                      Introducing our patented pre-loaded dynamically mixing
                      beverage vessel. Experience a revolutionary way to enjoy
                      your favorite drinks with unparalleled convenience and
                      style.
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

              {/* Second Card */}
              <CardContainer className="inter-var w-full">
                <CardBody className="bg-[#f57c34] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#f57c34] dark:border-white/[0.2] border-black/[0.1] h-[400px] rounded-xl p-6 border flex flex-col justify-between">
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
                      Our vessel is designed for easy transport and use, perfect
                      for any adventure or party. Enjoy the quickest way to mix
                      and serve your jager bombs, sake bombs, or vegas bombs
                      with style and ease.
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

              {/* Third Card */}
              <div className="w-full md:col-span-2 lg:col-span-1 flex items-center justify-center">
                <div className="w-full md:w-1/2 lg:w-full">
                  <CardContainer className="inter-var w-full">
                    <CardBody className="bg-[#335ec1] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#0F2A59] dark:border-white/[0.2] border-black/[0.1] h-[400px] rounded-xl p-6 border flex flex-col justify-between">
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
                          Available at your local grocery, liquor, or general
                          store. Can&apos;t find it nearby? No worries! Order
                          online for convenient delivery right to your doorstep.
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
                </div>
              </div>
            </div>

            <ModernDivider animate={false} />

            {/* Added Image Section - With explicit width and style */}
            <div className="w-full max-w-[1200px] mx-auto mt-8 mb-8 flex justify-center">
              <div className="flex flex-col md:flex-row gap-8 px-4 justify-center">
                <ShineBorder
                  className="md:w-[350px]"
                  color={["#335ec1", "#f57c34", "#FFFFFF"]}
                  borderWidth={2}
                  borderRadius={12}
                >
                  <div className="bg-[#335ec1] rounded-xl p-4">
                    <div className="relative flex justify-center">
                      <Image
                        src="https://utfs.io/f/LdeD9gRtL6zRMVEVD1rtcrRszEBZuSdnK1m3D5afMpxqWhO0"
                        alt="Feature illustration"
                        width={350}
                        height={350}
                        style={{
                          borderRadius: "12px",
                          objectFit: "contain",
                        }}
                        priority
                      />
                    </div>
                  </div>
                </ShineBorder>

                <ShineBorder
                  className="md:w-[350px]"
                  color={["#335ec1", "#f57c34", "#FFFFFF"]}
                  borderWidth={2}
                  borderRadius={12}
                >
                  <div className="bg-[#335ec1] rounded-xl p-4">
                    <div className="relative flex justify-center">
                      <Image
                        src="https://utfs.io/f/LdeD9gRtL6zRMpjUD2rtcrRszEBZuSdnK1m3D5afMpxqWhO0"
                        alt="Feature illustration 2"
                        width={350}
                        height={350}
                        style={{
                          borderRadius: "12px",
                          objectFit: "contain",
                        }}
                        priority
                      />
                    </div>
                  </div>
                </ShineBorder>
              </div>
            </div>

            <ModernDivider animate={false} />

            {/* How It Works Video - Updated to match See it in Action */}
            <ShineBorder
              className="w-full sm:w-[30rem] max-w-[calc(100vw-2rem)]"
              color={["#335ec1", "#f57c34", "#FFFFFF"]}
              borderWidth={2}
              borderRadius={12}
            >
              <div className="bg-[#335ec1] w-full rounded-xl p-4 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">
                  How It Works
                </h3>
                <div className="flex items-center justify-center">
                  <div className="w-full aspect-[9/16] relative rounded-xl overflow-hidden">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover rounded-xl"
                    >
                      <source
                        src="https://utfs.io/f/LdeD9gRtL6zRnpaTXHosq7HmQdRLSiNY3behaBOkCwtVJTMv"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </ShineBorder>
          </div>
        </div>

        <FloatingDock
          items={dockItems}
          desktopClassName="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          mobileClassName="fixed bottom-8 left-1/2 transform -translate-x-1/2 scale-75 z-20"
        />

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            This is where you can add your contact form or contact information.
          </p>
        </Modal>

        <Footer />
      </div>
    </div>
  );
}
