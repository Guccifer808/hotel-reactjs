import React, { useEffect, useState, createContext } from "react";
//mock data
import { roomData } from "../../mockData";

//context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  //state
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("No Kids");
  const [total, setTotal] = useState(0);
  //total
  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });
  //
  const handleClick = (e) => {
    e.preventDefault();
    console.log(total);
  };
  return (
    <RoomContext.Provider
      value={{ rooms, adults, setAdults, kids, setKids, handleClick }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
