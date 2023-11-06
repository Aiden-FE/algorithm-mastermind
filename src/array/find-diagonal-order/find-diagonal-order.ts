/**
 * **对角线遍历**
 *
 * 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。
 *
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 104
 * 1 <= m * n <= 104
 * -105 <= mat[i][j] <= 105
 * @param mat
 * @inheritDoc https://leetcode.cn/leetbook/read/array-and-string/cuxq3/
 */
// 执行用时：88 ms 内存消耗：47.6 MB 双指针解法 时间复杂度O(m*n) 空间复杂度O(3)
export default function findDiagonalOrder(mat: number[][]): number[] {
  let row = 0;
  let col = 0;
  const result: number[] = [];
  // 根据对角线长度遍历
  while (row < mat.length && col < mat[0].length) {
    result.push(mat[row][col]);
    // 偶数向上移动指针
    if ((row + col) % 2 === 0) {
      // 当列标大于等于 n,说明右侧已经触边,下移行标
      if (col >= mat[0].length - 1) {
        row += 1;
      } else if (row === 0) {
        // 当列标等于 0,说明顶部已经触边,后移列标
        col += 1;
      } else {
        // 沿对角线方向移动
        row -= 1;
        col += 1;
      }
    } else {
      // 当行标大于等于 m,说明底部已经触边,右移列标
      // eslint-disable-next-line no-lonely-if
      if (row >= mat.length - 1) {
        col += 1;
      } else if (col === 0) {
        // 当列标为0,说明左侧已经触边,下移行标
        row += 1;
      } else {
        // 沿对角线方向移动
        row += 1;
        col -= 1;
      }
    }
  }
  return result;
}
