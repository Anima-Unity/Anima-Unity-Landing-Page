import React from 'react';
import { Search, Filter, Bell, ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export function Header({ sidebarOpen, toggleSidebar }: HeaderProps): React.ReactElement {
  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold">AU</span>
          </div>
          <h1 className="font-semibold text-gray-800">Blog Dashboard</h1>
        </div>
        <div className="flex items-center gap-3">
          {/* Mobile search button */}
          <button className="text-gray-600">
            <Search size={20} />
          </button>
          
          {/* Mobile notification button */}
          <div className="relative">
            <Bell size={20} className="text-gray-600" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">3</span>
            </div>
          </div>
          
          {/* Mobile profile button */}
          <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-medium">
            JD
          </div>
          
          {/* Mobile menu toggle */}
          <button onClick={toggleSidebar} className="text-gray-600 ml-1">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Header (Desktop) */}
      <header className="hidden md:flex bg-white p-4 justify-between items-center shadow-sm">
        <div className="relative w-64">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search blog..." 
            className="pl-10 pr-4 py-2 bg-gray-50 rounded-md w-full text-sm"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm bg-white border border-gray-200 px-3 py-1.5 rounded-md">
            <Filter size={14} />
            Filter
          </button>
          
          <div className="relative">
            <Bell size={18} className="text-gray-500" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">3</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-medium">
              JD
            </div>
            <ChevronDown size={14} className="text-gray-500" />
          </div>
        </div>
      </header>
      
      {/* Mobile Sub Header with Search & Filter */}
      <div className="md:hidden bg-white p-3 flex justify-between items-center shadow-sm border-t border-gray-100">
        <div className="relative flex-1 mr-2">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search blog..." 
            className="pl-10 pr-3 py-2 bg-gray-50 rounded-md w-full text-sm"
          />
        </div>
        
        <button className="flex items-center gap-1 text-sm bg-white border border-gray-200 px-2 py-1.5 rounded-md">
          <Filter size={14} />
          Filter
        </button>
      </div>
    </>
  );
}
