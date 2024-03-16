import ProductSectionItem from "./ProductSectionItem";
import siteChoob from "./images/site-choob.png";
import siteChoob2 from "./images/site-choob2.png";
import rasacrowd from "./images/rasacrowd.png";
import rasacrowd2 from "./images/rasacrowd2.png";
import avacadu from "./images/avacadu.png";
import avacadu2 from "./images/avacadu2.png";

const ProductSection = () => {
    return (
        <section className="bg-ferait-bgBlue-100 font-peyda-medium cursor-default px-6 lg:px-36 py-24 lg:py-48" id="products">


            <ProductSectionItem
                name="سایت چوب" type="siteChoob"
                img1SRC={siteChoob} img2SRC={siteChoob2}
                linkName="جستجو وسفارش" linkTo="https://sitechoob.ir"
                title="بازارگاه اینترنتی صنعت چوب و کابینت"
                caption="امکان جستجو و سفارش از میان برندهای برتر و پرکاربرد ورق های MDF و PVC،
                صفحه کابینت و یراق آلات و سفارش از فروشندگان معتبر سراسر کشور.." />



            <ProductSectionItem
                name="رسا کراد" type="rasacrowd"
                img1SRC={rasacrowd} img2SRC={rasacrowd2}
                linkName="توسعه ایده ها" linkTo="https://rasacrowd.ir"
                title="رسانه سرمایه گذاران و استارت آپ ها"
                caption="رسا بستری است برای ارتباط میان صاحبان ایده، تیم های استارتاپی و 
                کسب و کارهای در حال توسعه با سرمایه گذاران..."/>


            <ProductSectionItem
                name="آواکادو" type="avacadu"
                img1SRC={avacadu} img2SRC={avacadu2}
                linkName="ثبت آواکادو" linkTo="https://avacadu.ir"
                title="عکس ها صدا دارند"
                caption="آواکاو، آوایی است که آن را کادو می دهید. قابی ماندگار از خاطره ها 
                که در آن تصویر لحظه ها ثبت می شوندو صدا ها به آن جان می دهد."/>
        </section>
    )
}

export default ProductSection;
