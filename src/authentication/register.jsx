import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Navigate } from "react-router-dom";
import CustomizedSnackbars from "../snakbar/alert";
import { useDispatch } from "react-redux";
import { registerUser } from "../Store/Slice/authentication";

const Register = () => {
  const [register, setRegister] = useState(false);
  const [error, setError] = useState(null);
  const initialValues = {
    mobileUser: "",
    passwordUser: "",
  };

  const dispatch = useDispatch();

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
  function handleSubmit(values) {
    let mobileUser = values.mobile;
    let passwordUser = values.password;
    dispatch(registerUser({ mobileUser, passwordUser }));
    setError(false)
    setTimeout(() => {
    setRegister(true)
    
    }, 2000);
  }

  if (register) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {error == true  ? <CustomizedSnackbars text={"ثبت نام انجام نشد  "} variant={2} /> :error == false ? <CustomizedSnackbars text={"ثبت نام با موفقیت انجام شد"} variant={1}/> :''}
      <div className="login h-[80vh]">
        <div className="min-h-full flex flex-col justify-center py-12  sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              ثبت نام کنید
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <Formik
                validationSchema={registerFormValidationSchema}
                initialValues={initialValues}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                <Form className="space-y-6">
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-medium text-gray-700"
                    >
                      mobile
                    </label>
                    <div className="mt-1">
                      <Field
                        id="mobile"
                        name="mobile"
                        type="phone"
                        autoComplete="mobile"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="invalid-feedback text-red-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <Field
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback text-red-300"
                    />
                  </div>
                  <div className="mt-2">
                    <Link to="/login "> قبلا ثبت نام کرده اید</Link>
                  </div>
                  <div>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      ثبت نام
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
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
