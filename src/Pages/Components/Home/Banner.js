
import useButton from "../../../Hooks/useButton";
import banner from "../../../Images/others/Banner.jpg"

const Banner = () => {
    const btn = useButton({ children: 'Explore Parts' });
    const bgImage = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
    }
    const scaled={
        
        transform: 'scale(.7, 1)'
    }

    return (
        <div className='md:h-[500px] h-[400px] lg:h-[600px] ' style={bgImage}>
            <div className="h-full flex justify-center items-center">
                <div className="px-4">
                    <h4 className="playball text-2xl md:text-3xl lg:text-4xl text-primary font-bolder mb-4">Best Quality Parts</h4>
                    <h2 style={scaled} className="inline-block text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-wider text-white ">INDOMITABLE <span className="text-primary">BIKE</span></h2>
                    <p className="text-white mt-4 mb-8 font-bold text-base md:text-lg lg:text-xl">Get the best parts for your bike to make your bike indomitable and super powered</p>
                    {btn}
                </div>

            </div>


        </div>
    );
};

export default Banner; 