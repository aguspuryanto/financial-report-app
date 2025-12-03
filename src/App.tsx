// // src/App.tsx
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import DashboardLayout from './components/layout/DashboardLayout'
// import DashboardPage from './pages/dashboard/DashboardPage'
// import ProfilePage from './pages/profile/ProfilePage'
// import LoginPage from './pages/auth/LoginPage'

// // Protected Route Component
// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const isAuthenticated = localStorage.getItem('isAuthenticated') || sessionStorage.getItem('isAuthenticated')
//   return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<Navigate to="/dashboard" replace />} />
//           <Route path="dashboard" element={<DashboardPage />} />
//           <Route path="profile" element={<ProfilePage />} />
//         </Route>
//       </Routes>
//     </Router>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import FactoriesPage from './pages/FactoriesPage';
import ProductsPage from './pages/ProductsPage';
import TransactionsPage from './pages/TransactionsPage';
import ReportsPage from './pages/ReportsPage';
import PrintPage from './pages/PrintPage';
import SettingsPage from './pages/SettingsPage';
import Layout from './components/layout/Layout';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/factories" element={<FactoriesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/print" element={<PrintPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;