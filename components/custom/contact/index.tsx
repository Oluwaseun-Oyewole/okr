"use client";
import {
  contactFormValidationSchema,
  type ContactSalesFormValues,
} from "@/lib/schema/contact";
import { Form, Formik } from "formik";
import { ZodError } from "zod";
import Button from "../button";
import FormikController from "../form/form-controller";
import SelectInput from "../select";

const ContactForm = () => {
  const initialValues: ContactSalesFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    websiteUrl: "",
    message: "",
  };
  const validateForm = (values: ContactSalesFormValues) => {
    try {
      contactFormValidationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const basis = "basis-[48%]";
  const onSubmit = () => {};
  return (
    <div className="font-telegraf">
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className="flex flex-col gap-5">
              <div className="flex flex-col justify-between md:flex-row">
                <div className={basis}>
                  <FormikController
                    control="input"
                    placeholder="okra"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label="First name"
                  />
                </div>
                <div className={basis}>
                  <FormikController
                    control="input"
                    placeholder="okra"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label="Last name"
                  />
                </div>
              </div>

              <FormikController
                control="input"
                placeholder="band4band@gmail.com"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Email"
              />

              <FormikController
                control="input"
                placeholder="Okiki"
                name="companyName"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Company name"
              />

              <FormikController
                control="input"
                placeholder="Okiki"
                name="websiteUrl"
                value={formik.values.websiteUrl}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Website URL"
              />

              <SelectInput
                options={options}
                label="How did you find us"
                id="select option"
              />

              <FormikController
                control="textarea"
                placeholder="Start typing"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Message"
              />

              <Button
                disabled={!formik.isValid}
                buttonType="secondary"
                className="!w-1/2 !bg-button py-5"
              >
                Contact sales
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactForm;
