import React, { useState } from "react";
//react date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../datepicker.css";

import { BsCalendarWeek } from "react-icons/bs";

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);
  return (
    <div className="relative flex h-full items-center justify-end border-b">
      {/* icon */}
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendarWeek className="text-base text-accent" />
        </div>
      </div>
      <DatePicker
        className="h-full w-full cursor-pointer"
        selected={endDate}
        placeholderText="Check Out"
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
};

export default CheckOut;
