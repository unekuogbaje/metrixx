import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import ThirdCradItem from '../../components/third-card-item/third-card-item';

const Conversations = () => {
    return (
      <Fragment>
        <div className='flex'>
          <Sidebar/>
          <div className='flex-row space-x-4'>
            <Navbar 
              pageTitle='Conversations'>
            </Navbar>
            <div className='pt-10 w-fit'>
              <ThirdCradItem/>
            </div>
          </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  };
  
  export default Conversations;