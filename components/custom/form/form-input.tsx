import { ErrorMessage } from "formik";
import { type InputHTMLAttributes, type ReactNode } from "react";
import FormError from "./form-error";
import FormFieldLayout from "./layout";

type IProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FormInput({
  label,
  type,
  name,
  ...props
}: IProps): ReactNode {
  return (
    <FormFieldLayout label={label}>
      <div className="relative">
        <input
          className="focus:border-btn hover:border-btn relative !rounded-lg border-[1.3px] border-gray-300 px-3 py-[15px] placeholder:font-normal placeholder:text-black"
          autoComplete="off"
          type={type}
          {...props}
        />

        <ErrorMessage name={name ?? ""}>
          {(msg) => <FormError error={msg} />}
        </ErrorMessage>
      </div>
    </FormFieldLayout>
  );
}
