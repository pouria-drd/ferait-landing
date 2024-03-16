import { useEffect, useState } from "react";

import avacadu from "./images/avacadu.png";
import avacadu2 from "./images/avacadu2.png";

import rasacrowd from "./images/rasacrowd.png";
import rasacrowd2 from "./images/rasacrowd2.png";

import siteChoob from "./images/site-choob.png";
import siteChoob2 from "./images/site-choob2.png";

import ProductSectionItem from "./ProductSectionItem";

type ItemsManagerProps =
    | {
        autoSlide: false;
    }
    | { autoSlide: true; autoSlideIntervalMS?: number }


const ItemsManager = (props: ItemsManagerProps) => {
    const { autoSlideIntervalMS = 3000 } = props.autoSlide ? props : {};
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const items = [
        <ProductSectionItem
            name="سایت چوب" type="siteChoob"
            img1SRC={siteChoob} img2SRC={siteChoob2}
            linkName="جستجو وسفارش" linkTo="https://sitechoob.ir"
            title="بازارگاه اینترنتی صنعت چوب و کابینت"
            caption="امکان جستجو و سفارش از میان برندهای برتر و پرکاربرد ورق های MDF و PVC،
                صفحه کابینت و یراق آلات و سفارش از فروشندگان معتبر سراسر کشور.." />,

        <ProductSectionItem
            name="رسا کراد" type="rasacrowd"
            img1SRC={rasacrowd} img2SRC={rasacrowd2}
            linkName="توسعه ایده ها" linkTo="https://rasacrowd.ir"
            title="رسانه سرمایه گذاران و استارت آپ ها"
            caption="رسا بستری است برای ارتباط میان صاحبان ایده، تیم های استارتاپی و 
                کسب و کارهای در حال توسعه با سرمایه گذاران..."/>,

        <ProductSectionItem
            name="آواکادو" type="avacadu"
            img1SRC={avacadu} img2SRC={avacadu2}
            linkName="ثبت آواکادو" linkTo="https://avacadu.ir"
            title="عکس ها صدا دارند"
            caption="آواکاو، آوایی است که آن را کادو می دهید. قابی ماندگار از خاطره ها 
                که در آن تصویر لحظه ها ثبت می شوندو صدا ها به آن جان می دهد."/>
    ]

    const nextSlide = () => setCurrentIndex(
        currentIndex => currentIndex === items.length - 1 ? 0 : currentIndex + 1
    );

    // const perviousSlide = () => setCurrentIndex(
    //     currentIndex => currentIndex === 0 ? items.length - 1 : currentIndex - 1
    // );

    useEffect(() => {
        if (!props.autoSlide) return;

        const slideInterval = setInterval(nextSlide, autoSlideIntervalMS);
        return () => clearInterval(slideInterval);
    }, [props.autoSlide, autoSlideIntervalMS])

    return (
        <>
            {
                items[currentIndex]
            }

            <div className="relative">
                <div className="absolute -bottom-20 left-0 right-0">
                    <div className="flex items-center justify-center gap-2">
                        {
                            items.map((_, index) => (
                                <div key={index} onClick={() => setCurrentIndex(index)} className={`
                                transition-all w-3 h-3 bg-ferait-blue rounded-full cursor-pointer
                                ${currentIndex === index ? "p-2" : "bg-opacity-50"}`}>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemsManager;
