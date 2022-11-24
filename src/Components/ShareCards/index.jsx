import React from "react";

// component
import ShareCard from "./ShareCard";
import Data from "./share.json";

export const ShareCards = () => {
  return (
    <article>
      <ul>
        {Data?.map((share) => (
          <ShareCard key={share._id} share={share} />
        ))}
      </ul>
    </article>
  );
};

export default ShareCards;
