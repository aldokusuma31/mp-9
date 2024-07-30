'use client'

import React from "react";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventList from "@/components/events/EventList";
// import EventForm from "@/components/events/EventForm";
// import EventDetail from "@/components/events/EventDetail";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Price from "@/components/Price";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

// const fruits = [
//   "apple",
//   "Apple",
//   "orange",
//   "banana",
//   "pear",
//   "grapefruit",
//   "peach",
//   "apricot",
//   "nectarine",
//   "plum",
//   "mango",
//   "strawberry",
//   "blueberry",
//   "kiwi",
//   "passionfruit",
//   "raspberry",
//   "watermelon"
// ];

export default function Home() {
  // const renderFruitList = () => {
  //   return fruits.map((fruit, i) => <div className="m-3"><button className="bg-white" key={i}>{fruit}</button></div>);
  // };

  return (
    <div className="overflow-hidden">
      <Hero />
      {/* <div className="flex flex-row">
        {renderFruitList()}
      </div> */}
      <EventList />
      <AboutMe />
      <Services />
      <Skills />
      <Project />
      <Price />
      <Reviews />
      <Blog />
      <Contact />
    </div>
  );
}
