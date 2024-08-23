import classNames from "classnames";
import { type ButtonHTMLAttributes } from "react";
import Loader from "../loader";

type ButtonType = "default" | "secondary";
type IProps = {
  isLoading?: boolean;
  buttonType?: ButtonType;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button({
  children,
  className,
  buttonType = "default",
  isLoading = false,
  ...rest
}: IProps) {
  const customButtonStyles = (buttonType: ButtonType) => {
    switch (buttonType) {
      case "default":
        return "bg-transparent px-7 py-3 rounded-lg";
      case "secondary":
        return "bg-textColor lg:bg-black text-white px-7 py-3 rounded-lg";
      default:
        return null;
    }
  };

  return (
    <button
      {...rest}
      className={classNames(
        `w-full gap-4 font-light text-textColor transition-all duration-700 ease-in-out hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-50 ${
          isLoading && "flex items-center justify-center gap-3"
        } `,
        customButtonStyles(buttonType),
        className,
      )}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
}
