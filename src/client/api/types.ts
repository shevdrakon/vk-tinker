import {ILoginService} from './loginService';
import {IVkAuthService} from './VkAuth';

export interface IApiServices {
  loginService: ILoginService;
  vkAuthService: IVkAuthService;
}
