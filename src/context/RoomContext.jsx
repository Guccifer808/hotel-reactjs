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
  const [loading, setLoading] = useState(false);
  //total
  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });
  //onClick handler
  const handleClick = (e) => {
    e.preventDefault();
    //loader
    setLoading(true);
    //filter rooms depending on total person count
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    //loader
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false);
    }, 1500);
  };
  // console.log(rooms);

  return (
    <RoomContext.Provider
      value={{ rooms, adults, setAdults, kids, setKids, handleClick, loading }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
