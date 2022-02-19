import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_APIURL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "ulegueh",
        },
        {
          id: 2,
          name: "marioh",
        },
      ])
    );
  }),
];
