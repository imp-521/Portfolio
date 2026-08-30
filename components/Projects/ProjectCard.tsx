"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion } from 'framer-motion'

type Props = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const ProjectCard = ({
  description,
  title,
  image,
  techStack,
  demoUrl,
  githubUrl,
}: Props) => {
  return (
    <div className="group bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden flex items-center justify-center flex-col">
      <div className="relative w-full h-35 sm:h-40  group-hover:scale-105 transition-all duration-300">
        <Image src={image} alt={title} fill className="object-fill"/>
      </div>
      <div className="p-6 flex-1">
        <h3 className="text-xl text-black dark:text-white font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300 dark:group-hover:text-blue-400">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-4 sm:line-clamp-2">
          {description}
        </p>
      </div>
      <div className="flex w-full px-6 mb-6 gap-2 flex-wrap items-start justify-start">
        {techStack.map((teck, index) => {
          return (
            <div
              key={index}
              className="text-xs px-3 py-1 bg-indigo-600 rounded-full flex items-center justify-center text-white font-medium items-right "
            >
              {teck}
            </div>
          );
        })}
      </div>
      <div className="flex w-full items-center justify-center mb-5 gap-2 flex-1">
        <div className="flex gap-3">
          {demoUrl && (
            <Button asChild className="flex-1 sm:h-9 text-sm">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
        <div className="flex gap-3">
          {githubUrl && (
            <Button asChild variant="outline" className="flex-1 sm:h-9 sm:w-30 text-sm ">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-4 h-4 mr-2" />
                Github
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
