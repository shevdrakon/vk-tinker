import {IPhotoRuleResult, PhotoRules} from './rules.types';
import {IVkPhoto} from '../vk/vk-api/photos/photos.types';

const regexp = /продан/gui;

const noComments = (): IPhotoRuleResult => ({
  key: PhotoRules.Sold,
  success: false,
  reason: 'Photo has no comments.',
});

const noSoldComment = (): IPhotoRuleResult => ({
  key: PhotoRules.Sold,
  success: false,
  reason: 'Unable to find sold comment by author.',
});

const checkSoldRule = (photo: IVkPhoto): IPhotoRuleResult => {
  const authorId = photo.owner_id;

  if (!photo.comments || !photo.comments.length)
    return noComments();

  const soldComment = photo.comments.find(x => x.from_id === authorId && regexp.test(x.text));
  if (!soldComment)
    return noSoldComment();

  return {
    key: PhotoRules.Sold,
    success: true,
    reason: 'Sold comment by author was found.'
  }
};

export default checkSoldRule;
