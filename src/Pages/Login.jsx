import React, { useState } from "react";
import log from "../Styles/Login.module.css";

const Login = () => {
  //'==================================handel Flip Cards
  const [hasAccount, sethasAccount] = useState(true);
  const handelCreateAcc = (e) => {
    sethasAccount(false);
  };
  const handelSignIn = () => {
    sethasAccount(true);
  };
  //'==============================================================================================
  //'==================================login stats
  const [userLogInfo, setUserLogInfo] = useState({
    userEmailLogIn: "",
    userPasswordLogIn: "",
  });
  const handleLogInfoChange = (event) => {
    setUserLogInfo((oldObj) => {
      return { ...oldObj, [event.target.name]: event.target.value };
    });
  };
  const handeleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(userLogInfo);
  };
  //'===============================================

  //'==================================signup stats
  const [userSignUpInfo, setSignUpInfo] = useState({
    userName: "",
    userPhone: "",
    userEmail: "",
    userPassword: "",
  });
  const handleSignUp = (event) => {
    setSignUpInfo((oldObj) => {
      return { ...oldObj, [event.target.name]: event.target.value };
    });
  };
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log(userSignUpInfo);
  };
  //'==============================================================================================

  return (
    <>
      <div className={log.SignComp + " container  "}>
        <div className={log.signContainer + " row "}>
          {/* //'=======================================================Left Section */}
          <div className={log.LeftSection + "  col-12 col-lg-6 p-2  "}>
            <div className={" inner "}>
              <div className={log.Boxs}>
                <div className={log.mealBoxParant}>
                  <div className={log.singleBox1}></div>
                  <div className={log.singleBox2}></div>
                  <div className={log.singleBox3}></div>
                </div>
              </div>
            </div>
          </div>
          {/* //'=======================================================right Section */}
          <div className={log.RightSection + " col-12 col-lg-6 "}>
            <div className={log.rightContainer}>
              <div className={log.mainContainer + ``}>
                <div
                  className={log.theCard}
                  style={!hasAccount ? { transform: "rotateY(180deg)" } : null}>
                  {/*  //!  ================Login Card================  */}
                  <div className={log.theFront}>
                    <h1 className="text-danger">Restaurant App</h1>
                    <h2>Login</h2>
                    <form onSubmit={handeleLoginSubmit} className=" my-3 py-1">
                      {/* //' user Email */}
                      <div className={log.inputContainer + " "}>
                        <i className={log.inputIcon + " fa-solid fa-user"}></i>
                        <input
                          className={
                            log.inputPadding +
                            " form-control text-start   mb-4 "
                          }
                          type="email"
                          name="userEmailLogIn"
                          id="userEmailLogIn"
                          placeholder="Email/Phone no"
                          value={userLogInfo.userEmail}
                          onChange={handleLogInfoChange}
                        />
                      </div>
                      {/* //'user password */}
                      <div className={log.inputContainer + " "}>
                        <i
                          className={
                            log.inputIcon + " fa-solid fa-unlock-keyhole"
                          }></i>
                        <input
                          className={
                            log.inputPadding + " form-control text-start  mb-3"
                          }
                          type="password"
                          name="userPasswordLogIn"
                          id="userPasswordLogIn"
                          placeholder="Password"
                          value={userLogInfo.userPassword}
                          onChange={handleLogInfoChange}
                        />
                      </div>
                      {/* //'Forgot Password? */}
                      <div className=" text-end text-danger">
                        <a className={log.redHover}>Forgot Password?</a>
                      </div>

                      {/* //'Login Btn */}
                      <button
                        type="submit"
                        className={
                          log.LogBtnColor + " btn btn-danger w-100 my-2"
                        }>
                        Login
                      </button>

                      {/* //'create One */}
                      <div
                        className={log.handelcreate + " text-center mb-2 p-2"}>
                        Don't have an account? 
                        <a
                          className={log.cursorPointer + "  ms-2"}
                          onClick={handelCreateAcc}>
                          create one
                        </a>
                      </div>
                    </form>
                  </div>
                  {/* //! ================  Register Card================  */}
                  <div className={log.theBack}>
                    <h1 className="text-danger">Restaurant App</h1>
                    <h2>Register</h2>
                    <form onSubmit={handleSignUpSubmit} className=" my-3 py-1">
                      {/* //'USer Name */}
                      <div className={log.inputContainer + " "}>
                        <i
                          className={
                            log.inputIcon + " fa-solid fa-signature "
                          }></i>
                        <input
                          className={
                            log.inputPadding +
                            " form-control text-start   mb-1 "
                          }
                          type="text"
                          name="userName"
                          id="userName"
                          placeholder="User Name"
                          value={userSignUpInfo.userName}
                          onChange={handleSignUp}
                        />
                      </div>

                      {/* //'USer phone */}
                      <div className={log.inputContainer + " "}>
                        <i className={log.inputIcon + " fa-solid fa-phone"}></i>
                        <input
                          className={
                            log.inputPadding + " form-control text-start  mb-1"
                          }
                          type="Phone"
                          name="userPhone"
                          id="userPhone"
                          placeholder="Phone"
                          value={userSignUpInfo.userPhone}
                          onChange={handleSignUp}
                        />
                      </div>
                      {/* //' user Email */}
                      <div className={log.inputContainer + " "}>
                        <i className={log.inputIcon + " fa-solid fa-at"}></i>
                        <input
                          className={
                            log.inputPadding +
                            " form-control text-start   mb-1 "
                          }
                          type="email"
                          name="userEmail"
                          id="userEmail"
                          placeholder="Email/Phone no"
                          value={userSignUpInfo.userEmail}
                          onChange={handleSignUp}
                        />
                      </div>

                      {/* //'USer password */}
                      <div className={log.inputContainer + " "}>
                        <i
                          className={
                            log.inputIcon + " fa-solid fa-unlock-keyhole"
                          }></i>
                        <input
                          className={
                            log.inputPadding + " form-control text-start  mb-1"
                          }
                          type="password"
                          name="userPassword"
                          id="userPassword"
                          placeholder="Password"
                          value={userSignUpInfo.userPassword}
                          onChange={handleSignUp}
                        />
                      </div>

                      <button
                        type="submit"
                        className={
                          log.LogBtnColor + " btn btn-danger w-100 my-2"
                        }>
                        SignUp
                      </button>
                      <div
                        className={log.handelcreate + " text-center mb-2 p-2"}>
                        Already have an account ?
                        <a
                          className={log.cursorPointer + " ms-2"}
                          onClick={handelSignIn}>
                          Login
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={log.mainContainer + ``}>
            <div className={log.theCard}>
              <div className={log.theFront}>front card</div>
              <div className={log.theBack}>Back card</div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
