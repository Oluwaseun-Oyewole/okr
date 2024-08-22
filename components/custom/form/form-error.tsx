interface IFormErrorProps {
  error?: string;
}

const FormError = ({ error = "" }: IFormErrorProps) => {
  return (
    <p className="mt-[5px] flex items-center text-sm !text-red-600">{error}</p>
  );
};

export default FormError;
