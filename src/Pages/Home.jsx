import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="block">
      <div className="blocks">
        <Link to="/table">Посмотреть задачи</Link>
      </div>
      <div className="blocks">
        <Link to="/create">Создать задачу</Link>
      </div>
    </div>
  );
}
