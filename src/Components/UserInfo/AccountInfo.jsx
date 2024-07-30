import React, { useState } from "react";
import userInfo from "../../Styles/UserInfo.module.css";
const AccountInfo = () => {
  const [isMale, setIsMale] = useState(null);
  return (
    <>
      <div className="container">
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

        {/* //'DAte OF Birth ==================================' */}
        <div className={userInfo.userDetials + " userDateBirth "}>
          <div className={userInfo.lable + " "}>
            <label htmlFor="userBirthDate" className=" text-muted">
              Date Of Birth
            </label>
          </div>
          <div className={userInfo.Input + " "}>
            <input
              type="date"
              name="userBirthDate"
              id="userBirthDate"
              className="form-control"
              // value="1998-11-25"
            />
          </div>
        </div>

        {/* //'Update Data ==================================' */}
        <div className={userInfo.userDetials + " updateData p-3"}>
          <button className="btn btn-success ms-auto px-5 py-2">Update</button>
        </div>
      </div>
    </>
  );
};

export default AccountInfo;
