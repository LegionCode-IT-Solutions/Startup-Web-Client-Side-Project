import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './store/authContext';
import Home from './pages/Home';
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
