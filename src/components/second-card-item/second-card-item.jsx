import React from "react";
import { ReactComponent as PieChart } from '../../assets/Pie-chart.svg';
import { 
  Circle
} from 'react-feather';

import MainDropdown from "../main-dropdown/main-dropdown";

const iconComponents = {
    'piechart': PieChart,
  }

const SecondCardItem = ({
  topTitle, 
  chart,
  action1,
  action2,
  action3
}) => {
  const IconComponent = iconComponents[chart];
    return (
        <div className="py-3 px-4 rounded-xl bg-white space-y-3">
          <div className="flex space-x-20 justify-between">
            <p className="text-zinc-600">{topTitle}</p>
            <MainDropdown
            title="This Week"
            faded="true"
            />
          </div>

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
          
          <div className="px-12 py-3">
            <IconComponent/>
          </div>
        </div>
    )
};

export default SecondCardItem;