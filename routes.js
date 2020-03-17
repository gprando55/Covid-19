import { Router } from "express";

const routes = new Router();

routes.get("/", async (req, res) => {
  const teste = await axios.get("https://api.github.com/users/alfredosavi");
  return res.json(teste);
});

export default routes;
