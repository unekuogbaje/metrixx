import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import ThirdCradItem from '../../components/third-card-item/third-card-item';
import { Button } from 'antd';

const Conversations = () => {
    return (
      <Fragment>
        <div className='flex'>
          <Sidebar/>
          <div className='flex-row space-x-4'>
            <Navbar 
              pageTitle='Conversations'>
            </Navbar>
            <div className='flex'>
              <p className='text-contactBG px-6 py-1 mt-10 left-0'>Conversations with custoers</p>
              <Button className='bg-primaryBlue text-sm font-light text-white px-6 py-1 mt-10'>New Message</Button>
            </div>
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