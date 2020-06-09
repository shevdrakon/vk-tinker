import {IPhotoRuleResult, Photo, PhotoRules} from './rules.types';

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

const checkSoldRule = (photo: Photo): IPhotoRuleResult => {
  const regexp = /продан/gui;
  const authorId = photo.user_id;

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
