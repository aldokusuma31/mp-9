'use client'

import React from "react";
import Hero from "@/components/Hero";
import Blog from "@/components/Blog";

export default function Home() {

  return (
    <div className="overflow-hidden">
      <Hero />
      <Blog />
    </div>
  );
}
