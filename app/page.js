"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [decks, setDecks] = useState([
    { id: "hsk1", name: "HSK 1" },
    { id: "hsk2", name: "HSK 2" },
    { id: "hsk3", name: "HSK 3" },
    { id: "hsk4", name: "HSK 4" },
    { id: "hsk5", name: "HSK 5" },
    { id: "hsk6", name: "HSK 6" },
  ]);
  const [newDeckName, setNewDeckName] = useState("");

  const addNewDeck = () => {
    if (newDeckName.trim()) {
      const newDeckId = newDeckName.toLowerCase().replace(/\s+/g, "-");
      setDecks([...decks, { id: newDeckId, name: newDeckName.trim() }]);
      setNewDeckName("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-darkGray font-sans">
      <h1 className="mb-8 text-4xl font-bold text-sage drop-shadow-lg">
        Flashcard Decks
      </h1>
      <div className="grid gap-4 mb-8 grid-cols-2">
        {decks.map((deck) => (
          <Link key={deck.id} href={`/deck/${deck.id}`}>
            <div className="px-6 py-4 text-lg font-medium text-darkOlive bg-sage rounded-lg shadow-md hover:shadow-lg hover:bg-darkSage transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
              {deck.name}
            </div>
          </Link>
        ))}
      </div>
      {/* <div className="flex gap-2">
        <input
          type="text"
          value={newDeckName}
          onChange={(e) => setNewDeckName(e.target.value)}
          placeholder="New deck name"
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={addNewDeck}
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors duration-300"
        >
          Add Deck
        </button>
      </div> */}
    </div>
  );
}
