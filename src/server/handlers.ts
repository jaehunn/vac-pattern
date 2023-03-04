import { rest } from "msw";

export function handlers() {
  return [rest.get("/api/todos", getTodoList)];
}

const getTodoList: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      data: [
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
      ],
    })
  );
};
