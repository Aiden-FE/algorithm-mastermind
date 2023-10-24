import mergeOverlapIntervals from './merge-overlap-intervals';

describe('合并区间', () => {
  it('The return value should be [[1, 6], [8, 10], [15, 18]]', () => {
    expect(
      mergeOverlapIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ]),
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });
  it('The return value should be [[1, 5]]', () => {
    expect(
      mergeOverlapIntervals([
        [1, 4],
        [4, 5],
      ]),
    ).toEqual([[1, 5]]);
  });
});
