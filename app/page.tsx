'use client';

import { useState } from 'react';
import { useTodos } from '@/hooks/useTodos';
import { useAddTodo } from '@/hooks/useAddTodo';
import { useDeleteTodo } from '@/hooks/useDeleteTodo';
import { TodoItem } from '@/components/TodoItem';
import { useToggleTodo } from '@/hooks/UseToggleTodo';

export default function Home() {
  const [newTitle, setNewTitle] = useState('');
  const { data: todos = [], isLoading } = useTodos();
  const { mutate: addTodo } = useAddTodo();
  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: toggleTodo } = useToggleTodo();

  const handleAdd = () => {
    if (newTitle.trim()) {
      addTodo(newTitle);
      setNewTitle('');
    }
  };

  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  const handleToggle = (id: number) => {
    toggleTodo(id);
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100 p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-800 mb-6 sm:mb-8">
          Todo App
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 mb-6 border border-indigo-300 rounded-lg p-2 bg-white shadow-sm">
          <input
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="What's on your mind?"
          />
          <button
            onClick={handleAdd}
            className="mt-3 sm:mt-0 sm:px-5 sm:py-2 bg-indigo-600 text-white font-semibold border border-indigo-700 rounded-md hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>

        <div className="space-y-3 overflow-y-auto max-h-[50vh] sm:max-h-[60vh]">
          {isLoading ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : (
            todos.map((todo: any) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                onToggle={handleToggle}
                onDelete={handleDelete}
                completed={todo.completed}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
