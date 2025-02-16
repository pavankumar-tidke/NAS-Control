import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  FolderOpen,
  Upload,
  Download,
  File,
  Image,
  Video,
  Music,
  Archive,
  MoreVertical,
  Search,
} from 'lucide-react';

const files = [
  {
    id: 1,
    name: 'Project Documentation.pdf',
    type: 'PDF',
    size: '2.5 MB',
    modified: '2024-04-05 10:30 AM',
    owner: 'admin',
  },
  {
    id: 2,
    name: 'Presentation.pptx',
    type: 'PowerPoint',
    size: '5.8 MB',
    modified: '2024-04-04 03:45 PM',
    owner: 'john',
  },
  {
    id: 3,
    name: 'Budget_2024.xlsx',
    type: 'Excel',
    size: '1.2 MB',
    modified: '2024-04-03 09:15 AM',
    owner: 'sarah',
  },
];

const getFileIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'image':
      return <Image className="h-4 w-4" />;
    case 'video':
      return <Video className="h-4 w-4" />;
    case 'audio':
      return <Music className="h-4 w-4" />;
    case 'archive':
      return <Archive className="h-4 w-4" />;
    default:
      return <File className="h-4 w-4" />;
  }
};

export function Files() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">File Management</h1>
        <div className="flex gap-4">
          <Button className="bg-primary">
            <Upload className="mr-2 h-4 w-4" /> Upload
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <FolderOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">789.5 GB</div>
            <p className="text-xs text-muted-foreground mt-2">
              39.5% of total storage
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur col-span-2">
          <CardHeader>
            <CardTitle>Quick Access</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1">
                <FolderOpen className="mr-2 h-4 w-4" /> Documents
              </Button>
              <Button variant="outline" className="flex-1">
                <Image className="mr-2 h-4 w-4" /> Images
              </Button>
              <Button variant="outline" className="flex-1">
                <Video className="mr-2 h-4 w-4" /> Videos
              </Button>
              <Button variant="outline" className="flex-1">
                <Archive className="mr-2 h-4 w-4" /> Archives
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/60 backdrop-blur">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Files</CardTitle>
            <div className="flex gap-4 w-1/3">
              <Input
                placeholder="Search files..."
                className="w-full"
                icon={<Search className="h-4 w-4" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Modified</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {files.map((file) => (
                <TableRow key={file.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {getFileIcon(file.type)}
                      {file.name}
                    </div>
                  </TableCell>
                  <TableCell>{file.type}</TableCell>
                  <TableCell>{file.size}</TableCell>
                  <TableCell>{file.modified}</TableCell>
                  <TableCell>{file.owner}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
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