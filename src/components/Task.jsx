import React from "react";
import { useContext } from "react";
import { ContextTodo } from "../context/ContextTodo";
export default function Task({ name, date, task, index, id }) {
  const { valueContext, setValueContext } = useContext(ContextTodo);
  const deleteTask = (id) => {
    fetch("http://localhost:3002/comments/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleDelete = () => {
    deleteTask(id);
    const updatedContext = [...valueContext];
    updatedContext.splice(index, 1);
    setValueContext(updatedContext);
  };
  return (
    <div>
      <p>Исполнитель: {name}</p>
      <p>Дата: {date}</p>
      <p>Описание задачи: {task}</p>
      <button className="delete" onClick={handleDelete}>
        delete
      </button>
    </div>
  );
}
