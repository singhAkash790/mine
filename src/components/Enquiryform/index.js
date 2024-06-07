import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import { AlertWithList } from "../AlertWithList";
import { AlertContext } from "../../context/AlertProvider";

const initialStep1Values = {
  name: "",
  phone: "",
  email: "",
  city: "",
  interestedIn: "",
};

const initialStep2Values = {
  experience: "",
  currentBrands: "",
  hasShowroom: "",
  displayArea: "",
  investment: "",
};

const step1ValidationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Required"),
  phone: Yup.string()
    .min(10, "Must be 10 digits")
    .max(10, "Must be 10 digits")
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  city: Yup.string().required("Required"),
  interestedIn: Yup.string().required("Required"),
});

const step2ValidationSchema = Yup.object({
  experience: Yup.number()
    .positive("Experience cannot be negative")
    .integer()
    .required("Required"),
  currentBrands: Yup.string().required("Required"),
  hasShowroom: Yup.string().required("Required"),
  displayArea: Yup.string().required("Required"),
  investment: Yup.string().required("Required"),
});

const Step1 = ({ handleSubmit, isValid, errors, touched }) => {
  const { values } = useFormikContext();
  const [isOtherCity, setIsOtherCity] = useState(false);
  // console.log(" init isOtherCity", isOtherCity);

  // Update isOtherCity state when the city field changes
  useEffect(() => {
    if (values.city === "Others") {
      console.log("how called");

      values.city = null;
      setIsOtherCity(true);
    }
  }, [values.city]);

  return (
    <>
      <ul>
        <li>
          <Field
            name="name"
            type="text"
            placeholder="Name "
            className={touched.name && errors.name ? "error" : ""}
          />
        </li>
        <li>
          <Field
            name="phone"
            type="tel"
            placeholder="Mobile No. "
            className={touched.phone && errors.phone ? "error" : ""}
          />
        </li>
        <li>
          <Field
            name="email"
            type="email"
            placeholder="Email"
            className={touched.email && errors.email ? "error" : ""}
          />
        </li>
        {isOtherCity ? (
          <li>
            <Field
              name="city"
              type="text"
              placeholder="Enter City"
              className={touched.city && errors.city ? "error" : ""}
            />
          </li>
        ) : (
          <li>
            <Field
              as="select"
              name="city"
              className={touched.city && errors.city ? "error" : ""}
            >
              <option value="" className="default_value text-[5f5e5e]">
                Select City
              </option>
              <option value="Delhi">Delhi</option>
              <option value="Faridabad">Faridabad</option>
              <option value="Gurgaon">Gurugram</option>
              <option value="Ghaziabad">Ghaziabad</option>
              <option value="Noida">Noida</option>
              <option value="Others">Others</option>
            </Field>
          </li>
        )}

        <li>
          <Field
            as="select"
            className={
              touched.interestedIn && errors.interestedIn ? "error" : ""
            }
            name="interestedIn"
          >
            <option value="" className="default_value text-[5f5e5e]">
              Interested In
            </option>
            <option value="Dealership">Dealership</option>
            <option value="Retailer">Retailer</option>
          </Field>
        </li>
        <li>
          <button
            className="btn btn-1 hover-filled-slide-right"
            type="button"
            onClick={() => handleSubmit(values)} // Pass values to handleSubmit
            // disabled={!isValid}
          >
            <span>proceed</span>
          </button>
        </li>
      </ul>
    </>
  );
};

const Step2 = ({ handleSubmit, prevStep, errors, touched }) => {
  const { values } = useFormikContext(); // Access form values using useFormikContext hook
  return (
    <ul>
      <li>
        <Field
          name="experience"
          type="number"
          placeholder="Building Material Industry Experience"
          autoComplete="off"
          className={touched.experience && errors.experience ? "error" : ""}
        />
      </li>
      <li>
        <Field
          name="currentBrands"
          type="text"
          placeholder="Current brand partners"
          autoComplete="off"
          className={
            touched.currentBrands && errors.currentBrands ? "error" : ""
          }
        />
      </li>
      <li>
        <Field
          className={touched.hasShowroom && errors.hasShowroom ? "error" : ""}
          as="select"
          name="hasShowroom"
        >
          <option value="" className="default_value text-[5f5e5e]">
            Type of store space
          </option>
          <option value="Showroom">Showroom</option>
          <option value="Display Center">Display Center</option>
        </Field>
      </li>
      {/* {values.hasShowroom === "Display Center" && ( */}
      <>
        <li>
          <Field
            as="select"
            className={touched.displayArea && errors.displayArea ? "error" : ""}
            name="displayArea"
          >
            <option value="" className="default_value text-[5f5e5e]">
              Display area size
            </option>
            <option value="More than 200 sq. ft.">More than 200 sq. ft.</option>
            <option value="More than 400 sq. ft.">More than 400 sq. ft.</option>
            <option value="More than 600 sq. ft.">More than 600 sq. ft.</option>
            <option value="Above 600 sq. ft.">Above 600 sq. ft.</option>
          </Field>
        </li>
        <li>
          <Field
            className={touched.investment && errors.investment ? "error" : ""}
            as="select"
            name="investment"
          >
            <option value="" className="default_value text-[5f5e5e]">
              Investments ready to make
            </option>
            <option value="Between 10 lakhs -- 15 lakhs">
              Between 10 lakhs - 15 lakhs
            </option>
            <option value="Between 15 lakhs - 20 lakhs">
              Between 15 lakhs - 20 lakhs
            </option>
            <option value="Between 20 lakhs - 25 lakhs">
              Between 20 lakhs - 25 lakhs
            </option>
            <option value="Between 25 lakhs - 30 lakhs">
              Between 25 lakhs - 30 lakhs
            </option>
            <option value="Above 30 lakhs">Above 30 lakhs</option>
          </Field>
        </li>
      </>
      <li className="flex justify-around align-middle items-center gap-2 ">
        <button
          type="button"
          onClick={prevStep}
          className="btn btn-1 hover-filled-slide-right"
        >
          <span>BACK</span>
        </button>
        <button type="submit" className="btn btn-1 hover-filled-slide-right">
          <span>Submit</span>
        </button>
      </li>
    </ul>
  );
};

const EnquiryForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ...initialStep1Values,
    ...initialStep2Values,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (values, actions) => {
    if (step === 1) {
      try {
        await step1ValidationSchema.validate(values, { abortEarly: false });
        setFormData((prevFormData) => ({ ...prevFormData, ...values }));
        setStep(2);
      } catch (errors) {
        console.log(errors);
        console.log(values);
      }
    } else if (step === 2) {
      try {
        await step2ValidationSchema.validate(values, { abortEarly: false });
        console.log(values);
        // Add your form submission logic here
        setFormSubmitted(true);
      } catch (errors) {
        console.log(errors);
        console.log(values);
      }
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="enquirybox" id="">
      <Formik
        initialValues={formData}
        validationSchema={
          step === 1 ? step1ValidationSchema : step2ValidationSchema
        }
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, errors, touched }) => (
          <Form>
            <div
              className="form"
              data-aos="fade-in"
              data-aos-offset={0}
              data-aos-once="true"
              data-aos-duration={600}
            >
              <h3>Request a call back</h3>
              {step === 1 && (
                <Step1
                  handleSubmit={(values) => handleSubmit(values)}
                  isValid={isValid}
                  errors={errors}
                  touched={touched}
                />
              )}
              {step === 2 && (
                <Step2
                  handleSubmit={handleSubmit}
                  prevStep={prevStep}
                  values={formData} // Make sure to pass the values prop here
                  errors={errors}
                  touched={touched}
                />
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EnquiryForm;
