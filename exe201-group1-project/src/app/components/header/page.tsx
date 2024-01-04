"use client";
import React from "react";
import header from "./header.module.scss";
import Navigation from "@/components/Navbar/Navbar";

const Header = () => {
  return (
    <div className={header["red"]}>
      <Navigation />
    </div>
  );
};

export default Header;
