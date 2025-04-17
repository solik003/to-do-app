'use client';

import { useEffect, useState } from 'react';
import { addTodo, deleteTodo, getTodos } from '@/lib/api';
import { TodoItem } from '@/components/TodoItem';
import { Todo } from '@/types/item';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchData();
  }, []);

  const handleAdd = async () => {
    if (!newTitle.trim()) return;
    const newTodo = await addTodo(newTitle);
    setTodos((prev) => [newTodo, ...prev]);
    setNewTitle('');
  };

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-8">Todo App</h1>

        <div className="flex gap-2 mb-6 border border-indigo-300 rounded-lg p-2 bg-white shadow-sm">
          <input
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="What's on your mind?"
          />
          <button
            onClick={handleAdd}
            className="px-5 py-2 bg-indigo-600 text-white font-semibold border border-indigo-700 rounded-md hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} id={todo.id} title={todo.title} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </main>
  );
}
