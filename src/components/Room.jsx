import React from 'react';
import { Link } from 'react-router-dom';
import { SlSizeFullscreen, SlPeople } from 'react-icons/sl';

const Room = ({ room }) => {
  // destr
  const { id, name, image, size, maxPerson, description, price } = room;

  return (
    <div className='min-h-[31.25rem] bg-white shadow-2xl group'>
      {/* images */}
      <div className='overflow-hidden'>
        <img
          src={image}
          alt={room.name}
          className='w-full group-hover:scale-105 transition-all duration-500'
        />
      </div>
      {/* details */}
      <div className='max-w-[18.75rem] h-[3.75rem] mx-auto bg-white shadow-lg'>
        details
      </div>
    </div>
  );
};

export default Room;
