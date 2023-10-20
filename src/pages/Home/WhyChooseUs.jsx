import { BiSolidCarMechanic } from "react-icons/bi";
import { FaCarOn } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";


const WhyChooseUs = () => {
    return (
        <div className="bg-[#f3f8fb] p-12 mb-16">
            <div className="w-4/5 mx-auto lg:flex gap-6">
                <div>
                    <p className="text-lg font-bold text-[#ff7700]">Why Choose Us</p>
                    <h2 className="text-4xl mb-5"><span className="border-b-4 border-[#ff7700]">We</span> Provide Best Services</h2>
                    <p className="mb-5">What sets us apart is our relentless pursuit of perfection. From the moment you walk through our doors or engage with our services, you'll experience the difference. Our expert staff is meticulously trained, experienced, and fully devoted to delivering the highest standards of service.</p>
                    <img src="/whychooseusCar.png" alt="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-white rounded-lg">
                        <BiSolidCarMechanic className="text-4xl text-[#ff7700]"></BiSolidCarMechanic>
                        <h2 className="text-lg font-bold">Expert Certified Mechanics</h2>
                        <p>Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating.</p>
                    </div>
                    <div className="p-5 bg-white rounded-lg">
                        <BsCashCoin className="text-4xl text-[#ff7700]"></BsCashCoin>
                        <h2 className="text-lg font-bold">Get Reasonable Price</h2>
                        <p>Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating.</p>
                    </div>
                    <div className="p-5 bg-white rounded-lg">
                        <FaCarOn className="text-4xl text-[#ff7700]"></FaCarOn>
                        <h2 className="text-lg font-bold">Genuine Spares Parts</h2>
                        <p>Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating.</p>
                    </div>
                    <div className="p-5 bg-white rounded-lg">
                        <MdOutlineSupportAgent className="text-4xl text-[#ff7700]"></MdOutlineSupportAgent>
                        <h2 className="text-lg font-bold">24 Hours Support</h2>
                        <p>Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;