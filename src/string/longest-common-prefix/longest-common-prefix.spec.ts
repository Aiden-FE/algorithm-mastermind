import longestCommonPrefix from './longest-common-prefix';

describe('最长公共前缀', () => {
  it('存在公共前缀', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
  });
  it('不存在公共前缀', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
  });
  it('前长后短用例', () => {
    expect(longestCommonPrefix(['ab', 'a'])).toEqual('a');
  });
});
