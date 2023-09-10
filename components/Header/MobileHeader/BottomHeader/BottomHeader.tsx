import { useRouter } from "next/router";
import { IMenuItem } from "@/base/models/module.interface";
import { MenuMobile } from "../../IconMenus/Menus";

export const BottomHeader = () => {
  const router = useRouter();

  const handleMenuItemClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className="bg-primary shadow-md border-t fixed p-4 w-full z-50 bottom-0 ">
      <ul className="flex items-center justify-between w-full">
        {MenuMobile.map((menu: IMenuItem, index: number) => {
          // Check if the current menu link matches the router's path
          const isActive = router.asPath === menu.link;

          // Apply the 'active' class if it's the active link
          const liClassName = `cursor-pointer ${isActive ? "active" : ""}`;

          return (
            <li
              key={index}
              className={liClassName}
              onClick={() => handleMenuItemClick(menu.link)}
            >
              {menu.icon}
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        .active {
          color: blueviolet;
        }
      `}</style>
    </div>
  );
};

export default BottomHeader;
