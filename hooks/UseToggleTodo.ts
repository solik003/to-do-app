import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Todo } from '@/types/item';
import { deleteTodo } from '@/lib/api';

export const useToggleTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: number) => {
            return deleteTodo(id);
        },
        onMutate: async (id) => {
            await queryClient.cancelQueries({ queryKey: ['todos'] });

            const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

            if (previousTodos) {
                queryClient.setQueryData<Todo[]>(['todos'], (old) =>
                    old?.map((todo) =>
                        todo.id === id ? { ...todo, completed: !todo.completed } : todo
                    )
                );
            }

            return { previousTodos };
        },
        onSuccess: (id) => {
            queryClient.setQueryData(['todos'], (old: Todo[] | undefined) =>
                old?.filter((todo) => todo.id !== id)
            );
        },
        onError: (_err, _id, context) => {
            if (context?.previousTodos) {
                queryClient.setQueryData(['todos'], context.previousTodos);
            }
        },
    });
};
