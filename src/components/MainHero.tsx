"use client";
import React from "react";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { FaArrowRight } from "react-icons/fa";
import { Review } from "./Review";
import { Button } from "@mantine/core";

export function MainHero() {
  return (
    <div className="min-h-[110vh] rounded-md bg-neutral-900 flex flex-col gap-10 items-center justify-center relative w-full px-[10%]">
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-7xl lg:text-8xl md:leading-tight max-w-8xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        Transform Your Marketing with ThreeSixty
      </h2>
      <p className="hidden md:block text-white text-center leading-6 text-xl max-w-2xl">
      Automate Campaigns, Engage Audiences, and Boost Lead Generation with Our All-in-One Marketing Solution
        </p>
      <Review />
      <Button variant="filled" size="lg" radius="md" rightSection={<FaArrowRight size={14} />}>Book a Consultation</Button>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}