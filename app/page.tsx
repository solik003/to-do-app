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
    <main className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Todo App</h1>

        <div className="flex mb-6">
          <input
            className="flex-grow p-2 rounded-l border"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Add new todo"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} onDelete={handleDelete} />
        ))}
      </div>
    </main>
  );
}
