"use client";
import { createContext, useState, type PropsWithChildren } from "react";

interface IContextType {
  status: boolean;
  updateStatus: () => void;
}
const Context = createContext<IContextType | undefined>(undefined);

export const Provider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(false);

  const updateStatus = () => {
    setStatus(true);
  };

  return (
    <Context.Provider
      value={{
        status,
        updateStatus,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
