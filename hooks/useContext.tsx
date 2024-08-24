import Context from "@/context";
import { useContext } from "react";

export const useCustomContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};
