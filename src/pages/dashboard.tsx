import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Activity,
  Clock,
  Database,
  HardDrive,
  MemoryStick as Memory,
  Network,
  ArrowDown,
  ArrowUp,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// Mock data for charts
const cpuHistory = [
  { time: '00:00', usage: 28 },
  { time: '01:00', usage: 32 },
  { time: '02:00', usage: 25 },
  { time: '03:00', usage: 35 },
  { time: '04:00', usage: 45 },
  { time: '05:00', usage: 30 },
  { time: '06:00', usage: 32 },
];

const networkData = [
  { time: '00:00', download: 25, upload: 15 },
  { time: '01:00', download: 30, upload: 20 },
  { time: '02:00', download: 35, upload: 25 },
  { time: '03:00', download: 40, upload: 30 },
  { time: '04:00', download: 45, upload: 35 },
  { time: '05:00', download: 50, upload: 40 },
  { time: '06:00', download: 55, upload: 45 },
];

const storageUsage = [
  { name: 'Media', value: 400, color: 'hsl(var(--chart-1))' },
  { name: 'Documents', value: 300, color: 'hsl(var(--chart-2))' },
  { name: 'Backups', value: 200, color: 'hsl(var(--chart-3))' },
  { name: 'System', value: 100, color: 'hsl(var(--chart-4))' },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">System Overview</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Storage Usage */}
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Storage Usage</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">789.5 GB / 2 TB</div>
            <Progress value={45} className="mt-2" />
          </CardContent>
        </Card>

        {/* CPU Usage */}
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
            <Memory className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32%</div>
            <Progress value={32} className="mt-2" />
          </CardContent>
        </Card>

        {/* RAM Usage */}
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">RAM Usage</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.2 GB / 16 GB</div>
            <Progress value={28} className="mt-2" />
          </CardContent>
        </Card>

        {/* Network Activity */}
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Network Activity</CardTitle>
            <Network className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ArrowDown className="h-4 w-4 text-green-500" />
                <span className="text-sm">45 MB/s</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUp className="h-4 w-4 text-blue-500" />
                <span className="text-sm">32 MB/s</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* CPU Usage Chart */}
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle>CPU Usage History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={cpuHistory}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="time" className="text-sm" />
                  <YAxis className="text-sm" />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <span className="font-medium">Time:</span>
                              <span>{payload[0].payload.time}</span>
                              <span className="font-medium">Usage:</span>
                              <span>{payload[0].value}%</span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="usage"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary)/.2)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Network Activity Chart */}
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle>Network Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={networkData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="time" className="text-sm" />
                  <YAxis className="text-sm" />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <span className="font-medium">Time:</span>
                              <span>{payload[0].payload.time}</span>
                              <span className="font-medium">Download:</span>
                              <span>{payload[0].value} MB/s</span>
                              <span className="font-medium">Upload:</span>
                              <span>{payload[1].value} MB/s</span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="download"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="upload"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Storage Distribution */}
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle>Storage Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={storageUsage}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {storageUsage.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <span className="font-medium">Type:</span>
                              <span>{payload[0].name}</span>
                              <span className="font-medium">Size:</span>
                              <span>{payload[0].value} GB</span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {storageUsage.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Load */}
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle>System Load</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { name: '1 min', load: 1.2 },
                    { name: '5 min', load: 0.8 },
                    { name: '15 min', load: 0.6 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" className="text-sm" />
                  <YAxis className="text-sm" />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <span className="font-medium">Period:</span>
                              <span>{payload[0].payload.name}</span>
                              <span className="font-medium">Load:</span>
                              <span>{payload[0].value}</span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="load" fill="hsl(var(--chart-3))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}