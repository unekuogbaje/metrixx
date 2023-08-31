import { Fragment, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import SidebarListItem from '../sidebar-list-item/sidebar-list-item';
import { 
  ArrowLeft,
  ArrowRight,
  ChevronRight,
} from 'react-feather';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

    return (
      <Fragment>
      <div className={`bg-white h-screen px-8 ${open 
        ? "w-72" 
        : "w-28"} duration-300 relative`}>
        <Link className='h-12.5 w-28 mt-3.5' to='/'>
          <Logo/>
        </Link>

        <div className='pt-16 font-light text-sm text-zinc-700 gap-6 relative'>
          <div className='text-white'>
            <SidebarListItem 
            iconName='category'
            caption='Dashboard'
            isCurrentPage='true'
            uRl={"dashboard"}
            open={open}
          />
          </div>

          <SidebarListItem
          iconName='folder'
          caption='Orders'
          badgeCount='03'
          uRl={"dashboard"}
          open={open}
          />

          <SidebarListItem
          iconName='user'
          caption='User'
          uRl={"dashboard"}
          open={open}
          />

          <SidebarListItem
          iconName='folder'
          caption='Inventory'
          uRl={"dashboard"}
          open={open}
          />

          <SidebarListItem
          iconName='chat'
          caption='Conversations'
          badgeCount='16'
          uRl={"conversations"}
          open={open}

          />

          <SidebarListItem
          iconName='settings'
          caption='Settings'
          uRl={"dashboard"}
          open={open}

          />
          
          {open ? <ArrowLeft className='bottom-0 bg-primaryBlue text-white font-semibold rounded-full w-8 h-8 p-1 text-sm absolute top-[444px] -right-11 animate-bounce border-4 border-white cursor-pointer' 
          onClick={() => setOpen(!open)}/> : <ArrowRight className='bottom-0 bg-primaryBlue text-white font-semibold rounded-full w-8 h-8 p-1 text-sm absolute top-[444px] -right-11 animate-bounce border-4 border-white cursor-pointer'
          onClick={() => setOpen(!open)}/>}
          
        </div>

        <div className={`absolute bottom-0 font-light text-sm text-zinc-700`}>
          <div className={`bg-contactBG/50 py-0 pl-4 mb-2 rounded-lg ${!open ? "bg-transparent pl-0" : "" }`}>
            <SidebarListItem
            iconName='headphones'
            caption='Contact Support'
            uRl={"dashboard"}
            open={open}
            />
          </div>

          <div className={`bg-badgeBG/50 rounded-lg ${!open ? "bg-transparent" : "" }`}>
            <SidebarListItem
            iconName='gift'
            caption='Free Gift Awaits You!'
            uRl={"dashboard"}
            open={open}
            />
          
            <div className={`flex ml-6 text-xs gap-3.5 ${!open ? "scale-0" : "" }`}>
              <p>Upgrade your account</p>
              <ChevronRight size={18}/>
            </div>
          </div>

          <div className='text-statusRed font-thin text-sm'>
            <SidebarListItem
            iconName='logout'
            caption='Logout'
            uRl={"dashboard"}
            open={open}
            />
          </div>
        </div>

      </div>
      <Outlet/>
      </Fragment>
    )
}

export default Sidebar;