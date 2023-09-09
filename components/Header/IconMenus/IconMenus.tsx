import { useRouter } from 'next/router';
import { Menus } from './Menus';
import { IMenuItem } from '@/base/models/module.interface';

export const IconMenus: React.FC = () => {
    const router = useRouter();

    const handleMenuItemClick = (link: string) => {
        router.push(link);
    };

    return (
        <div >
            <ul className='flex space-x-4'>
                {Menus.map((menu: IMenuItem, index: number) => {
                    // Check if the current menu link matches the router's path
                    const isActive = router.asPath === menu.link;

                    // Apply the 'active' class if it's the active link
                    const liClassName = `cursor-pointer ${isActive ? 'active' : ''}`;

                    return (
                        <li
                            key={index}
                            className={liClassName}
                            onClick={() => handleMenuItemClick(menu.link)}
                        >
                            {menu.icon}
                            {menu.name}
                        </li>
                    );
                })}
            </ul>
            <style jsx>{`
                .active {
                    color: blueviolet; // Set the text color to red for visited links
                }
            `}</style>
        </div>
    );
};

