import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div className="flex h-screen bg-home-bg bg-cover bg-center">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex-grow">
          {/* Add your main content here */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
