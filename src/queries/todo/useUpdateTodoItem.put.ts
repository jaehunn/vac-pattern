import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { TodoValues } from "~/types/Todo";

export const useUpdateTodoItem = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (payload: TodoValues) => axios.put(`/api/todos/${payload.id}`, payload),
    {
      onSettled: () => {
        queryClient.invalidateQueries(["TODO"]);
      },
    }
  );
};
