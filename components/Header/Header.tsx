// import { useState } from "react";
// import { AppLogo } from "./AppLogo/AppLogo";
// import { IconMenusLeft } from "./IconMenus/IconMenusLeft";
// import { Search } from "./Search/Search";
// import { IconMenusRight } from "./IconMenus/IconMenusRight";
// import { Card } from "../Global/Card/Card";

// export const Header: React.FC = () => {
//   return (
//     <header className="bg-primary shadow-md sticky left-0 top-0 ">
//       <div className="flex items-center justify-between m-auto h-full w-full  max-w-7xl">
//         <div className="flex items-center space-x-5">
//           <AppLogo />
//           <IconMenusLeft />
//         </div>
//         <div>
//           <Search />
//         </div>
//         <div className="pr-8">
//           <IconMenusRight />
//         </div>
//       </div>
//     </header>
//   );
// };


import * as React from "react";
import { useState } from "react";
import { AppLogo } from "./AppLogo/AppLogo";
import { IconMenusLeft } from "./IconMenus/IconMenusLeft";
import { IconMenusRight } from "./IconMenus/IconMenusRight";
import { Card } from "../Global/Card/Card";
import { Search } from "./Search/Search";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);

  const handleSearchFocusChange = (focused: boolean) => {
    setIsSearchFocused(focused);
  };

  return (
    <header
      className={`bg-primary shadow-md sticky left-0 top-0 ${
        isSearchFocused ? "search-focused" : ""
      }`}
    >
      <div className="flex items-center justify-between m-auto h-full w-full  max-w-7xl">
        <div
          className={`flex items-center space-x-5 ${
            isSearchFocused ? "hidden" : ""
          }`}
        >
          <AppLogo />
          <IconMenusLeft />
        </div>
        <div>
          <Search onFocusChange={handleSearchFocusChange} />
        </div>
        <div className={`pr-8 ${isSearchFocused ? "hidden" : ""}`}>
          <IconMenusRight />
          {/* <Card /> */}
        </div>
      </div>
    </header>
  );
};
