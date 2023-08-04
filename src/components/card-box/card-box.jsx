import React from "react";
import CardListItem from "../card-list-item/card-list-item";

const CardBox = () => {
  return (
    <div className="flex pt-10 pb-5 px-5 space-x-5">
      <div className="">
        <CardListItem
        iconName="graph"
        firstCaption="Sales" 
        secondCaption="Volume"
        firstFigures="₦4,000,000.00"
        secondFigures="450"
        secondPercentCount="+20.00"        
        ></CardListItem>
      </div>

      <div className="">
        <CardListItem
        iconName="carduser"
        firstCaption="Customers"
        secondCaption="Active"
        firstFigures="1,250"
        secondFigures="1,180"
        secondPercentCount="85"
        firstPercentCount="+15.80"     
        />
      </div>

      <div className="">
      <CardListItem
      iconName="cardbag"
      firstCaption="Customers"
      secondCaption="Active"
      thirdCaption="Completed"
      firstFigures="450"
      secondFigures="5"
      thirdFigures="445"    
      />
    </div>
    </div>
  )
};

export default CardBox;