'use client';
import React, { useEffect, useState } from 'react';
import useUserStore from '@/store/user';
import { Pagination, Input } from 'antd';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const { userInfo, token, updateUserInfo, updateAge, updateToken } =
    useUserStore();

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
      <Input placeholder="Basic usage" />
      <Pagination defaultCurrent={1} total={50} />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr></hr>
      <div className="App">
        <div>
          姓名：{userInfo.name} 年龄：{userInfo.age}
        </div>
        <div>token：{token}</div>
        <button
          onClick={() => updateUserInfo({ name: 'next.js 你好', age: 24 })}
        >
          更新用户
        </button>
        <hr></hr>
        <button onClick={() => updateAge(userInfo.age + 1)}>更新年龄</button>
        <hr></hr>
        <button onClick={() => updateToken(token + 9)}>更新token</button>
      </div>
    </>
  );
}
