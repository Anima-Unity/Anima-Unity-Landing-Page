import React from 'react';

interface ReaderScoreCardProps {
  score: number;
}

export function ReaderScoreCard({ score }: ReaderScoreCardProps): React.ReactElement {
  // Normalize score to 0-100 range if greater than 100
  const displayScore = score > 100 ? Math.min(100, Math.round(score / 10)) : score;
  
  // Calculate angle for the arc (0 to 2π)
  const angle = (displayScore / 100) * 360;
  
  return (
    <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm lg:col-span-1">
      <h3 className="text-gray-700 font-medium mb-4">Reader Score</h3>
      <div className="flex justify-center items-center h-40 md:h-48">
        <div className="relative w-28 md:w-36 h-28 md:h-36">
          {/* Use SVG for better precision */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 transform">
            {/* Background circle */}
            <circle 
              cx="50%" 
              cy="50%" 
              r="45%" 
              fill="transparent" 
              stroke="#f3f4f6" 
              strokeWidth="10%"
            />
            
            {/* Progress arc */}
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="transparent"
              stroke="#6366f1"
              strokeWidth="10%"
              strokeLinecap="round"
              strokeDasharray={`${displayScore * 2.83} 283`}
            />
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-2xl md:text-3xl font-bold text-gray-800">
              {/* Show a more readable number for the UI */}
              {displayScore}
            </span>
            <div className="flex items-center">
              <span className="text-xs text-green-500">↑ 12%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 px-2 md:px-4">
        <div className="text-center">
          <div className="text-xs md:text-sm text-gray-500">Low</div>
          <div className="h-1 w-4 md:w-6 bg-gray-200 rounded-full mx-auto mt-1"></div>
        </div>
        <div className="text-center">
          <div className="text-xs md:text-sm text-gray-500">Medium</div>
          <div className="h-1 w-4 md:w-6 bg-blue-300 rounded-full mx-auto mt-1"></div>
        </div>
        <div className="text-center">
          <div className="text-xs md:text-sm text-gray-500">High</div>
          <div className="h-1 w-4 md:w-6 bg-blue-600 rounded-full mx-auto mt-1"></div>
        </div>
      </div>
    </div>
  );
}