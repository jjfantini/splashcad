"use client";

import React from "react";
import HyperText from "@/components/ui/hyper-text";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Icon } from "@iconify/react";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-[#020814]">
      <div className="mt-8 mb-12">
        <div className="flex flex-col sm:flex-row gap-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
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
        <CardContainer className="inter-var w-[30rem] max-w-full">
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

        <CardContainer className="inter-var w-[30rem] max-w-full">
          <CardBody className="bg-[#1E3A8A] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#0F2A59] dark:border-white/[0.2] border-black/[0.1] h-[400px] rounded-xl p-6 border flex flex-col justify-between">
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
                className="text-blue-100 text-sm mt-2 dark:text-blue-200"
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
                  className="text-blue-300"
                />
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var w-[30rem] max-w-full">
          <CardBody className="bg-[#1E3A8A] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#0F2A59] dark:border-white/[0.2] border-black/[0.1] h-[400px] rounded-xl p-6 border flex flex-col justify-between">
            <div>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-white"
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
      </div>
    </div>
  );
}
