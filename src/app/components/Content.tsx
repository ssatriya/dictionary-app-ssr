import React from "react";

import Word from "./Word";
import Noun from "./Noun";
import Verb from "./Verb";
import Source from "./Source";

interface Dictionary {
  word: string;
  meanings: [
    {
      partOfSpeech: string;
      definitions: [
        {
          definition: string;
          example: string;
        }
      ];
      synonyms: string[];
    }
  ];
  phonetic: string;
  phonetics: [
    {
      text: string;
      audio: string;
    }
  ];
  sourceUrls: string[];
}

interface WordProps {
  resData: Dictionary;
}

const Content = ({ resData }: WordProps) => {
  if (!resData) {
    return null;
  }

  const nounData = resData.meanings.find((obj) => obj.partOfSpeech === "noun");
  const verbData = resData.meanings.find((obj) => obj.partOfSpeech === "verb");

  return (
    <>
      <Word
        word={resData.word}
        phonetic={resData.phonetic}
        phonetics={resData.phonetics[0]?.audio}
      />
      {nounData && <Noun noun={nounData} />}
      {verbData && <Verb verb={verbData} />}
      <Source source={resData.sourceUrls} />
    </>
  );
};

export default React.memo(Content);
