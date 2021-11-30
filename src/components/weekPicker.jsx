import React, { useState, useCallback } from 'react';
import {
  Calendar,
  DateRangeType,
  DayOfWeek,
  defaultCalendarStrings,
} from '@fluentui/react';
const workWeekDays = [
  DayOfWeek.Tuesday,
  DayOfWeek.Saturday,
  DayOfWeek.Wednesday,
  DayOfWeek.Friday,
];
export default function WeekPicker() {
  const [selectedDateRange, setSelectedDateRange] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const onSelectDate = useCallback((date, dateRangeArray) => {
    setSelectedDate(date);
    setSelectedDateRange(dateRangeArray);
  }, []);
  let dateRangeString = 'Not set';

  if (selectedDateRange) {
    const rangeStart = selectedDateRange[0];
    const rangeEnd = selectedDateRange[selectedDateRange.length - 1];
    dateRangeString =
      rangeStart.toLocaleDateString() + '-' + rangeEnd.toLocaleDateString();
  } // covert explicit methods to abstraction later

  return (
    <div
      style={{
        height: '360px',
      }}
    >
      <div>
        Selected date:{' '}
        {(selectedDate === null || selectedDate === void 0
          ? void 0
          : selectedDate.toLocaleString()) || 'Not set'}
      </div>
      <div>Selected range: {dateRangeString}</div>
      <Calendar
        dateRangeType={DateRangeType.WorkWeek}
        workWeekDays={workWeekDays}
        firstDayOfWeek={DayOfWeek.Monday}
        highlightSelectedMonth={true}
        showGoToToday={true}
        onSelectDate={onSelectDate}
        value={selectedDate}
        strings={defaultCalendarStrings}
      />
    </div>
  );
}
