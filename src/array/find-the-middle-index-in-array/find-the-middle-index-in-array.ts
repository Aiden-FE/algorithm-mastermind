/**
 * @description **寻找数组的中心索引**
 *
 * 给你一个整数数组nums ，请计算数组的 中心下标 。
 *
 * 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
 *
 * 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。
 *
 * 如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。
 * @param nums
 * @inheritDoc https://leetcode-cn.com/problems/find-the-middle-index-in-array/
 */
export default function findTheMiddleIndexInArray(nums: number[]): number {
  // 一次循环求出总和
  const totalSum = nums.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (currentSum === totalSum - nums[i] - currentSum) {
      return i;
    }
    // 累加左侧总和
    currentSum += nums[i];
  }

  return -1;
}

// 低效示例: 时间复杂度过高 O(n^2)
// export default function findTheMiddleIndexInArray(nums: number[]): number {
//   for (let i = 0; i < nums.length; i++) {
//     let leftSum = 0;
//     let rightSum = 0;
//
//     // 左右两侧求和
//     for (let j = 0; j < nums.length; j++) {
//       if (j < i) {
//         leftSum += nums[j];
//       } else if (j > i) {
//         rightSum += nums[j];
//       }
//     }
//
//     if (leftSum === rightSum) {
//       return i;
//     }
//   }
//
//   return -1;
// }
