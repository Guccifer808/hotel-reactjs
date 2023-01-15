import React, { useEffect, useState, createContext } from 'react';
//mock data
import { roomData } from '../../mockData';

//context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  //state
  const [rooms, setRooms] = useState(roomData);
  console.log(rooms);
  return (
    <RoomContext.Provider value={{ rooms }}>{children}</RoomContext.Provider>
  );
};

export default RoomProvider;
