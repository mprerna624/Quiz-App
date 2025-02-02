import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

const StartScreen = ({ title, topic, onStartQuiz }) => {
  const quizRules = [
    "You have 15 seconds to answer each question",
    "Correct answers earn 4 points",
    "Incorrect answers deduct 1 point",
    "Unanswered questions are marked as incorrect",
    "You cannot change your answer once selected"
  ];

  return (
    <div className="text-center space-y-6 animate-fadeIn">
      <div className="bg-blue-50 rounded-xl p-4">
        <BookOpen className="w-10 h-10 mx-auto text-blue-500 mb-3" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{title}</h1>
        <p className="text-base text-gray-600 mb-2">Topic: {topic}</p>
        <div className="h-px bg-blue-200 w-20 mx-auto my-4"></div>
        <div className="text-left max-w-md mx-auto">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Quiz Rules:</h2>
          <ul className="space-y-2">
            {quizRules.map((rule, index) => (
              <li key={index} className="flex items-start">
                <span className="w-5 h-5 bg-blue-100 rounded-full text-blue-600 font-semibold text-sm flex items-center justify-center mr-2 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-sm text-gray-600">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={onStartQuiz}
        className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg text-base font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg"
      >
        Start Quiz
        <ChevronRight className="inline-block ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default StartScreen;