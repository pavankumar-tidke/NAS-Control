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
  Network as NetworkIcon,
  Wifi,
  Globe,
  Shield,
  Activity,
  Cloud,
  Settings,
  Power,
} from 'lucide-react';

const connections = [
  {
    id: 1,
    interface: 'eth0',
    ip: '192.168.1.100',
    type: 'Ethernet',
    speed: '1 Gbps',
    status: 'Connected',
    traffic: '125 MB/s',
  },
  {
    id: 2,
    interface: 'wlan0',
    ip: '192.168.1.101',
    type: 'Wi-Fi',
    speed: '300 Mbps',
    status: 'Connected',
    traffic: '45 MB/s',
  },
  {
    id: 3,
    interface: 'vpn0',
    ip: '10.8.0.2',
    type: 'VPN',
    speed: '100 Mbps',
    status: 'Active',
    traffic: '5 MB/s',
  },
];

export function Network() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Network Management</h1>
        <Button className="bg-primary">
          <Settings className="mr-2 h-4 w-4" /> Configure Network
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Network Status</CardTitle>
            <NetworkIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Online</div>
            <div className="flex gap-2 mt-2">
              <Badge variant="default">3 Active Connections</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Bandwidth Usage</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">175 MB/s</div>
            <Progress value={65} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              65% of maximum bandwidth
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
              Last sync: 5 minutes ago
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/60 backdrop-blur">
        <CardHeader>
          <CardTitle>Network Interfaces</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Interface</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Speed</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Traffic</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {connections.map((connection) => (
                <TableRow key={connection.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {connection.type === 'Wi-Fi' ? (
                        <Wifi className="h-4 w-4" />
                      ) : connection.type === 'VPN' ? (
                        <Shield className="h-4 w-4" />
                      ) : (
                        <Globe className="h-4 w-4" />
                      )}
                      {connection.interface}
                    </div>
                  </TableCell>
                  <TableCell>{connection.ip}</TableCell>
                  <TableCell>{connection.type}</TableCell>
                  <TableCell>{connection.speed}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        connection.status === 'Connected' ? 'default' : 'secondary'
                      }
                    >
                      {connection.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{connection.traffic}</TableCell>
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

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle>Remote Access</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">VPN Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure remote access via OpenVPN
                  </p>
                </div>
                <Button variant="outline">Configure VPN</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">DDNS</h3>
                  <p className="text-sm text-muted-foreground">
                    nas.example.com
                  </p>
                </div>
                <Button variant="outline">Update DDNS</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle>File Sharing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">SMB/CIFS</h3>
                  <p className="text-sm text-muted-foreground">
                    Windows File Sharing
                  </p>
                </div>
                <Badge variant="default">Active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">NFS</h3>
                  <p className="text-sm text-muted-foreground">
                    Unix File Sharing
                  </p>
                </div>
                <Badge variant="default">Active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">FTP</h3>
                  <p className="text-sm text-muted-foreground">
                    File Transfer Protocol
                  </p>
                </div>
                <Badge variant="secondary">Disabled</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}