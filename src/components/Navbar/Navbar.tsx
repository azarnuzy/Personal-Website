import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTerminal,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';
import { BiTerminal } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    setPosition(scrollPosition);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-center w-full fixed z-20 top-0 transition duration-300 ease-in-out ${
        position > 0 ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between w-full max-w-5xl mx-4 my-3">
        <div
          className={`${
            isActive ? 'absolute' : 'hidden'
          } w-full h-screen z-10 bg-dark-gray opacity-30 top-0 left-0`}
          onClick={() => {
            setIsActive(() => false);
          }}
        ></div>
        <Link to={'/'} className="flex items-center gap-1">
          <BiTerminal className="text-orange-red text-4xl" />
          <span className="tracking-wider font-bold text-4xl text-dark-gray">
            AZAR
          </span>
        </Link>
        <div
          className={`fixed flex flex-col bg-dark-gray text-white max-w-[300px] transform  gap-8 h-screen w-full top-0 z-50 px-8 pt-3 left-0 duration-1000 ease-in-out ${
            isActive ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center gap-1 justify-between">
            <div className="flex gap-1 items-center">
              <BsTerminal className="text-orange-red text-3xl" />
              <span className="tracking-wider font-black text-4xl text-white">
                AZAR
              </span>
            </div>
            <div className="rounded-full bg-[#41444b] p-1 ">
              <AiOutlineClose
                className="text-2xl flex items-center  font-black"
                onClick={() => {
                  setIsActive(() => false);
                }}
              />
            </div>
          </div>
          <div className="h-[68%]">
            <ul className="list-none flex flex-col gap-2 text-xl">
              <Link to={'/'}>Home</Link>
              <Link to={'/resume'}>Resume</Link>
              <Link to={'/portofolio'}>Portofolio</Link>
              <Link to={'/contact'}>Contact</Link>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <span>azarnuzy@gmail.com</span>
              <span>+6282246449106</span>
            </div>
            <ul className="flex gap-3">
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
                <BsYoutube />
              </li>
            </ul>
          </div>
        </div>
        <ul className="md:flex gap-3 list-none hidden">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <ul className="hidden md:flex gap-1 list-none">
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
            <BsYoutube />
          </li>
        </ul>
        <div className="flex items-center text-3xl relative z-10">
          <FiMenu
            onClick={() => {
              setIsActive((isActive) => !isActive);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
