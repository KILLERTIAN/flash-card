import React, { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardContainer = () => {
  const [cards, setCards] = useState([
    { question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
    { question: 'What is a Hook?', answer: 'A function that lets you use state and other React features without writing a class.' }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="flex flex-col items-center">
      <Flashcard
        flashcard={cards[currentIndex]}
        onNext={handleNext}
      />
    </div>
  );
};

export default FlashcardContainer;
