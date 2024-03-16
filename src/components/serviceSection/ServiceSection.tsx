import ServiceSectionItem from "./ServiceSectionItem";
import WebDesignIcon from "../../assets/images/WebDesignIcon.svg";
import UXUIDesignIcon from "../../assets/images/UXUIDesignIcon.svg";
import DigitalMarketingIcon from "../../assets/images/DigitalMarketingIcon.svg";


const ServiceSection = () => {
    return (
        <section className="bg-ferait-white-0 cursor-default p-6 lg:px-36 py-24" id="services">
            <div className="space-y-12">
                <div className="flex justify-center items-center 
                space-y-5 sm:max-w-2xl md:max-w-none ">

                    <h2 className="font-extrabold font-peyda 
                    text-ferait-black text-3xl md:text-6xl">
                        خدمات ما
                    </h2>
                </div>
                <ul className="sm:grid sm:grid-cols-1 lg:grid-cols-3
                    md:px-60 lg:px-0 sm:gap-6 lg:gap-8 space-y-4  sm:space-y-0">
                    <ServiceSectionItem iconSRC={WebDesignIcon} title="طراحی رابط و تجربه کاربری"
                        text="سالهاست که علم تجربه کاربری کمک کننده بخش فنی توسعه و تولید محصولات است تا بتواند عملکرد اجرایی و کاربرد پذیری آنها را بهبود داده و با یک رابط کاربری مناسب ، تجربه ای بهتر و ارتباط قوی تری را بین محصول و کاربر ایجاد کند." />

                    <ServiceSectionItem iconSRC={DigitalMarketingIcon} title="دیجیتال مارکیتینگ"
                        text="طی سالیان اخیر دانش بازاریابی دیجیتال با ابزار آنالیز دقیق و اصولی داده های مخاطبان ، از مسیرهای هدفمند دیجیتالی ، از جمله سئو وب سایت ها و مدیریت شبکه های اجتماعی و غیره، توسعه بخش ارتباطات و بازاریابی ها خواهد بود." />

                    <ServiceSectionItem iconSRC={UXUIDesignIcon} title="طراحی سیستم های تحت وب"
                        text="امروزه برای دستیابی به بازار گسترده مخاطبان، فعالیت در بستر وب امری اجتناب ناپذیر است. سیستم های تحت وب از جهت توانایی و تاثیرگزاری و خدماتی که ارائه میدهند همواره از مناسب ترین گزینه ها برای رسیدن به این هدف هستند." />
                </ul>
            </div>
        </section>
    )
}

export default ServiceSection;
