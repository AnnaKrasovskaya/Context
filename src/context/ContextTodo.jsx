import React, { useEffect } from "react";
import { createContext } from "react";

export const ContextTodo = createContext();

export function ContextComponent({ children }) {
  const [valueContext, setValueContext] = React.useState(false);
  const [upd, setUpd] = React.useState(false);
  const value = { valueContext, setValueContext, setUpd };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3002/comments");
      const data = await response.json();
      setValueContext(data);
    }
    fetchData();
  }, [upd]);

  if (!valueContext) {
    return null;
  }

  return <ContextTodo.Provider value={value}>{children}</ContextTodo.Provider>;
}
