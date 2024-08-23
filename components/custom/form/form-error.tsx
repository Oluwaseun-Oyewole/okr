interface IFormErrorProps {
  error?: string;
}

const FormError = ({ error = "" }: IFormErrorProps) => {
  return (
    <p className="flex items-center pl-2 pt-[2px] font-telegraf text-[13px] !text-red-600">
      {error}
    </p>
  );
};

export default FormError;
