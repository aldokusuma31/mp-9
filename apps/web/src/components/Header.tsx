'use client'

import React, { useState } from "react";
import NavMobile from "./NavMobile";
import Nav from "./NavEvent";

export const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div className="overflow-hidden">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />
    </div>
  );
};
