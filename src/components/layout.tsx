import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-background">
      <div
        className={cn(
          "fixed inset-y-0 z-50 flex transition-transform duration-300 ease-in-out lg:relative",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
        )}
      >
        <Sidebar collapsed={!sidebarOpen} />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b flex items-center justify-between px-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden"
          >
            {sidebarOpen ? (
              <PanelLeftClose className="h-5 w-5" />
            ) : (
              <PanelLeftOpen className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden lg:inline-flex"
          >
            {sidebarOpen ? (
              <PanelLeftClose className="h-5 w-5" />
            ) : (
              <PanelLeftOpen className="h-5 w-5" />
            )}
          </Button>
          <ThemeToggle />
        </header>
        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}