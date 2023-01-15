import React, { useContext } from "react";
import Room from "../components/Room";
//context
import { RoomContext } from "../context/RoomContext";

const Rooms = () => {
  const { rooms } = useContext(RoomContext);
  return (
    <section className="py-24">
      <div className="container mx-auto lg:px-0">
        {/* grid */}
        <div className="mx-auto grid max-w-sm grid-cols-1 gap-7 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {rooms.map((room, index) => {
            return <Room key={room.id} room={room} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
