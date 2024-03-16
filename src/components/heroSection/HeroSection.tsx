import { Link } from "react-router-dom";
import person from "./images/person.svg";
import circleBG from "./images/circles.svg";

const HeroSection = () => {
    return (
        <section className="bg-ferait-white-50 font-peyda py-24 w-full">
            <div className="flex flex-col-reverse  md:flex-row items-center justify-center gap-10 
            p-6 lg:px-36">
                <img className="absolute animate-pulse  left-0 top-0 z-0 p-10" src={circleBG} alt="circleBG" loading="lazy" />
                <div className="hidden sm:block w-full">
                    <img className="transform -scale-x-100 object-cover" src={person} alt="person" loading="lazy" />
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="max-w-2xl text-4xl font-bold r2l
                     text-ferait-black sm:text-6xl">
                        برای توسعه ایده ها، در خدمت کسب و کارها
                    </h1>

                    <p className="text-ferait-gray text-base sm:text-lg r2l">
                        مجموعه فنی فراییت در جهت رشد و توسعه کسب و کارها در فضای دیجیتال و فناوری اطلاعات ایجاد شده است تا با نوآوری و تعهد نسبت به کیفیت در مسیر ارتقای آنها همراه باشد.
                    </p>

                    <div className="flex items-center justify-end w-full">
                        <Link to="#services"
                            className="bg-ferait-blue transition-all uppercase shadow-sm
                            text-base md:text-lg
                            flex items-center justify-center relative z-10
                            text-ferait-white-0 hover:bg-ferait-black 
                            rounded-xl md:py-4 md:px-8 px-8 py-4 w-fit">
                            خدماتی که ارائه می دهیم
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
