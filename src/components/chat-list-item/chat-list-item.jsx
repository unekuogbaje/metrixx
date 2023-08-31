import React from "react";
import { ReactComponent as Kunle } from '../../assets/kunle.svg';
import { ReactComponent as Janet } from '../../assets/janet.svg';
import { ReactComponent as Jane } from '../../assets/jane.svg';
import { Search, Circle } from "react-feather";

const iconComponents = {
    'jane': Jane,
    'janet': Janet,
    'kunle': Kunle
  }

const ChatListItem = ({
  topTitle, 
  iconName,
  onlineStatus,
  statusBg,
  chatCount,
  name,
  status,
  badgeCount,
  message,
  time,
  withSearch,
  topDisplay
}) => {
    const IconComponent = iconComponents[iconName];
    return (
      <div className="flex-row">
        <div className="flex justify-between">
          <p className="text-contactBG">{topTitle}</p>
          <p className="text-gray-400">{chatCount}</p>
        </div>
        {withSearch === "yes"
        ? (<div className="flex relative py-6">
        <Search className="text-contactBG absolute mt-2 ml-2"/>
        <input class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-secondaryBlue focus:ring-primaryBlue focus:ring-1 sm:text-sm" placeholder="Search" type="text" name="search"/>
      </div>) : null}
        <div className="flex border-b border-mainBG">
        <div className="flex px-2 py-2 relative">
          <Circle className={`absolute rounded-full text-white right-2 ${
            onlineStatus === "active" 
            ? "bg-primaryBlue"
            : "bg-secondaryBlue "
          }`} size={12}/>
          <IconComponent/>
        </div>
        
        <div className="flex-row px-3 py-1 space-y-2">
          <p className="font-medium text-zinc-600 text-sm">{name}</p>
          <p className="font-light text-zinc-400 text-xs">{message}</p>
        </div>

        <div className="flex-row px-3 py-1 space-y-2">
          {topDisplay === "online-status"
          ? (<button className={`rounded-lg font-light px-3 text-xs ${
            statusBg === "lemon" 
            ? "bg-statusLemon" 
            : "bg-lime-100 text-lime-700"
          }`}>{status}</button>) 
          : topDisplay === "badge-count"
          ? (<button className="rounded-full bg-badgeBG text-xs w-4 h-4 ml-8">{badgeCount}</button>)
          : null}
          <p className="text-zinc-400 text-xs">{time}</p>
        </div>
      </div>
    </div>
    )
}

export default ChatListItem;