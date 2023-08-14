import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';

const Conversations = () => {
    return (
      <Fragment>
        <div className='flex'>
          
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