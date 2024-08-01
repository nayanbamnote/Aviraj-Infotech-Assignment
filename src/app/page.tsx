'use client';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import React, { Suspense } from 'react';
import Image from 'next/image';
import LitUpButton from '@/components/LitUpButton';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center space-y-10">
      <Link className="fixed top-20 left-4 lg:top-5 lg:left-5 z-[999999]" href={'/'}>
      <div className="w-24 h-12">
      <Image src='/aviraj_infotech_logo.jpg' className='bg-white p-1 rounded-lg object-contain' fill alt='aviraj_infotech_logo.jpg'/>

      </div>
      </Link>

      {/* Heading */}
      <div className="flex justify-center text-center mb-10">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-black text-white flex items-center space-x-5"
          forceDarkMode={true}
        >
          <span className='font-bold text-4xl'>Aviraj Infotech</span>
        </HoverBorderGradient>
      </div>

      {/* Links */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <LitUpButton navigate='appdev'>App Development</LitUpButton>
        <LitUpButton navigate='artificiallearning'>Artificial Learning</LitUpButton>
        <LitUpButton navigate='courses'>Courses</LitUpButton>
        <LitUpButton navigate='cyberanalysis'>Cyber Analysis</LitUpButton>
        <LitUpButton navigate='dronesrobotics'>Drones & Robotics</LitUpButton>
      </div>
    </div>
  );
};

export default Page;
