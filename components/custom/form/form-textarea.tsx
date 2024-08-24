import classNames from "classnames";
import { ErrorMessage } from "formik";
import { useState, type TextareaHTMLAttributes } from "react";
import FormError from "./form-error";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  id?: string;
}

const TextArea = ({ label, id, name, ...props }: TextAreaProps) => {
  const [focused, setFocused] = useState(false);
  return (
    <>
      <div
        className={classNames(
          "flex flex-col items-start justify-center gap-3 rounded-xl border-2 border-transparent bg-formBg px-5 py-3 hover:border-border focus:border-[0.4px]",
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
          htmlFor={id}
          className={classNames("block text-sm font-medium text-gray-700", {
            "opacity-0": focused,
          })}
        >
          {label}
        </label>
        <textarea
          name={name}
          cols={20}
          rows={5}
          id={id}
          className={classNames(
            "placeholder:font-normal`} w-full border-none bg-formBg font-telegraf font-normal text-black outline-none placeholder:text-sm placeholder:text-gray_500",
            { "bg-white": focused },
          )}
          {...props}
        />
      </div>
      <div className="-mt-3">
        <ErrorMessage name={name ?? ""}>
          {(msg) => <FormError error={msg} />}
        </ErrorMessage>
      </div>
    </>
  );
};

export default TextArea;
