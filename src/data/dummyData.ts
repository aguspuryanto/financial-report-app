import { Factory, Product, Transaction, DailyReport, MonthlyReport } from '../types';

export const dummyFactories: Factory[] = [
  {
    id: '1',
    name: 'Pabrik Utama Sentul',
    code: 'F001',
    address: 'Jl. Industri Raya No. 123, Sentul, Bogor',
    phone: '021-12345678',
    manager: 'Budi Santoso',
    email: 'budi@sentulfactory.com',
    status: 'active',
    createdAt: '2024-01-01T08:00:00Z',
    updatedAt: '2024-01-01T08:00:00Z'
  },
  {
    id: '2',
    name: 'Pabrik Cabang Cikarang',
    code: 'F002',
    address: 'Kawasan Industri MM2100, Cikarang Barat',
    phone: '021-87654321',
    manager: 'Siti Aminah',
    email: 'siti@cikarangfactory.com',
    status: 'active',
    createdAt: '2024-01-02T09:30:00Z',
    updatedAt: '2024-01-02T09:30:00Z'
  },
  {
    id: '3',
    name: 'Pabrik Pengolahan Tangerang',
    code: 'F003',
    address: 'Jl. Gatot Subroto Km. 5, Tangerang',
    phone: '021-55556666',
    manager: 'Ahmad Wijaya',
    email: 'ahmad@tangerangfactory.com',
    status: 'inactive',
    createdAt: '2024-01-03T10:15:00Z',
    updatedAt: '2024-01-10T14:20:00Z'
  }
];

export const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'SemEN Portland Type I',
    code: 'P001',
    factoryId: '1',
    factoryName: 'Pabrik Utama Sentul',
    price: 75000,
    cost: 55000,
    unit: 'sak',
    stock: 1500,
    minStock: 200,
    category: 'Material Bangunan',
    description: 'Semen portland untuk konstruksi umum',
    status: 'active',
    createdAt: '2024-01-05T08:00:00Z',
    updatedAt: '2024-01-15T14:30:00Z'
  },
  {
    id: '2',
    name: 'Bata Merah Press',
    code: 'P002',
    factoryId: '1',
    factoryName: 'Pabrik Utama Sentul',
    price: 850,
    cost: 600,
    unit: 'buah',
    stock: 50000,
    minStock: 10000,
    category: 'Material Bangunan',
    description: 'Bata merah press kualitas premium',
    status: 'active',
    createdAt: '2024-01-06T09:00:00Z',
    updatedAt: '2024-01-16T10:15:00Z'
  },
  {
    id: '3',
    name: 'Cat Tembok Dulux',
    code: 'P003',
    factoryId: '2',
    factoryName: 'Pabrik Cabang Cikarang',
    price: 120000,
    cost: 85000,
    unit: 'kaleng',
    stock: 800,
    minStock: 100,
    category: 'Material Finishing',
    description: 'Cat tembok anti noda dan jamur',
    status: 'active',
    createdAt: '2024-01-07T10:00:00Z',
    updatedAt: '2024-01-17T11:45:00Z'
  },
  {
    id: '4',
    name: 'Keramik 40x40 cm',
    code: 'P004',
    factoryId: '2',
    factoryName: 'Pabrik Cabang Cikarang',
    price: 45000,
    cost: 32000,
    unit: 'kotak',
    stock: 1200,
    minStock: 200,
    category: 'Material Lantai',
    description: 'Keramik ukuran 40x40 cm motif marmer',
    status: 'active',
    createdAt: '2024-01-08T11:00:00Z',
    updatedAt: '2024-01-18T13:20:00Z'
  }
];

