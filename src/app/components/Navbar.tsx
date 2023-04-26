"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Lora } from "next/font/google";
import { Inconsolata } from "next/font/google";
import { useTheme } from "next-themes";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setFont } from "../../../store/uiSlice";

const Navbar = () => {
  const [checkedValue, setCheckedValue] = useState<boolean>(false);
  const { setTheme } = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const selectedFont = useSelector((state: RootState) => state.ui.font);

  let currentFont = "Sans Serif";

  if (selectedFont === "sans") {
    currentFont = "Sans Serif";
  }
  if (selectedFont === "serif") {
    currentFont = "Serif";
  }
  if (selectedFont === "mono") {
    currentFont = "Mono";
  }

  useEffect(() => {
    const storedFont = localStorage.getItem("font") || "";
    if (storedFont) {
      const parsedFont = JSON.parse(storedFont);
      dispatch(setFont(parsedFont));
    }

    const storedDarkThemeState = localStorage.getItem("darkMode") || "";
    if (storedDarkThemeState && storedDarkThemeState === "on") {
      setCheckedValue(true);
    }
    if (storedDarkThemeState && storedDarkThemeState === "off") {
      setCheckedValue(false);
    }
    if(!storedDarkThemeState) {
      setTheme('light')
    }
  }, []);

  return (
    <header>
      <nav className="flex justify-between items-center h-[38px] desktop:mt-[58px] tablet:mt-[58px] smartphone:mt-6">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="38"
            viewBox="0 0 34 38"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="#838383"
              strokeLinecap="round"
              strokeWidth="1.5"
            >
              <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
              <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
              <path d="M11 9h12" />
            </g>
          </svg>
        </Link>
        <ul className="flex items-center justify-between gap-[26px] h-full">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="flex gap-[18px]">
                <Button
                  variant="ghost"
                  size="default"
                  className="px-0 mx-0 font-bold desktop:text-[18px] tablet:text-[18px] smartphone:text-sm"
                >
                  {currentFont}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                  >
                    <path
                      fill="none"
                      stroke="#A445ED"
                      strokeWidth="1.5"
                      d="m1 1 6 6 6-6"
                    />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="z-20 min-w-[183px] bg-white dark:bg-[#1F1F1F] rounded-[16px] drop-shadow-[0_5px_30px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_5px_30px_rgb(#A445ED)] p-[24px] flex flex-col gap-[16px] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              >
                <DropdownMenuItem
                  onClick={() => {
                    dispatch(setFont("sans"));
                  }}
                  className={`group text-[18px] smartphone:text-sm smartphone:leading-4 font-bold  leading-none rounded-md data-[highlighted]:text-[#A445ED] data-[highlighted]:outline-none data-[highlighted]:cursor-pointer ${inter.className}`}
                >
                  Sans Serif
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    dispatch(setFont("serif"));
                  }}
                  className={`group text-[18px] smartphone:text-sm smartphone:leading-4 font-bold leading-none rounded-md data-[highlighted]:text-[#A445ED] data-[highlighted]:outline-none data-[highlighted]:cursor-pointer ${lora.className}`}
                >
                  Serif
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    dispatch(setFont("mono"));
                  }}
                  className={`group text-[18px] smartphone:text-sm smartphone:leading-4 font-bold  leading-none rounded-md data-[highlighted]:text-[#A445ED] data-[highlighted]:outline-none data-[highlighted]:cursor-pointer ${inconsolata.className}`}
                >
                  Mono
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="h-[32px] bg-off-white-2">
            <Separator orientation="vertical" />
          </li>
          <li>
            <div className="flex items-center gap-5">
              <Switch
                onCheckedChange={(e) => {
                  if (e) {
                    setTheme("dark");
                    localStorage.setItem("darkMode", "on");
                    setCheckedValue(true);
                  } else {
                    setTheme("light");
                    localStorage.setItem("darkMode", "off");
                    setCheckedValue(false);
                  }
                }}
                id="dark-theme"
                checked={checkedValue}
              />
              <label className="sr-only" htmlFor="dark-theme">
                Dark theme toggle
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
              >
                <path
                  fill="none"
                  stroke={`${checkedValue ? "#A445ED" : "#838383"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
                />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
