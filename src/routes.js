import { Router } from "express";

const routes = new Router();

let sequence_id = 1;
const projects = [
  {
  id:1,
  title: "Primeiro Projeto",
  tasks: ["Primeira Tarefa"]
}]

function getNextId(){
  return ++sequence_id;
}

routes.post('/projects', (req, res) => {
  res.json(projects);
});

routes.get('/projects', (req, res) => {
  res.json(projects);
});

routes.get('/projects/:id', (req, res) => {
  let id = req.params.id
  let project = projects.find(function(project){
    return project.id == id;
  });

  if (project) {
    return res.json(project);
  }
  
  return res.json({erro: "Projeto não encontrado com id ".concat(id)});
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
