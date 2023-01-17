import React, { useContext } from "react";
import Room from "../components/Room";
//context
import { RoomContext } from "../context/RoomContext";
import { SpinnerDiamond } from "spinners-react";
const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext);

  return (
    <section className="py-24">
      {/* loader, overlay */}
      {loading && (
        <div className="fixed bottom-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black/70">
          <SpinnerDiamond color="#a37d4c" />
        </div>
      )}
      <div className="container mx-auto lg:px-0">
        <div className="text-center">
          <div className="font-additional text-[1rem] uppercase tracking-[4px]">
            Houston Hotel & SPA
          </div>
          <h2 className="mb-6 font-primary text-[36px]">Room & Suites</h2>
        </div>
        {/* grid */}
        <div
          className="mx-auto grid max-w-sm grid-cols-1 gap-7 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          id="rooms-section"
        >
          {rooms.map((room, index) => {
            return <Room key={room.id} room={room} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
