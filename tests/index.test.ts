import { greetUser } from '../src';

describe('greetUser', () => {
  it('should return a personalized greeting', () => {
    expect(greetUser('Boss')).toBe('Hello, Boss! Your memory system is active.');
  });
});
