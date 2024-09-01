import { useState } from "react";
import AddWordForm from "./AddWordForm";

export default function Flashcard({
  word,
  onAddWord,
  showTranslation,
  setShowTranslation,
}) {
  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-72 h-44 perspective-1000 cursor-pointer bg-gradient-to-br from-white to-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        onClick={toggleTranslation}
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-5">
          <h2 className="text-4xl font-bold text-gray-800 m-0">{word.other}</h2>
          {showTranslation && (
            <div className="mt-2">
              {Object.entries(word).map(([key, value]) => {
                if (key !== "other") {
                  return (
                    <p key={key} className="text-2xl text-gray-600">
                      {key}: {value}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Click to {showTranslation ? "hide" : "show"} translation
      </p>
      <AddWordForm onAddWord={onAddWord} />
    </div>
  );
}
