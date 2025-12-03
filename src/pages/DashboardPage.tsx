import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Package, 
  Factory, 
  ShoppingCart,
  BarChart3,
  Calendar,
  Download,
  Filter,
  MoreVertical
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';

const DashboardPage = () => {
  const [timeRange, setTimeRange] = useState('month');

  // Dummy data
  const stats = [
    {
      title: 'Total Pemasukan',
      value: 'Rp 125.500.000',
      change: '+12.5%',
      trend: 'up',
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Total Pengeluaran',
      value: 'Rp 89.200.000',
      change: '-5.2%',
      trend: 'down',
      icon: <TrendingDown className="h-5 w-5" />,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      title: 'Laba Bersih',
      value: 'Rp 36.300.000',
      change: '+25.3%',
      trend: 'up',
      icon: <DollarSign className="h-5 w-5" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Pabrik',
      value: '5',
      change: '+1',
      trend: 'up',
      icon: <Factory className="h-5 w-5" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Total Produk',
      value: '24',
      change: '+3',
      trend: 'up',
      icon: <Package className="h-5 w-5" />,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      title: 'Transaksi Bulan Ini',
      value: '156',
      change: '+18%',
      trend: 'up',
      icon: <ShoppingCart className="h-5 w-5" />,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-100'
    }
  ];

  const recentTransactions = [
    { id: 1, type: 'Pemasukan', description: 'Penjualan Semen Portland', amount: 'Rp 12.500.000', date: '15 Jan 2024', status: 'completed' },
    { id: 2, type: 'Pengeluaran', description: 'Pembelian Bahan Baku', amount: 'Rp 8.200.000', date: '14 Jan 2024', status: 'completed' },
    { id: 3, type: 'Pemasukan', description: 'Penjualan Bata Merah', amount: 'Rp 9.800.000', date: '13 Jan 2024', status: 'pending' },
    { id: 4, type: 'Pengeluaran', description: 'Gaji Karyawan', amount: 'Rp 15.000.000', date: '12 Jan 2024', status: 'completed' },
    { id: 5, type: 'Pemasukan', description: 'Penjualan Cat Tembok', amount: 'Rp 7.500.000', date: '11 Jan 2024', status: 'completed' },
  ];

  const topProducts = [
    { name: 'Semen Portland', sales: 45, revenue: 'Rp 56.250.000' },
    { name: 'Bata Merah Press', sales: 38, revenue: 'Rp 32.300.000' },
    { name: 'Cat Tembok Dulux', sales: 28, revenue: 'Rp 33.600.000' },
    { name: 'Keramik 40x40 cm', sales: 22, revenue: 'Rp 9.900.000' },
    { name: 'Paku Baja', sales: 18, revenue: 'Rp 3.600.000' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header with filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Selamat Datang Kembali!</h2>
          <p className="text-gray-600">Berikut adalah ringkasan kinerja keuangan Anda</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {timeRange === 'day' ? 'Hari Ini' : 
             timeRange === 'week' ? 'Minggu Ini' : 
             timeRange === 'month' ? 'Bulan Ini' : 'Tahun Ini'}
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription className="text-sm font-medium">
                  {stat.title}
                </CardDescription>
                <div className={`p-2 rounded-full ${stat.bgColor}`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
              </div>
              <CardTitle className="text-2xl font-bold mt-2">
                {stat.value}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`flex items-center text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1" />
                )}
                {stat.change} dari periode sebelumnya
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Tables Section */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-flex">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transaksi</TabsTrigger>
          <TabsTrigger value="products">Produk</TabsTrigger>
          <TabsTrigger value="reports">Laporan</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart Placeholder */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Grafik Pemasukan vs Pengeluaran</CardTitle>
                    <CardDescription>Bulan Januari 2024</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Lihat Detail</DropdownMenuItem>
                      <DropdownMenuItem>Download Data</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Grafik akan ditampilkan di sini</p>
                    <p className="text-sm text-gray-400">Integrasi chart library seperti Recharts</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Products */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Produk Terlaris</CardTitle>
                    <CardDescription>Berdasarkan pendapatan</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    Lihat Semua
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <span className="font-bold text-primary">{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-gray-500">{product.sales} penjualan</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{product.revenue}</p>
                        <p className="text-sm text-gray-500">Revenue</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Transaksi Terbaru</CardTitle>
                  <CardDescription>5 transaksi terakhir</CardDescription>
                </div>
                <Button>+ Tambah Transaksi</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Jenis</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Deskripsi</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Jumlah</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Tanggal</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            transaction.type === 'Pemasukan' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {transaction.type}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-medium">{transaction.description}</td>
                        <td className="py-3 px-4 font-bold">{transaction.amount}</td>
                        <td className="py-3 px-4 text-gray-500">{transaction.date}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            transaction.status === 'completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {transaction.status === 'completed' ? 'Selesai' : 'Pending'}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm">Detail</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Aksi Cepat</CardTitle>
          <CardDescription>Fitur yang sering digunakan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <DollarSign className="h-6 w-6" />
              <span>Tambah Pemasukan</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <TrendingDown className="h-6 w-6" />
              <span>Tambah Pengeluaran</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <Factory className="h-6 w-6" />
              <span>Tambah Pabrik</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <Package className="h-6 w-6" />
              <span>Tambah Produk</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;