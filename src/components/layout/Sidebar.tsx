import React from 'react';
import { Globe, MapPin, Settings, X, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useData } from '@/contexts/DataContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentPage, onPageChange }) => {
  const { currentView, setCurrentView } = useData();

  const menuItems = [
    {
      id: 'global',
      label: 'Global view',
      icon: Globe,
      active: currentView === 'global' && currentPage === 'dashboard',
      type: 'view',
    },
    {
      id: 'india',
      label: 'India view',
      icon: MapPin,
      active: currentView === 'india' && currentPage === 'dashboard',
      type: 'view',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      active: currentPage === 'settings',
      type: 'page',
    },
  ];

  const handleMenuClick = (item: typeof menuItems[0]) => {
    if (item.type === 'view') {
      setCurrentView(item.id as 'global' | 'india');
      onPageChange('dashboard');
    } else if (item.type === 'page') {
      onPageChange(item.id);
    }
    
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-50 h-full w-64 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-r border-border transform transition-transform duration-300 ease-out md:translate-x-0 md:static md:z-auto shadow-lg md:shadow-none",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-border md:hidden">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-md flex items-center justify-center">
              <Sprout className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">Grow Data</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <Button
                    variant={item.active ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-3 h-12 font-medium transition-all duration-200 text-left",
                      item.active && "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 shadow-sm"
                    )}
                    onClick={() => handleMenuClick(item)}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar