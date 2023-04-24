"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

interface Props {
  partOfSpeech: string;
  definitions: [
    {
      definition: string;
    }
  ];
  synonyms: string[];
}

const Noun = (props: { noun: Props }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center items-center w-full gap-5 mt-10 smartphone:mt-8">
        <p className="tablet:text-2xl smartphone:text-lg italic font-bold dark:text-white">
          {props.noun.partOfSpeech}
        </p>{" "}
        <Separator aria-orientation="horizontal" className="bg-off-white-2" />
      </div>
      <div>
        <div className="mt-10 font-normal tablet:text-xl smartphone:text-base text-light-gray">
          Meaning
        </div>
        <ul className="mt-[25px] ml-[25px] flex flex-col gap-[13px] list-disc">
          {props.noun.definitions.map((def, i) => (
            <li className="text-primary-purple" key={i}>
              <p className="desktop:text-lg tablet:text-lg smartphone:text-[15px] font-normal text-soft-black ml-5 dark:text-white">
                {def.definition}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-[22px]">
        <div className="font-normal tablet:text-xl smartphone:text-base text-light-gray">
          Synonyms
        </div>
        {props.noun.synonyms.map((synonym, i) => (
          <Button
            type="button"
            variant="link"
            className="tablet:text-xl smartphone:text-base text-primary-purple font-bold px-0 py-0"
            key={i}
            onClick={() => {
              router.push(`?word=${synonym}`);
            }}
          >
            {synonym}
          </Button>
        ))}
      </div>
    </>
  );
};

export default React.memo(Noun);
