import { AiFillHtml5, AiFillProfile, AiFillTrophy } from 'react-icons/ai';
import { BiBook, BiEnvelope, BiUser } from 'react-icons/bi';
import { BsBook } from 'react-icons/bs';
import {
  FaBookOpen,
  FaCss3Alt,
  FaGraduationCap,
  FaLaravel,
  FaMapMarkerAlt,
  FaReact,
  FaStar,
  FaSuitcase,
  FaUserGraduate,
} from 'react-icons/fa';
import { TbBook, TbPodium } from 'react-icons/tb';
import { SiJavascript, SiRedux, SiTailwindcss } from 'react-icons/si';
const About = () => {
  return (
    <div className="mt-10 w-full">
      <h2 className="mb-2 mx-5 font-bold text-3xl text-dark-gray">About Me</h2>
      <h3 className="mb-3 mx-5 font-bold text-xl text-dark-gray">
        Student and Freelancer Web Development{' '}
      </h3>
      <p className="mx-5 font-medium text-lg text-dark-gray-2 text-justify">
        I am computer science student who has enthusiasm for something new about
        technology and highly motivated to become lifelong learner. Proficient
        in team collaboration, problem solving, good communication, likes to
        find new challenges and experiences.
      </p>
      <div className="flex flex-col gap-3 mx-5 mt-5 border border-solid border-slate-300 border-1 rounded-xl p-3 shadow-md">
        <div className="flex gap-3 items-center">
          <div className="rounded-full bg-orange-red text-white p-1">
            <BiUser className="text-xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-dark-gray font-bold">Full Name</span>
            <span className="text-lg text-dark-gray-2 font-semibold">
              Muhammad Azar Nuzy
            </span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="rounded-full bg-orange-red text-white p-1">
            <FaMapMarkerAlt className="text-xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-dark-gray font-bold">Location</span>
            <span className="text-lg text-dark-gray-2 font-semibold">
              Bandung, Indonesia
            </span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="rounded-full bg-orange-red text-white p-1">
            <BiEnvelope className="text-xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-dark-gray font-bold">Email</span>
            <span className="text-lg text-dark-gray-2 font-semibold">
              azarnuzy@gmail.com
            </span>
          </div>
        </div>
      </div>
      <h2 className="mt-5 mx-5 font-bold text-3xl text-dark-gray mb-3">
        My Skills
      </h2>
      <div className="grid grid-cols-2 gap-2 mx-5">
        <div className="border border-1 border-solid border-dark-gray flex p-2 items-center bg-soft-blue gap-3">
          <div className="border border-1 border-dark-gray bg-white p-3 flex items-center justify-center">
            <AiFillHtml5 className="text-2xl text-dark-gray" />
          </div>
          <span className="text-xl text-dark-gray tracking-wider">HTML</span>
        </div>
        <div className="border border-1 border-solid border-dark-gray flex p-2 items-center bg-soft-yellow gap-3">
          <div className="border border-1 border-dark-gray bg-white p-3 flex items-center justify-center">
            <FaCss3Alt className="text-2xl text-dark-gray" />
          </div>
          <span className="text-xl text-dark-gray tracking-wider">CSS</span>
        </div>
        <div className="border border-1 border-solid border-dark-gray flex p-2 items-center bg-soft-red gap-3">
          <div className="border border-1 border-dark-gray bg-white p-3 flex items-center justify-center">
            <FaReact className="text-2xl text-dark-gray" />
          </div>
          <span className="text-lg text-dark-gray tracking-wider">React</span>
        </div>
        <div className="border border-1 border-solid border-dark-gray flex p-2 items-center bg-soft-blue-2 gap-3">
          <div className="border border-1 border-dark-gray bg-white p-3 flex items-center justify-center">
            <SiTailwindcss className="text-2xl text-dark-gray" />
          </div>
          <span className="text-xl text-dark-gray tracking-wider">
            Tailwind
          </span>
        </div>
        <div className="border border-1 border-solid border-dark-gray flex p-2 items-center bg-soft-orange-red gap-3">
          <div className="border border-1 border-dark-gray bg-white p-3 flex items-center justify-center">
            <FaLaravel className="text-2xl text-dark-gray" />
          </div>
          <span className="text-xl text-dark-gray tracking-wider">Laravel</span>
        </div>
        <div className="border border-1 border-solid border-dark-gray flex p-2 items-center bg-soft-gray-lighter gap-3">
          <div className="border border-1 border-dark-gray bg-white p-3 flex items-center justify-center">
            <SiRedux className="text-2xl text-dark-gray" />
          </div>
          <span className="text-xl text-dark-gray tracking-wider">Redux</span>
        </div>
      </div>
      <div className="grid grid-row-2 gap-2 mx-5"></div>
      <div className="flex justify-around">
        <div className="relative transform w-full flex justify-center mt-8 group-hover group ">
          <button className="absolute z-10 w-36 h-10 flex justify-center py-2 bg-orange-red text-white rounded-sm tracking-wider shadow-md group-hover:bg-dark-gray  transition duration-150 ease-in-out">
            Contact Me
          </button>
          <button className="absolute z-0 top-2 translate-x-1 w-36 h-10 flex justify-center py-2 bg-dark-gray text-white rounded-sm tracking-wider shadow-md group-hover:bg-orange-red transition duration-150 ease-in-out"></button>
        </div>
        <div className="relative transform w-full flex justify-center mt-8 mb-20 group ">
          <button className="absolute z-10 w-36 h-10 flex justify-center py-2 bg-dark-gray text-white rounded-sm tracking-wider shadow-md group-hover:bg-orange-red transition duration-150 ease-in-out">
            Portofolio
          </button>
          <button className="absolute z-0 top-2 translate-x-1 w-36 h-10 flex justify-center py-2 bg-orange-red text-white rounded-sm tracking-wider shadow-md group-hover:bg-dark-gray transition duration-150 ease-in-out"></button>
        </div>
      </div>
    </div>
  );
};

export default About;
