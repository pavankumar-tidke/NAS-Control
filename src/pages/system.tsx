import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
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
import {
  Settings,
  Power,
  RefreshCcw,
  Shield,
  Cpu,
  Network,
  HardDrive,
  Clock,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function System() {
  const [powerAction, setPowerAction] = useState<string>('restart');
  const [autoUpdate, setAutoUpdate] = useState(true);
  const [sshAccess, setSSHAccess] = useState(true);
  const [remoteAccess, setRemoteAccess] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">System Administration</h1>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <Power className="mr-2 h-4 w-4" />
              System Power
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>System Power Action</AlertDialogTitle>
              <AlertDialogDescription>
                Please select the power action you want to perform. This action
                cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="grid gap-4 py-4">
              <Select
                value={powerAction}
                onValueChange={setPowerAction}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select power action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="restart">Restart System</SelectItem>
                  <SelectItem value="shutdown">Shutdown System</SelectItem>
                  <SelectItem value="hibernate">Hibernate System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-destructive">
                Confirm {powerAction}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Tabs defaultValue="info" className="space-y-4">
        <TabsList>
          <TabsTrigger value="info">
            <Cpu className="mr-2 h-4 w-4" />
            System Info
          </TabsTrigger>
          <TabsTrigger value="network">
            <Network className="mr-2 h-4 w-4" />
            Network
          </TabsTrigger>
          <TabsTrigger value="storage">
            <HardDrive className="mr-2 h-4 w-4" />
            Storage
          </TabsTrigger>
          <TabsTrigger value="maintenance">
            <Settings className="mr-2 h-4 w-4" />
            Maintenance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="info" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Operating System
                </CardTitle>
                <Cpu className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Ubuntu 22.04 LTS</div>
                <p className="text-xs text-muted-foreground">
                  Last updated: 2 days ago
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  System Uptime
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15 days, 7 hours</div>
                <p className="text-xs text-muted-foreground">
                  Since last restart
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>System Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Processor</Label>
                  <div className="rounded-md border p-2">
                    Intel Core i7-12700K @ 3.60GHz
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Memory</Label>
                  <div className="rounded-md border p-2">32GB DDR4</div>
                </div>
                <div className="space-y-2">
                  <Label>System Model</Label>
                  <div className="rounded-md border p-2">
                    Custom Build Server
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Kernel Version</Label>
                  <div className="rounded-md border p-2">5.15.0-91-generic</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Advanced System Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>BIOS Version</Label>
                  <div className="rounded-md border p-2">
                    American Megatrends v2.5.1
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Boot Mode</Label>
                  <div className="rounded-md border p-2">UEFI</div>
                </div>
                <div className="space-y-2">
                  <Label>TPM Status</Label>
                  <div className="rounded-md border p-2">
                    Version 2.0 - Active
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Secure Boot</Label>
                  <div className="rounded-md border p-2">Enabled</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Updates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Automatic Updates</Label>
                  <div className="text-sm text-muted-foreground">
                    Keep the system up to date automatically
                  </div>
                </div>
                <Switch
                  checked={autoUpdate}
                  onCheckedChange={setAutoUpdate}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SSH Access</Label>
                  <div className="text-sm text-muted-foreground">
                    Allow SSH connections to the system
                  </div>
                </div>
                <Switch
                  checked={sshAccess}
                  onCheckedChange={setSSHAccess}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Remote Management</Label>
                  <div className="text-sm text-muted-foreground">
                    Enable remote system administration
                  </div>
                </div>
                <Switch
                  checked={remoteAccess}
                  onCheckedChange={setRemoteAccess}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Maintenance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Button variant="outline">
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  Check for Updates
                </Button>
                <Button variant="outline">
                  <Shield className="mr-2 h-4 w-4" />
                  Security Scan
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Maintenance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>System Backup Schedule</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue placeholder="Select backup schedule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Every Hour</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Log Level</Label>
                  <Select defaultValue="info">
                    <SelectTrigger>
                      <SelectValue placeholder="Select log level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="debug">Debug</SelectItem>
                      <SelectItem value="info">Info</SelectItem>
                      <SelectItem value="warn">Warning</SelectItem>
                      <SelectItem value="error">Error</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Performance Profile</Label>
                <Select defaultValue="balanced">
                  <SelectTrigger>
                    <SelectValue placeholder="Select performance profile" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="powersave">Power Save</SelectItem>
                    <SelectItem value="balanced">Balanced</SelectItem>
                    <SelectItem value="performance">Performance</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="network" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Network Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Hostname</Label>
                  <Input placeholder="Enter hostname" value="nas-server" />
                </div>
                <div className="space-y-2">
                  <Label>Domain</Label>
                  <Input placeholder="Enter domain" value="local.network" />
                </div>
                <div className="space-y-2">
                  <Label>IP Address</Label>
                  <Input placeholder="Enter IP address" value="192.168.1.100" />
                </div>
                <div className="space-y-2">
                  <Label>Gateway</Label>
                  <Input placeholder="Enter gateway" value="192.168.1.1" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Network Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>DNS Servers</Label>
                  <Input placeholder="Primary DNS" value="8.8.8.8" />
                  <Input placeholder="Secondary DNS" value="8.8.4.4" />
                </div>
                <div className="space-y-2">
                  <Label>Network Mode</Label>
                  <Select defaultValue="auto">
                    <SelectTrigger>
                      <SelectValue placeholder="Select network mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto-Negotiate</SelectItem>
                      <SelectItem value="1000fd">1000BASE-T Full Duplex</SelectItem>
                      <SelectItem value="100fd">100BASE-TX Full Duplex</SelectItem>
                      <SelectItem value="10fd">10BASE-T Full Duplex</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Jumbo Frames</Label>
                <Select defaultValue="1500">
                  <SelectTrigger>
                    <SelectValue placeholder="Select MTU size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1500">1500 (Default)</SelectItem>
                    <SelectItem value="4000">4000</SelectItem>
                    <SelectItem value="9000">9000 (Jumbo)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="storage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Storage Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>File System</Label>
                  <Select defaultValue="ext4">
                    <SelectTrigger>
                      <SelectValue placeholder="Select file system" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ext4">ext4</SelectItem>
                      <SelectItem value="xfs">XFS</SelectItem>
                      <SelectItem value="btrfs">Btrfs</SelectItem>
                      <SelectItem value="zfs">ZFS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Mount Options</Label>
                  <Input placeholder="Enter mount options" value="defaults,noatime" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}