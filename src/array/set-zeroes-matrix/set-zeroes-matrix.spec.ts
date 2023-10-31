import setZeroesMatrix from './set-zeroes-matrix';

describe('设置0矩阵', () => {
  it('中央0矩阵', () => {
    const data = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    setZeroesMatrix(data);
    expect(data).toMatchObject([
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ]);
  });

  it('四角0矩阵', () => {
    const data = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ];
    setZeroesMatrix(data);
    expect(data).toMatchObject([
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ]);
  });
});
