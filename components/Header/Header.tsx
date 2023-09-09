import { useState } from "react";
import { AppLogo } from "./AppLogo/AppLogo"
import { IconMenus } from './IconMenus/IconMenus';

export const Header: React.FC = () => {
    

    return (
        <header className="bg-white shadow-md px-4 sticky w-full top-0">
            <div className="flex items-center space-x-5">
                <AppLogo />
                <IconMenus />
            </div>
            
        </header>
    );
}



