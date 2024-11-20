'use client';
import React, { useEffect, useState } from 'react';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/v1/getList');
      const data = await res.json();
      setTodos(data.data.list);
    };
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
