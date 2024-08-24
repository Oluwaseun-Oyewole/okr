import { motion } from "framer-motion";
interface IFormErrorProps {
  error?: string;
}

const FormError = ({ error = "" }: IFormErrorProps) => {
  const item = {
    hidden: { opacity: 0, transform: "translateX(-20px)" },
    show: { opacity: 1, transform: "translateX(0px)" },
  };

  return (
    <motion.p
      variants={item}
      initial="hidden"
      animate="show"
      className="flex items-center pl-2 pt-[2px] font-telegraf text-[13px] !text-red-600"
    >
      {error}
    </motion.p>
  );
};

export default FormError;
