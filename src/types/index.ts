export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  avatar?: string;
  createdAt: string;
}

export interface Factory {
  id: string;
  name: string;
  code: string;
  address: string;
  phone: string;
  manager: string;
  email?: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  factoryId: string;
  factoryName?: string;
  price: number;
  cost: number;
  unit: string;
  stock: number;
  minStock: number;
  category: string;
  description?: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  date: string;
  category: string;
  factoryId?: string;
  factoryName?: string;
  productId?: string;
  productName?: string;
  reference?: string;
  paymentMethod: 'cash' | 'transfer' | 'credit';
  status: 'completed' | 'pending' | 'cancelled';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DailyReport {
  date: string;
  totalIncome: number;
  totalExpense: number;
  transactions: Transaction[];
}

export interface MonthlyReport {
  month: string;
  year: number;
  totalIncome: number;
  totalExpense: number;
  netProfit: number;
  transactions: Transaction[];
}

export interface Invoice {
  id: string;
  transactionId: string;
  number: string;
  date: string;
  customerName?: string;
  customerAddress?: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  notes?: string;
  status: 'paid' | 'unpaid';
  createdAt: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
  total: number;
}