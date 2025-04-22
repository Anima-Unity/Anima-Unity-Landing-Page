import React from 'react';
import { SidebarItemProps } from '@/types/dashboard';

export function SidebarItem({ icon, title, active, onClick }: SidebarItemProps): React.ReactElement {
  return (
    <div 
      className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
        active ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600' : 'text-gray-500 hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}
