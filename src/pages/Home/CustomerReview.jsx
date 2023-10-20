import { PiCarProfileBold } from "react-icons/pi";

const CustomerReview = () => {
    return (
        <div className='text-center py-12'>
            <div className="w-4/5 lg:w-1/2 mx-auto">
                <h2 className='text-3xl md:text-5xl'>Customer Reviews</h2>
                <PiCarProfileBold className="text-5xl mx-auto text-[#ff7700] my-6"></PiCarProfileBold>
                <p className="md:text-lg mb-10">I can't say enough good things about GearGal. They were a lifesaver when my car broke down. The speedy response and expert service made a stressful situation much easier to handle. They were transparent about the repairs, pricing, and timelines, which I greatly appreciated. The quality of work was exceptional, and my car feels like new. Kudos to the entire team for their professionalism and going the extra mile to ensure I was back on the road safely. I'll be recommending GearGal to all my friends and family. Thank you!</p>
                <p className="text-xl font-bold">Jason Makky</p>
                <p>Vehicle Buyer</p>
            </div>
        </div>
    );
};

export default CustomerReview;