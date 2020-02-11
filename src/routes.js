import { Router } from "express";
import ProjectsCtrl from "./app/controllers/ProjectsController";

const routes = new Router();

let contadorDeRequesicoes = 0;

routes.use((req, res, next) => {
  console.log("Requisição numero ", ++contadorDeRequesicoes);
  next();
});

routes.post('/projects', ProjectsCtrl.cadastrar);
routes.get('/projects', ProjectsCtrl.listar);
routes.get('/projects/:id', ProjectsCtrl.checkProjectsExists, ProjectsCtrl.buscarPorId);
routes.put('/projects/:id', ProjectsCtrl.checkProjectsExists, ProjectsCtrl.editar);
routes.delete('/projects/:id', ProjectsCtrl.checkProjectsExists, ProjectsCtrl.deletar);
routes.post('/projects/:id/tasks', ProjectsCtrl.checkProjectsExists, ProjectsCtrl.adicionarTarefa);

export default routes;
