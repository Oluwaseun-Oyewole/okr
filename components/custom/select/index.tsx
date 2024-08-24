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
        backgroundColor: "#fff",
      },
      "&:focus": {
        backgroundColor: "#fff",
      },
      backgroundColor: "#F2F2F3",
      fontSize: 14,
      marginTop: 5,
    }),
    menu: (baseStyles: any) => ({
      ...baseStyles,
      cursor: "default",
      backgroundColor: "#F2F2F3",
      "&:hover": {
        borderColor: "transparent",
      },
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
  const [focused, setFocused] = useState(false);
  return (
    <>
      <div
        className={classNames(
          "relative gap-3 rounded-xl border-2 border-transparent bg-formBg px-5 py-6 hover:border-border focus:border-[0.4px]",
          { "bg-white": focused },
        )}
        onMouseEnter={() => {
          setFocused(true);
        }}
        onMouseLeave={() => {
          setFocused(false);
        }}
      >
        <label
          className={classNames(
            "absolute top-[35px] z-10 font-light text-gray_500 transition-all duration-500 ease-in-out",
            { "top-0 -mt-6 text-sm": isSelected },
          )}
          htmlFor="findUs"
        >
          How did you find us?
        </label>
        <Select
          name="findUs"
          id="findUs"
          instanceId={useId()}
          components={customComponents}
          options={options}
          styles={customStyles}
          className={classNames({ "": isSelected })}
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
