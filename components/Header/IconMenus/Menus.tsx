import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import PeopleIcon from "@mui/icons-material/People";
import Person2Icon from "@mui/icons-material/Person2";
import StoreIcon from "@mui/icons-material/Store";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/Message";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const Menus = [
  { icon: <HouseSidingIcon />, link: "/" },
  { icon: <Person2Icon />, link: "/profile" },
  { icon: <PeopleIcon />, link: "/community", name: "community" },
  { icon: <StoreIcon />, link: "/stores" },
];

export const MenusTwo = [
  { icon: <NotificationsNoneIcon />, link: "/notification" },
  { icon: <MessageIcon />, link: "/chats" },
  { icon: <Diversity1Icon />, link: "/friends" },
  { icon: <AddCircleOutlineIcon />, link: "/createpost" },
];

export const MenuMobile = [
  { icon: <HouseSidingIcon />, link: "/" , label: "Home"},
  { icon: <PeopleIcon />, link: "/community", label: "community" },
  { icon: <NotificationsNoneIcon />, link: "/notification",label:"notification" },
  { icon: <MessageIcon />, link: "/chats",label:"chats" },
  { icon: <Diversity1Icon />, link: "/friends" ,label:"friends"},
];
