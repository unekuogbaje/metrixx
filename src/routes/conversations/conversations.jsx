import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';

const Conversations = () => {
    return (
      <Fragment>
        <div className='flex'>
          <Sidebar/>
          <div>
            <Navbar 
              pageTitle='Conversations'>
            </Navbar>
          </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  };
  
  export default Conversations;