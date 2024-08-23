import classNames from "classnames";
import Select from "react-select";

const SelectInput = ({
  options,
  id,
  label,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any[];
  id?: string;
  label?: string;
}) => {
  return (
    <div
      className={classNames(
        "gap-3 rounded-xl border-2 border-transparent bg-formBg px-5 py-3 transition-all duration-500 ease-in-out hover:border-border focus:border-[0.4px]",
      )}
    >
      <label
        className={classNames("block flex-1 text-xs font-light text-gray_500")}
        htmlFor={id}
      >
        {label}
      </label>
      <Select id={id} options={options} />
    </div>
  );
};

export default SelectInput;
