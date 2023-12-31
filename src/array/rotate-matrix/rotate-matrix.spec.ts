import rotateMatrix from './rotate-matrix';

describe('旋转矩阵', () => {
  it('3*3矩阵旋转90度', () => {
    const data = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    rotateMatrix(data);
    expect(data).toMatchObject([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  it('4*4矩阵旋转90度', () => {
    const data = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];
    rotateMatrix(data);
    expect(data).toMatchObject([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });
});
