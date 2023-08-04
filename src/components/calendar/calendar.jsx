import React, { useState } from 'react';
import { Calendar } from 'antd';

const Date = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  };

    return (
        <div>
          <h2>This Week</h2>
          <Calendar onSelect={handleDateSelect} />
          {selectedDate && <p>Selected Date: {selectedDate.toString()}</p>}
        </div>
    )
};

export default Date;