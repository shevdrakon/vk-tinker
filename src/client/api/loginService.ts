import createGateway from './createGateway';
import {IVkLoginStatus} from '../../server/vk/vk-api/openapi.types';

export interface ILoginService {
  login: (arg: string | IVkLoginStatus) => Promise<any>;
}

const createLoginService = (config: IAppConfig): ILoginService => {
  const gateway = createGateway({baseUrl: config.baseUrl});

  const login = async (arg: string | IVkLoginStatus) => {
    const response = await gateway.post('/login', arg);
  };

  return {
    login,
  };
};

export default createLoginService;
