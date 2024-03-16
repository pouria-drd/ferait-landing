import TeamCard from "./TeamCard";
import Mahdi from "./images/Mahdi.png";
import Saeed from "./images/Saeed.png";
import Malik from "./images/Malik.png";
import Farhane from "./images/Farhane.png";
import Fatema from "./images/Fatema.png";
import Alireza from "./images/Alireza.png";
import Pourya from "./images/Pourya.png";

const TeamSection = () => {
    return (
        <section className="bg-ferait-white-0 font-peyda cursor-default p-6 lg:px-36 py-24 sm:py-32" id="team">
            <div className="flex flex-col items-center justify-center gap-20 w-full px-6 lg:px-8">
                <div className="flex justify-center items-center 
                space-y-5 sm:max-w-2xl md:max-w-none ">

                    <h2 className="font-extrabold font-peyda 
                    text-ferait-black text-3xl md:text-6xl">
                        تیم فراییت
                    </h2>
                </div>

                <ul role="list" className="mx-auto grid max-w-2xl 
                    grid-cols-2 gap-x-8 md:gap-x-20 xl:gap-x-40 gap-y-16 text-center sm:grid-cols-3 
                    md:grid-cols-4 lg:mx-0 lg:max-w-none r2l">
                    <TeamCard imgSRC={Mahdi} name="مهدی شیرکوند" jobPosition="مدیر مارکتینگ" />
                    <TeamCard imgSRC={Saeed} name="سعید دارندی" jobPosition="مدیر فناوری" />
                    <TeamCard imgSRC={Malik} name="محمد رضا ملک آبادی" jobPosition="مدیر آموزشی" />
                    <TeamCard imgSRC={Pourya} name="پوریا دارندی" jobPosition="برنامه نویس" />
                    <TeamCard imgSRC={Farhane} name="فرحانه اردستانی" jobPosition="کارشناس شبکه های اجتماعی" />
                    <TeamCard imgSRC={Fatema} name="فاطمه اله دانه" jobPosition="طراح تجربه و رابط کاربری" />
                    <TeamCard imgSRC={Alireza} name="علیرضا اردستانی" jobPosition="تدوین گر" />
                </ul>
            </div>
        </section>
    )
}

export default TeamSection;
