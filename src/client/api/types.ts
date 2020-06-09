import {ILoginService} from './loginService';
import {IVkAuthService} from './VkAuth';
import {IPhotosService} from './photosService';
import {IViolationService} from './violationsService';

export interface IApiServices {
  loginService: ILoginService;
  photosService: IPhotosService;
  violationsService: IViolationService;
  vkAuthService: IVkAuthService;
}
