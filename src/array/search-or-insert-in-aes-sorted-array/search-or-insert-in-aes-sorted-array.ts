/**
 * @description **搜索插入位置**
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 请必须使用时间复杂度为 O(log n) 的算法。
 *
 * @inheritDoc https://leetcode.cn/leetbook/read/array-and-string/cxqdh/
 * @param aesSortedNums
 * @param target
 */
export default function searchOrInsertInAESSortedArray(aesSortedNums: number[], target: number): number {
  for (let i = 0; i < aesSortedNums.length; i++) {
    if (aesSortedNums[i] === target) {
      return i;
    }
  }
  return -1;
}
