import React from "react";
import FirstCardItem from "../first-card-item/first-card-item";
import SecondCardItem from "../second-card-item/second-card-item";
import ThirdCradItem from "../third-card-item/third-card-item";

const CardContainer = () => {
  return (
    <div className="flex-row">
      <div className="flex pt-10 pb-5 px-5 space-x-5">
        <FirstCardItem
        iconName="graph"
        firstCaption="Sales" 
        secondCaption="Volume"
        firstFigures="₦4,000,000.00"
        secondFigures="450"
        secondPercentCount="+20.00"
        withCalendar="true"
        redCaption="gray"        
        />

        <FirstCardItem
        iconName="carduser"
        firstCaption="Customers"
        secondCaption="Active"
        firstFigures="1,250"
        secondFigures="1,180"
        secondPercentCount="85"
        firstPercentCount="+15.80"
        withCalendar="true"
        redCaption="gray"     
        />

        <FirstCardItem
        iconName="cardbag"
        firstCaption="Customers"
        secondCaption="Pending"
        thirdCaption="Completed"
        firstFigures="450"
        secondFigures="5"
        thirdFigures="445"
        withCalendar="true"
        redCaption="gray"    
        />
      </div>

      <div className="flex pb-1.5 px-5 space-x-5">
        <div className="space-y-2">
          <SecondCardItem
          topTitle="Martketing"
          iconName="piechart"
          action1="Acquisition"
          action2="Purchase"
          action3="Retention"
          withCalendar="true"
          withChart="true"
          withActions="true"
          />

          <FirstCardItem
          iconName="cardbag"
          firstCaption="Customers"
          secondCaption="Pending"
          thirdCaption="Completed"
          firstFigures="450"
          secondFigures="5"
          thirdFigures="445"
          withCalendar="true"
          redCaption="gray"    
          />
        </div>


        <div className="space-y-3">
          <FirstCardItem
          iconName="whitefolder"
          firstCaption="All Products"
          secondCaption="Active"
          firstFigures="45"
          secondFigures="32"
          secondPercentCount="+24"
          blueBackground="true"
          redCaption="false"
          backgroundBlue="true"     
          />

          <FirstCardItem
          iconName="cart"
          firstCaption="Abandoned Cart"
          secondCaption="Customers"
          firstFigures="20%"
          secondFigures="30"
          firstPercentCount="+0.00"
          redCaption="true"
          withCalendar="true"     
          />
        </div>

        <ThirdCradItem/>
      </div>
    </div>
  )
};

export default CardContainer;