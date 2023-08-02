import {TaskDetailModel} from '@models';
import {getCorrectHourString, getDueDate} from '../HighlightedCard.utils';

describe('getDueDate', () => {
  it('should return undefined if task does not have dueDate', () => {
    const task = new TaskDetailModel('id1', 'task1', 'notes', false);
    const dueDate = getDueDate(task);
    expect(dueDate).toBeUndefined();
  });

  it('should return correct dueDate object', () => {
    const task = new TaskDetailModel(
      'id1',
      'task1',
      'notes',
      false,
      new Date(2023, 7, 29, 15, 30),
    );
    const dueDate = getDueDate(task);
    expect(dueDate).toEqual({
      hours: 3,
      minutes: 30,
      ampm: 'pm',
    });
  });
});

describe('getCorrectHourString', () => {
  it('should return an empty string if parameters are not valid', () => {
    const hourString1 = getCorrectHourString(undefined, 30, 'am');
    expect(hourString1).toBe('');

    const hourString2 = getCorrectHourString(25, 30, 'am');
    expect(hourString2).toBe('');

    const hourString3 = getCorrectHourString(10, 60, 'am');
    expect(hourString3).toBe('');
  });

  it('should return correct hour string', () => {
    const hourString1 = getCorrectHourString(9, 15, 'am');
    expect(hourString1).toBe('09:15 am');

    const hourString2 = getCorrectHourString(12, 45, 'pm');
    expect(hourString2).toBe('12:45 pm');

    const hourString3 = getCorrectHourString(23, 59, 'pm');
    expect(hourString3).toBe('23:59 pm');
  });
});
