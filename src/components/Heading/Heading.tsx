import handShake from '../../assets/Hand.gif';
import hero from '../../assets/hero.png';
const Heading = () => {
  return (
    <div className="">
      <div className="absolute w-[60%] -z-10 h-[70%] rounded-[30px] transform rotate-45 bg-soft-orange-red -translate-y-56 translate-x-10 right-0"></div>
      <div className="flex flex-col items-center mt-28">
        <div className="tracking-wider text-dark-gray font-semibold text-xl flex">
          Hi <img src={handShake} alt="Hand.gif" className="w-6 h-6" />, My Name
          is Azar
        </div>
        <div className="text-3xl font-bold text-dark-gray mt-7 mx-3">
          I AM A DEVELOPER
        </div>
        <div className="text-lg font-medium mt-6 text-dark-gray-2 tracking-wider">
          Based in Bandung, Indonesia
        </div>
        <div className="relative transform w-full flex justify-center mt-8">
          <button className="absolute z-10 w-36 h-10 flex justify-center py-2 bg-orange-red text-white rounded-sm tracking-wider shadow-md">
            Download CV
          </button>
          <button className="absolute z-0 top-2 translate-x-1 w-36 h-10 flex justify-center py-2 bg-dark-gray text-white rounded-sm tracking-wider shadow-md"></button>
        </div>
        <div className="mt-24">
          <img src={hero} className="w-72" alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Heading;
