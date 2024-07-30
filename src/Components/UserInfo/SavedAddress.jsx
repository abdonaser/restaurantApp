import React from "react";
import userInfo from "../../Styles/UserInfo.module.css";
const SavedAddress = () => {
  return (
    <>
      <div className="container">
        {/* //' Countery/region ==================================' */}
        <div className={userInfo.userDetials + " country"}>
          <div className={userInfo.lable + " "}>
            <label htmlFor="country" className=" text-muted">
              Countery/region
            </label>
          </div>
          <div className={userInfo.Input + " "}>
            <select class="form-select " id="country">
              <option value="1" selected>
                Egypt
              </option>
              <option value="2">Saudi Arabia</option>
              <option value="3">Emirate</option>
            </select>
          </div>
        </div>

        {/* //'MObile Number ==================================' */}
        <div className={userInfo.userDetials + " mobileNumber"}>
          <div className={userInfo.lable + " "}>
            <label htmlFor="mobileNumber" className=" text-muted">
              Mobile number
            </label>
          </div>
          <div className={userInfo.Input + " "}>
            <input
              type="tel"
              name="mobileNumber"
              id="mobileNumber"
              className="form-control"
            />
          </div>
        </div>

        {/* //'StreetName ==================================' */}
        <div className={userInfo.userDetials + " streetName"}>
          <div className={userInfo.lable + " "}>
            <label htmlFor="streetName" className=" text-muted">
              Street Name
            </label>
          </div>
          <div className={userInfo.Input + " "}>
            <input
              type="text"
              name="streetName"
              id="streetName"
              className="form-control"
            />
          </div>
        </div>

        {/* //'City/Area ==================================' */}
        <div className={userInfo.userDetials + " city"}>
          <div className={userInfo.lable + " "}>
            <label htmlFor="city" className=" text-muted">
              City/Area
            </label>
          </div>
          <div className={userInfo.Input + " "}>
            <input type="text" name="city" id="city" className="form-control" />
          </div>
        </div>

        {/* //'Nearest Landmark ==================================' */}
        <div className={userInfo.userDetials + " nearestLandmark"}>
          <div className={userInfo.lable + " "}>
            <label htmlFor="nearestLandmark" className=" text-muted">
              Nearest Landmark
            </label>
          </div>
          <div className={userInfo.Input + " "}>
            <input
              type="text"
              name="nearestLandmark"
              id="nearestLandmark"
              className="form-control"
            />
          </div>
        </div>

        {/* //'Update Data ==================================' */}
        <div className={userInfo.userDetials + " updateData p-3"}>
          <button className="btn btn-success ms-auto px-5 py-2">
            Save Address
          </button>
        </div>
      </div>
    </>
  );
};

export default SavedAddress;
