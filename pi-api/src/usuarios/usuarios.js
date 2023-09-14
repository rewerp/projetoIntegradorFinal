import { DatabasePostgres } from '../../database-postgres.js';

export class Usuarios {
  async usuarioPost(request, response) {
    const { title, description, duration } = request.body;
    const database = new DatabasePostgres();
  
    await database.create({
      title: title,
      description: description,
      duration: duration,
    });
  
    return response.status(201).send({ "mensagem": "Usuário cadastrado com sucesso!" });
  };
  
  async usuariosGet(request, response) {
    const database = new DatabasePostgres();
    const search = request.query.search;
    const videos = await database.list(search);

    return response.status(200).send(videos);
  };
  
  // server.put('/videos/:id', async (request, response) => {
  //   const videoId = request.params.id;
  //   const { title, description, duration } = request.body;
  
  //   await database.update(videoId, {
  //     title: title,
  //     description: description,
  //     duration: duration,
  //   });
  
  //   return response.status(204).send();
  // });
  
  // server.delete('/videos/:id', async (request, response) => {
  //   const videoId = request.params.id;
  
  //   await database.delete(videoId);
  
  //   return response.status(204).send();
  // });
};