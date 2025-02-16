import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Shield,
  AlertTriangle,
  Lock,
  Key,
  UserCheck,
  Activity,
  Settings,
  XCircle,
} from 'lucide-react';

const securityEvents = [
  {
    id: 1,
    event: 'Failed Login Attempt',
    ip: '192.168.1.105',
    user: 'admin',
    timestamp: '2024-04-05 10:30 AM',
    severity: 'High',
    status: 'Blocked',
  },
  {
    id: 2,
    event: 'File Access',
    ip: '192.168.1.100',
    user: 'john',
    timestamp: '2024-04-05 10:15 AM',
    severity: 'Low',
    status: 'Allowed',
  },
  {
    id: 3,
    event: 'Configuration Change',
    ip: '192.168.1.101',
    user: 'admin',
    timestamp: '2024-04-05 09:45 AM',
    severity: 'Medium',
    status: 'Allowed',
  },
];

export function Security() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Security Management</h1>
        <Button className="bg-primary">
          <Shield className="mr-2 h-4 w-4" /> Security Scan
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Security Status</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Protected</div>
            <div className="flex gap-2 mt-2">
              <Badge variant="default">Firewall Active</Badge>
              <Badge variant="default">SSL Enabled</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Threats Blocked</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground mt-2">
              Last 24 hours
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-2">
              Authenticated users
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/60 backdrop-blur">
        <CardHeader>
          <CardTitle>Security Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {securityEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.event}</TableCell>
                  <TableCell>{event.ip}</TableCell>
                  <TableCell>{event.user}</TableCell>
                  <TableCell>{event.timestamp}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        event.severity === 'High'
                          ? 'destructive'
                          : event.severity === 'Medium'
                          ? 'secondary'
                          : 'default'
                      }
                    >
                      {event.severity}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={event.status === 'Blocked' ? 'destructive' : 'default'}
                    >
                      {event.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <XCircle className="h-4 w-4 text-destructive" />
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
            <CardTitle>Access Control</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-muted-foreground">
                    Additional security layer
                  </p>
                </div>
                <Button variant="outline">Configure 2FA</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">SSH Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Public key authentication
                  </p>
                </div>
                <Badge variant="default">Enabled</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">IP Filtering</h3>
                  <p className="text-sm text-muted-foreground">
                    Access restrictions
                  </p>
                </div>
                <Button variant="outline">Manage Rules</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle>Encryption</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">SSL Certificate</h3>
                  <p className="text-sm text-muted-foreground">
                    Expires in 45 days
                  </p>
                </div>
                <Button variant="outline">Renew</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Disk Encryption</h3>
                  <p className="text-sm text-muted-foreground">
                    AES-256 encryption
                  </p>
                </div>
                <Badge variant="default">Active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Secure Protocols</h3>
                  <p className="text-sm text-muted-foreground">
                    TLS 1.3, SSH
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