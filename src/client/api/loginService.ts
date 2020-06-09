import createGateway from './createGateway';
import {IVkLoginStatus} from '../../server/vk/vk-api/openapi.types';
import {TokenTypes} from '../../server/vk/acl/acl.types';
import {ISessionUser} from '../../../types/fastify';

type LoginArg = ({ access_token: string } | IVkLoginStatus) & { access_level: TokenTypes };

export interface ILoginService {
  login: (arg: LoginArg) => Promise<ISessionUser>;
}

const createLoginService = (config: IAppConfig): ILoginService => {
  const gateway = createGateway({baseUrl: config.baseUrl});

  const login = (arg) => gateway.post('/login', arg);

  return {
    login,
  };
};

export default createLoginService;
