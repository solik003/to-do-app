import { API_URL } from '@/constants';
import axios from 'axios';

export const getTodos = async () => {
    const res = await axios.get(`${API_URL}?_limit=10`);
    return res.data;
};

export const addTodo = async (title: string) => {
    const response = await axios.post(API_URL, {
        title,
        completed: false,
    });
    return response.data;
};

export const deleteTodo = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
};