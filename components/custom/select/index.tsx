/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import classNames from "classnames";
import { ErrorMessage } from "formik";
import { useId, useState } from "react";
import Select from "react-select";
import FormError from "../form/form-error";

const options = [
  { value: "searchEngine", label: "Search engine" },
  { value: "recommended", label: "Recommended by friends or google" },
  { value: "socialMedia", label: "Social media" },
  { value: "blog", label: "Blogs or publication" },
  { value: "others", label: "Others" },
];

const SelectInput = ({ formik }: { formik: any }) => {
  const customStyles = {
    control: (baseStyles: any) => ({
      ...baseStyles,
      cursor: "default",
      boxShadow: "none",
      borderColor: "transparent",
      "&:hover": {
        borderColor: "transparent",
      },
      backgroundColor: "#F2F2F3",
      fontSize: 15,
    }),
    menu: (baseStyles: any) => ({
      ...baseStyles,
      cursor: "default",
      backgroundColor: "#F2F2F3",
    }),
    input: (baseStyles: any) => ({
      ...baseStyles,
      color: "transparent",
    }),
  };
  const customComponents = {
    IndicatorSeparator: () => null,
  };
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <div
        className={classNames(
          "relative gap-3 rounded-xl border-2 border-transparent bg-formBg px-5 py-5 transition-all duration-500 ease-in-out hover:border-border focus:border-[0.4px]",
        )}
      >
        <label
          className={classNames(
            "absolute top-6 z-10 block flex-1 text-xs font-light text-gray_500",
            { "top-0": isSelected },
          )}
          htmlFor="findUs"
        >
          How did you find us
        </label>
        <Select
          name="findUs"
          id="findUs"
          instanceId={useId()}
          components={customComponents}
          options={options}
          styles={customStyles}
          className={classNames({ "z-20": isSelected })}
          onChange={(option) => {
            formik.setFieldValue("findUs", option);
            setIsSelected(true);
          }}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="-mt-3">
        <ErrorMessage name={"findUs" ?? ""}>
          {(msg) => <FormError error={msg} />}
        </ErrorMessage>
      </div>
    </>
  );
};

export default SelectInput;
