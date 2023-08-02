function getDaysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

export function correctDateTextValue(
  value: string,
  previousValue: string,
): string {
  if (value.length < previousValue.length) {
    if (
      (previousValue.length > 0 &&
        previousValue[previousValue.length - 1] === '/') ||
      previousValue[previousValue.length - 1] === ' ' ||
      previousValue[previousValue.length - 1] === ':'
    ) {
      return value.slice(0, value.length - 1);
    }
    return value;
  }

  if (value.length > 16) {
    return value.slice(0, 16);
  }

  // Add '/' after the year
  if (value.length === 4) {
    return value + '/';
  }

  // Validate the month
  if (value.length === 6) {
    if (!['0', '1'].includes(value[5])) {
      return value.slice(0, value.length - 1);
    }
  }

  if (value.length === 7) {
    if (
      (value[5] === '1' && ['0', '1', '2'].includes(value[6])) ||
      (value[5] === '0' &&
        ['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(value[6]))
    ) {
      return value + '/';
    } else {
      return value.slice(0, value.length - 1);
    }
  }

  // Validate the day
  if (value.length === 9) {
    if (!['0', '1', '2', '3'].includes(value[8])) {
      return value.slice(0, value.length - 1);
    }
  }

  if (value.length === 10) {
    const month = parseInt(value.substr(5, 2), 10);
    const year = parseInt(value.substr(0, 4), 10);
    const day = parseInt(value.substr(8, 2), 10);
    const maxDay = getDaysInMonth(month, year);

    if (day >= 1 && day <= maxDay) {
      return value + ' ';
    } else {
      return value.slice(0, value.length - 1);
    }
  }

  // Validate the hour and add ':'
  if (value.length === 12) {
    if (!['0', '1', '2'].includes(value[11])) {
      return value.slice(0, value.length - 1);
    }
  }
  if (value.length === 13) {
    const hour = parseInt(value.substr(11, 2), 10);
    if (hour >= 0 && hour <= 23) {
      return value + ':';
    } else {
      return value.slice(0, value.length - 1);
    }
  }

  // Validate the minute
  if (value.length === 15) {
    if (!['0', '1', '2', '3', '4', '5'].includes(value[14])) {
      return value.slice(0, value.length - 1);
    }
  }
  if (value.length === 16) {
    const minute = parseInt(value.substr(14, 2), 10);
    if (minute >= 0 && minute <= 59) {
      return value;
    } else {
      return value.slice(0, value.length - 1);
    }
  }

  return value;
}

export const convertDateToString = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const yearString = year.toString();
  const monthString = month.toString().padStart(2, '0');
  const dayString = day.toString().padStart(2, '0');
  const hoursString = hours.toString().padStart(2, '0');
  const minutesString = minutes.toString().padStart(2, '0');

  const dateString = `${yearString}/${monthString}/${dayString}`;
  const timeString = `${hoursString}:${minutesString}`;

  const result = `${dateString} ${timeString}`;
  if (result.length !== 16) {
    return '';
  }

  return result;
};

export const convertStringToDate = (value: string): Date => {
  const formattedDateString = value.replace(/\//g, '-'); // replace slashes with hyphens
  return new Date(formattedDateString);
};
