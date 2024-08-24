import classNames from "classnames";
import { ErrorMessage } from "formik";
import {
  useRef,
  useState,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
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
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <div
        className={classNames(
          "items-centers relative flex h-[78px] flex-col justify-center gap-3 rounded-lg border-2 border-transparent bg-formBg px-5 hover:border-border focus:border-[0.4px]",
          { "bg-white": hover },
        )}
        onMouseEnter={() => {
          setHover(true);
          ref.current?.focus();
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <label
          className={classNames(
            "absolute top-[12px] block flex-1 text-sm font-light text-gray_500 opacity-0",
            { "opacity-100": hover || ref.current?.value },
          )}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          name={name}
          className={classNames(
            "mt-3 flex h-full w-full items-center justify-center border-none bg-formBg font-telegraf text-sm font-normal text-black outline-none placeholder:text-base placeholder:font-normal placeholder:text-gray_500",
            { "bg-white placeholder:invisible": hover },
            { "mt-[25px]": ref.current?.value },
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
