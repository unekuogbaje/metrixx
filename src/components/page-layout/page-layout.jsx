import React from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';

const PageLayout = ({ children }) => {
    return (
        <div className='flex'>
          <Sidebar/>
          <Navbar 
          pageTitle='Dashboard'>
          </Navbar>
          { children }
      </div>
    )
};

export default PageLayout;