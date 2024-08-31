"use client";

import { useState } from "react";
import Flashcard from "./components/Flashcard";

export default function Home() {
  const [words, setWords] = useState([
    { french: "Bonjour", english: "Hello" },
    { french: "Merci", english: "Thank you" },
    { french: "Au revoir", english: "Goodbye" },
    { french: "Comment ça va?", english: "How are you?" },
    { french: "Je ne parle pas français", english: "I don't speak French" },
    { french: "Je suis fatigué", english: "I am tired" },
    { french: "Je suis en retard", english: "I am late" },
  ]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const nextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const addWord = (newWord) => {
    setWords([...words, newWord]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gray-100 font-sans">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">
        French Flashcards
      </h1>
      <Flashcard word={words[currentWordIndex]} onAddWord={addWord} />
      <button
        onClick={nextWord}
        className="mt-8 px-6 py-3 text-base font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Next Word
      </button>
    </div>
  );
}
