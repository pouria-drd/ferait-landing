import { ReactNode, useEffect, useState } from "react";

import ChevronLeft from "./icons/ChevronLeft";
import ChevronRight from "./icons/ChevronRight";

type CarouselProps = {
    children: ReactNode[];
} & (
        | { autoSlide: false }
        | { autoSlide: true; autoSlideIntervalMS?: number }
    );

const Carousel = (props: CarouselProps) => {
    const { autoSlideIntervalMS = 3000 } = props.autoSlide ? props : {};

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextSlide = () => setCurrentIndex(
        currentIndex => currentIndex === props.children.length - 1 ? 0 : currentIndex + 1
    );

    const perviousSlide = () => setCurrentIndex(
        currentIndex => currentIndex === 0 ? props.children.length - 1 : currentIndex - 1
    );

    useEffect(() => {
        if (!props.autoSlide) return
        const slideInterval = setInterval(nextSlide, autoSlideIntervalMS);
        return () => clearInterval(slideInterval);
    }, [props.autoSlide, autoSlideIntervalMS])

    return (
        <div className="relative overflow-hidden w-full">



            <div className="flex space-x-4">
                {
                    props.children.map((slide, index) => (
                        <div className="w-full">
                            {slide}
                        </div>
                    ))
                }
            </div>


            {/* <div className="flex transition-transform ease-out duration-500" style={{
                transform: `translateX(-${currentIndex * 100}%)`
            }}>


                {
                    props.children.map((slide, index) => (
                        <div className="w-full">
                            {slide}
                        </div>
                    ))
                }


            </div> */}


            {/* <img className="rounded-lg" src={src} alt="img" key={idx} loading="lazy" /> */}




            <div className="absolute inset-0
            flex items-center justify-between px-4">
                <button onClick={perviousSlide}
                    className=
                    "bg-white/50 hover:bg-white text-gray-800 transition-all rounded-full p-1">
                    <ChevronLeft />
                </button>

                <button onClick={nextSlide}
                    className="
                    bg-white/50 hover:bg-white text-gray-800 transition-all rounded-full p-1">
                    <ChevronRight />
                </button>
            </div>

            <div className="absolute bottom-4 left-0 right-0">
                <div className="flex items-center justify-center gap-2">
                    {
                        props.children.map((_, index) => (
                            <div key={index} className={`
                                transition-all w-3 h-3 bg-white rounded-full
                            ${currentIndex === index ? "p-2" : "bg-opacity-50"}`}>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Carousel;
