import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  HardDrive,
  AlertTriangle,
  Plus,
  Settings,
  Power,
  Activity,
} from 'lucide-react';

const drives = [
  {
    id: 'drive1',
    name: 'System Drive',
    type: 'SSD',
    capacity: '500 GB',
    used: 325,
    health: 98,
    status: 'Healthy',
    temperature: '42°C',
    raid: 'RAID 1',
  },
  {
    id: 'drive2',
    name: 'Data Drive 1',
    type: 'HDD',
    capacity: '2 TB',
    used: 1200,
    health: 95,
    status: 'Healthy',
    temperature: '38°C',
    raid: 'RAID 5',
  },
  {
    id: 'drive3',
    name: 'Data Drive 2',
    type: 'HDD',
    capacity: '2 TB',
    used: 800,
    health: 92,
    status: 'Warning',
    temperature: '45°C',
    raid: 'RAID 5',
  },
];

export function Storage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Storage Management</h1>
        <Button className="bg-primary">
          <Plus className="mr-2 h-4 w-4" /> Add New Drive
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Total Storage</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.5 TB</div>
            <Progress value={65} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              2.9 TB used of 4.5 TB
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">RAID Status</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Healthy</div>
            <div className="flex gap-2 mt-2">
              <Badge>RAID 1</Badge>
              <Badge>RAID 5</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Drive Health</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1 Warning</div>
            <p className="text-xs text-muted-foreground mt-2">
              Data Drive 2 requires attention
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/60 backdrop-blur">
        <CardHeader>
          <CardTitle>Physical Drives</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Drive</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Health</TableHead>
                <TableHead>Temperature</TableHead>
                <TableHead>RAID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drives.map((drive) => (
                <TableRow key={drive.id}>
                  <TableCell className="font-medium">{drive.name}</TableCell>
                  <TableCell>{drive.type}</TableCell>
                  <TableCell>{drive.capacity}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={drive.health} className="w-16" />
                      <span>{drive.health}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{drive.temperature}</TableCell>
                  <TableCell>{drive.raid}</TableCell>
                  <TableCell>
                    <Badge
                      variant={drive.status === 'Healthy' ? 'default' : 'destructive'}
                    >
                      {drive.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Power className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}