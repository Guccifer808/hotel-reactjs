import React from "react";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import AdultsDropdown from "./AdultsDropdown";
import KidsDropdown from "./AdultsDropdown";

const BookingForm = () => {
  return (
    <form className="h-[18.75rem] w-full bg-green-300 lg:h-[5rem]">
      {/* Main plaque with dropdowns */}
      <div className="flex h-full w-full flex-col lg:flex-row">
        <div className="flex-1 border-r">
          <CheckIn />
        </div>
        <div className="flex-1 border-r">
          <CheckOut />
        </div>
        <div className="flex-1 border-r">
          <AdultsDropdown />
        </div>
        <div className="flex-1 border-r">
          <KidsDropdown />
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
