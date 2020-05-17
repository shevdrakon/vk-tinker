import createGateway from './createGateway';
import {IVkLoginStatus} from '../../server/vk/vk-api/openapi.types';
import {TokenTypes} from '../../server/vk/acl/acl.types';

type LoginArg = ({ access_token: string } | IVkLoginStatus) & { access_level: TokenTypes };

export interface ILoginService {
  login: (arg: LoginArg) => Promise<any>;
}

const createLoginService = (config: IAppConfig): ILoginService => {
  const gateway = createGateway({baseUrl: config.baseUrl});

  const login = async (arg) => {
    const response = await gateway.post('/login', arg);
  };

  return {
    login,
  };
};

export default createLoginService;
