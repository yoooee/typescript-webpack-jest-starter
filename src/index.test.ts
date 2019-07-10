import { Index } from './index';

describe('Index', () => {
  test('should not be null', () => {
    const index = new Index();
    expect(index).not.toBeNull();
  });
});
