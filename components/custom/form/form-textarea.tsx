import classNames from "classnames";
import { ErrorMessage } from "formik";
import { type TextareaHTMLAttributes } from "react";
import FormError from "./form-error";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  id?: string;
}

const TextArea = ({ label, id, name, ...props }: TextAreaProps) => {
  return (
    <>
      <div
        className={classNames(
          "flex flex-col items-start justify-center gap-3 rounded-xl border-2 border-transparent bg-formBg px-5 py-3 transition-all duration-500 ease-in-out hover:border-border focus:border-[0.4px]",
        )}
      >
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <textarea
          name={name}
          cols={20}
          rows={5}
          id={id}
          className={`w-full border-none bg-formBg font-telegraf font-normal text-black outline-none placeholder:text-sm placeholder:font-normal placeholder:text-gray_500`}
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
