import binarcarrent from '../../assets/binarcarrent.png';
import bookshelf from '../../assets/bookshelf.png';
import coursemate from '../../assets/coursemate.jpg';
import eprints from '../../assets/eprints.jpg';
import flyket from '../../assets/flyket.png';
import flyket2 from '../../assets/flyket2.jpg';
import moviecatalog from '../../assets/moviecatalog.png';
import portofolio1 from '../../assets/Portoflio1.png';
import recipecatalog from '../../assets/recipecatalog.png';
import resto from '../../assets/resto.png';
import simanuk from '../../assets/simanuk.jpg';
import todolist from '../../assets/todolist.png';
import suit from '../../assets/suit.png';
import portofolio from './portofolio.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Portofolio = () => {
  const [data, setData] = useState(portofolio);

  const imageProject = (item: string) => {
    if (item === 'binarcarrent') {
      return (
        <img
          src={binarcarrent}
          alt={`binarcarrent photo`}
          className="hover:scale-[1.03] object-cover  transition duration-300 ease-in-out"
        />
      );
    }
    if (item === 'bookshelf') {
      return (
        <img
          src={bookshelf}
          alt={`bookshelf photo`}
          className="hover:scale-[1.03] object-cover  transition duration-300 ease-in-out"
        />
      );
    }
    if (item === 'coursemate') {
      return (
        <img
          src={coursemate}
          alt={`coursemate photo`}
          className="hover:scale-[1.03] object-cover  transition duration-300 ease-in-out"
        />
      );
    }
    if (item === 'eprints') {
      return (
        <img
          src={eprints}
          alt={`eprints photo`}
          className="hover:scale-[1.03] object-cover  transition duration-300 ease-in-out"
        />
      );
    }
    if (item === 'flyket') {
      return (
        <img
          src={flyket}
          alt={`flyket photo`}
          className="hover:scale-[1.03] object-cover  transition duration-300 ease-in-out"
        />
      );
    }
    if (item === 'flyket2') {
      return (
        <img
          src={flyket2}
          alt={`flyket2 photo`}
          className="hover:scale-[1.03] object-cover  transition duration-300 ease-in-out"
        />
      );
    }
    if (item === 'moviecatalog') {
      return (
        <img
          src={moviecatalog}
          alt={`moviecatalog photo`}
          className="hover:scale-[1.03] object-cover  transition duration-300 ease-in-out"
        />
      );
    }
    if (item === 'portofolio1') {
      return (
        <img
          src={portofolio1}
          alt={`portofolio1 photo`}
          className="hover:scale-[1.03] object-cover  transition duration-300 ease-in-out"
        />
      );
    }
    if (item === 'recipecatalog') {
      return (
        <img
          src={recipecatalog}
          alt={`recipecatalog photo`}
          className="hover:scale-[1.03] object-cover  transition duration-300 ease-in-out"
        />
      );
    }
    if (item === 'resto') {
      return (
        <img
          src={resto}
          alt={`resto photo`}
          className="hover:scale-[1.03] object-cover  transition duration-300 ease-in-out"
        />
      );
    }
    if (item === 'simanuk') {
      return (
        <img
          src={simanuk}
          alt={`simanuk photo`}
          className="hover:scale-[1.03] object-cover  transition duration-300 ease-in-out"
        />
      );
    }
    if (item === 'todolist') {
      return (
        <img
          src={todolist}
          alt={`todolist photo`}
          className="hover:scale-[1.03] object-cover  transition duration-300 ease-in-out"
        />
      );
    }
    if (item === 'suit') {
      return (
        <img
          src={suit}
          alt={`suit photo`}
          className="hover:scale-[1.03] object-cover  transition duration-300 ease-in-out"
        />
      );
    }
  };
  return (
    <div className="mt-20 mb-10 w-full max-w-5xl mx-auto">
      <h2 className="text-center tracking-wide mt-8 mb-2 mx-5 font-medium text-4xl text-dark-gray">
        PORTOFOLIO
      </h2>
      <div className="flex flex-col gap-3 ">
        {data.map((item, i) => {
          return (
            <div
              className={`mx-5 flex ${
                i % 2 == 1 ? 'sm:flex-row-reverse' : 'sm:flex-row'
              } flex-col sm:gap-8`}
              key={i}
            >
              <a
                href={item.url}
                target="_blank"
                className="w-full md:w-3/4  border-2 border-solid border-dark-gray shadow-sm hover:border-b-4 hover:border-r-4 transition ease-in-out duration-300 h-[220px] mb-5 overflow-hidden"
              >
                {imageProject(item.image)}
              </a>
              <div className="">
                <span
                  className={`${
                    item.tags === 'Web App' ? 'bg-soft-red' : 'bg-soft-blue'
                  } text-dark-gray text-lg tracking-wider rounded-3xl px-3 py-1 my-3`}
                >
                  {item.tags}
                </span>
                <h2 className="text-bold tracking-wide font-semibold text-dark-gray my-3 text-2xl">
                  {item.title}
                </h2>
                <p className="text-dark-gray-2 text-md">{item.description}</p>
                <a
                  href={`${item.url}`}
                  target="_blank"
                  className="relative transform w-full flex justify-start mt-8 mb-20 group text-md"
                >
                  <button className="absolute z-10 w-36 h-10 flex justify-center py-2 bg-orange-red text-white rounded-sm tracking-wider shadow-md group-hover:bg-dark-gray transition duration-300 ease-in-out">
                    VIEW PROJECT
                  </button>
                  <button className="absolute z-0 top-2 translate-x-1 w-36 h-10 flex justify-center py-2 bg-dark-gray text-white rounded-sm tracking-wider shadow-md group-hover:bg-orange-red transition duration-300 ease-in-out"></button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portofolio;
