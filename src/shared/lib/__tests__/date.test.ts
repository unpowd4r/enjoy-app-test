import { formatDate } from '../date';

describe('formatDate', () => {
  it('should return correct date', () => {
    expect(formatDate('invalid date')).toBe('Invalid Date');

    expect(formatDate('2022.11.22')).toBe('22.11.2022');
  });
});
