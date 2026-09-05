import { footerSocialLinks } from "@/data";
import { Heart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 lg:px-30 flex items-center justify-center flex-col px-6 gap-5 lg:gap-0">
        <div className="flex items-center justify-between flex-col w-full gap-6 lg:flex-row lg:h-25">
          <div className=" flex items-center justify-center pt-13 md:pt-7 lg:pt-0">
            <a href="" className="text-xl font-bold text-indigo-700 flex items-center justify-center">
              {"<AFSHIN/>"}
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            {footerSocialLinks.map((item) => {
              return (
                <div key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                  </a>
                </div>
              );
            })}
          </div>
          <div className="w-auto">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with {""}{" "}
              <Heart className="w-4 h-4 text-destructive fill-destructive" /> by
              Afshin Sohrabi
            </p>
          </div>
        </div>
        <div className="w-full p-8 border-t border-gray-300 dark:border-gray-800 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
