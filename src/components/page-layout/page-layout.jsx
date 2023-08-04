import React, {Fragment} from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import MainFrame from '../main-frame/main-frame';

const PageLayout = ({ children }) => {
    return (
      <Fragment>
      <div className='flex'>
        <Sidebar/>
        <div className='flex-col'>
          <Navbar 
            pageTitle='Dashboard'>
          </Navbar>
          <div className=''>
            <MainFrame/>
          </div>
        </div>
        { children }
      </div>
      </Fragment>
    )
};

export default PageLayout;