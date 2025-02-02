import React from 'react';
import { Trophy, Sparkles, BookOpen, ArrowRight } from 'lucide-react';

const ResultScreen = ({ totalQuestions, answersStats, score }) => {
  const calculatePerformance = () => {
    const percentage = (answersStats.correct / totalQuestions) * 100;
    if (percentage >= 80) return { message: "Outstanding!", color: "text-green-500" };
    if (percentage >= 60) return { message: "Good Job!", color: "text-blue-500" };
    return { message: "Keep Practicing!", color: "text-purple-500" };
  };

  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-6">
        <div className="relative inline-block">
          <Trophy className="w-16 h-16 text-yellow-500 filter drop-shadow-lg" />
          <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
        </div>
        <h2 className={`text-2xl md:text-3xl font-bold mt-4 ${calculatePerformance().color}`}>
          {calculatePerformance().message}
        </h2>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 md:p-5 mb-6">
        <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
          <div className="flex flex-col">
            <div className="relative">
              <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <span className="text-base font-medium text-gray-700">Total Questions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl sm:text-2xl font-bold text-blue-600">{totalQuestions}</span>
                  <div className="hidden sm:inline-block text-sm text-gray-500">questions</div>
                </div>
              </div>
            </div>

            <div className="space-y-2 p-3 pb-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-b-lg">
              <p className="text-sm sm:text-base flex items-center justify-between py-1 border-b border-gray-100">
                <span className="text-green-600 font-medium">Correct Answers :</span>
                <span className="font-semibold text-green-600 px-3">{answersStats.correct}</span>
              </p>
              <p className="text-sm sm:text-base flex items-center justify-between py-1 border-b border-gray-100">
                <span className="text-red-600 font-medium">Incorrect Answers :</span>
                <span className="font-semibold text-red-600 px-3">{answersStats.incorrect}</span>
              </p>
              <p className="text-sm sm:text-base flex items-center justify-between py-1 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Unanswered Questions :</span>
                <span className="font-semibold text-gray-600 px-3">
                  {totalQuestions - (answersStats.correct + answersStats.incorrect)}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div>
                <p className="text-base font-medium text-gray-800 mb-1">Your Score</p>
                <p className="text-2xl md:text-3xl font-bold text-indigo-600">{score}</p>
              </div>
            </div>
            <div className="h-12 w-px bg-gray-200 mx-4"></div>
            <div className='text-right'>
              <p className="text-sm font-medium text-gray-600 mb-1">Max. Score</p>
              <p className="text-lg font-semibold text-gray-800">40</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm sm:text-base font-medium text-gray-600">Performance</p>
            <p className="text-sm text-gray-500">
              Accuracy: {Math.round((answersStats.correct / totalQuestions) * 100)}%
            </p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${(answersStats.correct / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => window.location.reload()}
          className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg flex items-center"
        >
          Try Again
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;