import FeraitIcon from "../assets/images/Ferait-logoo.png";
import TelegramIcon from "./icons/TelegramIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import InstagramIcon from "./icons/InstagramIcon";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-ferait-white-50 font-peyda cursor-default" id="footer">
            <div className="mx-auto max-w-7xl overflow-hidden 
                flex flex-col gap-10
                px-6 pt-20 pb-6 lg:px-8">
                <div className="-mb-6 columns-2 flex justify-center sm:space-x-12">
                    <div className="pb-6">
                        <img className="w-full h-full object-cover" src={FeraitIcon} alt="FeraitIcon" />
                    </div>
                </div>

                <div className="flex items-center justify-center gap-5 text-ferait-gray">
                    <Link className="hover:text-ferait-blue transition-all" to="https://wa.me/+989026832126" target="_blank">
                        <WhatsAppIcon />
                    </Link>

                    <Link className="hover:text-ferait-blue transition-all" to="https://instagram.com/ferait.ir" target="_blank">
                        <InstagramIcon />
                    </Link>

                    <Link className="hover:text-ferait-blue transition-all" to="https://t.me/Avacadu_ir" target="_blank">
                        <TelegramIcon />
                    </Link>
                </div>

                <p className="text-xs text-center text-ferait-gray">
                    تمام حقوق مادی و معنوی متعلق به دفتر فنی فراییت است
                </p>
            </div>
        </footer>
    )
}

export default Footer;
