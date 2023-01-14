import {
  BsEnvelopeFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';
import handShake from '../../assets/Hand.gif';
import hero from '../../assets/hero2.png';
const Heading = () => {
  return (
    <div className="hero-background relative overflow-hidden">
      <div className="flex flex-col items-center mt-28">
        <div className="tracking-wider text-dark-gray font-semibold text-xl flex">
          Hi <img src={handShake} alt="Hand.gif" className="w-6 h-6" />, My Name
          is Azar
        </div>
        <div className="text-3xl font-bold text-dark-gray mt-7 mx-3">
          I'M WEB DEVELOPER
        </div>
        <div className="text-lg font-medium mt-6 text-dark-gray-2 tracking-wider">
          Based in Bandung, Indonesia
        </div>
        <div className="relative w-full flex justify-center mt-8">
          <button className="absolute z-10 w-36 h-10 flex justify-center py-2 bg-orange-red text-white rounded-sm tracking-wider shadow-md">
            Download CV
          </button>
          <button className="absolute z-0 top-2 translate-x-1 w-36 h-10 flex justify-center py-2 bg-dark-gray text-white rounded-sm tracking-wider shadow-md"></button>
        </div>
        <div className="mt-24 hero-banner bg-soft-blue">
          <img src={hero} className="w-52" alt="hero-img" />
        </div>
        <div className="mt-14 w-full bg-dark-gray h-20 px-5">
          <ul className="flex gap-3 w-full h-20 items-center text-white justify-between text-2xl">
            <li>
              <BsLinkedin />
            </li>
            <li>
              <BsGithub />
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsEnvelopeFill />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Heading;
