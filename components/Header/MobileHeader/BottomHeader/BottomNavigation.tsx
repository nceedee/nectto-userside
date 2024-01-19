import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface MenuItem {
    icon: React.ReactNode;
    link: string;
}

interface BottomNavigationProps {
    items: {
        label: string;
        icon: React.ReactNode;
        link: string;
        isActive: boolean;
    }[];
    onItemClick: (link: string, label: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ items }) => {
    const router = useRouter();

    const isActive = (link: string) => router.asPath === link;

    return (
        <div className="fixed bottom-0 left-0 border-t text-black right-0 bg-primary">
            <div className="flex justify-between mx-4 py-4">
                {items.map((menu, index) => (
                    <Link key={index} href={menu.link}>
                        <div
                            className={`cursor-pointer ${isActive(menu.link) ? "text-secondary text-bold" : "text-black"
                                }`}
                        >
                            {isActive(menu.link) ? <>{menu.icon}</> : menu.icon}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
