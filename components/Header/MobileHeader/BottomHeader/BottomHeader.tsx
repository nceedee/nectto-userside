import * as React from "react";
import { useRouter } from "next/router";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { MenuMobile } from "../../IconMenus/Menus";

const BottomHeader = () => {
  const router = useRouter();

  // Get the initial value based on the current route
  const initialValue =
    MenuMobile.find((menu) => `/${menu.link}` === router.asPath)?.label ||
    "recents";
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleMenuItemClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className="fixed bottom-0 left-0 border-t text-black right-0 bg-primary">
      <BottomNavigation
        sx={{ width: "100%",display:"flex" ,justifyContent:"space-between" }}
        value={value}
        onChange={handleChange}
      >
        {MenuMobile.map((menu, index) => {
          const isActive = router.asPath === menu.link;

          return (
            <BottomNavigationAction
              key={index}
              label={menu.label}
              value={menu.label}
              icon={menu.icon}
              sx={{
                color: isActive ? "blueviolet" : "black",
                fontWeight: isActive ? "bold" : undefined,
              }}
              onClick={() => handleMenuItemClick(menu.link)}
            />
          );
        })}
      </BottomNavigation>
    </div>
  );
};

export default BottomHeader;

