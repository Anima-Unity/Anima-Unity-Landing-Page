import React from 'react';

export interface TrafficOverviewCardProps {
  comments: number;
  shares: number;
  avgTime?: string;
}

export function TrafficOverviewCard({ comments, shares }: TrafficOverviewCardProps): React.ReactElement {
  return (
    <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm lg:col-span-2">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h3 className="text-gray-700 font-medium">Traffic Overview</h3>
        <div className="flex gap-2 md:gap-3">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <span className="text-xs text-gray-500">Views</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <span className="text-xs text-gray-500">Comments</span>
          </div>
        </div>
      </div>
      
      <div className="h-40 md:h-48 flex items-end justify-between px-1 md:px-2">
        {/* Placeholder for line chart */}
        <div className="flex flex-col items-center">
          <div className="h-24 w-1 bg-indigo-500 rounded-t-full"></div>
          <div className="mt-2 text-xs text-gray-500">M</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-16 w-1 bg-indigo-500 rounded-t-full"></div>
          <div className="mt-2 text-xs text-gray-500">T</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-32 w-1 bg-indigo-500 rounded-t-full"></div>
          <div className="mt-2 text-xs text-gray-500">W</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-20 w-1 bg-indigo-500 rounded-t-full"></div>
          <div className="mt-2 text-xs text-gray-500">T</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-28 w-1 bg-indigo-500 rounded-t-full"></div>
          <div className="mt-2 text-xs text-gray-500">F</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-36 w-1 bg-indigo-500 rounded-t-full"></div>
          <div className="mt-2 text-xs text-gray-500">S</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-40 w-1 bg-indigo-500 rounded-t-full"></div>
          <div className="mt-2 text-xs text-gray-500">S</div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 mt-4 text-center border-t border-gray-100 pt-4">
        <div>
          <div className="text-gray-500 text-xs">Comments</div>
          <div className="text-sm md:font-semibold">{comments.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-gray-500 text-xs">Avg Time</div>
          <div className="text-sm md:font-semibold">4:32</div>
        </div>
        <div>
          <div className="text-gray-500 text-xs">Shares</div>
          <div className="text-sm md:font-semibold">{shares.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}
