import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import AdultsDropdown from "./../components/AdultsDropdown";
import KidsDropdown from "./../components/KidsDropdown";
import CheckIn from "./../components/CheckIn";
import CheckOut from "./../components/CheckOut";
import ScrollToTop from "../components/ScrollToTop";
import { FaClock, FaTimesCircle } from "react-icons/fa";

const RoomPage = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  //find room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  //destr
  const { name, description, facilities, imageLg, price } = room;
  return (
    <section>
      <div className="relative flex h-[560px] items-center justify-center bg-room bg-cover bg-center">
        {/* overlay */}
        <div className="absolute h-full w-full bg-black/25"></div>
        {/* title */}
        <h1 className="z-20 text-center font-primary text-6xl text-white">
          {name}
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex h-full flex-col py-24 lg:flex-row">
          {/* left side */}
          <div className="h-full w-full px-6 lg:w-[60%]">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img src={imageLg} alt={name} className="mb-8 rounded-md" />
            {/* facilities */}
            <div>
              <h3 className="h3 mb-4">Facilities</h3>
              <p className="mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                corrupti quasi sint assumenda, ipsam rerum mollitia dolorem ab
                dicta accusamus!
              </p>
              {/* grid */}
              <div className="mb-12 grid grid-cols-3 gap-6">
                {facilities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div
                      key={index}
                      className="flex flex-1 items-center gap-x-2"
                    >
                      <div className="text-2xl text-accent">{icon}</div>
                      <div className="text-base">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="h-full w-full lg:w-[40%]">
            {/* reservation */}
            <div className="mb-12 bg-accent/20 py-8 px-6">
              <div className="mb-4 flex flex-col space-y-4">
                <h3 className="h3 ">Your Reservation</h3>
                <div className="h-[60px]">
                  <CheckIn />
                </div>
                <div className="h-[60px]">
                  <CheckOut />
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown />
                </div>
                <div className="h-[60px]">
                  <KidsDropdown />
                </div>
              </div>
              {/* button */}
              <button className="btn btn-lg btn-primary w-full">
                Book Now! From ${price}
              </button>
            </div>
            {/* rules */}
            <div>
              <h3 className="h3">Our Rules</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                labore repellat saepe doloribus rem sapiente.
              </p>
              {/* list */}
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-2">
                  <FaClock className="text-accent" />
                  Check In: 12:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-2">
                  <FaClock className="text-accent" />
                  Check Out: 12:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-2">
                  <FaTimesCircle className="text-accent" />
                  No Smoking Inside
                </li>
                <li className="flex items-center gap-x-2">
                  <FaTimesCircle className="text-accent" />
                  No Pets
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomPage;
