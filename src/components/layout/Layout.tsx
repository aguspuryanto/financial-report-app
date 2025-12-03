// import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
// import { useAuth } from '@/contexts/AuthContext'
// import { Button } from '@/components/ui/button'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import {
//   Home,
//   Factory,
//   Package,
//   DollarSign,
//   BarChart3,
//   Printer,
//   User,
//   LogOut,
//   Menu,
//   X,
//   ChevronDown
// } from 'lucide-react'
// import { useState, useEffect } from 'react'

// const Layout = () => {
//   const { user, logout } = useAuth()
//   const navigate = useNavigate()
//   const location = useLocation()
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const handleLogout = () => {
//     logout()
//     navigate('/login')
//   }

//   const menuItems = [
//     { icon: <Home className="w-5 h-5" />, label: 'Dashboard', path: '/dashboard' },
//     { icon: <Factory className="w-5 h-5" />, label: 'Pabrik', path: '/factories' },
//     { icon: <Package className="w-5 h-5" />, label: 'Produk', path: '/products' },
//     { icon: <DollarSign className="w-5 h-5" />, label: 'Transaksi', path: '/transactions' },
//     { icon: <BarChart3 className="w-5 h-5" />, label: 'Laporan', path: '/reports' },
//     { icon: <Printer className="w-5 h-5" />, label: 'Cetak', path: '/print' },
//   ]

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Mobile Sidebar Toggle */}
//       <div className="lg:hidden fixed top-4 left-4 z-50">
//         <Button
//           variant="outline"
//           size="icon"
//           className="bg-white shadow-md"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//         </Button>
//       </div>

//       {/* Sidebar */}
//       <aside className={`
//         fixed top-0 left-0 z-40 h-screen w-72 bg-white border-r shadow-lg
//         transform transition-transform duration-300 ease-in-out flex-shrink-0
//         lg:translate-x-0 lg:static lg:h-screen lg:shadow-none
//         ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
//       `}>
//         <div className="h-full flex flex-col">
//           {/* Logo */}
//           <div className="p-6 border-b flex items-center space-x-3">
//             <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
//               <DollarSign className="w-5 h-5 text-primary" />
//             </div>
//             <div>
//               <h1 className="text-xl font-bold text-gray-800">FinanceApp</h1>
//               <p className="text-xs text-gray-500">Laporan Keuangan</p>
//             </div>
//           </div>

//           {/* Navigation */}
//           <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
//             {menuItems.map((item) => {
//               const isActive = location.pathname === item.path || 
//                              (location.pathname.startsWith(item.path) && item.path !== '/');
              
//               return (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   onClick={() => setSidebarOpen(false)}
//                   className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
//                     isActive 
//                       ? 'bg-primary/10 text-primary font-medium' 
//                       : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//                   }`}
//                 >
//                   <span className={isActive ? 'text-primary' : 'text-gray-400'}>{item.icon}</span>
//                   <span>{item.label}</span>
//                 </Link>
//               )
//             })}
//           </nav>

//           {/* User Info */}
//           <div className="p-4 border-t mt-auto">
//             <DropdownMenu>
//               <DropdownMenuTrigger className="w-full">
//                 <div className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-50 transition-colors">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                       <User className="w-4 h-4 text-primary" />
//                     </div>
//                     <div className="text-left overflow-hidden">
//                       <p className="font-medium text-sm text-gray-800 truncate">{user?.name || 'User'}</p>
//                       <p className="text-xs text-gray-500 truncate">{user?.email || 'user@example.com'}</p>
//                     </div>
//                   </div>
//                   <ChevronDown className="w-4 h-4 text-gray-400" />
//                 </div>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-56" align="start" side="top">
//                 <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <User className="w-4 h-4 mr-2" />
//                   <span>Profil</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={handleLogout}>
//                   <LogOut className="w-4 h-4 mr-2" />
//                   <span>Logout</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col lg:ml-72">
//         {/* Header */}
//         <header className={`sticky top-0 z-20 bg-white border-b transition-shadow duration-200 ${
//           isScrolled ? 'shadow-sm' : ''
//         }`}>
//           <div className="px-6 py-3 flex justify-between items-center h-16">
//             <div className="lg:hidden">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {menuItems.find(item => location.pathname === item.path)?.label || 'Dashboard'}
//               </h2>
//             </div>
            
//             <div className="flex items-center space-x-2">
//               <Button 
//                 variant="ghost" 
//                 size="icon" 
//                 className="text-gray-500 hover:bg-gray-100"
//                 onClick={() => window.location.reload()}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
//                   <path d="M3 3v5h5"></path>
//                   <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
//                   <path d="M16 16h5v5"></path>
//                 </svg>
//               </Button>
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 p-6 bg-gray-50">
//           <div className="max-w-7xl mx-auto">
//             <Outlet />
//           </div>
//         </main>
//       </div>

//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity duration-300"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}
//     </div>
//   )
// }

// export default Layout

