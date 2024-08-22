import { type PropsWithChildren } from "react";
import Label from "./label";

export default function FormFieldLayout({
  children,
  label,
}: {
  label?: string;
} & PropsWithChildren) {
  return (
    <div>
      <Label label={label} />
      {children}
    </div>
  );
}
