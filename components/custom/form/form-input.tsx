import classNames from "classnames";
import { ErrorMessage } from "formik";
import { type InputHTMLAttributes, type ReactNode } from "react";
import FormError from "./form-error";

type IProps = {
  label?: string;
  id?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FormInput({
  label,
  type,
  id,
  name,
  ...props
}: IProps): ReactNode {
  return (
    <div className="">
      <div
        className={classNames(
          "flex flex-col items-start justify-center gap-3 rounded-xl border-2 border-transparent bg-formBg px-5 py-3 transition-all duration-500 ease-in-out hover:border-border focus:border-[0.4px]",
        )}
      >
        <label
          className={classNames(
            "block flex-1 text-xs font-light text-gray_500",
          )}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          id={id}
          name={name}
          className={classNames(
            "w-full border-none bg-formBg font-telegraf font-normal text-black outline-none placeholder:text-sm placeholder:font-normal placeholder:text-gray_500",
          )}
          autoComplete="off"
          aria-required
          type={type}
          {...props}
        />
      </div>

      <ErrorMessage name={name ?? ""}>
        {(msg) => <FormError error={msg} />}
      </ErrorMessage>
    </div>
  );
}
