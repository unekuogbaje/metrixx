import React from "react";
import { ReactComponent as BlackPhone } from '../../assets/Phone-black.svg';
import { ReactComponent as GoldPhone } from '../../assets/Phone.svg';

const iconComponents = {
    'goldphone': GoldPhone,
    'blackphone': BlackPhone
  }

const RecentOrderItems = ({
  topTitle, 
  iconName,
  item,
  quantity,
  date,
  status,
  statusBg,
}) => {
    const IconComponent = iconComponents[iconName];
    return (
      <div className="flex-row">
        <p>{topTitle}</p>
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

export default RecentOrderItems;