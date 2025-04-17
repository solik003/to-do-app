import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useDeleteTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: number) => {
            await axios.delete(`/api/todos/${id}`);
        },

        onMutate: async (id: number) => {
            await queryClient.cancelQueries({ queryKey: ['todos'] });

            const previousTodos = queryClient.getQueryData<any[]>(['todos']);

            queryClient.setQueryData(['todos'], (old: any[]) =>
                old?.filter(todo => todo.id !== id)
            );

            return { previousTodos };
        },

        onError: (_err, _id, context: any) => {
            if (context?.previousTodos) {
                queryClient.setQueryData(['todos'], context.previousTodos);
            }
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });
};
