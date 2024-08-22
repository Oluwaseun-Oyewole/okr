import classNames from "classnames";
import { type ButtonHTMLAttributes } from "react";
import Loader from "../loader";

type IProps = { isLoading?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  isLoading = false,
  ...rest
}: IProps) {
  return (
    <button
      {...rest}
      className={classNames(
        `bg-btn w-full gap-4 text-white disabled:cursor-not-allowed disabled:opacity-50 ${
          isLoading && "flex items-center justify-center gap-3"
        } `,
        className,
      )}
    >
      {children} {isLoading && <Loader />}
    </button>
  );
}
