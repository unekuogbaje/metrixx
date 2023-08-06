import React from "react";
import { ReactComponent as PieChart } from '../../assets/Pie-chart.svg';
import { ReactComponent as BlackPhone } from '../../assets/Phone-black.svg';
import { ReactComponent as GoldPhone } from '../../assets/Phone.svg'
import { 
  Circle
} from 'react-feather';

import MainDropdown from "../main-dropdown/main-dropdown";

const iconComponents = {
    'piechart': PieChart,
    'goldphone': GoldPhone,
    'blackphone': BlackPhone
  }

const SecondCardItem = ({
  topTitle, 
  iconName,
  action1,
  action2,
  action3,
  item,
  quantity,
  date,
  status,
  statusBg,
  withCalendar,
  withChart,
  withActions
}) => {
  const IconComponent = iconComponents[iconName];
    return (
        <div className="py-4 px-6 rounded-xl bg-white space-y-3">
          <div className="flex space-x-20 justify-between">
            <p className="text-zinc-600">{topTitle}</p>
            {withCalendar === "true" ? (
              <MainDropdown 
              title="This Week"
              faded="true"
              /> ) : null}
          </div>
          
          {withActions === "true" ? (
          <div className="flex justify-between">
            <span className="flex gap-2">
              <Circle className="bg-primaryBlue rounded-full text-primaryBlue" size={8}/>
              <h1 className= "text-zinc-400 text-xs">{action1}</h1>
            </span>

            <span className="flex gap-2">
              <Circle className="bg-secondaryBlue rounded-full text-secondaryBlue" size={8}/>
              <h1 className= "text-zinc-400 text-xs">{action2}</h1>
            </span>

            <span className="flex gap-2">
              <Circle className="bg-badgeBG rounded-full text-badgeBG" size={8}/>
              <h1 className= "text-zinc-400 text-xs">{action3}</h1>
            </span>
          </div>
          ) : null}
          
          
          {withChart === "true" ? (
            <div className="px-12 py-3">
              <IconComponent/>
            </div>
          )
        : <div className="flex border-b border-mainBG">
            <div className="px-2 py-2">
              <IconComponent/>
            </div>

            <div className="flex-row px-3 py-3 space-y-2">
              <p className="font-light text-zinc-600 text-md">{item}</p>
              <p className="font-medium text-zinc-700 text-md">{quantity}</p>
            </div>

            <div className="flex-row px-3 py-3 space-y-2">
              <p className="text-zinc-400 text-sm">{date}</p>
              <button className={`rounded-lg font-light px-4 text-red-500 text-sm ${
                statusBg === "red" 
                ? "bg-red-100" 
                : "bg-lime-300"
              }`}>{status}</button>
            </div>
          </div>}
          
        </div>
    )
};

export default SecondCardItem;