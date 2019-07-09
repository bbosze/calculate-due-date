export const calculateDueDate = (date, turnaround) => {
  const isItWeekDay = date => {
    if (date.getDay() !== (0 || 6)) return true;
  }
  const openingHour = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 0, 0, 0);
  const closingHour = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 17, 0, 0, 0);
  const isItWorkingHour = date => {
    if (date - openingHour >= 0 && date - closingHour < 0) return true;
  }
  const isItReportable = date => {
    if (isItWeekDay(date) && isItWorkingHour(date)) return true;
    else return false;
  }

  if (!isItReportable(date)) return 'Take it easy buddy, and come back later...';

  let dateInMs = date.getTime();
  let turnaroundInMs = turnaround * 3600000;
  let closingHourInMs = closingHour.getTime();
  let day = 0;
  const calculation = (dateInMs, turnaroundInMs, closingHourInMs) => {
    if (dateInMs + turnaroundInMs < closingHourInMs) {
      return new Date(dateInMs + turnaroundInMs);
    }
    turnaroundInMs -= closingHourInMs - dateInMs;
    isItWeekDay(new Date(date.getFullYear(), date.getMonth(), date.getDate() + (day + 1), 9, 0, 0, 0))
    ? day ++
    : day += 3;
    dateInMs = new Date(date.getFullYear(), date.getMonth(), date.getDate() + day, 9, 0, 0, 0).getTime()
    closingHourInMs = new Date(date.getFullYear(), date.getMonth(), date.getDate() + day, 17, 0, 0, 0).getTime()
    return calculation(dateInMs, turnaroundInMs, closingHourInMs)
  }
  return calculation(dateInMs, turnaroundInMs, closingHourInMs);
}
