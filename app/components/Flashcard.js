export default function Flashcard({
  word,
  showTranslation,
  setShowTranslation,
}) {
  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-96 h-64 perspective-1000 cursor-pointer bg-gradient-to-br border-2 border-stone-500 bg-sage rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        onClick={toggleTranslation}
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-5">
          <h2 className="text-4xl font-bold text-gray-800 m-0 text-center break-words max-w-72">
            {word.other}
          </h2>
          {showTranslation && (
            <div className="mt-2">
              {Object.entries(word).map(([key, value]) => {
                if (key !== "other") {
                  return (
                    <p key={key} className="text-2xl text-gray-800">
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
    </div>
  );
}
