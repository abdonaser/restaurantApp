import React, { useEffect, useState } from "react";
import userInfo from "../../Styles/UserInfo.module.css";
import { useDispatch, useSelector } from "react-redux";

const AccountInfo = () => {
  //!===========================================Start Receive Data

  const userInforamtion = useSelector((state) => {
    return state.userInfoStore.userInfo;
  });
  // {userName: "",userPhone: "",gender: "",userEmail: "",dateOfBirth: "", userPassword: "",}
  console.log(userInforamtion);

  //!===========================================End
  const [isMale, setIsMale] = useState(null);
 

  useEffect(() => {
    if (userInforamtion.gender == "female") {
      setIsMale(false);
    } else if (userInforamtion.gender == "male") {
      setIsMale(true);
    }
  }, []);
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
              value={userInforamtion.userEmail}
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
              value={userInforamtion.userName?.split(" ")[0]}
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
              value={userInforamtion.userName?.split(" ")[1]}
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

        {/* //'Phone number ==================================' */}
        <div className={userInfo.userDetials + " userPhone "}>
          <div className={userInfo.lable + " "}>
            <label htmlFor="userPhone" className=" text-muted">
              Phone Number
            </label>
          </div>
          <div className={userInfo.Input + " "}>
            <input
              type="tel"
              name="userPhone"
              id="userPhone"
              className="form-control"
              value={userInforamtion.userPhone}
            />
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
              value={userInforamtion.dateOfBirth}
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
