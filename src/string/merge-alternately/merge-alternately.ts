/**
 * @description **交替合并字符串参数**
 *
 * 给你两个字符串 word1 和 word2 。
 * 请你从 word1 开始，通过交替添加字母来合并字符串。
 * 如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。
 * @returns {string} 合并后的字符串
 * @inheritDoc https://leetcode.cn/problems/merge-strings-alternately
 *
 * @todo 使用指针模式单次循环解决问题
 */
export default function mergeStringsAlternately(...strs: string[]): string {
  const maxInfo = {
    index: 0,
    length: 0,
  };
  const result: string[] = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > maxInfo.length) {
      maxInfo.index = i;
      maxInfo.length = strs[i].length;
    }
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < maxInfo.length; i++) {
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== undefined) {
        result.push(strs[j][i]);
      }
    }
  }

  return result.join('');
}
