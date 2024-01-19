// BottomHeader.tsx

import * as React from "react";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { BottomNavigation } from "./BottomNavigation";

const MenuItems = [
  { label: "home", icon: <HomeIcon />, link: "/" },
  { label: "community", icon: <PeopleIcon />, link: "/community" },
  { label: "notification", icon: <NotificationsIcon />, link: "/notification" },
  { label: "chats", icon: <ChatIcon />, link: "/chats" },
  { label: "friends", icon: <Diversity1Icon />, link: "/friends" },
];



const BottomHeader: React.FC = () => {
  const router = useRouter();

  const initialValue =
    MenuItems.find((menu) => `/${menu.link}` === router.asPath)?.label || "home";

  const [value, setValue] = React.useState(initialValue);

  const handleMenuItemClick = (link: string, label: string) => {
    router.push(link);
    setValue(label);
  };

  return (
    <div>
      <BottomNavigation
        items={MenuItems.map((item) => ({
          ...item,
          isActive: value === item.label,
        }))}
        onItemClick={(link, label) => handleMenuItemClick(link, label)}
      />
    </div>
  );
};

export default BottomHeader

