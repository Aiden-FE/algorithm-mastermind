import searchOrInsertInAESSortedArray from './search-or-insert-in-aes-sorted-array';

describe('搜索插入位置', () => {
  it('Provide "[1,3,5,6]" and "5", the return value should be "2"', () => {
    expect(searchOrInsertInAESSortedArray([1, 3, 5, 6], 5)).toEqual(2);
  });
  it('Provide "[1,3,5,6]" and "2", the return value should be "1"', () => {
    expect(searchOrInsertInAESSortedArray([1, 3, 5, 6], 2)).toEqual(1);
  });
  it('Provide "[1,3,5,6]" and "7", the return value should be "4"', () => {
    expect(searchOrInsertInAESSortedArray([1, 3, 5, 6], 7)).toEqual(4);
  });
});