export const dummyTransactions: Transaction[] = [
  {
    id: '1',
    type: 'income',
    amount: 37500000,
    description: 'Penjualan Semen Portland ke PT. Bangun Jaya',
    date: '2024-01-15',
    category: 'Penjualan Produk',
    factoryId: '1',
    factoryName: 'Pabrik Utama Sentul',
    productId: '1',
    productName: 'Semen Portland Type I',
    reference: 'INV/2024/001',
    paymentMethod: 'transfer',
    status: 'completed',
    notes: 'Pembayaran sudah lunas',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    type: 'expense',
    amount: 12500000,
    description: 'Pembelian bahan baku semen',
    date: '2024-01-14',
    category: 'Bahan Baku',
    factoryId: '1',
    factoryName: 'Pabrik Utama Sentul',
    reference: 'PO/2024/001',
    paymentMethod: 'transfer',
    status: 'completed',
    notes: 'Bahan baku dari PT. Semen Indonesia',
    createdAt: '2024-01-14T14:20:00Z',
    updatedAt: '2024-01-14T14:20:00Z'
  },
  {
    id: '3',
    type: 'income',
    amount: 42500000,
    description: 'Penjualan Bata Merah ke CV. Mitra Bangun',
    date: '2024-01-13',
    category: 'Penjualan Produk',
    factoryId: '1',
    factoryName: 'Pabrik Utama Sentul',
    productId: '2',
    productName: 'Bata Merah Press',
    reference: 'INV/2024/002',
    paymentMethod: 'cash',
    status: 'completed',
    notes: 'Penjualan langsung',
    createdAt: '2024-01-13T09:15:00Z',
    updatedAt: '2024-01-13T09:15:00Z'
  },
  {
    id: '4',
    type: 'expense',
    amount: 8500000,
    description: 'Biaya listrik bulan Januari',
    date: '2024-01-12',
    category: 'Utility',
    factoryId: '2',
    factoryName: 'Pabrik Cabang Cikarang',
    reference: 'BL/2024/001',
    paymentMethod: 'transfer',
    status: 'completed',
    notes: 'Pembayaran tagihan PLN',
    createdAt: '2024-01-12T11:45:00Z',
    updatedAt: '2024-01-12T11:45:00Z'
  },
  {
    id: '5',
    type: 'income',
    amount: 96000000,
    description: 'Penjualan Cat Tembok ke PT. Properti Sejahtera',
    date: '2024-01-11',
    category: 'Penjualan Produk',
    factoryId: '2',
    factoryName: 'Pabrik Cabang Cikarang',
    productId: '3',
    productName: 'Cat Tembok Dulux',
    reference: 'INV/2024/003',
    paymentMethod: 'credit',
    status: 'pending',
    notes: 'Jatuh tempo 30 hari',
    createdAt: '2024-01-11T15:30:00Z',
    updatedAt: '2024-01-11T15:30:00Z'
  },
  {
    id: '6',
    type: 'expense',
    amount: 5600000,
    description: 'Gaji karyawan minggu ke-2',
    date: '2024-01-10',
    category: 'Gaji',
    factoryId: '1',
    factoryName: 'Pabrik Utama Sentul',
    reference: 'SL/2024/001',
    paymentMethod: 'transfer',
    status: 'completed',
    notes: 'Pembayaran gaji periode 1-10 Januari',
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-01-10T08:00:00Z'
  }
];

export const getDailyReports = (): DailyReport[] => {
  const reports: { [key: string]: DailyReport } = {};
  
  dummyTransactions.forEach(transaction => {
    const date = transaction.date;
    
    if (!reports[date]) {
      reports[date] = {
        date,
        totalIncome: 0,
        totalExpense: 0,
        transactions: []
      };
    }
    
    if (transaction.type === 'income') {
      reports[date].totalIncome += transaction.amount;
    } else {
      reports[date].totalExpense += transaction.amount;
    }
    
    reports[date].transactions.push(transaction);
  });
  
  return Object.values(reports).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getMonthlyReports = (): MonthlyReport[] => {
  const reports: { [key: string]: MonthlyReport } = {};
  
  dummyTransactions.forEach(transaction => {
    const date = new Date(transaction.date);
    const monthKey = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    const monthName = date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
    
    if (!reports[monthKey]) {
      reports[monthKey] = {
        month: monthName,
        year: date.getFullYear(),
        totalIncome: 0,
        totalExpense: 0,
        netProfit: 0,
        transactions: []
      };
    }
    
    if (transaction.type === 'income') {
      reports[monthKey].totalIncome += transaction.amount;
    } else {
      reports[monthKey].totalExpense += transaction.amount;
    }
    
    reports[monthKey].transactions.push(transaction);
    reports[monthKey].netProfit = reports[monthKey].totalIncome - reports[monthKey].totalExpense;
  });
  
  return Object.values(reports).sort((a, b) => 
    b.year - a.year || new Date(b.month).getTime() - new Date(a.month).getTime()
  );
};

// Utility functions
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};