import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  Home,
  Factory,
  Package,
  DollarSign,
  BarChart3,
  Printer,
  User,
  LogOut,
  Menu,
  X,
  Settings,
  Bell,
  Search,
  Calendar,
  FileText,
  Users,
  ChevronDown,
  Wallet,
  TrendingUp,
  PieChart
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Layout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications] = useState(3); // Dummy notifications count

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navigationItems = [
    {
      title: 'Dashboard',
      icon: <Home className="h-5 w-5" />,
      path: '/dashboard',
      color: 'text-blue-500'
    },
    {
      title: 'Pabrik',
      icon: <Factory className="h-5 w-5" />,
      path: '/factories',
      color: 'text-green-500'
    },
    {
      title: 'Produk',
      icon: <Package className="h-5 w-5" />,
      path: '/products',
      color: 'text-purple-500'
    },
    {
      title: 'Transaksi',
      icon: <DollarSign className="h-5 w-5" />,
      path: '/transactions',
      color: 'text-amber-500'
    },
    {
      title: 'Laporan',
      icon: <BarChart3 className="h-5 w-5" />,
      path: '/reports',
      color: 'text-red-500',
      submenu: [
        { title: 'Harian', path: '/reports/daily' },
        { title: 'Bulanan', path: '/reports/monthly' },
        { title: 'Tahunan', path: '/reports/yearly' },
      ]
    },
    {
      title: 'Cetak Nota',
      icon: <Printer className="h-5 w-5" />,
      path: '/print',
      color: 'text-gray-500'
    },
    {
      title: 'Pengguna',
      icon: <Users className="h-5 w-5" />,
      path: '/users',
      color: 'text-cyan-500'
    },
    {
      title: 'Pengaturan',
      icon: <Settings className="h-5 w-5" />,
      path: '/settings',
      color: 'text-gray-500'
    },
  ];

  const quickStats = [
    { label: 'Total Pemasukan', value: 'Rp 125.5 Jt', icon: <TrendingUp className="h-4 w-4" />, change: '+12%' },
    { label: 'Total Pengeluaran', value: 'Rp 89.2 Jt', icon: <Wallet className="h-4 w-4" />, change: '-5%' },
    { label: 'Laba Bersih', value: 'Rp 36.3 Jt', icon: <PieChart className="h-4 w-4" />, change: '+25%' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Fixed */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm flex-shrink-0">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left side */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden mr-2"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              
              <Link to="/dashboard" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">FinanceFactory</h1>
                  <p className="text-xs text-gray-500 hidden sm:block">Laporan Keuangan</p>
                </div>
              </Link>
            </div>

            {/* Center - Search */}
            <div className="hidden lg:flex items-center flex-1 max-w-2xl mx-8">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="Cari transaksi, produk, atau laporan..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 hover:bg-gray-100">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      {user?.avatar ? (
                        <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full" />
                      ) : (
                        <User className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-500 hidden md:block" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="h-4 w-4 mr-2" />
                    Profil
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="h-4 w-4 mr-2" />
                    Pengaturan
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Keluar
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="h-full overflow-y-auto py-4">
            {/* Navigation - PERBAIKAN: hapus padding berlebihan */}
            <nav className="px-3 space-y-1">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.path || 
                               location.pathname.startsWith(item.path + '/');
                
                return (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setSidebarOpen(false)}
                      className={cn(
                        "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      )}
                    >
                      <div className={`mr-3 ${item.color}`}>
                        {item.icon}
                      </div>
                      {item.title}
                      {item.submenu && (
                        <ChevronDown className="ml-auto h-4 w-4 text-gray-400" />
                      )}
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* Quick Stats */}
            <div className="px-3 mt-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Ringkasan Cepat
              </h3>
              <div className="space-y-2">
                {quickStats.map((stat, index) => (
                  <div key={index} className="bg-gray-50 rounded p-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-600">{stat.label}</span>
                      <span className={`text-xs font-medium ${
                        stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {stat.icon}
                      <span className="font-bold text-sm">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className={cn(
          "flex-1 overflow-y-auto transition-all duration-300",
          sidebarOpen ? "lg:ml-64" : "lg:ml-0"
        )}>
          <div className="p-4 lg:p-6">
            {/* Breadcrumb */}
            <div className="mb-6">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2">
                  <li className="inline-flex items-center">
                    <Link to="/dashboard" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary">
                      <Home className="h-4 w-4 mr-2" />
                      Dashboard
                    </Link>
                  </li>
                  {location.pathname !== '/dashboard' && (
                    <>
                      <li>
                        <div className="flex items-center">
                          <ChevronDown className="h-4 w-4 text-gray-400 rotate-270" />
                          <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 capitalize">
                            {location.pathname.split('/')[1]}
                          </span>
                        </div>
                      </li>
                    </>
                  )}
                </ol>
              </nav>
              
              <h1 className="text-2xl font-bold text-gray-900 mt-2">
                {navigationItems.find(item => item.path === location.pathname)?.title || 'Dashboard'}
              </h1>
            </div>

            {/* Page Content */}
            <div className="bg-white rounded-lg shadow p-4 lg:p-6">
              <Outlet />
            </div>

            {/* Footer */}
            <footer className="mt-8 text-center text-sm text-gray-500">
              <p>FinanceFactory &copy; {new Date().getFullYear()} - Sistem Laporan Keuangan Pabrik</p>
            </footer>
          </div>
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;