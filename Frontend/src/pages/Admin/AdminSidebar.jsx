import React from "react";
import { HiOutlineInformationCircle, HiOutlineChartBar } from "react-icons/hi"; // Import Daisy UI icons
import { GoSignOut } from "react-icons/go";
import { CiUser  } from "react-icons/ci";
import { IoCreateSharp } from "react-icons/io5";
import { MdGetApp } from "react-icons/md";


const AdminSidebar = ({ onComponentChange }) => {
  return (
    <div className="sidebar">
      <ul className="menu p-4 m-2 w-40 min-h-full bg-base-200 text-base-content">
        <li>
          <button
            className="flex items-center space-x-2"
            onClick={() => onComponentChange("adminprofile")}
          >
            <HiOutlineInformationCircle className="w-6 h-6" />{" "}
            <span>Admin Profile</span>
          </button>
        </li>
        <li>
          <button  
            className="flex items-center space-x-2"
            onClick={() => onComponentChange("CreateAdmin")}
          >
            <IoCreateSharp className="w-6 h-6" />{" "}
            <span>Create Admin</span>
          </button>
          <button
            className="flex items-center space-x-2"
            onClick={() => onComponentChange("GetAllAdmins")}
          >
            <MdGetApp className="w-6 h-6" />{" "}
            <span>Get all Admins</span>
          </button>
          <button
            className="flex items-center space-x-2"
            onClick={() => onComponentChange("GetAllUsers")}
          >
            <MdGetApp className="w-6 h-6" />{" "}
            <span>Get All users</span>
          </button>
          <button
            className="flex items-center space-x-2"
            onClick={() => onComponentChange("CreateUser")}
          >
            <IoCreateSharp className="w-6 h-6" />{" "}
            <span>Create User</span>
          </button>
          <button
            className="flex items-center space-x-2"
            onClick={() => onComponentChange("AdminSignout")}
          >
            <GoSignOut className="w-6 h-6" />{" "}
            <span>Sign Out</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
