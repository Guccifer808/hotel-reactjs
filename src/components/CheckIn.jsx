import React, { useState } from "react";
//react date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../datepicker.css";

import { BsCalendarWeek } from "react-icons/bs";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);
  return (
    <div className="relative flex h-full items-center justify-end border-b">
      {/* icon */}
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendarWeek className="text-base text-accent" />
        </div>
      </div>
      <DatePicker
        className="h-full w-full"
        selected={startDate}
        placeholderText="Check In"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default CheckIn;
