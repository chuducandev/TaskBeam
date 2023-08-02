import {TaskDetailModel} from '@models';

export const getDueDate = (task: TaskDetailModel) => {
  const date = task.dueDate;

  if (!date) {
    return undefined;
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';

  return {
    hours: hours % 12 || 12,
    minutes,
    ampm,
  };
};

export const getCorrectHourString = (
  hours: number | undefined,
  minutes: number | undefined,
  ampm: string | undefined,
) => {
  const isValid =
    hours &&
    minutes &&
    hours >= 0 &&
    hours <= 23 &&
    minutes >= 0 &&
    minutes <= 59;

  if (!isValid) {
    return '';
  }

  const hourString = hours >= 10 ? hours : '0' + hours;
  const minuteString = minutes >= 10 ? minutes : '0' + minutes;
  return hourString + ':' + minuteString + ' ' + ampm;
};
