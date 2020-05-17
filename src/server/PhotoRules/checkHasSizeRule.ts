import {IPhotoRuleResult, PhotoRules} from './rules.types';
import {IVkPhoto} from '../vk/vk-api/photos/photos.types';

const regexp = /размер/gui;

const success = (reason: string): IPhotoRuleResult => ({
  key: PhotoRules.Size,
  success: true,
  reason,
});

const keywordNotFound = (): IPhotoRuleResult => ({
  key: PhotoRules.Size,
  success: false,
  reason: 'Size keyword was not found in description/comments by author.'
});

const checkHasSizeRule = (photo: IVkPhoto): IPhotoRuleResult => {
  const authorId = photo.owner_id;

  if (regexp.test(photo.text))
    return success('Size keyword found in photo description.');

  if (!photo.comments || !photo.comments.length)
    return keywordNotFound();

  const sizeComment = photo.comments.find(x => x.from_id === authorId && regexp.test(x.text));
  if (!sizeComment)
    return keywordNotFound();

  return success('Size keyword was found in comments by author');
};

export default checkHasSizeRule;
