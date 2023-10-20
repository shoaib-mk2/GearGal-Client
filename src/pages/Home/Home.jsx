import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands";


const Home = () => {

    const brandslogos = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Brands brandslogos={brandslogos}></Brands>
        </div>
    );
};

export default Home;