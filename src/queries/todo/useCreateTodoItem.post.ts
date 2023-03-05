import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TodoPayload = {
  value: string;
};

export const useCreateTodoItem = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (payload: TodoPayload) => axios.post("/api/todos", payload),
    {
      onSettled: () => {
        queryClient.invalidateQueries(["TODO"]);
      },
    }
  );
};
