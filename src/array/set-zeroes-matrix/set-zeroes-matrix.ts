/**
 * @description **设置0矩阵**
 *
 * 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
 *
 * @inheritDoc https://leetcode.cn/leetbook/read/array-and-string/ciekh/
 */
// 执行用时：80 ms 内存消耗：44.4 MB
export default function setZeroesMatrix(matrix: number[][]) {
  // 用布尔值标记,避免再次遍历结果集
  const columnIndexes: boolean[] = new Array(matrix[0].length).fill(false);
  const rowIndexes: boolean[] = new Array(matrix.length).fill(false);
  // 找出所有行列
  matrix.forEach((row, rowIndex) => {
    row.forEach((data, colIndex) => {
      if (data === 0) {
        // 行列设为true
        columnIndexes[colIndex] = true;
        rowIndexes[rowIndex] = true;
      }
    });
  });
  matrix.forEach((row, rowIndex) => {
    // 当行命中时清空行即可
    if (rowIndexes[rowIndex]) {
      row.fill(0);
    } else {
      // 否则清空匹配列
      row.forEach((data, colIndex) => {
        if (columnIndexes[colIndex]) {
          row[colIndex] = 0;
        }
      });
    }
  });
}

// 执行用时：88 ms 内存消耗：44.4 MB
// export default function setZeroesMatrix(matrix: number[][]) {
//   const columnIndexes: number[] = [];
//   const rowIndexes: number[] = [];
//   // 找出所有行列
//   matrix.forEach((row, rowIndex) => {
//     row.forEach((data, colIndex) => {
//       if (data === 0) {
//         if (!columnIndexes.includes(colIndex)) {
//           columnIndexes.push(colIndex);
//         }
//         if (!rowIndexes.includes(rowIndex)) {
//           rowIndexes.push(rowIndex);
//         }
//       }
//     });
//   });
//   columnIndexes.forEach((colIndex) => {
//     matrix.forEach((row, rowIndex) => {
//       if (rowIndexes.includes(rowIndex)) {
//         row.fill(0);
//       } else {
//         row[colIndex] = 0;
//       }
//     });
//   });
// }
