'use client';
import { Props } from '@/types/item';
import React from 'react';

export const TodoItem = ({ id, title, onDelete }: Props) => (
    <div className="flex justify-between items-center p-4 mb-3 bg-white rounded-xl shadow-md transition-all hover:shadow-lg">
        <span className="text-gray-800 text-base">{title}</span>
        <button
            onClick={() => onDelete(id)}
            className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
        >
            Delete
        </button>
    </div>
);
