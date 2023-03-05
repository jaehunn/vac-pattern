import { rest } from "msw";

import { TodoValues } from "~/types/Todo";

export function handlers() {
  return [
    rest.get("/api/todos", getTodoList),
    rest.post("/api/todos", createTodo),
    rest.delete("/api/todos/:id", deleteTodo),
    rest.put("/api/todos/:id", updateTodo),
  ];
}

let TODO_LIST: TodoValues[] = [
  {
    id: 1,
    value: "아침에 할 일 입니다.",
    checked: false,
  },
  {
    id: 2,
    value: "점심에 할 일 입니다.",
    checked: false,
  },
  {
    id: 3,
    value: "저녁에 할 일 입니다.",
    checked: false,
  },
];

const getTodoList: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      data: TODO_LIST,
    })
  );
};

const createTodo: Parameters<typeof rest.post>[1] = async (req, res, ctx) => {
  try {
    const todoItem = await req.json();

    if (!todoItem?.value) throw new Error();

    TODO_LIST.push({
      id: TODO_LIST.length + 1,
      value: todoItem.value,
      checked: false,
    });

    return res(ctx.status(200));
  } catch (err) {
    return res(ctx.status(404));
  }
};

const deleteTodo: Parameters<typeof rest.post>[1] = async (req, res, ctx) => {
  try {
    const todoItemIndex = TODO_LIST.findIndex(
      (value) => `${value.id}` === req?.params?.id
    );

    if (todoItemIndex === -1) throw new Error("");

    TODO_LIST.splice(todoItemIndex, 1);

    return res(ctx.status(200));
  } catch (err) {
    return res(ctx.status(404));
  }
};

const updateTodo: Parameters<typeof rest.post>[1] = async (req, res, ctx) => {
  try {
    const todoItemIndex = TODO_LIST.findIndex(
      (value) => `${value.id}` === req?.params?.id
    );

    if (todoItemIndex === -1) throw new Error();

    const data = await req.json();

    if (!data?.value) throw new Error();

    TODO_LIST[todoItemIndex] = {
      ...TODO_LIST[todoItemIndex],
      ...data,
    };

    return res(ctx.status(200));
  } catch (err) {
    return res(ctx.status(404));
  }
};
