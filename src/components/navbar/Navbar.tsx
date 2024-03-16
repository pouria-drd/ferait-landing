import { Link } from "react-router-dom";
import { ROUTES } from "../../router/routes";

import Sidebar from "./Sidebar";
import MenuIcon from "../icons/MenuIcon";
import LanguageIcon from "../icons/LanguageIcon";
import FeraitLogoIcon from "../icons/FeraitLogoIcon";
import { useState } from "react";

const Navbar = () => {
    const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);

    const handleSidebar = (status: boolean) => {
        setSidebarOpened(status);
    }

    return (
        <>
            {
                sidebarOpened &&
                <Sidebar onClose={() => handleSidebar(false)} />
            }

            <nav className="fixed glass bg-ferait-white-50 bg-opacity-90 font-peyda mx-auto z-40
                flex items-center justify-between 
                p-6 lg:px-36 w-full" aria-label="Global">

                <button onClick={() => handleSidebar(true)} className="block lg:hidden">
                    {!sidebarOpened &&
                        <MenuIcon />
                    }
                </button>

                <div className="hidden lg:flex items-center justify-start gap-4">
                    <Link to={ROUTES.CONTACT_US}
                        className="transition-all
                    flex items-center justify-center 
                    text-ferait-white-0 bg-ferait-blue hover:bg-ferait-black
                    text-lg font-peyda uppercase rounded-xl 
                    shadow-sm px-6 py-2 border md:py-2 md:px-6">
                        تماس با ما
                    </Link>

                    <button className="text-ferait-gray hover:text-ferait-blue
                            transition-all cursor-pointer">
                        <LanguageIcon />
                    </button>
                </div>

                <div className="font-peyda-medium text-lg 
                    hidden lg:flex items-center justify-between gap-14">
                    <a href="#products" className="text-ferait-gray hover:text-ferait-blue transition-all">
                        محصولات
                    </a>
                    <a href="#team" className="text-ferait-gray hover:text-ferait-blue transition-all">
                        معرفی
                    </a>
                    <a href="#services" className="text-ferait-gray hover:text-ferait-blue transition-all">
                        خدمات ما
                    </a>
                </div>

                <Link to={ROUTES.HOME}>
                    <FeraitLogoIcon />
                </Link>
            </nav>
        </>
    )
}

export default Navbar;
