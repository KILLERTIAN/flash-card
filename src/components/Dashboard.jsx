import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addFlashcard = () => {
    if (editingIndex !== null) {
      const updatedFlashcards = [...flashcards];
      updatedFlashcards[editingIndex] = { question, answer };
      setFlashcards(updatedFlashcards);
      setEditingIndex(null);
    } else {
      setFlashcards([...flashcards, { question, answer }]);
    }
    setQuestion('');
    setAnswer('');
  };

  const editFlashcard = (index) => {
    setQuestion(flashcards[index].question);
    setAnswer(flashcards[index].answer);
    setEditingIndex(index);
  };

  const deleteFlashcard = (index) => {
    const updatedFlashcards = flashcards.filter((_, i) => i !== index);
    setFlashcards(updatedFlashcards);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Dashboard Content */}
      <div className="p-4 flex-1">
        <h1 className="text-3xl font-bold mb-6">Flashcard Management Dashboard</h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Create / Edit Flashcard</h2>
          <div className="flex mb-4">
            <input
              type="text"
              className="border p-2 mr-2 flex-1"
              placeholder="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <input
              type="text"
              className="border p-2 mr-2 flex-1"
              placeholder="Answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button
              onClick={addFlashcard}
              className="bg-blue-500 text-white p-2 px-4"
            >
              {editingIndex !== null ? 'Update Flashcard' : 'Add Flashcard'}
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">All Flashcards</h2>
          <ul>
            {flashcards.map((flashcard, index) => (
              <li
                key={index}
                className="mb-4 p-4 border rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <strong className="block">Q: {flashcard.question}</strong>
                  <strong className="block">A: {flashcard.answer}</strong>
                </div>
                <div>
                  <button
                    onClick={() => editFlashcard(index)}
                    className="bg-yellow-500 text-white p-2 px-4 mr-2 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteFlashcard(index)}
                    className="bg-red-500 text-white p-2 px-4 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
