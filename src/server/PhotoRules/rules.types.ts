import {IPhoto} from '../vk/vk-api/photos/photos.types';
import {IVkComment} from '../vk/vk-api/comments/comments.type';

export type Photo = IPhoto & { comments: IVkComment[] }

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

export type PhotoRulesResult = Record<string, IPhotoRuleResult>;
