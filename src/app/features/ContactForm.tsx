import React from "react";
import ShineBorder from "@/components/ui/shine-border";
import { Icon } from "@iconify/react";

const ContactForm = () => {
  return (
    <div className="w-full flex items-center justify-center py-6 md:py-8 mb-40">
      <div className="flex items-center justify-center w-full max-w-[1200px] px-4">
        <ShineBorder
          className="w-full max-w-[440px]"
          color={["#335ec1", "#f57c34", "#FFFFFF"]}
          borderWidth={2}
          borderRadius={12}
        >
          <div className="bg-[#335ec1] w-full rounded-xl p-6">
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">
                Get In Touch
              </h2>
              <p className="text-blue-100 text-center max-w-md">
                Do you need bespoke SplashCaps for your own project? Send us a
                message!
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-blue-100 mb-2"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <Icon
                      icon="solar:user-bold-duotone"
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300 w-5 h-5"
                    />
                    <input
                      type="text"
                      id="name"
                      className="w-full pl-10 pr-4 py-2 bg-[#4b75d8] border border-blue-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f57c34] text-white placeholder-blue-200"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-blue-100 mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Icon
                      icon="solar:letter-bold-duotone"
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300 w-5 h-5"
                    />
                    <input
                      type="email"
                      id="email"
                      className="w-full pl-10 pr-4 py-2 bg-[#4b75d8] border border-blue-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f57c34] text-white placeholder-blue-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-blue-100 mb-2"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <Icon
                      icon="solar:chat-round-dots-bold-duotone"
                      className="absolute left-3 top-3 text-blue-300 w-5 h-5"
                    />
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full pl-10 pr-4 py-2 bg-[#4b75d8] border border-blue-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f57c34] text-white placeholder-blue-200"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#f57c34] text-white rounded-lg font-medium 
                            hover:bg-[#e56b23] transform hover:scale-105 transition-all duration-200
                            focus:outline-none focus:ring-2 focus:ring-[#f57c34] focus:ring-offset-2 focus:ring-offset-[#335ec1]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </ShineBorder>
      </div>
    </div>
  );
};

export default ContactForm;
