import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import CardContainer from '../card-container/card-container';


const PageLayout = () => {
    return (
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
    )
};

export default PageLayout;