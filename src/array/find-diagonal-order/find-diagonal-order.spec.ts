import findDiagonalOrder from './find-diagonal-order';

describe('对角线遍历', () => {
  it('should be "[1, 2, 4, 7, 5, 3, 6, 8, 9]"', () => {
    const data = findDiagonalOrder([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    console.log('debug: ', data);
    expect(data).toMatchObject([1, 2, 4, 7, 5, 3, 6, 8, 9]);
  });

  it('should be "[1, 2, 3, 4]"', () => {
    const data = findDiagonalOrder([
      [1, 2],
      [3, 4],
    ]);
    console.log('debug2: ', data);
    expect(data).toMatchObject([1, 2, 3, 4]);
  });
});
