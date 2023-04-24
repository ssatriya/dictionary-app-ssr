"use client";

import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";

import { Inter } from "next/font/google";
import { Lora } from "next/font/google";
import { Inconsolata } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

import { RootState } from "../../../../store/store";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const font = useSelector((state: RootState) => state.ui.font);

  let currentFont = inter.className;

  if (font === "sans") {
    currentFont = inter.className;
  }
  if (font === "serif") {
    currentFont = lora.className;
  }
  if (font === "mono") {
    currentFont = inconsolata.className;
  }

  return (
    <div
      className={`max-w-[773px] mx-auto px-4 md:px-10 smartphone:px-6 ${currentFont}`}
    >
      {children}
    </div>
  );
};

export { Container };
