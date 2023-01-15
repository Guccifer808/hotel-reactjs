import React from "react";
import { Link } from "react-router-dom";
import { SlSizeFullscreen, SlPeople } from "react-icons/sl";

const Room = ({ room }) => {
  // destr
  const { id, name, image, size, maxPerson, description, price } = room;

  return (
    <div className="group min-h-[31.25rem] bg-white shadow-2xl">
      {/* images */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={room.name}
          className="w-full transition-all duration-500 group-hover:scale-105"
        />
      </div>
      {/* details plaque*/}
      <div className="mx-auto flex h-[3.75rem] max-w-[18.75rem] -translate-y-1/2 justify-center bg-white font-additional text-[1rem] text-base font-semibold uppercase tracking-[1px] shadow-lg">
        <div className="flex w-[80%] justify-between">
          {/* room size */}
          <div className="flex items-center gap-x-2 ">
            <div className="text-accent">
              <SlSizeFullscreen size={15} />
            </div>
            <div className="flex gap-x-1">
              <div>Size</div>
              <div>
                {size}
                {"\u33A1"}
              </div>
            </div>
          </div>
          {/* max amount of people */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <SlPeople size={16} />
            </div>
            <div className="flex gap-x-1">
              <div>Max People</div>
              <div>{maxPerson}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
