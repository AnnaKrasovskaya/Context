import React from "react";
import Task from "../components/Task";
import { useContext } from "react";
import { ContextTodo } from "../context/ContextTodo";

export default function TableTask() {
  const { valueContext } = useContext(ContextTodo);

  return (
    <div className="table">
      {valueContext.map((item, index) => {
        return <Task {...item} key={item.id} index={index} />;
      })}
    </div>
  );
}
