import FormInput from "./form-input";

export interface IFormikControlProps {
  control: "input" | "select" | "password" | "textarea";
}

const FormikController = ({ control }: IFormikControlProps) => {
  switch (control) {
    case "input":
      return <FormInput />;

    default:
      return null;
  }
};

export default FormikController;
