import React, { useState } from "react";
import userInfo from "../Styles/UserInfo.module.css";
import AccountInfo from "../Components/UserInfo/AccountInfo";

import { Link, Outlet } from "react-router-dom";

import Navbar from "../Components/NavBar";

// className={userInfo.userInfo + " "}
const UserInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Navbar />
      <h1 className={userInfo.head + " mt-5 pt-5"}>My Account</h1>
      <div className={userInfo.container + " "}>
        <div className={userInfo.leftSection + "  "}>
          <ul>
            <Link to={"/profile/accountInfo"}>
              <li
                className={
                  userInfo.listItem +
                  ` ${0 === activeIndex ? userInfo.active : ""}`
                }
                onClick={() => setActiveIndex(0)}>
                Account Info
              </li>
            </Link>
            <Link to={"savedAddress"}>
              <li
                className={
                  userInfo.listItem +
                  ` ${1 === activeIndex ? userInfo.active : ""}`
                }
                onClick={() => setActiveIndex(1)}>
                Saved Address
              </li>
            </Link>
            <Link to={"userOrders"}>
              <li
                className={
                  userInfo.listItem +
                  ` ${2 === activeIndex ? userInfo.active : ""}`
                }
                onClick={() => setActiveIndex(2)}>
                My Orders
              </li>
            </Link>

            {/* <li
              className={
                userInfo.listItem +
                ` ${3 == activeIndex ? userInfo.active : ""}`
              }
              onClick={() => setActiveIndex(3)}>
              <a>Previous Order</a>
            </li> */}
          </ul>
        </div>

        <div className={userInfo.rightSection + "   "}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserInfo;
