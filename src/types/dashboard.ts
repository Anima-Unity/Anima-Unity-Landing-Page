// Define types for our data
export interface StatsData {
  viewsGrowth: number;
  totalViews: string;
  uniqueVisitors: string;
  blogPosts: number;
  engagementScore: number;
  comments: number;
  shares: number;
  avgTime?: string;
}

export interface LeadData {
  percent: number;
  total: number;
}

export interface LeadsSummary {
  [key: string]: LeadData;
}

// Component props interfaces
export interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  active: boolean;
  onClick: () => void;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: 'up' | 'down';
  bgColor: string;
  textColor: string;
}

export interface LeadCardProps {
  title: string;
  percent: number;
  total: number;
}