interface TeamCardProps {
    name: string;
    imgSRC: string;
    jobPosition: string;
}

const TeamCard = (props: TeamCardProps) => {
    return (
        <div className="flex flex-col items-center justify-between gap-5">
            <img className="mx-auto size-28 rounded-full object-cover" src={props.imgSRC} alt="source" loading="lazy" />

            <div className="flex flex-col items-center justify-center gap-1 w-full">
                <h3 className="font-semibold">
                    {props.name}
                </h3>

                <p className="text-ferait-gray text-sm">
                    {props.jobPosition}
                </p>
            </div>
        </div>
    )
}

export default TeamCard;
