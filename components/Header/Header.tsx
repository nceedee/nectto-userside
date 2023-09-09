import { useState } from "react";
import { AppLogo } from "./AppLogo/AppLogo";
import { IconMenusLeft } from "./IconMenus/IconMenusLeft";
import { Search } from "./Search/Search";
import { IconMenusRight } from "./IconMenus/IconMenusRight";

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md px-4  left-0 top-0 flex items-center justify-between">
      <div className="flex items-center space-x-5">
        <AppLogo />
        <IconMenusLeft />
      </div>
      <div>
        <Search />
      </div>
      <div>
        <IconMenusRight />
      </div>
    </header>
  );
};
