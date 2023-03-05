import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { TodoValues } from "~/types/Todo";

export const useTodoList = () => {
  return useQuery(
    ["TODO", "todos"],
    () => axios.get<{ data: TodoValues[] }>("/api/todos"),
    {
      select: ({ data }) => data?.data,
    }
  );
};
