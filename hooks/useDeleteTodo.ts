import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo } from '@/lib/api';

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (deletedId) => {
      queryClient.setQueryData(['todos'], (old: any) => old?.filter((t: any) => t.id !== deletedId));
    },
  });

  return deleteMutation;
};