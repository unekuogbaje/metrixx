import Dashboard from "../dashboard/dashboard";
import Conversations from "../conversations/conversations";

const PageLayout = () => {
    return (
      <div className='w-screen'>
        <Dashboard/>
        <Conversations/>
      </div>
    )
};

export default PageLayout;