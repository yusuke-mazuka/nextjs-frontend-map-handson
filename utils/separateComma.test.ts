import { separateComma } from './separateComma';

test('3桁の数値をカンマ区切りの文字列に直す（カンマが付かないケース）', () => {
  expect(separateComma(999)).toBe('999');
});

test('5桁の数値をカンマ区切りの文字列に直す', () => {
  expect(separateComma(30000)).toBe('30,000');
});

test('8桁の数値をカンマ区切りの文字列に直す', () => {
  expect(separateComma(15000000)).toBe('15,000,000');
});
