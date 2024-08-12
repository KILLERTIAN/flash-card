import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Flashcard = ({ flashcard, onNext }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="relative w-80 h-60 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
        onClick={handleFlip}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ perspective: 1000 }} // Adding perspective to give a 3D effect
      >
        <div className="absolute inset-0 flex justify-center items-center backface-hidden">
          <div
            className={`absolute flex flex-col inset-0  justify-center items-center text-center p-4 transition-opacity duration-300 ${flipped ? 'opacity-0' : 'opacity-100'}`}
          >
            <h2 className="text-xl font-bold">Question</h2>
            <p className="mt-2 text-lg">{flashcard.question}</p>
          </div>
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300 ${flipped ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: 'rotateY(180deg)' }} // Rotating the back content
          >
            <h2 className="text-xl font-bold">Answer</h2>
            <p className="mt-2 text-lg">{flashcard.answer}</p>
          </div>
        </div>
      </motion.div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={onNext}
      >
        Next Card
      </button>
    </div>
  );
};

export default Flashcard;
