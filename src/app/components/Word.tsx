"use client";

import React, { useRef } from "react";

import { Button } from "./ui/button";

const Word = (props: {
  word: string;
  phonetic: string;
  phonetics?: string;
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = async () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return (
    <div className="flex justify-between items-center desktop:mt-[45px] md:mt-[45px] smartphone:mt-6">
      <div>
        <div className="tablet:text-[64px] smartphone:text-[32px] font-bold text-soft-black dark:text-white desktop:leading-[77.45 px]">
          {props.word}
        </div>
        <div className="tablet:text-2xl smartphone:text-lg mt-2 text-primary-purple">
          {props.phonetic}
        </div>
      </div>

      <audio id="track" ref={audioRef} src={props.phonetics}></audio>

      {props.phonetics && (
        <Button
          type="button"
          variant="default"
          className="desktop:h-[75px] desktop:w-[75px] tablet:h-[75px] tablet:w-[75px] smartphone:h-[48px] smartphone:w-[48px] bg-green-500 p-0 rounded-full bg-transparent hover:bg-transparent dark:bg-transparent"
          onClick={playAudio}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
            className=" fill-primary-purple hover:fill-primary-purple"
          >
            <g fillRule="evenodd">
              <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
        </Button>
      )}
    </div>
  );
};

export default Word;
