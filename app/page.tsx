'use client';
import { useEffect, useState } from 'react';
import { getTodos } from '@/lib/api';
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

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Todo App</h1>

        <div className="flex mb-6">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Enter a todo..."
            className="flex-grow px-3 py-2 rounded-l border border-gray-300"
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} />
        ))}
      </div>
    </main>
  );
}
