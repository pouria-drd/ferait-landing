import HeroSection from "../components/heroSection/HeroSection";
import TeamSection from "../components/teamSection/TeamSection";
import ServiceSection from "../components/serviceSection/ServiceSection";
import ProductSection from "../components/productSection/ProductSection";

const HomePage = () => {
    return (
        <div className="w-full">
            <HeroSection />
            <ServiceSection />
            <ProductSection />
            <TeamSection />
        </div>
    )
}

export default HomePage;
