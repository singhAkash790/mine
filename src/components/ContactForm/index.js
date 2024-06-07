import React, { useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { input, Textarea, Button } from "@material-tailwind/react";
import WebLayout from "../WebLayout";
import Heading from "../Heading";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const Index = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission logic here
    },
  });
  return (
    <>
      <WebLayout>
        <Heading
          title={"Let's Collaborate"}
          titleData={
            <div className="w-[45%]">
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-4 w-full "
              >
                <div className="w-full grid grid-flow-row gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    className=" block w-full leading-[22.4px] outline-none  p-4 rounded-3xl  bg-[#1c1c1c] font-medium text-[17px]  text-white  box-border antialiased"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    className="block w-full leading-[22.4px] outline-none  p-4 rounded-3xl  bg-[#1c1c1c] font-medium text-[17px]  text-white  box-border antialiased"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  className="block w-full leading-[22.4px] outline-none  p-4 rounded-3xl  bg-[#1c1c1c] font-medium text-[17px]  text-white  box-border antialiased"
                />
                <Button
                  type="submit"
                  className="bg-white rounded-3xl text-gray-900 font-medium text-[17px] z-10"
                >
                  Submit
                </Button>
              </form>
            </div>
          }
        ></Heading>
      </WebLayout>
    </>
  );
};

export default Index;
