import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/avatar.png";
import styles from "../styles/Style.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/Validate";

const Reset = () => {
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder="false"></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold"> Reset</h4>
          </div>

          <form className="py-1" action="" onSubmit={formik.handleSubmit}>
            <div className=" pt-20 textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("newPassword")}
                className={styles.textbox}
                type="password"
                placeholder="New Password"
              />
              <input
                {...formik.getFieldProps("confirmPassword")}
                className={styles.textbox}
                type="password"
                placeholder="Confirm Password"
              />
              <button className={styles.btn} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
