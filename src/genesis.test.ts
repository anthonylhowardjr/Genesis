import { Genesis } from './genesis';

describe(`A Genesis instance`, () => {
  let genesis: Genesis;

  beforeEach(() => {
    genesis = new Genesis();
  });

  describe(`upon instantiation`, () => {
    test('should not be null', () => {
      expect(genesis).not.toBeNull();
      expect(genesis).toBeTruthy();
    });
  });
});
