"use client";
import { useCustomContext } from "@/hooks/useContext";
import {
  contactFormValidationSchema,
  type ContactSalesFormValues,
} from "@/lib/schema/contact";
import classNames from "classnames";
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
    findUs: { value: "", label: "" },
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
  const { updateStatus } = useCustomContext();

  const basis = "basis-[48%]";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (values: ContactSalesFormValues, { resetForm }: any) => {
    // simulating delay
    setTimeout(() => {
      updateStatus();
      resetForm({});
    }, 4000);
  };
  return (
    <div className="font-telegraf">
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className="flex flex-col gap-4 md:w-4/5 lg:w-full">
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div className={basis}>
                  <FormikController
                    control="input"
                    name="firstName"
                    placeholder="First name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label="First name"
                  />
                </div>
                <div className={basis}>
                  <FormikController
                    control="input"
                    placeholder="Last name"
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
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Email"
              />

              <FormikController
                control="input"
                name="companyName"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Company name"
                placeholder="Company name"
              />

              <FormikController
                control="input"
                name="websiteUrl"
                value={formik.values.websiteUrl}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Website URL"
                placeholder="Website URL"
              />

              <SelectInput formik={formik} />

              <FormikController
                control="textarea"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Message"
              />

              <Button
                type="submit"
                isLoading={formik.isSubmitting}
                disabled={!formik.isValid}
                buttonType="secondary"
                className={classNames(
                  "md: w-full !bg-button py-4 sm:w-3/5 md:w-[60%] xl:!w-[50%]",
                )}
              >
                {formik.isSubmitting ? "Sending...." : "Contact Sales"}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactForm;
