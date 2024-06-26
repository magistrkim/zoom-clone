import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col gap-10 text-white size-full">
      <div className="w-full h-[300px] rounded-[20px] bg-hero bg-cover">
        <div className="flex flex-col h-full justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="text-base font-normal text-center py-2 max-w-[270px] glassmorphism rounded">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">11:24 AM</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              Wednesday, June 26, 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
