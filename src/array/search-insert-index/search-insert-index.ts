/**
 * @description **搜索插入位置**
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 请必须使用时间复杂度为 O(log n) 的算法。
 *
 * @inheritDoc https://leetcode.cn/leetbook/read/array-and-string/cxqdh/
 * @param nums 升序排序后的number数组
 * @param target 目标number
 */
export default function searchInsertIndex(nums: number[], target: number): number {
  let leftIndex = 0; // 左闭
  let rightIndex = nums.length; // 右开
  // 非空区间
  while (leftIndex < rightIndex) {
    // 使用二分查找算法, 首先取中间下标
    // eslint-disable-next-line no-bitwise
    const middleIndex = (((rightIndex - leftIndex) / 2) >> 1) + leftIndex;
    if (target > nums[middleIndex]) {
      // 大于当前位置则左侧起始下标应该移动至当前 + 1
      leftIndex = middleIndex + 1;
    } else if (target === nums[middleIndex]) {
      return middleIndex;
    } else {
      // 小于或等于当前位置右侧下标移动至当前位置, 右开区间,不用 -1
      rightIndex = middleIndex;
    }
  }
  return leftIndex;
}

// // 低效示例: 暴力遍历 O(n)
// export default function searchOrInsertInAESSortedArray(nums: number[], target: number): number {
//   for (let i = 0; i < nums.length; i++) {
//     // 小于或等于当前位置返回当前下标
//     if (target <= nums[i]) {
//       return i;
//     }
//   }
//   // 兜底逻辑
//   return nums.length;
// }
