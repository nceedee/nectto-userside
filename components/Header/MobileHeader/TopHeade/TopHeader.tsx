import { useState } from "react";
import { AppLogo } from "../../AppLogo/AppLogo";
import { Search } from "../../Search/Search";
import { Profile } from "@/components/Global/Profile/Profile";

export const TopHeader = () => {
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(true);

  const handleSearchFocusChange = (focused: boolean) => {
    setIsSearchFocused(focused);
  };

  return (
    <header className="bg-primary shadow-md sticky p-2 w-full right-0 top-0 flex items-center">
      <AppLogo height={40} width={40} />
          <Search onFocusChange={handleSearchFocusChange} />
          <Profile/>
    </header>
  );
};
