import ItemsManager from "./ItemsManager";

const ProductSection = () => {
    return (
        <section className="bg-ferait-bgBlue-100 font-peyda-medium cursor-default 
            px-6 lg:px-36 py-24 lg:py-48" id="products">

            <ItemsManager autoSlide={true} autoSlideIntervalMS={5000} />

        </section>
    )
}

export default ProductSection;
