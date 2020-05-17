import {IVkPhoto} from '../vk/vk-api/photos/photos.types';

export enum PhotoRules {
  Sold = 'sold',
  Brand = 'brand',
  Size = 'size',
}

export interface IPhotoRuleResult {
  key: PhotoRules;
  success: boolean;
  reason: string;
}

export interface IPhotoWithRulesResult {
  photo: IVkPhoto;
  result: {
    [key in PhotoRules]: IPhotoRuleResult;
  };
}
