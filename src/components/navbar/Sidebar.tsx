import { Link } from "react-router-dom";
import { ROUTES } from "../../router/routes";

import CloseIcon from "../icons/CloseIcon";
import FeraitLogoIcon from "../icons/FeraitLogoIcon";

interface SidebarProps {
    onClose?: () => void;
}

const Sidebar = (props: SidebarProps) => {
    return (
        <div className="glass fixed lg:hidden top-2 right-0 font-peyda-medium
            text-ferait-black
            flex flex-col gap-4
            w-full sm:w-96 h-svh z-50 bg-white/95 px-6 py-4">
            <div className="flex items-center justify-between w-full">
                <button onClick={props.onClose}>
                    <CloseIcon />
                </button>

                <Link to={ROUTES.HOME}>
                    <FeraitLogoIcon />
                </Link>
            </div>

            <div className="font-peyda-medium text-lg mt-10
                border-b pb-5
                flex flex-col items-center justify-end gap-5 w-full">
                <a href="#products" className="text-ferait-gray transition-all text-right
                 hover:bg-gray-50 rounded-lg p-2 w-full h-full">
                    محصولات
                </a>

                <a href="#team" className="text-ferait-gray transition-all text-right
                 hover:bg-gray-50 rounded-lg p-2 w-full h-full">
                    معرفی
                </a>

                <a href="#services" className="text-ferait-gray transition-all text-right
                 hover:bg-gray-50 rounded-lg p-2 w-full h-full">
                    خدمات ما
                </a>
            </div>

            <div className="flex items-center justify-end transition-all
                hover:bg-gray-50 rounded-lg p-2 
                w-full mt-4">
                <Link to={ROUTES.CONTACT_US}
                    className="transition-all font-bold
                    flex items-center justify-center 
                    text-ferait-blue">
                    تماس با ما
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;
