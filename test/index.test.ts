import * as assert from 'power-assert';
import colors from '../src/index';

describe('colors', () => {
  it('should return TypeScript color', () => {
    assert.strictEqual(colors.TypeScript, "#2b7489");
  });

  it('should return Unix Assembly color', () => {
    assert.strictEqual(colors['Unix Assembly'], "#6E4C13");
  });
});
