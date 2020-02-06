import { Router } from "express";

const routes = new Router();

routes.post('/projects', (req, res) => {
  res.json({ msg: "Agora vai" });
});

routes.get('/projects', (req, res) => {
  res.json({ msg: "Agora vai" });
});

routes.put('/projects/:id', (req, res) => {
  res.json({ msg: "Agora vai" });
});

routes.delete('/projects/:id', (req, res) => {
  res.json({ msg: "Agora vai" });
});

routes.post('/projects/:id/tasks', (req, res) => {
  res.json({ msg: "Agora vai" });
});

export default routes;