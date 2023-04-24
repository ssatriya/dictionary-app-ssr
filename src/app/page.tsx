import Image from "next/image";
import { Inter } from "next/font/google";
import Search from "./components/Search";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

interface pageProps {
  searchParams: {
    word?: string;
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
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
  );
  const data = (await res.json()) as Dictionary[];
  return data;
};

export default async function Home({ searchParams: { word } }: pageProps) {
  const res = await fetchData(word);

  return (
    <main>
      <Navbar />
      <Search defaultWord={word} />
      {res && <Content resData={res[0]} />}
    </main>
  );
}
