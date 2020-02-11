let sequence_id = 1;
const projects = [
  {
  id:1,
  title: "Primeiro Projeto",
  tasks: ["Primeira Tarefa"]
}];

function getNextId(){
  return ++sequence_id;
}

module.exports = {
    async listar (req, res){
        return res.json(projects);  
    },
    async buscarPorId (req, res){
 
        let id = req.params.id;
        let project = projects.find(function(project){
          return project.id == id;
        });
        
        if (project) {
          return res.json(project);
        }
    },
    async cadastrar(req, res){
        const { title , tasks} = req.body;
        const newProject = {id: getNextId(),
                            title,
                            tasks};
        projects.push(newProject);
      
        return res.json(newProject);
    },
    async editar(req, res){
        const {id} = req.params;
        const { title } = req.body;
      
        let project = projects.find(p => p.id == id);
      
        project.title = title;
      
        return res.json(project);
    },
    async deletar(req, res){
        const {id} = req.params;
        let indexProject = projects.findIndex(p => p.id == id);

        if (indexProject >= 0){
            projects.splice(indexProject, 1);
        }
        return res.json({sucesso: "Projeto deletado com sucesso!"});
    },
    async adicionarTarefa(req, res){
    
        const { id } = req.params;
        const { title } = req.body;
        let project = projects.find(p => p.id == id);
        project.tasks.push(title);
      
        return res.json(project);
    },
    async checkProjectsExists(req, res, next) {
        const { id } = req.params;
        let project = projects.find(p => p.id == id);
        if(!project){
            return res.status(400).json({error:`Projeto com id ${id} não encontrado!`});
        }
      
        return next();
      }     
}