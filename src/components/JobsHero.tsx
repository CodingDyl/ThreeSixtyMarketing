"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { products } from "../constants";

export function JobsHero() {
  return <HeroParallax products={products} />;
}
