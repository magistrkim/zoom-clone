import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      Navbar
      <div className="flex">
        SideBar
        <section className="flex flex-1 flex-col min-h-screen px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div></div>
        </section>
      </div>
      {children}
    </main>
  );
};

export default HomeLayout;
