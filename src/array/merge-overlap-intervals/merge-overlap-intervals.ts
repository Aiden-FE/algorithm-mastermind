/**
 * @description **合并区间**
 *
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 *
 * @inheritDoc https://leetcode.cn/leetbook/read/array-and-string/c5tv3/
 * @param intervals
 */
export default function mergeOverlapIntervals(intervals: [number, number][]): [number, number][] {
  return intervals
    .sort((a, b) => a[0] - b[0]) // 对所有区间进行排序
    .reduce((previousValue, currentValue) => {
      // 取最后一个区间进行比较
      const compareInterval = previousValue[previousValue.length - 1];
      // compareInterval 右区间 大于等于 currentValue 右区间 为全覆盖关系
      if (compareInterval && compareInterval[1] >= currentValue[1]) {
        return previousValue;
      }
      // compareInterval 右区间 大于等于 currentValue 左区间 为中间覆盖关系
      if (compareInterval && compareInterval[1] >= currentValue[0]) {
        // 直接修改引用
        // eslint-disable-next-line prefer-destructuring
        compareInterval[1] = currentValue[1];
        return previousValue;
      }
      // 其他情况直接加入previousValue
      previousValue.push(currentValue);
      return previousValue;
    }, [] as [number, number][]);
}

// 低效示例
// export default function mergeOverlapIntervals(intervals: [number, number][]): [number, number][] {
//   return intervals
//     .sort((a, b) => a[0] - b[0]) // 对所有区间进行排序
//     .reduce((previousValue, currentValue) => {
//       // 首次数组为空直接填充
//       if (!previousValue.length) {
//         return previousValue.concat([currentValue]);
//       }
//       // 取最后一个区间进行比较
//       const compareInterval = previousValue[previousValue.length - 1];
//       // compareInterval 右区间 大于等于 currentValue 右区间 为全覆盖关系
//       if (compareInterval[1] >= currentValue[1]) {
//         return previousValue;
//       }
//       // compareInterval 右区间 大于等于 currentValue 左区间 为中间覆盖关系
//       if (compareInterval[1] >= currentValue[0]) {
//         previousValue.splice(previousValue.length - 1, 1, [compareInterval[0], currentValue[1]]);
//         return previousValue;
//       }
//       return previousValue.concat([currentValue]);
//     }, [] as [number, number][]);
// }
