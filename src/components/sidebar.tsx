import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  HardDrive,
  Users,
  FolderOpen,
  Network,
  History,
  Shield,
  ScrollText,
  Settings,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Storage', href: '/storage', icon: HardDrive },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Files', href: '/files', icon: FolderOpen },
  { name: 'Network', href: '/network', icon: Network },
  { name: 'Backup', href: '/backup', icon: History },
  { name: 'Security', href: '/security', icon: Shield },
  { name: 'Logs', href: '/logs', icon: ScrollText },
  { name: 'System', href: '/system', icon: Settings },
];

interface SidebarProps {
  collapsed?: boolean;
}

export function Sidebar({ collapsed = false }: SidebarProps) {
  const location = useLocation();

  return (
    <div className={cn(
      "flex h-full flex-col border-r bg-card transition-all duration-300",
      collapsed ? "w-20" : "w-64"
    )}>
      <div className={cn(
        "flex h-16 items-center border-b px-6",
        collapsed && "justify-center px-0"
      )}>
        <h1 className={cn(
          "text-xl font-bold text-primary transition-all duration-300",
          collapsed ? "hidden" : "block"
        )}>
          NAS Control
        </h1>
        {collapsed && (
          <Shield className="h-6 w-6 text-primary" />
        )}
      </div>
      <nav className={cn(
        "space-y-1 p-4",
        collapsed && "px-2"
      )}>
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                location.pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                collapsed && "justify-center px-0"
              )}
              title={collapsed ? item.name : undefined}
            >
              <Icon className={cn(
                "flex-shrink-0",
                collapsed ? "h-6 w-6" : "h-5 w-5 mr-3"
              )} />
              {!collapsed && item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}