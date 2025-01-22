"use client"

import { useState } from "react";

export default function EpisodeCard({ episode }) {
  const [isExpanded, setIsExpanded] = useState(false);
  // console.log(episode, "THIS IS EPII");

  const getFirstTwoSentences = (text) => {
    const sentences = text.split(".");
    return sentences.slice(0, 2).join(".") + (sentences.length > 2 ? "." : "");
  };
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="w-full">
        <img
          src={episode.thumbnail}
          alt={episode.title}
          className="w-full h-48 object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{episode.title}</h2>
        <p className="mt-2 text-sm text-gray-600">
          {isExpanded ? episode.description : getFirstTwoSentences(episode.description)}
          {episode.description.split(".").length > 2 && (
            <span
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-500 cursor-pointer ml-2 hover:underline"
            >
              {isExpanded ? "Show Less" : "...Read More"}
            </span>
          )}
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
          Listen Now
        </button>
      </div>
    </div>
  );
}
