import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTodoItem = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => axios.delete(`/api/todos/${id}`), {
    onSettled: () => {
      queryClient.invalidateQueries(["TODO"]);
    },
  });
};
