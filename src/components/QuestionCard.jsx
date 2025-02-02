// QuestionCard.jsx
import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const QuestionCard = ({ questions, onQuizComplete, onScoreUpdate }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(15);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [shake, setShake] = useState(false);
  const [score, setScore] = useState(0);
  const [answersStats, setAnswersStats] = useState({ correct: 0, incorrect: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setShake(true);
          setTimeout(() => setShake(false), 500);
          handleNextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswerIndex !== null) return;
    
    setSelectedAnswerIndex(answerIndex);
    const isCorrect = questions[currentQuestionIndex].options[answerIndex].is_correct;
    
    const newScore = score + (isCorrect ? 4 : -1);
    setScore(newScore);
    onScoreUpdate(newScore);
    
    setAnswersStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (isCorrect ? 0 : 1)
    }));
    
    setTimeout(handleNextQuestion, 1000);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      onQuizComplete(answersStats);
      return;
    }

    setCurrentQuestionIndex(prev => prev + 1);
    setSelectedAnswerIndex(null);
    setTimer(15);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <span className="text-base font-medium text-gray-600">
            Question {currentQuestionIndex + 1}/{questions.length}
          </span>
          <div className={`flex items-center ${timer <= 5 ? 'text-red-500 animate-pulse' : 'text-gray-600'}`}>
            <Timer className="w-4 h-4 mr-2" />
            <span className="text-base font-medium">Time: {timer}s</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className={`space-y-4 ${shake ? 'animate-shake' : ''}`}>
        <div className="bg-blue-50 rounded-lg p-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-800">
            {currentQuestion.description}
          </h2>
        </div>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const letters = ['A', 'B', 'C', 'D'];
            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex items-start gap-3 ${
                  selectedAnswerIndex === index
                    ? option.is_correct
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : selectedAnswerIndex !== null && option.is_correct
                    ? 'bg-green-500 text-white'
                    : 'bg-white hover:bg-gray-50'
                }`}
                disabled={selectedAnswerIndex !== null}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-semibold flex items-center justify-center">
                  {letters[index]}
                </span>
                <span className="text-base">{option.description}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-lg font-medium text-gray-700">
          Score: {score}
        </p>
      </div>
    </div>
  );
};

export default QuestionCard;