import React, { useState } from "react";
import { useContext } from "react";
import { ContextTodo } from "../context/ContextTodo";
import Task from "../components/Task";

export default function CreateTask() {
  const { valueContext } = useContext(ContextTodo);
  const [form, setForm] = useState({
    name: null,
    date: null,
    task: null,
  });

  const { setUpd } = useContext(ContextTodo);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function handleSmb(e) {
    e.preventDefault();

    fetch("http://localhost:3002/comments", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpd(data);
        setForm({
          name: "",
          date: "",
          task: "",
        });
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  }

  return (
    <>
      <form onSubmit={handleSmb}>
        <div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInput}
            placeholder="Имя"
          />
        </div>
        <div>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleInput}
            placeholder="Дата"
          />
        </div>
        <div>
          <input
            type="text"
            name="task"
            value={form.task}
            onChange={handleInput}
            placeholder="Описание задачи"
          />
        </div>
        <div>
          <input type="submit" value="Записать задание" />
        </div>
      </form>
      <div className="tasks">
        {valueContext.map((item, index) => (
          <Task {...item} key={item.id} index={index} />
        ))}
      </div>
    </>
  );
}
