import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import SidebarListItem from '../sidebar-list-item/sidebar-list-item';
import { 
  ChevronLeft,
  ChevronRight,
} from 'react-feather';

const Sidebar = () => {
    return (
      <Fragment>
      <div className='w-72 px-8 h-screen bg-white relative'>
        <Link className='h-12.5 w-28 mt-3.5' to='/'>
          <Logo/>
        </Link>

        <div className='pt-16 font-light text-sm text-zinc-700 gap-6'>
          <div className='text-white'>
            <SidebarListItem 
            iconName='category'
            caption='Dashboard'
            isCurrentPage='true'
            uRl={"absent"}
          />
          </div>

          <SidebarListItem
          iconName='folder'
          caption='Orders'
          badgeCount='3'
          />

          <SidebarListItem
          iconName='user'
          caption='User'
          />

          <SidebarListItem
          iconName='folder'
          caption='Inventory'
          />

          <SidebarListItem
          iconName='chat'
          caption='Conversations'
          badgeCount='16'
          uRl={"present"}
          />

          <SidebarListItem
          iconName='settings'
          caption='Settings'

          />
          <div className='bottom-0'><ChevronLeft/></div>
        </div>

        <div className='absolute bottom-0 font-light text-sm text-zinc-700'>
          <div className='bg-contactBG/50 py-0 pl-4 mb-2 rounded-lg '>
            <SidebarListItem
            iconName='headphones'
            caption='Contact Support'
            />
          </div>

          <div className='bg-badgeBG/50 rounded-lg'>
            <SidebarListItem
            iconName='gift'
            caption='Free Gift Awaits You!'
            />
          
            <div className='flex ml-6 text-xs gap-3.5'>
              <p>Upgrade your account</p>
              <ChevronRight size={18}/>
            </div>
          </div>

          <div className='text-statusRed font-thin text-sm'>
            <SidebarListItem
            iconName='logout'
            caption='Logout'
            />
          </div>
        </div>

      </div>
      <Outlet/>
      </Fragment>
    )
}

export default Sidebar;