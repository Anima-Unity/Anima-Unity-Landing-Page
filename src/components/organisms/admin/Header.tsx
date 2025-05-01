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
      <div className="md:hidden bg-card p-4 flex justify-between items-center shadow-card border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary-coral flex items-center justify-center">
            <span className="text-white font-semibold">AU</span>
          </div>
          <h1 className="font-semibold text-foreground">Blog Dashboard</h1>
        </div>
        <div className="flex items-center gap-3">
          {/* Mobile search button */}
          <button className="text-muted-foreground hover:text-foreground transition duration-200">
            <Search size={20} />
          </button>
          
          {/* Mobile notification button */}
          <div className="relative">
            <Bell size={20} className="text-muted-foreground hover:text-foreground transition duration-200" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full flex items-center justify-center">
              <span className="text-white text-xs">3</span>
            </div>
          </div>
          
          {/* Mobile profile button */}
          <div className="w-7 h-7 rounded-full bg-primary-light/20 flex items-center justify-center text-primary-coral font-medium">
            JD
          </div>
          
          {/* Mobile menu toggle */}
          <button onClick={toggleSidebar} className="text-muted-foreground hover:text-foreground transition duration-200 ml-1">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Header (Desktop) */}
      <header className="hidden md:flex bg-card p-5 justify-between items-center shadow-card border-b border-border">
        <div className="relative w-64">
          <Search className="absolute left-3 top-2.5 text-muted-foreground" size={16} />
          <input 
            type="text" 
            placeholder="Search blog..." 
            className="pl-10 pr-4 py-2 bg-muted rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-coral/30 transition duration-200"
          />
        </div>
        
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 text-sm bg-card border border-border hover:border-primary-coral/30 px-3 py-1.5 rounded-md transition duration-200 hover:shadow-button">
            <Filter size={14} />
            Filter
          </button>
          
          <div className="relative">
            <Bell size={18} className="text-muted-foreground hover:text-foreground cursor-pointer transition duration-200" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full flex items-center justify-center animate-pulse-gentle">
              <span className="text-white text-xs">3</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-primary-light/20 flex items-center justify-center text-primary-coral font-medium transition duration-200 hover:bg-primary-light/30">
              JD
            </div>
            <ChevronDown size={14} className="text-muted-foreground" />
          </div>
        </div>
      </header>
      
      {/* Mobile Sub Header with Search & Filter */}
      <div className="md:hidden bg-card p-3 flex justify-between items-center shadow-sm border-b border-border">
        <div className="relative flex-1 mr-2">
          <Search className="absolute left-3 top-2.5 text-muted-foreground" size={16} />
          <input 
            type="text" 
            placeholder="Search blog..." 
            className="pl-10 pr-3 py-2 bg-muted rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-coral/30 transition duration-200"
          />
        </div>
        
        <button className="flex items-center gap-1 text-sm bg-card border border-border hover:border-primary-coral/30 px-3 py-1.5 rounded-md transition duration-200 hover:shadow-button">
          <Filter size={14} />
          Filter
        </button>
      </div>
    </>
  );
}