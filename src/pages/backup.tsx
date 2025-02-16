import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  History,
  Clock,
  HardDrive,
  Cloud,
  Play,
  Pause,
  Settings,
  Trash2,
} from 'lucide-react';

const backups = [
  {
    id: 1,
    name: 'Daily Backup',
    type: 'Incremental',
    target: 'External Drive',
    schedule: 'Daily at 2 AM',
    lastRun: '2024-04-05 02:00 AM',
    status: 'Completed',
    size: '125 GB',
  },
  {
    id: 2,
    name: 'Weekly Full Backup',
    type: 'Full',
    target: 'Cloud Storage',
    schedule: 'Sunday at 1 AM',
    lastRun: '2024-03-31 01:00 AM',
    status: 'Completed',
    size: '789 GB',
  },
  {
    id: 3,
    name: 'Documents Backup',
    type: 'Differential',
    target: 'Network Share',
    schedule: 'Every 6 hours',
    lastRun: '2024-04-05 12:00 PM',
    status: 'In Progress',
    size: '45 GB',
  },
];

export function Backup() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Backup Management</h1>
        <Button className="bg-primary">
          <History className="mr-2 h-4 w-4" /> New Backup Task
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Backup Status</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Healthy</div>
            <p className="text-xs text-muted-foreground mt-2">
              All backups up to date
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">959 GB</div>
            <Progress value={45} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              45% of backup storage used
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Cloud Sync</CardTitle>
            <Cloud className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Connected</div>
            <p className="text-xs text-muted-foreground mt-2">
              Last sync: 15 minutes ago
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/60 backdrop-blur">
        <CardHeader>
          <CardTitle>Backup Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Target</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>Last Run</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {backups.map((backup) => (
                <TableRow key={backup.id}>
                  <TableCell className="font-medium">{backup.name}</TableCell>
                  <TableCell>{backup.type}</TableCell>
                  <TableCell>{backup.target}</TableCell>
                  <TableCell>{backup.schedule}</TableCell>
                  <TableCell>{backup.lastRun}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        backup.status === 'Completed' ? 'default' : 'secondary'
                      }
                    >
                      {backup.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{backup.size}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        {backup.status === 'In Progress' ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle>Backup Destinations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">External Drive</h3>
                  <p className="text-sm text-muted-foreground">
                    2TB USB Drive
                  </p>
                </div>
                <Badge variant="default">Connected</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Cloud Storage</h3>
                  <p className="text-sm text-muted-foreground">
                    Google Drive
                  </p>
                </div>
                <Badge variant="default">Synced</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Network Share</h3>
                  <p className="text-sm text-muted-foreground">
                    Remote NAS
                  </p>
                </div>
                <Badge variant="default">Connected</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle>Retention Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Daily Backups</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep for 7 days
                  </p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Weekly Backups</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep for 4 weeks
                  </p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Monthly Backups</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep for 12 months
                  </p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}