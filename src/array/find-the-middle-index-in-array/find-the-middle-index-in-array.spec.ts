import findTheMiddleIndexInArray from './find-the-middle-index-in-array';

describe('寻找数组的中心索引', () => {
  it('Provide [1, 7, 3, 6, 5, 6] should be 3', () => {
    expect(findTheMiddleIndexInArray([1, 7, 3, 6, 5, 6])).toEqual(3);
  });

  it('Provide [1, 2, 3] should be -1', () => {
    expect(findTheMiddleIndexInArray([1, 2, 3])).toEqual(-1);
  });

  it('Provide [2, 1, -1] should be 0', () => {
    expect(findTheMiddleIndexInArray([2, 1, -1])).toEqual(0);
  });

  it('Provide [1, -1, 2] should be 2', () => {
    expect(findTheMiddleIndexInArray([1, -1, 2])).toEqual(2);
  });
});
