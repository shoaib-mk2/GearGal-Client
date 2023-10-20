import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands";
import WhyChooseUs from "./WhyChooseUs";
import CustomerReview from "./CustomerReview";


const Home = () => {

    const brandslogos = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Brands brandslogos={brandslogos}></Brands>
            <WhyChooseUs></WhyChooseUs>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;