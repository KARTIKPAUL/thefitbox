import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Footer from "@/scenes/footer";
import { SelectedPage } from "@/shared/types";

function Layout() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* The matching child route will render here */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
