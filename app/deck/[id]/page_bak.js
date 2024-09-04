"use client";

import { useState, useEffect } from "react";
import Flashcard from "../../components/Flashcard";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import hsk1 from "../../../public/hsk1.json";
import hsk2 from "../../../public/hsk2.json";
import hsk3 from "../../../public/hsk3.json";
import hsk4 from "../../../public/hsk4.json";
import hsk5 from "../../../public/hsk5.json";
import hsk6 from "../../../public/hsk6.json";

export async function generateStaticParams() {
  return [
    { id: "hsk1" },
    { id: "hsk2" },
    { id: "hsk3" },
    { id: "hsk4" },
    { id: "hsk5" },
    { id: "hsk6" },
  ];
}
const initialWordlists = {
  hsk1: hsk1,
  hsk2: hsk2,
  hsk3: hsk3,
  hsk4: hsk4,
  hsk5: hsk5,
  hsk6: hsk6,
};

export default function Deck() {
  const params = useParams();
  const id = params.id;

  const [wordlists, setWordlists] = useState(initialWordlists);
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    setWords(wordlists[id] || []);
  }, [id, wordlists]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextWord();
      }
      if (event.key === "ArrowLeft") {
        previousWord();
      }
      if (event.key === " ") {
        event.preventDefault(); // Prevent default space bar behavior
        setShowTranslation((showTranslation) => !showTranslation);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [words]); // Add words as a dependency

  const [previousIndices, setPreviousIndices] = useState([]);

  const nextWord = () => {
    if (words.length > 0) {
      setPreviousIndices((prev) => [...prev, currentWordIndex]);
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * words.length);
      } while (newIndex === currentWordIndex && words.length > 1);
      setCurrentWordIndex(newIndex);
      setShowTranslation(false); // Reset translation visibility
    }
  };

  const previousWord = () => {
    if (previousIndices.length > 0) {
      const lastIndex = previousIndices[previousIndices.length - 1];
      setCurrentWordIndex(lastIndex);
      setPreviousIndices((prev) => prev.slice(0, -1));
      setShowTranslation(false); // Reset translation visibility
    }
  };

  const addWord = (newWord) => {
    setWords([...words, newWord]);
    setWordlists({
      ...wordlists,
      [id]: [...(wordlists[id] || []), newWord],
    });
  };

  if (words.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gray-100 font-sans">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          {id.charAt(0).toUpperCase() + id.slice(1)} Flashcards
        </h1>
        <div>No words found for this deck. Add some words to get started!</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gray-100 font-sans">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">
        {id.charAt(0).toUpperCase() + id.slice(1)} Flashcards
      </h1>
      {words.length > 0 && (
        <Flashcard
          word={words[currentWordIndex]}
          onAddWord={addWord}
          showTranslation={showTranslation}
          setShowTranslation={setShowTranslation}
        />
      )}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={previousWord}
          className="mt-8 px-6 py-3 text-base font-medium text-white rounded-md transition-colors duration-300 bg-blue-500 hover:bg-blue-600"
        >
          Previous Word
        </button>
        <button
          onClick={nextWord}
          className="mt-8 px-6 py-3 text-base font-medium text-white rounded-md transition-colors duration-300 bg-blue-500 hover:bg-blue-600"
        >
          Next Word
        </button>
      </div>
      <Link href="/">
        <button className="mt-8 px-6 py-3 text-base font-medium text-white rounded-md transition-colors duration-300 bg-gray-500 hover:bg-gray-600">
          Back to Home
        </button>
      </Link>{" "}
    </div>
  );
}
