/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const customStyles = {
    control: (baseStyles: any) => ({
      ...baseStyles,
      cursor: "default",
      boxShadow: "none",
      borderColor: "transparent",
      "&:hover": {
        borderColor: "transparent",
      },
      backgroundColor: focused ? "#fff" : "transparent",
      fontSize: 14,
      marginLeft: -10,
      zIndex: 100,
      marginTop: 5,
    }),
    menu: (baseStyles: any) => ({
      ...baseStyles,
      cursor: "default",
      backgroundColor: focused ? "#fff" : "transparent",
      "&:hover": {
        borderColor: "transparent",
      },
    }),
    input: (baseStyles: any) => ({
      ...baseStyles,
      color: "transparent",
    }),
    option: (baseStyles: any) => ({
      ...baseStyles,
      backgroundColor: "#fff",
      fontSize: 13,
      color: "#000",
      "&:hover": {
        backgroundColor: "#F2F2F3",
        color: "#000",
        borderRadius: 10,
      },
    }),
  };
  const customComponents = {
    IndicatorSeparator: () => null,
  };

  return (
    <>
      <div
        className={classNames(
          "relative h-[78px] gap-3 rounded-xl border-2 border-transparent bg-formBg px-5 py-6 hover:border-border focus:border-[0.4px]",
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
            "absolute top-[30px] z-10 font-light text-gray_500",
            { "top-[2px] py-3 text-sm": focused || value },
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
          onChange={(option) => {
            setFocused(false);
            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
            setValue(option?.value!);
            formik.setFieldValue("findUs", option);
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
