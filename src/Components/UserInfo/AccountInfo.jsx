import React, { useState } from "react";
import userInfo from "../../Styles/UserInfo.module.css";
const AccountInfo = () => {
  const [isMale, setIsMale] = useState(null);
  return (
    <>
      {/* //'Email ==================================' */}
      <div className={userInfo.userDetials + " UserEmail"}>
        <div className={userInfo.lable + " "}>
          <label htmlFor="UserEmail" className=" text-muted">
            Email
          </label>
        </div>
        <div className={userInfo.Input + " "}>
          <input
            type="email"
            name="UserEmail"
            id="UserEmail"
            className="form-control"
            value={"abdonaser4223@gmail.com"}
            disabled
          />
        </div>
      </div>
      {/* //'FirstName ==================================' */}
      <div className={userInfo.userDetials + " UserFirstName"}>
        <div className={userInfo.lable + " "}>
          <label htmlFor="UserFirstName" className=" text-muted">
            First Name
          </label>
        </div>
        <div className={userInfo.Input + " "}>
          <input
            type="text"
            name="UserFirstName"
            id="UserFirstName"
            className="form-control"
            value={"Abdelrahman"}
          />
        </div>
      </div>
      {/* //'LastName ==================================' */}
      <div className={userInfo.userDetials + " UserLastName"}>
        <div className={userInfo.lable + " "}>
          <label htmlFor="UserLastName" className=" text-muted">
            Last Name
          </label>
        </div>
        <div className={userInfo.Input + " "}>
          <input
            type="text"
            name="UserLastName"
            id="UserLastName"
            className="form-control"
            value={"Naser"}
          />
        </div>
      </div>

      {/* //'Gender ==================================' */}
      <div className={userInfo.userDetials + " UserGender "}>
        <div className={userInfo.lable + " "}>
          <label htmlFor="UserGender" className=" text-muted">
            Gender
          </label>
        </div>
        <div className={userInfo.InputGender + " "}>
          <div
            className={
              userInfo.male +
              ` ${isMale == true ? userInfo.genderActive : ""}` +
              " form-control text-center"
            }
            onClick={() => {
              setIsMale(true);
            }}>
            Male
          </div>
          <div
            className={
              userInfo.female +
              ` ${isMale == false ? userInfo.genderActive : ""}` +
              " form-control text-center"
            }
            onClick={() => {
              setIsMale(false);
            }}>
            Female
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountInfo;
