import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Users as UsersIcon,
  UserPlus,
  Settings,
  Lock,
  Trash2,
  Shield,
} from 'lucide-react';

const users = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@nas.local',
    role: 'Administrator',
    status: 'Active',
    lastLogin: '2024-04-05 10:30 AM',
    storage: '250 GB',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john@company.com',
    role: 'User',
    status: 'Active',
    lastLogin: '2024-04-05 09:15 AM',
    storage: '120 GB',
  },
  {
    id: 3,
    name: 'Sarah Smith',
    email: 'sarah@company.com',
    role: 'Power User',
    status: 'Inactive',
    lastLogin: '2024-04-04 03:45 PM',
    storage: '180 GB',
  },
];

export function Users() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Button className="bg-primary">
          <UserPlus className="mr-2 h-4 w-4" /> Add New User
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-2">
              2 active, 1 inactive
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Storage Usage</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">550 GB</div>
            <p className="text-xs text-muted-foreground mt-2">
              Total storage allocated to users
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <Lock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-2">
              Current active user sessions
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/60 backdrop-blur">
        <CardHeader>
          <CardTitle>User Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Storage Used</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{user.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={user.status === 'Active' ? 'default' : 'secondary'}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                  <TableCell>{user.storage}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
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
    </div>
  );
}