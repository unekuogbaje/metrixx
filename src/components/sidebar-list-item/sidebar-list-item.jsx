import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Category } from '../../assets/Category.svg';
import { ReactComponent as Bag } from '../../assets/Bag.svg';
import { ReactComponent as User } from '../../assets/2 User.svg';
import { ReactComponent as Folder } from '../../assets/Folder.svg';
import { ReactComponent as Chat } from '../../assets/Chat.svg';
import { ReactComponent as Settings } from '../../assets/Setting.svg';
import { ReactComponent as Headphones } from '../../assets/fi_headphones.svg';
import { ReactComponent as Gift } from '../../assets/fi_gift.svg';
import { ReactComponent as Logout } from '../../assets/Logout.svg';

const iconComponents = {
  'bag': Bag,
  'user': User,
  'category': Category,
  'folder': Folder,
  'chat': Chat,
  'settings': Settings,
  'headphones': Headphones,
  'gift': Gift,
  'logout': Logout
}

const SidebarListItem = ({ iconName, caption, isCurrentPage, badgeCount, uRl }) => {
  const IconComponent = iconComponents[iconName]

    return (
      <Fragment>
        <div className={`flex rounded-lg py-4 px-5 gap-4 ${
          isCurrentPage === "true" 
          ? "bg-primaryBlue " 
          : "bg-transparent"}`}>
          <IconComponent/>
          {uRl === "present" ? (
            <Link className={``} to={"/conversations"}>{caption}</Link>) 
            : <Link to={""}>{caption}</Link>}
          {badgeCount && badgeCount >= 0 ? (
            <div className='rounded-full bg-badgeBG w-8 h-8'>
              <div className='text-xs mb-1 ml-1 px-2 py-2'>{badgeCount}</div>
            </div>
            ) : null}
        </div>
        <Outlet/>
      </Fragment>
    )
};

export default SidebarListItem;