/**
 * @description **最长公共前缀**
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 提示：
 *
 * 1 <= strs.length <= 200
 *
 * 0 <= strs[i].length <= 200
 *
 * strs[i] 仅由小写英文字母组成
 * @param strs
 * @inheritDoc https://leetcode.cn/leetbook/read/array-and-string/ceda1/
 */
// 用时: 68ms 内存: 43.6MB 先排序后横向扫描
// export default function longestCommonPrefix(strs: string[]): string {
//   // 取出排序后的最短字符串
//   let result = strs.sort((a, b) => a.length - b.length)[0];
//   function isStartsWith(item: string) {
//     return item.startsWith(result);
//   }
//   while (result.length) {
//     // 当最短字符都成立时则结果确定
//     if (strs.every(isStartsWith)) {
//       return result;
//     }
//     // 否则缩短一位继续扫描
//     result = result.substring(0, result.length - 1);
//   }
//   return result;
// }

// 用时: 64ms 内存: 43.7MB 横向扫描,每次前后比较两个值(纵向扫描效果类似,不再实现)
export default function longestCommonPrefix(strs: string[]): string {
  let result = strs[0];
  // 遍历每个元素
  for (let i = 1; i < strs.length; i++) {
    // 枚举次数取最短
    let shortStr = result.length < strs[i].length ? result : strs[i];
    // 当前值与result值进行比对
    for (let j = 0; j < shortStr.length; j++) {
      // 如果不等,则截取前面相等的内容
      if (result[j] !== strs[i][j]) {
        shortStr = shortStr.slice(0, j);
        break;
      }
    }
    // 上面的循环是遍历最短元素,所以最终结果以最短元素为准
    result = shortStr;
    // 如果没有匹配元素则停止循环
    if (!result.length) {
      break;
    }
  }
  return result;
}
