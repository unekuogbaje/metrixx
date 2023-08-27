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

const SidebarListItem = ({ iconName, caption, isCurrentPage, badgeCount, uRl, open }) => {
  const IconComponent = iconComponents[iconName]

    return (
      <Fragment>
        <div className={`flex rounded-lg py-4 px-5 gap-4 ${
          isCurrentPage === "true" 
          ? "bg-primaryBlue " 
          : "bg-transparent"}`}>
          <div className={`cursor-pointer ${!open ? "scale-75" : !open ? "" : "" }`}>
            <IconComponent/>
          </div>
          {uRl === "conversations" ? (
            <Link className={`transition-transform ${!open ? "scale-0" : "" } `} to={"/conversations"}>{caption}</Link>) 
            : uRl === "dashboard" ? (
              <Link  className={`transition-transform ${!open ? "scale-0" : "" } `} to={""}>{caption}</Link>) : <Link></Link> }
          {badgeCount && badgeCount >= 0 ? (
            <div className={`rounded-full bg-badgeBG w-6 h-6 ${!open ? "scale-0" : ""}`}>
              <div className='text-xs p-1'>{badgeCount}</div>
            </div>
            ) : null}
        </div>
        <Outlet/>
      </Fragment>
    )
};

export default SidebarListItem;


// <Link
// className={`transition-transform ${
//   uRl === "present" && !open ? "scale-0" : ""
// }`}
// to={uRl === "present" ? "/conversations" : ""}
// >
// {caption}
// </Link> 