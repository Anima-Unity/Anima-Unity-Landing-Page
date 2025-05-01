import React from 'react';
import { StatCardProps } from '@/types/dashboard';

export function StatCard({ title, value, subtitle, trend, bgColor, textColor }: StatCardProps): React.ReactElement {
  // Default styling if none provided
  const defaultBg = "bg-card";
  const defaultText = "text-foreground";

  // Helper function to get trend styling
  const getTrendStyle = () => {
    if (!trend) return null;

    if (trend === 'up') {  
      return {  
        container: "bg-success/10 text-success",  
        icon: "↑"  
      };  
    } else {  
      return {  
        container: "bg-destructive/10 text-destructive",  
        icon: "↓"  
      };  
    }
  };

  const trendStyle = getTrendStyle();

  return (
    <div
      className={`${bgColor || defaultBg} p-4 md:p-5 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in relative overflow-hidden`}
    >
      {/* Optional decorative background pattern */}
      <div className="absolute inset-0 opacity-5 paw-bg" />

      <div className="flex justify-between items-start mb-3">  
        <h3 className="text-sm md:text-base font-medium text-muted-foreground">{title}</h3>  
        {trendStyle && (  
          <div className={`${trendStyle.container} px-2 py-1 rounded-full text-xs font-medium flex items-center`}>  
            <span className="mr-1">{trendStyle.icon}</span>  
            12%  
          </div>  
        )}  
      </div>  
        
      <div className={`text-2xl md:text-3xl font-bold ${textColor || defaultText} mb-1`}>  
        {value}  
      </div>  
        
      {subtitle && (  
        <div className="text-xs md:text-sm text-muted-foreground mt-2 flex items-center">  
          {subtitle}  
        </div>  
      )}  
        
      {/* Optional bottom indicator bar */}  
      <div className="mt-4 pt-2 flex">  
        <div className="h-1 w-full rounded-full bg-muted overflow-hidden">  
          <div   
            className="h-full rounded-full bg-primary-coral"   
            style={{ width: trend === 'up' ? '75%' : '45%' }}  
          />  
        </div>  
      </div>  
    </div>
  );
}