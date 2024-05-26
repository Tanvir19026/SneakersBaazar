
import shoppingCard from '/image/hand-drawn-running-shoes-cartoon-illustration_23-2150961844.avif'

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col lg:flex-row items-center justify-center w-full">
        <img
          src={shoppingCard}
          alt="shopping card"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-sm rounded-lg  lg:w-3/5" // Responsive width classes
        />
        <div className="text-content w-full lg:w-2/5 py-8 px-4 lg:px-8 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-blue-500">Sneaker Sphere</h1>
          <p className="py-6  text-orange-600 font-serif text-3xl">
          Your Ultimate Footwear Destination.<span className='block'> Discover Your Perfect Pair</span>
         
          </p>
          <button className="btn btn-primary text-xl">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
