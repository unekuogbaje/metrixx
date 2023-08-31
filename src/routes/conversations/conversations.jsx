import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import ChatListCard from '../../components/chat-list-card/chat-list-card';
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
            <div className='flex justify-between'>
              <p className='text-contactBG px-6 py-1 mt-10 left-0'>Conversations with customers</p>
              <Button className='bg-primaryBlue text-sm font-light text-white px-6 py-1 mt-10'>New Message</Button>
            </div>
            <div className='pt-4 w-fit'>
              <ChatListCard/>
            </div>
          </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  };
  
  export default Conversations;