import {IPhoto} from '../../../server/vk/vk-api/photos/photos.types';
import {IVkComment} from '../../../server/vk/vk-api/comments/comments.type';
import {IPhotoRuleResult} from '../../../server/PhotoRules/rules.types';

export enum PhotosState {
  initial = 'initial',
  processing = 'processing',
  success = 'success',
  error = 'error',
}

export enum PhotosActionsMode {
  view = 'view',
  edit = 'edit',
}

export interface IDashboardPhoto extends IPhoto {
  comments: IVkComment[];
  rules: Record<string, IPhotoRuleResult>;
}

export interface IPhotosState {
  photosState: PhotosState;
  items: IDashboardPhoto[];
  itemsTotalCount: number;
  selected: Record<number, boolean>;
}
