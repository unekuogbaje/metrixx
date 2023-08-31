import React from "react";
import { ReactComponent as Home } from '../../assets/Home.svg';
import { ReactComponent as Bell } from '../../assets/Notification.svg';
import { ReactComponent as Profile } from '../../assets/profile 1.svg';
import MainDropdown from "../main-dropdown/main-dropdown";

const Navbar = ({pageTitle}) => {
    return (
        <div className="bg-white w-screen h-14">
          <div className="flex border-b border-mainBG">
            {pageTitle === "Dashboard" 
            ? ( <p className="py-4 pl-5 text-md font-medium leading-normal text-contactBG">Dashboard</p> )
            : pageTitle === "Conversations" 
            ? ( <p className="py-4 pl-5 text-md font-medium leading-normal text-contactBG">Conversations</p> ) 
            : null}

            <div className="flex absolute top-3.5 right-5 gap-5">
              <div className="bg-badgeBG/50 rounded-lg">
                <MainDropdown title="Nanny's Shop"/>
              </div>
              <Bell/>
              <Profile/>
            </div>
          </div>
          <div className="flex h-6 bg-white py-1 px-5">
            <Home/>
            {pageTitle === "Conversations" 
            ? ( <p className="ml-2 mb-4 text-sm font-light text-gray-400">/  Conversations</p> )
            : null}
          </div>
        </div>
    )
}

export default Navbar;