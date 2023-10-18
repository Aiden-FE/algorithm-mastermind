import mergeStringsAlternately from './merge-alternately';

describe('交替合并字符串', () => {
  it("'abc' and 'pqr' should be 'apbqcr'", () => {
    expect(mergeStringsAlternately('abc', 'pqr')).toEqual('apbqcr');
  });

  it("'ab' and 'pqrs' should be 'apbqrs'", () => {
    expect(mergeStringsAlternately('ab', 'pqrs')).toEqual('apbqrs');
  });

  it("'abcd' and 'pq' should be 'apbqcd'", () => {
    expect(mergeStringsAlternately('abcd', 'pq')).toEqual('apbqcd');
  });
});
