"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { people } from "../constants";
import StarRating from "./ui/star-rating";

export function Review() {
    const numberOfCustomers = 80;
  return (
    <div className="flex flex-col items-center justify-center my-5 w-full">
      <div className="flex items-center justify-center">
        <AnimatedTooltip items={people} />
        <div className="mx-2 hidden md:block"><p className="text-[rgba(0,0,0,0.9)]">---</p></div>
        <StarRating count={5} /> {/* Add the StarRating component with 5 stars */}
      </div>
      <p className="mt-4 text-center font-light text-white">We have {numberOfCustomers}+ happy customers!</p>
    </div>
  );
}
