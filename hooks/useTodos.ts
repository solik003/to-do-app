import { API_URL } from '@/constants';
import { useQuery } from '@tanstack/react-query';

export const useTodos = () =>
    useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const res = await fetch(`${API_URL}?_limit=10`);
            const data = await res.json();
            return data.map((todo: any) => ({ ...todo, completed: false }));
        },
    });

