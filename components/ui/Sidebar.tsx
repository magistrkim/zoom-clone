import React from "react";

const Sidebar = () => {
  return (
    <section
      className="sticky left-0 top-0 h-screen w-fit text-white bg-dark-1 
    flex-col justify-between pt-28 p-6 max-sm:hidden lg:w-[264px]"
    >
      <div className="flex flex-1 flex-col gap-6"></div>
      Sidebar
    </section>
  );
};

export default Sidebar;
