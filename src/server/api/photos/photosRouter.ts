import {FastifyInstance} from 'fastify';
import PhotosController from './PhotosController';

const photosRouter = async (app: FastifyInstance) => {
  app.get('/photos', (request, reply) => {
      return new PhotosController(request, reply).getPhotos();
    },
  );

  app.get('/albums', (request, reply) => {
      return new PhotosController(request, reply).getAlbums();
    },
  );

  app.get('/albums/:album_id/photos', (request, reply) => {
      const {album_id} = request.params;
      const args = {
        album_id: Number(album_id),
      }

      return new PhotosController(request, reply).getPhotos(args);
    },
  );

  app.put('/albums/:target_album_id/photos',
    {
      schema: {
        params: {
          target_album_id: {
            type: 'number',
            required: ['target_album_id'],
          },
        },
        body: {
          type: 'object',
          required: ['photos'],
          properties: {
            photos: {
              type: 'array',
              items: {type: 'number'}
            },
          }
        }
      },
    }, (request, reply) => {
      const {target_album_id} = request.params;
      const photosIds = request.body.photos as number[];

      const args = {
        target_album_id,
        photosIds,
      }

      return new PhotosController(request, reply).movePhotos(args);
    },
  );
};

export default photosRouter;
