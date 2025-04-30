import React from 'react';

interface ReaderScoreCardProps {
  score: number;
}

export function ReaderScoreCard({ score }: ReaderScoreCardProps): React.ReactElement {
  // Normalize score to 0-100 range if greater than 100
  const displayScore = score > 100 ? Math.min(100, Math.round(score / 10)) : score;
  
  // Helper function to get appropriate color based on score
  const getScoreColor = () => {
    if (displayScore < 40) return '#f59e0b'; // Warning/amber for low scores
    if (displayScore < 70) return '#3b82f6'; // Blue for medium scores
    return '#ff6b52'; // Primary coral for high scores
  };
  
  return (
    <div className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 p-5 lg:col-span-1 animate-fade-in">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <span className="text-primary-coral mr-2">Reader Score</span>
        <span className="text-xs bg-feature-lightPink text-primary-coral px-2 py-0.5 rounded-full">Performance</span>
      </h3>
      
      <div className="flex justify-center items-center h-48">
        <div className="relative w-36 h-36">
          {/* Use SVG for better precision */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 transform">
            {/* Background circle */}
            <circle 
              cx="50%" 
              cy="50%" 
              r="45%" 
              fill="transparent" 
              stroke="hsl(var(--secondary))" 
              strokeWidth="8%"
            />
            
            {/* Progress arc */}
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="transparent"
              stroke={getScoreColor()}
              strokeWidth="8%"
              strokeLinecap="round"
              strokeDasharray={`${displayScore * 2.83} 283`}
              className="transition-all duration-700 ease-out"
            />
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-4xl font-bold" style={{ color: getScoreColor() }}>
              {displayScore}
            </span>
            
            <div className="flex items-center mt-1">
              <span className="text-sm text-success font-medium">
                ↑ 12%
              </span>
              <span className="text-xs text-muted-foreground ml-1">from last week</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-4 px-4">
        <div className="text-center group cursor-pointer">
          <div className="text-xs text-muted-foreground group-hover:text-primary-coral transition-colors">Low</div>
          <div className="h-1 w-6 bg-order-pending rounded-full mx-auto mt-1 group-hover:bg-order-pending/80 transition-colors"></div>
        </div>
        <div className="text-center group cursor-pointer">
          <div className="text-xs text-muted-foreground group-hover:text-primary-coral transition-colors">Medium</div>
          <div className="h-1 w-6 bg-accent-blue rounded-full mx-auto mt-1 group-hover:bg-accent-blue/80 transition-colors"></div>
        </div>
        <div className="text-center group cursor-pointer">
          <div className="text-xs text-muted-foreground group-hover:text-primary-coral transition-colors">High</div>
          <div className="h-1 w-6 bg-primary-coral rounded-full mx-auto mt-1 group-hover:bg-primary-light transition-colors"></div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Performance details</span>
          <button className="text-xs text-primary-coral hover:text-primary-light flex items-center transition-colors">
            View report
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}