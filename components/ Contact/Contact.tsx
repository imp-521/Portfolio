"use client";
import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { contactInfo, socialLinks } from "@/data";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section id='contact' className='scroll-mt-17'>
      <div className="w-full h-auto bg-linear-to-br from-sky-50 via-white to-indigo-100 dark:from-zinc-950 dark:via-indigo-950 dark:to-sky-950 flex items-center justify-center flex-col px-6 pt-5 pb-7 lg:pb-10 gap-3 lg:gap-5 lg:pt-6 lg:px-50">
        <div className="w-full flex items-center justify-center pb-6">
          <SectionHeading
            title1="Get in"
            title2="Touch"
            description="Have a project in mind or just want to say hi? I'd love to hear from you."
          />
        </div>

        <div className="w-full flex items-center justify-center flex-col lg:flex-row lg:gap-10">
          <div data-aos='fade-right' data-aos-delay="300"   data-aos-anchor-placement="top-center"  className="flex flex-1 items-start justify-center gap-2 flex-col w-full">
            <div className="pb-4">
              <h3 className="text-2xl font-semibold mb-4">Let's talk</h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="flex items-start justify-center gap-3 flex-col w-full">
              {contactInfo.map((link) => {
                return (
                  <a
                    href={link.href}
                    key={link.label}
                    target="_blank"
                    className="flex items-center p-4 gap-4 w-full bg-white dark:bg-gray-800 shadow-md rounded-xl justify-start hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                      <link.icon className="h-5 w-5 text-blue-500 dark:text-white" />
                    </div>

                    <div className="overflow-hidden">
                      <p className="text-sm text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="font-medium">{link.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="pb-4">
              <h4 className="text-lg font-medium my-4">Follow me</h4>

              <div className="flex gap-1">
                {socialLinks.map((link) => {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      className="w-12 h-12 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-muted-foreground hover:text-blue-500"
                    >
                      <link.icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* contact form */}
          <div data-aos='fade-left' data-aos-delay="150"   data-aos-anchor-placement="top-center" className="flex flex-1 w-full shadow-md">
            <form className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-8 w-full">
              <div className="flex gap-4 flex-col sm:flex-row items-center justify-center w-full">
                <div className="flex flex-col gap-1 flex-1">
                  <label htmlFor="name" className="text-sm font-semibold">Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Afshin sohrabi"
                    required
                    className="bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <label htmlFor="email" className="text-sm font-semibold">Email</label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="afshin@example.com"
                    required
                    className="bg-white"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-6 w-full">
                <label htmlFor="subject" className="text-sm font-semibold">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                    className="bg-white"
                  />
              </div>
              <div className="flex flex-col gap-1 mt-6 w-full">
                <label htmlFor="message" className="text-sm font-semibold">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    className="bg-white h-40"
                    rows={10}
                  />
              </div>
              <Button type="submit" size="lg" className="w-full cursor-pointer mt-6">
                  <Send className="w-4 h-4 mr-2"/>
                  Send Message
              </ Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
