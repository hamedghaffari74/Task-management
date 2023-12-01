import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Navigate } from "react-router-dom";
import CustomizedSnackbars from "../snakbar/alert";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({ mobile: null, password: null });

  const UserList = useSelector((state) => state.authentication?.usersList);
  const dispatch = useDispatch();

  const handlePassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  const handleMobile = (e) => {
    setUser({ ...user, mobile: e.target.value });
  };
  const registerFormValidationSchema = yup.object().shape({
    mobile: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("وارد کردن شماره همراه الزامیست"),
    password: yup
      .string()
      .required("وارد کردن رمز عبور الزامیست")
      .min(6, "نباید کمتر از 6 کاراکتر باشد")
      .max(14, "نباید بیشتر از 14 کاراکتر باشد"),
  });

  function handleClick(values) {
    UserList?.map((item) => {
      if (user?.mobile === item?.mobile && user?.password === item?.password) {
        localStorage.setItem("token", 123456);
        setError(false);
        setTimeout(() => {
          setLogin(true);
        }, 2000);
      } else {
        setError(true);
      }
    });
  }

  if (login) {
    return <Navigate to="../" />;
  }

  return (
    <>
      {error == true ? (
        <CustomizedSnackbars
          text={"شماره همراه یا رمز عبور اشتباه است"}
          variant={2}
        />
      ) : error == false ? (
        <CustomizedSnackbars
          text={"شما با موفقیت وارد سایت شدید"}
          variant={1}
        />
      ) : (
        ""
      )}
      <div className="login h-[80vh]">
        <div className="min-h-full flex flex-col justify-center py-12  sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              ورود
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700"
                  >
                    mobile
                  </label>
                  <div className="mt-1">
                    <TextField
                      id="mobile"
                      name="mobile"
                      onChange={handleMobile}
                      autoComplete="mobile"
                      value={user.mobile}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* <ErrorMessage 
                    // name="mobile"
                    // component="div"
                    // className="invalid-feedback text-red-300"
                  // />*/}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <TextField
                      id="password"
                      name="password"
                      onChange={handlePassword}
                      autoComplete="password"
                      value={user.password}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* <ErrorMessage 
                    // name="password"
                    // component="div"
                    // className="invalid-feedback text-red-300"
                  // />
                  */}
                </div>
                <div className="mt-2">
                  <Link to="/register "> قبلا ثبت نام نکرده اید</Link>
                </div>
                <div>
                  <button
                    // type="submit"
                    onClick={handleClick}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    ورود
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
{
  /* <> */
}
{
  /* <CustomizedSnackbars */
}
// variant={2}
// text={"شماره همراه یا رمز عبور اشتباه است"}
//   />
{
  /* {setTimeout(() => { */
}
// setError(false);
//   }, 3000)}
{
  /* </> */
}
