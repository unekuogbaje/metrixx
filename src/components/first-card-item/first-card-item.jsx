import React from "react";
import { ReactComponent as Cardbag } from '../../assets/Cardbag.svg';
import { ReactComponent as Carduser } from '../../assets/Carduser.svg';
import { ReactComponent as Folder } from '../../assets/Folder.svg';
import { ReactComponent as Graph } from '../../assets/Graph.svg';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import { ReactComponent as Phone } from '../../assets/Phone.svg';
import { ReactComponent as Whitefolder } from '../../assets/Whitefolder.svg'
import MainDropdown from "../main-dropdown/main-dropdown";

const iconComponents = {
    'cardbag': Cardbag,
    'carduser': Carduser,
    'graph': Graph,
    'cart': Cart,
    'phone': Phone,
    'folder': Folder,
    'whitefolder': Whitefolder,
  }

const FirstCardItem = ({ 
    iconName,
    firstCaption, 
    secondCaption, 
    thirdCaption, 
    firstFigures, 
    secondFigures, 
    thirdFigures, 
    firstPercentCount, 
    secondPercentCount, 
    redCaption,
    blueBackground,
    backgroundBlue,
    withCalender
    }) => {
    const IconComponent = iconComponents[iconName];
    
    return (
      <div className={`py-3 px-4 rounded-xl ${
        blueBackground === "true" 
        ? "bg-primaryBlue" 
        : "bg-white"}`}>
        <div className="flex space-x-20 justify-between">
          <IconComponent/>
          {withCalender === "true" ? (
            <MainDropdown 
            title="This Week"
            faded="true"
            /> ) : null}
        </div>

        <div className="flex space-x-10 py-6 pr-6">
          <div className="px-2">
            <p className={`flex text-xs font-light ${
            redCaption === "true" 
            ? "text-statusRed" 
            : redCaption === "false" 
            ? "text-white" 
            : redCaption === "gray" 
            ? "text-zinc-400" 
            : null}`}>
            {firstCaption}
            </p>
            <div className="flex space-x-2">
              <p className= {`${blueBackground === "true" ? "text-white" : "text-zinc-800"}`}>{firstFigures}</p>            
              <h1 className="mt-2 text-xs font-light text-lime-600">
                {firstPercentCount && `${firstPercentCount}%`}
              </h1>
            </div>
          </div>
            
          <div>
            <p className={`flex text-xs font-light ${
              blueBackground === "true" 
              ? "text-white" 
              : "text-zinc-400"}`}>{
              secondCaption}
            </p>
            <div className="flex space-x-2">
              <p className= {`${blueBackground === "true" ? "text-white" : "text-zinc-800"}`}>{secondFigures}</p>            
              <h1 className={`mt-2 text-xs font-light ${
                backgroundBlue === "true" 
                ? "text-white" 
                : "text-lime-600"}`}>
                {secondPercentCount && `${secondPercentCount}%`}
              </h1>
            </div>
          </div>

          <div>
            <p className="text-zinc-400 text-xs font-light">{thirdCaption}</p>
            <p>{thirdFigures}</p>
          </div>
        </div>
      </div>
    )
};

export default FirstCardItem;