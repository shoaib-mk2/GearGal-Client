import { Link } from "react-router-dom";


const Brand = ({ brandlogo }) => {
    const { brand, logo } = brandlogo;

    return (
        <Link to={`/brandItems/${brand}`}>
            <div className="card bg-gradient-to-r from-slate-400 shadow-xl">
                <figure className="px-10 pt-10 h-52">
                    <img src={logo} alt="" className="rounded-xl w-32" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brand}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Brand;