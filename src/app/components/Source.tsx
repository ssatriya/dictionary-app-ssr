import React from "react";
import Link from "next/link";

import { Separator } from "./ui/separator";

interface Props {
  source: string[];
}

const Source = (props: { source: string[] }) => {
  return (
    <>
      <div className="w-full mt-10">
        <Separator aria-orientation="horizontal" className="bg-off-white-2" />
      </div>
      <div className="flex flex-wrap items-center gap-5 mt-[19px] mb-[124px]">
        <p className="text-light-gray text-sm">Source</p>{" "}
        {props.source.slice(0, 4).map((s, i) => (
          <Link
            href={s}
            className="text-dark-gray-2 text-sm underline underline-offset-3 flex items-center gap-2 dark:text-white"
            key={i}
            target="__blank"
          >
            {s}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path
                  fill="none"
                  stroke="#838383"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
                />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Source;
