import Link from 'next/link';
import React from 'react'

export default function LitUpButton({
    children,
    navigate
  }: Readonly<{
    children: React.ReactNode;
    navigate: string,
  }>) {
    return (
        <Link href={navigate} className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
         {children}
        </div>
      </Link>
    );
  }