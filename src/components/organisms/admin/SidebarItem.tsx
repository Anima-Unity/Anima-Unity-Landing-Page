import React from 'react';
import { SidebarItemProps } from '@/types/dashboard';

export function SidebarItem({ icon, title, active, onClick }: SidebarItemProps): React.ReactElement {
  return (
    <div 
      className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all duration-200 ${
        active 
          ? 'bg-primary-light/10 text-primary-coral border-r-4 border-primary-coral' 
          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
      }`}
      onClick={onClick}
    >
      <div className={active ? 'text-primary-coral' : 'text-muted-foreground'}>
        {icon}
      </div>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}