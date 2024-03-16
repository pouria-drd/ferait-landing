interface ServiceSectionItemProps {
    text?: string;
    title?: string;
    iconSRC?: string;
}

const ServiceSectionItem = (props: ServiceSectionItemProps) => {
    return (
        <li className="px-6 xl:px-4">
            <div className="font-peyda flex flex-col items-center text-justify gap-4 py-4">
                <div className="flex items-center justify-center w-36 mb-5">
                    <img className="object-cover" src={props.iconSRC} alt="Icon" />
                </div>

                <h3 className="text-ferait-black font-semibold text-xl sm:text-2xl r2l">
                    {props.title}
                </h3>

                <p className="text-ferait-gray text-sm sm:text-lg r2l">
                    {props.text}
                </p>
            </div>
        </li>
    )
}

export default ServiceSectionItem;
