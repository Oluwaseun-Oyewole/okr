"use client";
import { createContext, useState, type PropsWithChildren } from "react";

interface IContextType {
  status: boolean;
  updateStatus: () => void;
  open: boolean;
  toggle: VoidFunction;
}
const Context = createContext<IContextType | undefined>(undefined);

export const Provider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(false);
  const [open, setOpen] = useState(false);

  const updateStatus = () => {
    setStatus(true);
  };

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Context.Provider
      value={{
        status,
        updateStatus,
        open,
        toggle,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
