import React from "react";
import HeroSlider from "../components/HeroSlider";
import Rooms from "../components/Rooms";
import BookingForm from "./../components/BookingForm";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <div className="container relative mx-auto">
        <div className="mt-4 bg-accent/30 p-4 lg:absolute lg:-top-14 lg:left-0 lg:right-0 lg:z-30 lg:p-0 lg:shadow-xl">
          <BookingForm />
        </div>
      </div>
      <Rooms />
    </>
  );
};

export default Home;
