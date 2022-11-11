import React, { useState } from 'react';
import Calendar from 'short-react-calendar';

export default function MyCalender() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value}
      calendarType="US"
      oneWeekCalendar={true} />
    </div>
  );
}