const sum = require('../sum');

test('더하기 테스트', () => {
	expect(sum(5, 6)).toBe(11);
	expect(sum(1 + 2, 5 - 3)).toBe(5);
});