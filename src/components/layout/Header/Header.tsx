import React from "react";
import { TopHeader } from "./TopHeader";
import { NavBar } from "./NavBar";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full shadow-xs">
      <TopHeader />
      <NavBar />
    </header>
  );
};
