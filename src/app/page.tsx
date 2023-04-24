import Image from "next/image";
import { Inter } from "next/font/google";
import Search from "./components/Search";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import ErrorMessage from "./components/ErrorMessage";

interface pageProps {
  searchParams: {
    word?: string;
  };
}

export async function generateMetadata({ searchParams: { word } }: pageProps) {
  const capitalWord = word?.replace(word[0], word[0].toUpperCase());

  return {
    ...(word
      ? {
          title: `${capitalWord} | Dictionary App`,
          description: `Check the definition of ${capitalWord}`,
        }
      : {}),
  };
}

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

const fetchData = async (keyword?: string) => {
  if (!keyword) return;
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    );
    const data = (await res.json()) as Dictionary[];
    return data;
  } catch (error) {
    // throw new Error(error);
  }
};

export default async function Home({ searchParams: { word } }: pageProps) {
  const res = await fetchData(word);

  return (
    <main>
      <Navbar />
      <Search defaultWord={word} />
      {res && <Content resData={res[0]} />}
      {res && !res.length && word && <ErrorMessage />}
    </main>
  );
}
