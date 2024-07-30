import React from "react";
import userInfo from "../../Styles/UserInfo.module.css";
const UserOrders = () => {
  return (
    <>
      <div className="container">
        <div className={userInfo.orderCart + " cart   rounded-5  p-3 mb-4"}>
          <div className="restaurantName ">
            <h4 className={userInfo.resName + "   fw-bold text-capitalize"}>
              Hala Restaurant{" "}
            </h4>
          </div>
          <div className="cartitems p-2">
            <div
              className={userInfo.cardItem + " cartItem mb-2 d-flex ms-auto"}>
              <div className={userInfo.itemImageContainer + "  itemImage"}>
                <img
                  src="../../../public/Images/LogPageImage/meal-1.jpg"
                  className=" "
                  alt=""
                />
              </div>
              <div
                className={
                  userInfo.itemDetails +
                  " itemDetails d-flex  justify-content-between w-100 align-items-center"
                }>
                <div className="itemDescription">
                  <h5 className="fw-medium fs-4">Pizza</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate.
                  </p>
                </div>
                <div className="itemPrice">
                  <h5 className={userInfo.itemPrice + " "}>$180</h5>
                </div>
              </div>
            </div>
            <div
              className={userInfo.cardItem + " cartItem mb-2 d-flex ms-auto"}>
              <div className={userInfo.itemImageContainer + "  itemImage"}>
                <img
                  src="../../../public/Images/LogPageImage/meal-2.jpg"
                  className=" "
                  alt=""
                />
              </div>
              <div
                className={
                  userInfo.itemDetails +
                  " itemDetails d-flex  justify-content-between w-100 align-items-center"
                }>
                <div className="itemDescription">
                  <h5 className="fw-medium fs-4">Pizza</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate.
                  </p>
                </div>
                <div className="itemPrice">
                  <h5 className={userInfo.itemPrice + " "}>$180</h5>
                </div>
              </div>
            </div>
            <div
              className={userInfo.cardItem + " cartItem mb-2 d-flex ms-auto"}>
              <div className={userInfo.itemImageContainer + "  itemImage"}>
                <img
                  src="../../../public/Images/LogPageImage/meal-3.jpg"
                  className=" "
                  alt=""
                />
              </div>
              <div
                className={
                  userInfo.itemDetails +
                  " itemDetails d-flex  justify-content-between w-100 align-items-center"
                }>
                <div className="itemDescription">
                  <h5 className="fw-medium fs-4">Pizza</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate.
                  </p>
                </div>
                <div className="itemPrice">
                  <h5 className={userInfo.itemPrice + " "}>$180</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={userInfo.orderCart + " cart   rounded-4  p-2 mb-3"}>
          <div className="restaurantName ">
            <h4 className={userInfo.resName + " fw-bold text-capitalize"}>
              ibn Masr{" "}
            </h4>
          </div>
          <div className="cartitems p-2">
            <div
              className={userInfo.cardItem + " cartItem mb-2 d-flex ms-auto"}>
              <div className={userInfo.itemImageContainer + "  itemImage"}>
                <img
                  src="../../../public/Images/LogPageImage/meal-1.jpg"
                  className=" "
                  alt=""
                />
              </div>
              <div
                className={
                  userInfo.itemDetails +
                  " itemDetails d-flex  justify-content-between w-100 align-items-center"
                }>
                <div className="itemDescription">
                  <h5 className="fw-medium fs-4">Pizza</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate.
                  </p>
                </div>
                <div className="itemPrice">
                  <h5 className={userInfo.itemPrice + " "}>$180</h5>
                </div>
              </div>
            </div>
            <div
              className={userInfo.cardItem + " cartItem mb-2 d-flex ms-auto"}>
              <div className={userInfo.itemImageContainer + "  itemImage"}>
                <img
                  src="../../../public/Images/LogPageImage/meal-2.jpg"
                  className=" "
                  alt=""
                />
              </div>
              <div
                className={
                  userInfo.itemDetails +
                  " itemDetails d-flex  justify-content-between w-100 align-items-center"
                }>
                <div className="itemDescription">
                  <h5 className="fw-medium fs-4">Pizza</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate.
                  </p>
                </div>
                <div className="itemPrice">
                  <h5 className={userInfo.itemPrice + " "}>$180</h5>
                </div>
              </div>
            </div>
            <div
              className={userInfo.cardItem + " cartItem mb-2 d-flex ms-auto"}>
              <div className={userInfo.itemImageContainer + "  itemImage"}>
                <img
                  src="../../../public/Images/LogPageImage/meal-3.jpg"
                  className=" "
                  alt=""
                />
              </div>
              <div
                className={
                  userInfo.itemDetails +
                  " itemDetails d-flex  justify-content-between w-100 align-items-center"
                }>
                <div className="itemDescription">
                  <h5 className="fw-medium fs-4">Pizza</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate.
                  </p>
                </div>
                <div className="itemPrice">
                  <h5 className={userInfo.itemPrice + " "}>$180</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOrders;
