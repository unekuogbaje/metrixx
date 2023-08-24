import React from "react";
import { ReactComponent as BlackPhone } from '../../assets/Phone-black.svg';
import { ReactComponent as GoldPhone } from '../../assets/Phone.svg';
import { Search } from "react-feather";

const iconComponents = {
    'goldphone': GoldPhone,
    'blackphone': BlackPhone
  }

const ChatListItem = ({
  topTitle, 
  iconName,
  item,
  quantity,
  date,
  status,
  statusBg,
  chatCount
}) => {
    const IconComponent = iconComponents[iconName];
    return (
      <div className="flex-row">
        <div className="flex">
          <p>{topTitle}</p>
          <p className="text-gray-400">{chatCount}</p>
        </div>
        <div className="flex relative py-6">
          <Search className="text-contactBG absolute "/>
          <input class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search" type="text" name="search"/>
        </div>
        <div className="flex border-b border-mainBG">
        <div className="px-2 py-2">
          <IconComponent/>
        </div>
        
        <div className="flex-row px-3 py-1 space-y-2">
          <p className="font-light text-zinc-600 text-xs">{item}</p>
          <p className="font-medium text-zinc-700 text-xs">{quantity}</p>
        </div>

        <div className="flex-row px-3 py-3 space-y-2">
          <p className="text-zinc-400 text-xs">{date}</p>
          <button className={`rounded-lg font-thin px-3 text-xs ${
            statusBg === "red" 
            ? "bg-red-100 text-red-700" 
            : "bg-lime-100 text-lime-700"
          }`}>{status}</button>
        </div>
      </div>
    </div>
    )
}

export default ChatListItem;