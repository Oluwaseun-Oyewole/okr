import FormInput from "./form-input";
import TextArea from "./form-textarea";

export interface IFormikControlProps {
  control: "input" | "select" | "password" | "textarea";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const FormikController = ({ control, ...rest }: IFormikControlProps) => {
  switch (control) {
    case "input":
      return <FormInput {...rest} />;

    case "textarea":
      return <TextArea {...rest} />;

    default:
      return null;
  }
};

export default FormikController;
