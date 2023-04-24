import React from "react";
import Image from "next/image";

import emoticon from "../../../public/emoticon.png";

const ErrorMessage = () => {
  return (
    <div className="mt-[132px] w-full flex flex-col justify-center items-center">
      <Image src={emoticon} height={64} width={63} alt="Emoticon" />
      <h3 className="mt-11 text-xl font-bold">No Definitions Found</h3>
      <p className="mt-6 text-xl text-light-gray text-center">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default ErrorMessage;
