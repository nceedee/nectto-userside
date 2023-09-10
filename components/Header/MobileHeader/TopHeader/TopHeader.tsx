// import { useState } from "react";
// import { AppLogo } from "../../AppLogo/AppLogo";
// import { Search } from "../../Search/Search";
// import { Profile } from "@/components/Global/Profile/Profile";

// export const TopHeader = () => {
//   const [isSearchFocused, setIsSearchFocused] = useState<boolean>(true);

//   const handleSearchFocusChange = (focused: boolean) => {
//     setIsSearchFocused(focused);
//   };

//   return (
//     <header className="bg-primary shadow-md sticky p-2 w-full right-0 top-0 flex items-center justify-between">
//       <AppLogo height={40} width={40} />
//       <Search onFocusChange={handleSearchFocusChange} />
//       <Profile />
//     </header>
//   );
// };



import { useState, useEffect } from "react";
import { AppLogo } from "../../AppLogo/AppLogo";
import { Search } from "../../Search/Search";
import { Profile } from "@/components/Global/Profile/Profile";
import { useRouter } from "next/router";
import BottomHeader from '../BottomHeader/BottomHeader';

export const TopHeader = () => {
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(true);
  const [prevScrollY, setPrevScrollY] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const router = useRouter();

  const handleSearchFocusChange = (focused: boolean) => {
    setIsSearchFocused(focused);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if the user has scrolled up or down suddenly
      if (currentScrollY > prevScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setPrevScrollY(currentScrollY);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header
      className={`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out fixed top-0 left-0 right-0 bg-primary shadow-md p-2 w-full flex items-center justify-between`}
    >
      <AppLogo height={40} width={40} />
      <Search onFocusChange={handleSearchFocusChange} />
      <Profile />
    </header>
  );
};
