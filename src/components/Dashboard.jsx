import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CirclePlus } from 'lucide-react';

const Dashboard = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [reviewMode, setReviewMode] = useState(false);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

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
        setShowPopup(true);
    };

    const deleteFlashcard = (index) => {
        const updatedFlashcards = flashcards.filter((_, i) => i !== index);
        setFlashcards(updatedFlashcards);
    };

    const handleReviewNext = () => {
        setCurrentReviewIndex((prevIndex) =>
            prevIndex < flashcards.length - 1 ? prevIndex + 1 : 0
        );
    };

    const handleReviewPrev = () => {
        setCurrentReviewIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : flashcards.length - 1
        );
    };

    const handleSave = () => {
        localStorage.setItem('flashcards', JSON.stringify(flashcards));
        setShowPopup(false);
    };

    return (
        <div className="flex min-h-screen w-full bg-gray-900">
            <div className="p-6 flex-1">
                <h1 className="text-3xl font-bold mb-8 text-white">Flashcard Dashboard</h1>

                <div className="flex w-full items-center justify-evenly mb-6">
                    <button
                        onClick={() => setShowPopup(true)}
                        className="bg-gray-800 text-white text-xl font-bold py-4 px-8 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
                    >
                        Create Flashcard
                    </button>

                    <button
                        onClick={() => setReviewMode(!reviewMode)}
                        className="bg-gray-800 text-white text-xl font-bold py-4 px-8 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
                    >
                        {reviewMode ? 'Stop Review' : 'Start Review'}
                    </button>
                </div>

                {reviewMode ? (
                    <div className="review-mode p-4 bg-gray-800 rounded-lg shadow-lg">
                        {flashcards.length > 0 ? (
                            <div className="text-center">
                                <div
                                    className="flashcard bg-gray-700 text-white border p-6 rounded-lg mb-4 cursor-pointer"
                                    onClick={() => alert(flashcards[currentReviewIndex].answer)}
                                >
                                    <p>{flashcards[currentReviewIndex].question}</p>
                                </div>
                                <div>
                                    <button
                                        onClick={handleReviewPrev}
                                        className="bg-gray-600 text-white p-2 px-4 rounded-lg mr-2"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleReviewNext}
                                        className="bg-gray-600 text-white p-2 px-4 rounded-lg"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <p className="text-white">No flashcards available for review.</p>
                        )}
                    </div>
                ) : (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-white">All Flashcards</h2>
                        <ul>
                            {flashcards.map((flashcard, index) => (
                                <li
                                    key={index}
                                    className="mb-4 p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-md flex justify-between items-center"
                                >
                                    <div className="text-white">
                                        <strong className="block">Q: {flashcard.question}</strong>
                                        <strong className="block">A: {flashcard.answer}</strong>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => editFlashcard(index)}
                                            className="bg-yellow-500 text-white p-2 px-4 mr-2 rounded-lg shadow-md hover:bg-yellow-400 transition-colors duration-300"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteFlashcard(index)}
                                            className="bg-red-500 text-white p-2 px-4 rounded-lg shadow-md hover:bg-red-400 transition-colors duration-300"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="popup fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                    >
                        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-96 h-96">
                            <h2 className="text-2xl font-semibold mb-4 text-white">
                                {editingIndex !== null ? 'Edit Flashcard' : 'New Flashcard'}
                            </h2>
                            <input
                                type="text"
                                className="border border-gray-700 p-2 mb-2 w-full rounded-lg bg-gray-900 text-white placeholder-gray-500 flex items-start justify-start"
                                placeholder="Question"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                            />

<input
                                type="text"
                                className="border border-gray-700 p-2 mb-4 w-full h-[55%] rounded-lg bg-gray-900 text-white placeholder-gray-500 placeholder:text-center flex items-start justify-start"
                                placeholder="Answer"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            />

                            <div className="flex justify-between">
                                <button
                                    onClick={addFlashcard}
                                    className="bg-blue-500 text-white p-2 h-10 w-10 rounded-full hover:bg-blue-400 transition-colors duration-300"
                                >
                                    {editingIndex !== null ? 'Update Flashcard' : <CirclePlus className='h-5 w-5 inline' />}
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="bg-green-500 text-white p-2 px-4 rounded-xl hover:bg-green-400 transition-colors duration-300"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="bg-red-500 text-white p-2 h-10 w-10 rounded-full hover:bg-red-400 transition-colors duration-300"
                                >
                                    <X className='h-5 w-5 inline' />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
