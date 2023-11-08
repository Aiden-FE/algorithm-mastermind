import longestPalindrome from './longest-palindrome';

describe('最长回文子串', () => {
  it('Provide "babad" should be "bab" or "aba"', () => {
    expect(longestPalindrome('babad')).toContainEqual(expect.stringMatching(/^(bab|aba)$/));
  });
  it('Provide "cbbd" should be "bb"', () => {
    expect(longestPalindrome('cbbd')).toEqual('bb');
  });
});
