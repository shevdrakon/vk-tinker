import checkSoldRule from '../../../src/server/PhotoRules/checkSoldRule';

import createPartialMock from '../.utils/createPartialMock';
import {IVkPhoto} from '../../../src/server/vk/vk-api/photos/vk.photos.types';
import {PhotoRules} from '../../../src/server/PhotoRules/rules.types';
import {IVkComment} from '../../../src/server/vk/vk-api/comments/comments.type';

describe('Check sold rule', () => {
  test('should return false status if photo with no comments', () => {
    const photo = createPartialMock<IVkPhoto>({
      owner_id: 1,
      comments: [],
    });

    const actual = checkSoldRule(photo);

    expect(actual.success).toEqual(false);
    expect(actual.key).toEqual(PhotoRules.Sold);
  });

  test('should return false status if photo with comments but without sold out in text', () => {
    const photo = createPartialMock<IVkPhoto>({
      owner_id: 1,
      comments: [
        createPartialMock<IVkComment>({from_id: 2, text: 'test'}),
      ]
    });

    const actual = checkSoldRule(photo);

    expect(actual.success).toEqual(false);
    expect(actual.key).toEqual(PhotoRules.Sold);
  });

  test('should return false status if photo with sold comment by not author', () => {
    const photo = createPartialMock<IVkPhoto>({
      owner_id: 1,
      comments: [
        createPartialMock<IVkComment>({from_id: 2, text: 'продан'}),
      ]
    });

    const actual = checkSoldRule(photo);

    expect(actual.success).toEqual(false);
    expect(actual.key).toEqual(PhotoRules.Sold);
  });

  test('should return true status if photo with sold comment by author', () => {
    const photo = createPartialMock<IVkPhoto>({
      owner_id: 1,
      comments: [
        createPartialMock<IVkComment>({from_id: 1, text: 'продан'}),
      ]
    });

    const actual = checkSoldRule(photo);

    expect(actual.success).toEqual(true);
    expect(actual.key).toEqual(PhotoRules.Sold);
  });

  test('should return true status if photo with sold comment by author and ignore case', () => {
    const photo = createPartialMock<IVkPhoto>({
      owner_id: 1,
      comments: [
        createPartialMock<IVkComment>({from_id: 1, text: 'пРоДанЫ'}),
      ]
    });

    const actual = checkSoldRule(photo);

    expect(actual.success).toEqual(true);
    expect(actual.key).toEqual(PhotoRules.Sold);
  });
});
