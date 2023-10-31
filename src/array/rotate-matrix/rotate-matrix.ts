/**
 * @description **旋转矩阵**
 *
 * 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
 *
 * 不占用额外内存空间能否做到？
 * @param matrix n*n矩阵数据
 *
 * @inheritDoc https://leetcode.cn/leetbook/read/array-and-string/clpgd/
 */
export default function rotateMatrix(matrix: number[][]) {
  // 行转列
  matrix.forEach((row, rowIndex) => {
    // 每遍历一行,则意味着有一列已经处理过了
    for (let colIndex = rowIndex; colIndex < row.length; colIndex++) {
      // 原地交换位置
      [matrix[colIndex][rowIndex], matrix[rowIndex][colIndex]] = [
        matrix[rowIndex][colIndex],
        matrix[colIndex][rowIndex],
      ];
    }
  });
  // 行翻转
  matrix.forEach((row) => {
    for (let i = 0; i < row.length / 2; i++) {
      // 前后原地换位
      [row[i], row[row.length - 1 - i]] = [row[row.length - 1 - i], row[i]];
    }
  });
  return matrix;
}

// 使用了额外空间 通过规律定式实现 时间复杂度 O(n^2) 空间复杂度 O(n^2)
// export default function rotateMatrix(matrix: number[][]) {
//   // 规律: 当前位置: matrix[row][col] 旋转后 matrix[col][currentRow.length - rowIndex - 1] n-1是因为右开区间
//   const result = matrix.reduce((previousValue, currentRow, rowIndex) => {
//     currentRow.forEach((data, colIndex) => {
//       if (!previousValue[colIndex]) {
//         previousValue[colIndex] = [];
//       }
//       previousValue[colIndex][currentRow.length - rowIndex - 1] = data;
//     });
//     return previousValue;
//   }, [] as number[][]);
//   // 覆盖原值
//   // eslint-disable-next-line no-return-assign
//   matrix.forEach((_, index) => (matrix[index] = result[index]));
//   return matrix;
// }

// 使用额外空间 通过翻转实现 时间复杂度 O(n^2) 空间复杂度 O(n^2)
// export default function rotateMatrix(matrix: number[][]) {
//   const result = matrix.reduce((previousValue, currentRow, currentIndex) => {
//     // 行转列
//     currentRow.forEach((data, dataIndex) => {
//       if (!previousValue[dataIndex]) {
//         previousValue[dataIndex] = [];
//       }
//       previousValue[dataIndex][currentIndex] = data;
//     });
//     return previousValue;
//   }, [] as number[][]);
//   // 颠倒每行
//   return result.map((row) => row.reverse());
// }
