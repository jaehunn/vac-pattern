import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export type Todo = {
  id: number;
  value: string;
  checked: boolean;
};

export const useTodoList = () => {
  return useQuery(
    ["TODO", "todos"],
    () => axios.get<{ data: Todo[] }>("/api/todos"),
    {
      select: ({ data }) => data?.data,
    }
  );
};
