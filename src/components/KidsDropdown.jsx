import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
//headless menu
import { Menu } from "@headlessui/react";

import { FaChevronDown } from "react-icons/fa";

const list = [
  { amount: "No kids" },
  { amount: "1 Kid" },
  { amount: "2 Kids" },
  { amount: "3 Kids" },
  { amount: "4 Kids" },
];

const KidsDropdown = () => {
  //
  const { kids, setKids } = useContext(RoomContext);

  return (
    <Menu as="div" className="relative h-full w-full border-b bg-white">
      {/* button */}
      <Menu.Button className="flex h-full w-full items-center justify-between px-8">
        {kids}
        <FaChevronDown size={16} className="text-accent-hover" />
      </Menu.Button>
      {/* items */}
      <Menu.Items
        as="ul"
        className="absolute z-40 flex h-full w-full flex-col bg-white"
      >
        {list.map((item, index) => {
          return (
            <Menu.Item
              onClick={() => setKids(item.amount)}
              as="li"
              key={index}
              className="flex h-12 w-full cursor-pointer items-center justify-center border-b bg-white p-2 last-of-type:border-b-0 hover:bg-accent hover:text-white"
            >
              {item.amount}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropdown;
