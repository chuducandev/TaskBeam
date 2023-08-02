import {
  convertDateToString,
  convertStringToDate,
  correctDateTextValue,
} from '../DateTextField.utils';

describe('correctDateTextValue', () => {
  it('should correctly add slash after the year', () => {
    const value = '2023';
    const previousValue = '202';
    const result = correctDateTextValue(value, previousValue);
    expect(result).toBe('2023/');
  });

  it('should validate the month', () => {
    const value = '2023/12';
    const previousValue = '2023/1';
    const result = correctDateTextValue(value, previousValue);
    expect(result).toBe('2023/12/');
  });

  it('should reject an invalid month', () => {
    const value = '2023/13';
    const previousValue = '2023/1';
    const result = correctDateTextValue(value, previousValue);
    expect(result).toBe('2023/1');
  });

  it('should validate the day', () => {
    const value = '2023/12/31';
    const previousValue = '2023/12/3';
    const result = correctDateTextValue(value, previousValue);
    expect(result).toBe('2023/12/31 ');
  });

  it('should reject an invalid day', () => {
    const value = '2023/12/32';
    const previousValue = '2023/12/3';
    const result = correctDateTextValue(value, previousValue);
    expect(result).toBe('2023/12/3');
  });

  it('should validate the hour', () => {
    const value = '2023/12/31 23';
    const previousValue = '2023/12/31 2';
    const result = correctDateTextValue(value, previousValue);
    expect(result).toBe('2023/12/31 23:');
  });

  it('should reject an invalid hour', () => {
    const value = '2023/12/31 24';
    const previousValue = '2023/12/31 2';
    const result = correctDateTextValue(value, previousValue);
    expect(result).toBe('2023/12/31 2');
  });

  it('should validate the minute', () => {
    const value = '2023/12/31 23:59';
    const previousValue = '2023/12/31 23:5';
    const result = correctDateTextValue(value, previousValue);
    expect(result).toBe('2023/12/31 23:59');
  });

  it('should reject an invalid minute', () => {
    const value = '2023/12/31 23:60';
    const previousValue = '2023/12/31 23:6';
    const result = correctDateTextValue(value, previousValue);
    expect(result).toBe('2023/12/31 23:6');
  });

  // And so on for all the possible cases
});

describe('convertDateToString', () => {
  // Existing test cases
  it('should correctly convert date to string', () => {
    const date = new Date(2023, 6, 29, 13, 15); // Note: month is 0-based
    const result = convertDateToString(date);
    expect(result).toBe('2023/07/29 13:15');
  });

  it('should cut off the redundant suffix if the length of the result is more than 16', () => {
    const date = new Date(2023, 6, 29, 13, 150); // Invalid minute value
    const result = convertDateToString(date);
    expect(result).toBe('2023/07/29 15:30');
  });

  // Additional test cases
  it('should correctly pad single digit values', () => {
    const date = new Date(2023, 2, 1, 2, 1); // 2023/03/01 02:01
    const result = convertDateToString(date);
    expect(result).toBe('2023/03/01 02:01');
  });

  it('should correctly format a date at the end of the month', () => {
    const date = new Date(2023, 0, 31, 23, 59); // 2023/01/31 23:59
    const result = convertDateToString(date);
    expect(result).toBe('2023/01/31 23:59');
  });

  it('should correctly format a date at the start of the day', () => {
    const date = new Date(2023, 0, 1, 0, 0); // 2023/01/01 00:00
    const result = convertDateToString(date);
    expect(result).toBe('2023/01/01 00:00');
  });

  it('should correctly format a date at the end of the day', () => {
    const date = new Date(2023, 0, 1, 23, 59); // 2023/01/01 23:59
    const result = convertDateToString(date);
    expect(result).toBe('2023/01/01 23:59');
  });
});

describe('convertStringToDate', () => {
  // Existing test case
  it('should correctly convert string to date', () => {
    const dateString = '2023/07/29 13:15';
    const result = convertStringToDate(dateString);
    expect(result).toEqual(new Date(2023, 6, 29, 13, 15)); // Note: month is 0-based
  });

  // Additional test cases
  it('should correctly convert string with single digit values to date', () => {
    const dateString = '2023/03/01 02:01';
    const result = convertStringToDate(dateString);
    expect(result).toEqual(new Date(2023, 2, 1, 2, 1));
  });

  it('should correctly convert string with date at the end of the month', () => {
    const dateString = '2023/01/31 23:59';
    const result = convertStringToDate(dateString);
    expect(result).toEqual(new Date(2023, 0, 31, 23, 59));
  });

  it('should correctly convert string with date at the start of the day', () => {
    const dateString = '2023/01/01 00:00';
    const result = convertStringToDate(dateString);
    expect(result).toEqual(new Date(2023, 0, 1, 0, 0));
  });

  it('should correctly convert string with date at the end of the day', () => {
    const dateString = '2023/01/01 23:59';
    const result = convertStringToDate(dateString);
    expect(result).toEqual(new Date(2023, 0, 1, 23, 59));
  });

  it('should correctly convert string with date in leap year', () => {
    const dateString = '2024/02/29 12:00';
    const result = convertStringToDate(dateString);
    expect(result).toEqual(new Date(2024, 1, 29, 12, 0));
  });

  // Negative test case
  it('should return an invalid date for invalid strings', () => {
    const dateString = 'this is not a date';
    const result = convertStringToDate(dateString);
    expect(isNaN(result.getTime())).toBe(true);
  });
});
