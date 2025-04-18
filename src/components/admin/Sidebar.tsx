import React from 'react';
import { Home, FileText, Users, MessageSquare, BarChart, Settings } from 'lucide-react';
import { SidebarItem } from './SidebarItem';

interface SidebarProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  setSidebarOpen: (open: boolean) => void;
}

export function Sidebar({ activeMenu, setActiveMenu, setSidebarOpen }: SidebarProps): React.ReactElement {
  return (
    <div className="p-4 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-md bg-indigo-600 flex items-center justify-center">
          <span className="text-white font-bold">AU</span>
        </div>
        <h1 className="font-semibold text-gray-800">Blog Dashboard</h1>
      </div>
      
      <nav className="flex-1">
        <SidebarItem 
          icon={<Home size={18} />}
          title="Dashboard"
          active={activeMenu === 'Dashboard'}
          onClick={() => {
            setActiveMenu('Dashboard');
            setSidebarOpen(false);
          }}
        />
        <SidebarItem 
          icon={<FileText size={18} />}
          title="Posts"
          active={activeMenu === 'Posts'}
          onClick={() => {
            setActiveMenu('Posts');
            setSidebarOpen(false);
          }}
        />
        <SidebarItem 
          icon={<Users size={18} />}
          title="Readers"
          active={activeMenu === 'Readers'}
          onClick={() => {
            setActiveMenu('Readers');
            setSidebarOpen(false);
          }}
        />
        <SidebarItem 
          icon={<MessageSquare size={18} />}
          title="Comments"
          active={activeMenu === 'Comments'}
          onClick={() => {
            setActiveMenu('Comments');
            setSidebarOpen(false);
          }}
        />
        <SidebarItem 
          icon={<BarChart size={18} />}
          title="Analytics"
          active={activeMenu === 'Analytics'}
          onClick={() => {
            setActiveMenu('Analytics');
            setSidebarOpen(false);
          }}
        />
        <SidebarItem 
          icon={<Settings size={18} />}
          title="Settings"
          active={activeMenu === 'Settings'}
          onClick={() => {
            setActiveMenu('Settings');
            setSidebarOpen(false);
          }}
        />
      </nav>
    </div>
  );
}