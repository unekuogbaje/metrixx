import React from "react";
import { Fragment } from "react";
import { ReactComponent as Home } from '../../assets/Home.svg';
import { ReactComponent as Bell } from '../../assets/Notification.svg';
import { ReactComponent as Profile } from '../../assets/profile 1.svg';
import MainDropdown from "../main-dropdown/main-dropdown";

const Navbar = () => {
    return (
      <Fragment>
        <div className="bg-white w-screen h-16">
          <div className="flex border-b-2 border-mainBG space-x-96">
            <p className="py-4 pl-5 text-md font-medium leading-normal text-contactBG">Dashboard</p>

            <div className="flex absolute top-3.5 right-5 gap-5">
              <div className="bg-badgeBG/50 rounded-lg"><MainDropdown title="Nanny's Shop"/></div>
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