"use client";
import React from "react";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { FaArrowDown } from "react-icons/fa";

export function MainHero() {
  return (
    <div className="min-h-[100vh] rounded-md bg-neutral-900 flex flex-col gap-10 items-center justify-center relative w-full px-[20%]">
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-8xl md:leading-tight max-w-8xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        Transform Your Marketing with ThreeSixty
      </h2>
      <p className="text-slate-400 text-center leading-6 text-3xl">
      Let us take care of your marketing needs so you can focus on what you do best which is running your business.
      </p>
      <button className="rounded-md text-3xl bg-sky-500 px-6 py-3 hover:-translate-y-2 text-black">Book a Consultation</button>
      <ShootingStars />
      <StarsBackground />
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <FaArrowDown className="text-white text-3xl md:text-4xl lg:text-5xl animate-bounce" />
      </div>
    </div>
  );
}