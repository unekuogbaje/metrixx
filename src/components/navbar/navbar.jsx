import React from "react";
import { Fragment } from "react";
import { ReactComponent as Home } from '../../assets/Home.svg';
import { ReactComponent as Bell } from '../../assets/Notification.svg';
import { ReactComponent as Profile } from '../../assets/profile 1.svg';
import DropDown from "../dropdown/dropdown";

const options = ["Nanny's Shop", "Diddy's Makeover", "Ben's Beans", "Noir Restaurant"];

const Navbar = () => {
  const handleSelect = (selectedValue) => console.log(selectedValue);
    return (
      <Fragment>
        <div className="bg-white w-screen h-16 relative">
          <div className="flex border-b-2 border-mainBG space-x-96">
            <p className="py-4 pl-5 text-md font-medium leading-normal text-contactBG">Dashboard</p>

            <div className="flex absolute top-3.5 right-5 gap-5">
              <div className="bg-badgeBG/50 py-1 px-3 rounded-lg gap-2.5 w-36 text-sm text-gray-800 font-light">
                <DropDown options={options} handleSelect={handleSelect} />
              </div>
              <Bell/>
              <Profile/>
          </div>
          </div>
          <div className="h-6 bg-white py-1 px-5"><Home/></div>
        </div>
      </Fragment>
    )
}

export default Navbar;