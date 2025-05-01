import React from 'react';

export interface TrafficOverviewCardProps {
  comments: number;
  shares: number;
  avgTime?: string;
}

export function TrafficOverviewCard({ comments, shares, avgTime = "4:32" }: TrafficOverviewCardProps): React.ReactElement {
  // Mock data untuk visualisasi grafik
  const viewsData = [24, 16, 32, 20, 28, 36, 40];
  const commentsData = [12, 8, 16, 10, 14, 18, 20];
  
  // Days of week
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  
  return (
    <div className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 p-5 lg:col-span-2 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Traffic Overview</h3>
          <p className="text-xs text-muted-foreground mt-1">Last 7 days performance</p>
        </div>
        
        <div className="flex gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 bg-primary-coral rounded-full"></div>
            <span className="text-xs text-muted-foreground">Views</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 bg-accent-blue rounded-full"></div>
            <span className="text-xs text-muted-foreground">Comments</span>
          </div>
        </div>
      </div>
      
      <div className="relative h-48 flex items-end justify-between px-2 pb-2">
        {/* Horizontal gridlines */}
        <div className="absolute inset-x-0 h-full flex flex-col justify-between pointer-events-none">
          <div className="border-b border-border/30"></div>
          <div className="border-b border-border/30"></div>
          <div className="border-b border-border/30"></div>
          <div className="border-b border-border/30"></div>
        </div>
        
        {/* Bar charts */}
        {viewsData.map((height, index) => (
          <div key={index} className="flex flex-col items-center group relative w-8">
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-popover rounded-lg p-2 shadow-md text-xs text-center pointer-events-none">
              <p className="font-medium">{daysOfWeek[index]}</p>
              <p><span className="text-primary-coral">{viewsData[index] * 25}</span> views</p>
              <p><span className="text-accent-blue">{commentsData[index] * 5}</span> comments</p>
            </div>
            
            {/* Comment bar (front) */}
            <div 
              className="w-3 bg-accent-blue rounded-t-md z-10 group-hover:bg-accent-blue/80 transition-colors"
              style={{ height: `${commentsData[index] * 3}px` }}
            ></div>
            
            {/* Views bar (back, taller) */}
            <div 
              className="w-6 bg-primary-coral/20 rounded-t-md -mt-4 group-hover:bg-primary-coral/30 transition-colors"
              style={{ height: `${height * 3}px` }}
            ></div>
            
            <div className="mt-2 text-xs text-muted-foreground">{daysOfWeek[index]}</div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-3 mt-6 gap-2 text-center border-t border-border pt-4">
        <div className="p-2 bg-muted/30 rounded-lg">
          <div className="text-muted-foreground text-xs mb-1">Comments</div>
          <div className="text-foreground font-semibold">{comments.toLocaleString()}</div>
        </div>
        <div className="p-2 bg-muted/30 rounded-lg">
          <div className="text-muted-foreground text-xs mb-1">Avg Time</div>
          <div className="text-foreground font-semibold">{avgTime}</div>
        </div>
        <div className="p-2 bg-muted/30 rounded-lg">
          <div className="text-muted-foreground text-xs mb-1">Shares</div>
          <div className="text-foreground font-semibold">{shares.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}