import { useState } from 'react';
import { Plus, Search, MoreHorizontal, Pencil, Trash2, Factory, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface Factory {
  id: string;
  name: string;
  address: string;
  picName: string;
  picEmail: string;
  picPhone: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

const FactoriesPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentFactory, setCurrentFactory] = useState<Factory | null>(null);
  const [factories, setFactories] = useState<Factory[]>([
    {
      id: '1',
      name: 'Pabrik Utama',
      address: 'Jl. Industri Raya No. 123, Jakarta',
      picName: 'Budi Santoso',
      picEmail: 'budi@example.com',
      picPhone: '081234567890',
      status: 'active',
      createdAt: new Date().toISOString(),
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    picName: '',
    picEmail: '',
    picPhone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing && currentFactory) {
      // Update existing factory
      setFactories(factories.map(f => 
        f.id === currentFactory.id ? { ...f, ...formData } : f
      ));
      toast({
        title: "Berhasil",
        description: "Data pabrik berhasil diperbarui",
      });
    } else {
      // Add new factory
      const newFactory: Factory = {
        id: Date.now().toString(),
        ...formData,
        status: 'active',
        createdAt: new Date().toISOString(),
      };
      setFactories([...factories, newFactory]);
      toast({
        title: "Berhasil",
        description: "Pabrik baru berhasil ditambahkan",
      });
    }
    
    setIsDialogOpen(false);
    setFormData({ name: '', address: '', picName: '', picEmail: '', picPhone: '' });
    setCurrentFactory(null);
  };

  const handleEdit = (factory: Factory) => {
    setCurrentFactory(factory);
    setFormData({
      name: factory.name,
      address: factory.address,
      picName: factory.picName,
      picEmail: factory.picEmail,
      picPhone: factory.picPhone,
    });
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setFactories(factories.filter(f => f.id !== id));
    toast({
      title: "Berhasil",
      description: "Pabrik berhasil dihapus",
    });
  };

  const toggleStatus = (id: string) => {
    setFactories(factories.map(f => 
      f.id === id ? { ...f, status: f.status === 'active' ? 'inactive' : 'active' } : f
    ));
  };

  const filteredFactories = factories.filter(factory => 
    factory.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    factory.picName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    factory.picEmail.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* <div>
        <h2 className="text-3xl font-bold tracking-tight">Manajemen Pabrik</h2>
        <p className="text-muted-foreground">
          Kelola data pabrik dan informasi PIC
        </p>
      </div> */}

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="space-y-2">
            <CardTitle>Daftar Pabrik</CardTitle>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Cari pabrik..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => { setIsEditing(false); setFormData({ name: '', address: '', picName: '', picEmail: '', picPhone: '' }); }}>
                  <Plus className="mr-2 h-4 w-4" />
                  Tambah Pabrik
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{isEditing ? 'Edit Pabrik' : 'Tambah Pabrik Baru'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Pabrik</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nama Pabrik"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Alamat</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Alamat lengkap pabrik"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Informasi PIC</Label>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="picName">Nama PIC</Label>
                        <Input
                          id="picName"
                          name="picName"
                          value={formData.picName}
                          onChange={handleInputChange}
                          placeholder="Nama PIC"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="picEmail">Email PIC</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="picEmail"
                            name="picEmail"
                            type="email"
                            value={formData.picEmail}
                            onChange={handleInputChange}
                            placeholder="email@example.com"
                            className="pl-9"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="picPhone">Telp PIC</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="picPhone"
                            name="picPhone"
                            type="tel"
                            value={formData.picPhone}
                            onChange={handleInputChange}
                            placeholder="0812-3456-7890"
                            className="pl-9"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setIsDialogOpen(false);
                        setFormData({ name: '', address: '', picName: '', picEmail: '', picPhone: '' });
                        setCurrentFactory(null);
                      }}
                    >
                      Batal
                    </Button>
                    <Button type="submit">
                      {isEditing ? 'Simpan Perubahan' : 'Tambah Pabrik'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama Pabrik</TableHead>
                  <TableHead>Alamat</TableHead>
                  <TableHead>PIC</TableHead>
                  <TableHead>Kontak</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFactories.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                      {searchQuery ? 'Tidak ada pabrik yang cocok' : 'Belum ada data pabrik'}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredFactories.map((factory) => (
                    <TableRow key={factory.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-3">
                          <Factory className="h-5 w-5 text-muted-foreground" />
                          <span>{factory.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-[200px] truncate" title={factory.address}>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span className="truncate">{factory.address}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium">{factory.picName}</div>
                          <div className="text-sm text-muted-foreground">{factory.picEmail}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>{factory.picPhone}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={factory.status === 'active' ? 'default' : 'secondary'}
                          className="cursor-pointer"
                          onClick={() => toggleStatus(factory.id)}
                        >
                          {factory.status === 'active' ? 'Aktif' : 'Nonaktif'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Buka menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => handleEdit(factory)}
                              className="cursor-pointer"
                            >
                              <Pencil className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleDelete(factory.id)}
                              className="cursor-pointer text-red-600 focus:text-red-600"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Hapus</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FactoriesPage;