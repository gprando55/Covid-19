import { Router } from "express";

const routes = new Router();

routes.get("/", async (req, res) => {
  const teste = await axios.get("hhttps://api.github.com/users/alfredosavittp");
  return res.json(teste);
});

export default routes;
