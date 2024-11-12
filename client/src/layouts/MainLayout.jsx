import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => (
  <div>
    <Navbar />
    <main className="p-4">{children}</main>
    <Footer/>
  </div>
);

export default MainLayout;
