import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
//headless menu
import { Menu } from "@headlessui/react";

import { FaChevronDown } from "react-icons/fa";

const list = [
  { amount: "1" },
  { amount: "2" },
  { amount: "3" },
  { amount: "4" },
  { amount: "5" },
];

const AdultsDropdown = () => {
  return (
    <Menu as="div" className="relative h-full w-full border-b bg-white">
      {/* button */}
      <Menu.Button className="flex h-full w-full items-center justify-between px-8">
        Adults
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
              as="li"
              key={index}
              className="flex h-12 w-full cursor-pointer items-center justify-center border-b last-of-type:border-b-0 hover:bg-accent hover:text-white"
            >
              {item.amount}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
