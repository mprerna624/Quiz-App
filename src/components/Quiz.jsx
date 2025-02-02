import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import StartScreen from './StartScreen';
import ResultScreen from './ResultScreen';
import QuestionCard from './QuestionCard';

const Quiz = () => {
  const [quizData, setQuizData] = useState(null);
  const [showStart, setShowStart] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answersStats, setAnswersStats] = useState({ correct: 0, incorrect: 0 });

  useEffect(() => {
    fetch('/api/Uw5CrX')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => setQuizData(data))
      .catch(error => console.error('Error fetching quiz data:', error));
  }, []);

  const startQuiz = () => {
    setShowStart(false);
  };

  if (!quizData) return (
    <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6">
        <Loader2 className="w-12 h-12 mx-auto text-blue-500 animate-spin" />
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">Loading Quiz...</h2>
          <p className="text-sm text-gray-600">Get ready to test your knowledge!</p>
        </div>
        <div className="flex gap-2 justify-center">
          <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex-grow bg-gradient-to-br from-blue-50 to-indigo-100 px-3 py-4 sm:px-4 sm:py-14 flex flex-col justify-center transition-all duration-300">
      <div className="relative w-full max-w-xl mx-auto">
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg transform skew-y-0 -rotate-6 rounded-2xl opacity-80 transition-all duration-300"></div>
        <div className="relative bg-white shadow-xl rounded-xl p-4 md:p-6 min-h-[400px] transition-all duration-300">
          {showStart ? (
            <StartScreen 
              title={quizData.title} 
              topic={quizData.topic} 
              onStartQuiz={startQuiz} 
            />
          ) : showResult ? (
            <ResultScreen 
              totalQuestions={quizData.questions.length}
              answersStats={answersStats}
              score={score}
            />
          ) : (
            <QuestionCard
              questions={quizData.questions}
              onQuizComplete={(stats) => {
                setAnswersStats(stats);
                setShowResult(true);
              }}
              onScoreUpdate={setScore}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;