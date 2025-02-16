import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Download,
  Info,
  Search,
  Calendar,
  Trash2,
  RotateCcw,
  Filter,
  Save,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

// Mock log data - in a real app, this would come from your backend
const mockLogs = [
  {
    id: '1',
    timestamp: '2024-03-20 10:30:25',
    level: 'error',
    source: 'system',
    message: 'Failed to mount storage device /dev/sda1',
  },
  {
    id: '2',
    timestamp: '2024-03-20 10:29:15',
    level: 'warning',
    source: 'security',
    message: 'Multiple failed login attempts detected',
  },
  {
    id: '3',
    timestamp: '2024-03-20 10:28:00',
    level: 'info',
    source: 'backup',
    message: 'Backup completed successfully',
  },
  {
    id: '4',
    timestamp: '2024-03-20 10:27:30',
    level: 'success',
    source: 'network',
    message: 'Network connection restored',
  },
  // Add more mock logs as needed
];

const levelIcons = {
  error: <AlertCircle className="h-4 w-4 text-destructive" />,
  warning: <AlertTriangle className="h-4 w-4 text-yellow-500" />,
  info: <Info className="h-4 w-4 text-blue-500" />,
  success: <CheckCircle2 className="h-4 w-4 text-green-500" />,
};

const levelColors = {
  error: 'text-destructive border-destructive',
  warning: 'text-yellow-500 border-yellow-500',
  info: 'text-blue-500 border-blue-500',
  success: 'text-green-500 border-green-500',
};

export function Logs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');
  const [sourceFilter, setSourceFilter] = useState('all');
  const [date, setDate] = useState<Date>();
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [retentionDays, setRetentionDays] = useState('30');
  const [selectedLogs, setSelectedLogs] = useState<string[]>([]);

  // Advanced filtering options
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [ipFilter, setIpFilter] = useState('');
  const [userFilter, setUserFilter] = useState('');
  const [messageFilter, setMessageFilter] = useState('');

  const filteredLogs = mockLogs.filter((log) => {
    const matchesSearch = log.message
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesLevel = levelFilter === 'all' || log.level === levelFilter;
    const matchesSource = sourceFilter === 'all' || log.source === sourceFilter;
    const matchesDate = !date || log.timestamp.includes(format(date, 'yyyy-MM-dd'));
    return matchesSearch && matchesLevel && matchesSource && matchesDate;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">System Logs</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setSelectedLogs([])}>
            <RotateCcw className="mr-2 h-4 w-4" /> Clear Selection
          </Button>
          <Button variant="outline">
            <Save className="mr-2 h-4 w-4" /> Save Filters
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export Logs
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Log Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Auto Refresh</Label>
              <div className="text-sm text-muted-foreground">
                Automatically refresh logs every 30 seconds
              </div>
            </div>
            <Switch
              checked={autoRefresh}
              onCheckedChange={setAutoRefresh}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Log Retention</Label>
              <div className="text-sm text-muted-foreground">
                Keep logs for specified number of days
              </div>
            </div>
            <Select value={retentionDays} onValueChange={setRetentionDays}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select retention period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">7 days</SelectItem>
                <SelectItem value="30">30 days</SelectItem>
                <SelectItem value="90">90 days</SelectItem>
                <SelectItem value="180">180 days</SelectItem>
                <SelectItem value="365">1 year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search logs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                {date ? format(date, 'PPP') : 'Pick a date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button
            variant="outline"
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          >
            <Filter className="mr-2 h-4 w-4" />
            Advanced Filters
          </Button>
        </div>

        {showAdvancedFilters && (
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label>IP Address</Label>
                  <Input
                    placeholder="Filter by IP..."
                    value={ipFilter}
                    onChange={(e) => setIpFilter(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Username</Label>
                  <Input
                    placeholder="Filter by user..."
                    value={userFilter}
                    onChange={(e) => setUserFilter(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Message Contains</Label>
                  <Input
                    placeholder="Filter by message content..."
                    value={messageFilter}
                    onChange={(e) => setMessageFilter(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="flex gap-4 items-center">
        <Select value={levelFilter} onValueChange={setLevelFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="error">Error</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
            <SelectItem value="info">Info</SelectItem>
            <SelectItem value="success">Success</SelectItem>
          </SelectContent>
        </Select>
        <Select value={sourceFilter} onValueChange={setSourceFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sources</SelectItem>
            <SelectItem value="system">System</SelectItem>
            <SelectItem value="security">Security</SelectItem>
            <SelectItem value="backup">Backup</SelectItem>
            <SelectItem value="network">Network</SelectItem>
          </SelectContent>
        </Select>
        
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" disabled={selectedLogs.length === 0}>
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Selected
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Selected Logs</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete the selected logs? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-destructive">
                Delete Logs
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedLogs(filteredLogs.map(log => log.id));
                    } else {
                      setSelectedLogs([]);
                    }
                  }}
                  checked={selectedLogs.length === filteredLogs.length}
                />
              </TableHead>
              <TableHead className="w-[180px]">Timestamp</TableHead>
              <TableHead className="w-[100px]">Level</TableHead>
              <TableHead className="w-[120px]">Source</TableHead>
              <TableHead>Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    checked={selectedLogs.includes(log.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedLogs([...selectedLogs, log.id]);
                      } else {
                        setSelectedLogs(selectedLogs.filter(id => id !== log.id));
                      }
                    }}
                  />
                </TableCell>
                <TableCell className="font-mono">{log.timestamp}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {levelIcons[log.level as keyof typeof levelIcons]}
                    <Badge
                      variant="outline"
                      className={levelColors[log.level as keyof typeof levelColors]}
                    >
                      {log.level}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{log.source}</Badge>
                </TableCell>
                <TableCell>{log.message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}