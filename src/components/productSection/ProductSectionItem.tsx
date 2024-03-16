import { Link } from "react-router-dom";

interface ProductSectionItemProps {
    name: string;
    type: "rasacrowd" | "siteChoob" | "avacadu";
    img1SRC: string;
    img2SRC: string;
    title: string;
    caption: string;
    linkName: string;
    linkTo: string;
}

const ProductSectionItem = (props: ProductSectionItemProps) => {
    const getNameColor = () => {
        switch (props.type) {
            case "siteChoob":
                return "text-ferait-siteChoobBlue";

            case "rasacrowd":
                return "text-ferait-rasaBlue";

            case "avacadu":
                return "text-ferait-avaGreen";
        }
    }

    return (
        <div className="
            flex flex-col-reverse lg:flex-row items-center justify-between gap-20 lg:gap-10
            w-full h-full">

            <div className="relative w-1/2 h-60">
                <img className="absolute bottom-14 left-10 z-10" src={props.img1SRC} alt="img" />
                <img className="absolute" src={props.img2SRC} alt="img2" />
            </div>


            <div className="flex flex-col items-center lg:items-end justify-start gap-4
                w-1/2 h-60">
                <span className={`text-xs ${getNameColor()}`}>
                    {props.name}
                </span>

                <h1 className="text-ferait-black font-semibold text-xl sm:text-2xl r2l">
                    {props.title}
                </h1>

                <p className="text-ferait-gray text-sm sm:text-lg r2l">
                    {props.caption}
                </p>

                <Link to={props.linkTo} target="_blank" className="
                bg-ferait-blue transition-all uppercase shadow-sm
                text-base md:text-lg
                flex items-center justify-center relative z-10
                text-ferait-white-0 hover:bg-ferait-black 
                rounded-xl md:py-4 md:px-8 px-8 py-4 w-fit">
                    {props.linkName}
                </Link>
            </div>
        </div>)
}

export default ProductSectionItem;
