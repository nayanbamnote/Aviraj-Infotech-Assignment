"use client";
import React, { FC } from "react";
import Navbar from "@/components/Navbar";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import TeamMembers from "./TeamMembers";
import { MemberArrayType, ProjectType, WhyChooseUsArrayType } from "../constants/Type";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface WebsiteTempleteProp{
    heroTitle: string
    Projects: ProjectType[]
    WhyChooseUsArray: WhyChooseUsArrayType[]
    teamTitle: string
    MemberArray: MemberArrayType[]
}

const WebsiteTemplete: React.FC<WebsiteTempleteProp> = ({heroTitle, Projects, WhyChooseUsArray, teamTitle, MemberArray}) => {
  return (
    // Root
    <div className="flex flex-col gap-32 bg-[#0a0a0a]">
      <Link className="fixed top-20 left-4 lg:top-5 lg:left-5 z-[999999]" href={'/'}>
      <div className="w-24 h-12">
      <Image src='/aviraj_infotech_logo.jpg' className='bg-white p-1 rounded-lg object-contain' fill alt='aviraj_infotech_logo.jpg'/>

      </div>
      </Link>


      <Navbar className="top-2 z-[99999]" />
      
      {/* Component 1 */}
      <div className="w-full h-[45vh] bg-neutral-950 antialiased flex items-end justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="bg-clip-text text-center text-4xl sm:text-6xl text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
        >
          {heroTitle}
        </motion.h1>
      </div>

      {/* Component 2 */}
      <div className="bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <HoverEffect items={Projects} />
        </motion.div>
      </div>

      {/* Component 3 */}
      <div className="w-full h-[20rem] bg-[#0a0a0a] text-center flex flex-col items-center gap-5">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white bg-clip-text drop-shadow-lg tracking-wide">
          Why Choose Us?
        </h2>
        <div>
          <InfiniteMovingCards items={WhyChooseUsArray} direction="left" speed="slow" />
        </div>
      </div>

      {/* Component 4 */}
      <div className="w-full py-16 bg-[#0a0a0a] text-center -mt-14">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg tracking-wide">
          {teamTitle}
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeamMembers memberArray={MemberArray} />
        </div>
      </div>
    </div>
  );
};

export default WebsiteTemplete;
