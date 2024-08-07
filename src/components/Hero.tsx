"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { products } from "../constants";

export function Hero() {
  return <HeroParallax products={products} />;
}
