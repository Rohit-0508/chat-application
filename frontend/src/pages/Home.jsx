import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useSelector } from 'react-redux';
import GroupSidebar from '../components/groupSidebar/GroupSidebar';

const Home = () => {
  const activeComponent = useSelector((state) => state.sidebar.activeComponent);

  return (
    <div className="flex h-screen bg-home-bg bg-cover bg-center">
      <Sidebar />
      <div className='h-full'>
        {activeComponent == 'group' && <GroupSidebar />}
      </div>
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
