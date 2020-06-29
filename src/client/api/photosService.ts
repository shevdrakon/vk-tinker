import qs from 'querystring';
import createGateway from './createGateway';
import {IGetPhotosResponse, IGetAlbumsResponse} from '../../server/api/photos/types';

export interface IPhotosService {
  getPhotos: (args: { start: number; page: number; }) => Promise<IGetPhotosResponse>;
  getAlbums: () => Promise<IGetAlbumsResponse>
  getAlbumPhotos: (args: { albumId: number }) => Promise<IGetPhotosResponse>;
  movePhotos: (args: { targetAlbumId: number; photosIds: number[] }) => Promise<void>;
}

const createUserService = (config: IAppConfig): IPhotosService => {
  const gateway = createGateway({baseUrl: config.baseUrl});

  const getPhotos = (args) => {
    const query = qs.stringify(args);

    return gateway.get(`/photos?${query}`);
  }

  const getAlbums = () => gateway.get('/albums');
  const getAlbumPhotos = ({albumId}) => gateway.get(`/albums/${albumId}/photos`);

  const movePhotos = ({targetAlbumId, photosIds}) => {
    const body = {
      photos: photosIds,
    };

    return gateway.put(`/albums/${targetAlbumId}/photos`, body);
  }

  return {
    getPhotos,
    getAlbums,
    getAlbumPhotos,
    movePhotos,
  };
};

export default createUserService;
