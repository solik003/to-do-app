import { useQuery } from '@tanstack/react-query';
import { getTodos } from '@/lib/api';

export const useTodos = () => {
    const { data: todos = [], isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: getTodos,
    });

    return { todos, isLoading };
};
