import classNames from "classnames";

interface ILabelProps {
  label?: string;
}

const Label = ({ label = "" }: ILabelProps) => {
  return (
    <label className={classNames("block flex-1 font-medium text-black")}>
      {label}
    </label>
  );
};

export default Label;
