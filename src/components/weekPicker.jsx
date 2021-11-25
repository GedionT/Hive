import React, { useState, useCallback } from "react";
import {
  Calendar,
  DateRangeType,
  DayOfWeek,
  defaultCalendarStrings,
} from "@fluentui/react";

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

  let dateRangeString = "Not set";

  if (selectedDateRange) {
    const rangeStart = selectedDateRange[0];
    const rangeEnd = selectedDateRange[selectedDateRange.length - 1];

    dateRangeString =
      rangeStart.toLocaleDateString() + "-" + rangeEnd.toLocaleDateString();
  }

  // covert explicit methods to abstraction later
  return React.createElement(
    "div",
    { style: { height: "360px" } },
    React.createElement(
      "div",
      null,
      "Selected date: ",
      (selectedDate === null || selectedDate === void 0
        ? void 0
        : selectedDate.toLocaleString()) || "Not set"
    ),
    React.createElement("div", null, "Selected range: ", dateRangeString),
    React.createElement(Calendar, {
      dateRangeType: DateRangeType.WorkWeek,
      workWeekDays: workWeekDays,
      firstDayOfWeek: DayOfWeek.Monday,
      highlightSelectedMonth: true,
      showGoToToday: true,
      onSelectDate: onSelectDate,
      value: selectedDate,
      // Calendar uses English strings by default. For localized apps, you must override this prop.
      strings: defaultCalendarStrings,
    })
  );
}
