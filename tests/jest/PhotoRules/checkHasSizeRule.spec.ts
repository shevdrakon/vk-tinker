import checkHasSizeRule from '../../../src/server/PhotoRules/checkHasSizeRule';

import createPartialMock from '../.utils/createPartialMock';
import {IVkPhoto} from '../../../src/server/vk/vk-api/photos/vk.photos.types';
import {PhotoRules} from '../../../src/server/PhotoRules/rules.types';
import {IVkComment} from '../../../src/server/vk/vk-api/comments/comments.type';

describe('Check has size rule', () => {
  test('should return false status if photo with no comments and undefined text', () => {
    const photo = createPartialMock<IVkPhoto>({
      owner_id: 1,
      comments: [],
    });

    const actual = checkHasSizeRule(photo);

    expect(actual.success).toEqual(false);
    expect(actual.key).toEqual(PhotoRules.Size);
  });

  test('should return false status if photo with no comments and empty text', () => {
    const photo = createPartialMock<IVkPhoto>({
      owner_id: 1,
      comments: [],
      text: '',
    });

    const actual = checkHasSizeRule(photo);

    expect(actual.success).toEqual(false);
    expect(actual.key).toEqual(PhotoRules.Size);
  });

  test('should return false status if photo with comments but without sold out in text', () => {
    const photo = createPartialMock<IVkPhoto>({
      owner_id: 1,
      text: 'test',
      comments: [
        createPartialMock<IVkComment>({from_id: 2, text: 'test'}),
      ]
    });

    const actual = checkHasSizeRule(photo);

    expect(actual.success).toEqual(false);
    expect(actual.key).toEqual(PhotoRules.Size);
  });

  test('should return false status if photo with size comment by not author', () => {
    const photo = createPartialMock<IVkPhoto>({
      owner_id: 1,
      comments: [
        createPartialMock<IVkComment>({from_id: 2, text: 'размер 27'}),
      ]
    });

    const actual = checkHasSizeRule(photo);

    expect(actual.success).toEqual(false);
    expect(actual.key).toEqual(PhotoRules.Size);
  });

  test('should return true status if photo with size text', () => {
    const photo = createPartialMock<IVkPhoto>({
      owner_id: 1,
      text: 'длинный текст. Размер 27.',
      comments: [
        createPartialMock<IVkComment>({from_id: 1, text: 'размер 27'}),
      ]
    });

    const actual = checkHasSizeRule(photo);

    expect(actual.success).toEqual(true);
    expect(actual.key).toEqual(PhotoRules.Size);
  });

  test('should return true status if photo with size text ignore case', () => {
    const photo = createPartialMock<IVkPhoto>({
      owner_id: 1,
      text: 'длинный текст. Размер 27.',
      comments: [
        createPartialMock<IVkComment>({from_id: 1, text: 'РаЗМеР 27'}),
      ]
    });

    const actual = checkHasSizeRule(photo);

    expect(actual.success).toEqual(true);
    expect(actual.key).toEqual(PhotoRules.Size);
  });

  test('should return true status if photo with size comment by author', () => {
    const photo = createPartialMock<IVkPhoto>({
      owner_id: 1,
      comments: [
        createPartialMock<IVkComment>({from_id: 1, text: 'РазмеР 27.'}),
      ]
    });

    const actual = checkHasSizeRule(photo);

    expect(actual.success).toEqual(true);
    expect(actual.key).toEqual(PhotoRules.Size);
  });
});
