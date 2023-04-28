"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = searchParams.get("word");

  useEffect(() => {
    if (!params) {
      setSearchTerm("");
    }
  }, [params]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm === "") {
      setHasError(true);
      return;
    }
    setHasError(false);
    router.push(`?word=${searchTerm}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mt-[51.5px] relative flex items-center">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <Input
          type="text"
          placeholder="Search for any word..."
          onChange={changeHandler}
          value={searchTerm}
          id="search"
          className={`desktop:h-16 md:h-16 smartphone:h-12 bg-off-white-1 dark:bg-soft-black dark:text-white dark:placeholder:text-white dark:placeholder:text-opacity-25 rounded-2xl border-transparent focus:border-primary-purple outline-none px-6 py-5 focus-visible:ring-transparent text-xl font-bold text-dark-gray-2 placeholder:text-dark-gray-2 placeholder:text-opacity-25 ${
            hasError ? "border-red-500" : ""
          }`}
        />
        <Button
          type="submit"
          variant="default"
          className="h-[64px] w-[64px] rounded-2xl absolute right-0 bg-transparent hover:bg-transparent dark:bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fill="none"
              stroke="#A445ED"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
            />
          </svg>
        </Button>
      </div>
    </form>
  );
};

export default Search;
