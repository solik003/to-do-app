'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTodos, addTodo, deleteTodo } from '@/lib/api';
import { TodoItem } from '@/components/TodoItem';
import { useState } from 'react';

export default function Home() {
  const queryClient = useQueryClient();
  const [newTitle, setNewTitle] = useState('');

  const { data: todos = [], isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  const addMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: (newTodo) => {
      queryClient.setQueryData(['todos'], (old: any) => [newTodo, ...(old || [])]);
      setNewTitle('');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (deletedId) => {
      queryClient.setQueryData(['todos'], (old: any) => old?.filter((t: any) => t.id !== deletedId));
    },
  });

  const handleAdd = () => {
    if (newTitle.trim()) {
      addMutation.mutate(newTitle);
    }
  };

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
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
          {isLoading ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : (
            todos.map((todo: any) => (
              <TodoItem key={todo.id} id={todo.id} title={todo.title} onDelete={handleDelete} />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
