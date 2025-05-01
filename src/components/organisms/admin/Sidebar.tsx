import React from 'react';
import { Home, FileText, Users, MessageSquare, BarChart, Settings } from 'lucide-react';
import { SidebarItem } from './SidebarItem';

interface SidebarProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  setSidebarOpen: (open: boolean) => void;
}

export function Sidebar({ activeMenu, setActiveMenu, setSidebarOpen }: SidebarProps): React.ReactElement {
  // Handler untuk menu item click
  const handleMenuClick = (menuName: string) => {
    setActiveMenu(menuName);
    setSidebarOpen(false);
  };

  return (
    <div className="p-5 flex flex-col h-full bg-card border-r border-border">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-md bg-primary-coral flex items-center justify-center shadow-button">
          <span className="text-white font-bold">AU</span>
        </div>
        <h1 className="font-semibold text-foreground">Anima Unity</h1>
      </div>
      
      <nav className="flex-1 space-y-1">
        <SidebarItem 
          icon={<Home size={18} />}
          title="Dashboard"
          active={activeMenu === 'Dashboard'}
          onClick={() => handleMenuClick('Dashboard')}
        />
        <SidebarItem 
          icon={<FileText size={18} />}
          title="Posts"
          active={activeMenu === 'Posts'}
          onClick={() => handleMenuClick('Posts')}
        />
        <SidebarItem 
          icon={<Users size={18} />}
          title="Readers"
          active={activeMenu === 'Readers'}
          onClick={() => handleMenuClick('Readers')}
        />
        <SidebarItem 
          icon={<MessageSquare size={18} />}
          title="Comments"
          active={activeMenu === 'Comments'}
          onClick={() => handleMenuClick('Comments')}
        />
        <SidebarItem 
          icon={<BarChart size={18} />}
          title="Analytics"
          active={activeMenu === 'Analytics'}
          onClick={() => handleMenuClick('Analytics')}
        />
        <SidebarItem 
          icon={<Settings size={18} />}
          title="Settings"
          active={activeMenu === 'Settings'}
          onClick={() => handleMenuClick('Settings')}
        />
      </nav>
      
      <div className="mt-auto pt-4 border-t border-border">
        <div className="bg-primary-light/10 rounded-lg p-3 text-sm">
          <p className="font-medium text-foreground mb-1">Need help?</p>
          <p className="text-muted-foreground text-xs mb-2">Check our documentation</p>
          <button className="w-full py-1.5 px-3 bg-primary-coral text-white rounded-md text-xs font-medium shadow-button hover:bg-primary-light hover:shadow-button-hover transition duration-200">
            View Docs
          </button>
        </div>
      </div>
    </div>
  );
}