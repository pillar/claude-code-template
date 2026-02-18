import { greetUser } from '../src';

describe('greetUser', () => {
  it('should return a concise greeting', () => {
    expect(greetUser('Boss')).toBe('Hello, Boss. Memory live.');
  });
});
