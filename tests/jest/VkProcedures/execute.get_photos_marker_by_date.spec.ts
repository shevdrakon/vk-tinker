import procedure from './execute.get_photos_marker_by_date';

describe('execute.get_photos_marker_by_date', () => {
  test('should return points with stepSize', () => {
    const actual = procedure({stepSize: 2, end_date: 15, start_date: 10});
    expect(actual.range).toEqual([0, 2]);
  });

  test('should return points with stepSize 1', () => {
    const actual = procedure({stepSize: 1, end_date: 4, start_date: 3});
    expect(actual.range).toEqual([8, 9]);
  });

  test('should return points with stepSize 2', () => {
    const actual = procedure({stepSize: 2, end_date: 6, start_date: 3});
    expect(actual.range).toEqual([6, 10]);
  });

  test('should return points with stepSize 3', () => {
    const actual = procedure({stepSize: 3, end_date: 6, start_date: 1});
    expect(actual.range).toEqual([6, 12]);
  });

  test('should return points with stepSize 4', () => {
    const actual = procedure({stepSize: 4, end_date: 6, start_date: 4});
    expect(actual.range).toEqual([4, 8]);
  });
});
