import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import CardContainer from '../../components/card-container/card-container';

const Dashboard = () => {
  return (
    <Fragment>
      <div className='flex'>
          <Sidebar/>
        <div>
          <Navbar 
            pageTitle='Dashboard'>
          </Navbar>
          <div>
            <CardContainer/>
          </div>
        </div>
    </div>
    <Outlet/>
    </Fragment>
  )
};

export default Dashboard;