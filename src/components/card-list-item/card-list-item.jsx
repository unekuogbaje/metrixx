import React from "react";
import { ReactComponent as Cardbag } from '../../assets/Cardbag.svg';
import { ReactComponent as Carduser } from '../../assets/Carduser.svg';
import { ReactComponent as Folder } from '../../assets/Folder.svg';
import { ReactComponent as Graph } from '../../assets/Graph.svg';
import { ReactComponent as Cart } from '../../assets/fi_shopping-cart.svg';
import { ReactComponent as Phone } from '../../assets/Phone.svg';
import MainDropdown from "../main-dropdown/main-dropdown";

const iconComponents = {
    'cardbag': Cardbag,
    'carduser': Carduser,
    'graph': Graph,
    'cart': Cart,
    'phone': Phone,
    'folder': Folder,
  }

const CardListItem = ({ 
    iconName, 
    firstCaption, 
    secondCaption, 
    thirdCaption, 
    firstFigures, 
    secondFigures, 
    thirdFigures, 
    firstPercentCount, 
    secondPercentCount, 
    calender }) => {
    const IconComponent = iconComponents[iconName];
    
    return (
        <div className="bg-white py-3 px-4 rounded-xl">
          <div className="flex space-x-20 justify-between">
            <IconComponent/>
            <MainDropdown 
            title="This Week"
            faded="true"
            />
          </div>
          <div className="flex space-x-10 py-6 pr-6">
          <div>
          <p className="flex text-zinc-400 font-light">{firstCaption}</p>
          <div className="flex space-x-2">
            <p>{firstFigures}</p>            
            <h1 className="mt-2 text-xs font-light text-lime-600">{firstPercentCount && `${firstPercentCount}%`}</h1>
          </div>
        </div>
            
            <div>
              <p className="flex text-zinc-400 font-light">{secondCaption}</p>
              <div className="flex space-x-2">
                <p>{secondFigures}</p>            
                <h1 className="mt-2 text-xs font-light text-lime-600">{secondPercentCount && `${secondPercentCount}%`}</h1>
              </div>
            </div>

            <div>
              <p className="text-zinc-400 font-light">{thirdCaption}</p>
              <p>{thirdFigures}</p>
            </div>
          </div>

        </div>
    )
};

export default CardListItem;