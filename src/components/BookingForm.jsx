import React, { useContext } from "react";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import AdultsDropdown from "./AdultsDropdown";
import KidsDropdown from "./KidsDropdown";
import { RoomContext } from "./../context/RoomContext";

const BookingForm = () => {
  //
  const { handleClick } = useContext(RoomContext);
  return (
    <form className="h-[18.75rem] w-full lg:h-[5rem]">
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
        {/* button */}
        <button
          className="btn btn-primary"
          type="submit"
          onClick={(e) => handleClick(e)}
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
