'use client';
import { Props } from '@/types/item';
import React from 'react';


export const TodoItem = ({ id, title }: Props) => (
  <div className="flex justify-between items-center p-3 mb-2 bg-white rounded shadow">
    <span>{title}</span>
  </div>
);
