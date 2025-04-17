import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo } from '@/lib/api';

export const useAddTodo = () => {
    const queryClient = useQueryClient();

    const addMutation = useMutation({
        mutationFn: addTodo,
        onSuccess: (newTodo) => {
            queryClient.setQueryData(['todos'], (old: any) => [newTodo, ...(old || [])]);
        },
    });

    return addMutation;
};