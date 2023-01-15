import { AiFillProfile, AiFillTrophy } from 'react-icons/ai';
import { BiBook, BiEnvelope, BiUser } from 'react-icons/bi';
import { BsBook } from 'react-icons/bs';
import {
  FaBookOpen,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaStar,
  FaSuitcase,
  FaUserGraduate,
} from 'react-icons/fa';
import { TbBook, TbPodium } from 'react-icons/tb';
const ResumeContent = () => {
  return (
    <div className="mt-20 mb-10 w-full">
      <h2 className="text-center tracking-wider mt-8 mb-2 mx-5 font-bold text-3xl text-dark-gray">
        RESUME
      </h2>
      <div className="mb-3 mx-5 ">
        <div className="mb-3">
          <div className="flex gap-3">
            <FaBookOpen className="text-orange-red font-black text-2xl" />{' '}
            <h3 className="font-bold text-xl text-dark-gray ">Education </h3>
          </div>
          <ol className="list-item">
            <li className="flex justify-start w-full">
              <div className="w-10 top-1 left-2  relative flex flex-col">
                <div className="flex-none top-2 left-2 rounded-full h-2 w-2 bg-orange-red "></div>
                <div className="flex-grow relative left-[2.5px] border-l-[2px] border-dashed border-dark-gray "></div>
              </div>
              <div className="w-full mb-2">
                <h4 className="tracking-wide text-dark-gray font-semibold text-md">
                  Universitas Pendidikan Indonesia
                </h4>
                <div className="flex flex-col w-full">
                  <span className="text-sm text-orange-red">
                    Sept 2020 - Present
                  </span>
                  <span>
                    Current GPA: 3.78 <br />
                    Activities and Societies: Google Developer Students Clubs
                    UPI, BEM Kemakom, Competitive Programming Club, Generasi
                    Baru Indonesia (GenBI).
                  </span>
                </div>
              </div>
            </li>
            <li className="flex justify-start w-full">
              <div className="w-10 h-full">
                <div className="relative top-2 left-2 rounded-full h-2 w-2 bg-orange-red "></div>
              </div>
              <div className="w-full">
                <h4 className="tracking-wide text-dark-gray font-semibold text-md">
                  SMA Negeri Cahaya Madani Banten Boarding School
                </h4>
                <div className="flex flex-col">
                  <span className="text-sm text-orange-red">
                    July 2017 - July 2020
                  </span>
                  <span>
                    Responsible to create a landing page site for a competition
                    event held by the school.
                  </span>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="mb-3">
          <div className="flex gap-3">
            <FaSuitcase className="text-orange-red font-black text-2xl" />{' '}
            <h3 className="font-bold text-xl text-dark-gray ">Experiences </h3>
          </div>
          <ol className="list-item">
            <li className="flex justify-start w-full mb-2">
              <div className="w-10 h-full">
                <div className="relative top-2 left-2 rounded-full h-2 w-2 bg-orange-red "></div>
              </div>
              <div className="w-full">
                <h4 className="tracking-wide text-dark-gray font-semibold text-md">
                  Freelance Web Developer
                </h4>
                <div className="flex flex-col w-full">
                  <span className="text-sm text-orange-red">
                    Jan 2022 - Present
                  </span>
                  <span>
                    Developing new user-facing features, determining the
                    structure and design of web pages, building reusable codes,
                    optimizing page loading times, and using some languages to
                    create the web page.
                  </span>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="mb-3">
          <div className="flex gap-3">
            <FaGraduationCap className="text-orange-red font-black text-2xl" />{' '}
            <h3 className="font-bold text-xl text-dark-gray ">Courses </h3>
          </div>
          <ol className="list-item">
            <li className="flex justify-start w-full">
              <div className="w-10 top-1 left-2  relative flex flex-col">
                <div className="flex-none top-2 left-2 rounded-full h-2 w-2 bg-orange-red "></div>
                <div className="flex-grow relative left-[2.5px] border-l-[2px] border-dashed border-dark-gray "></div>
              </div>
              <div className="w-full mb-2">
                <h4 className="tracking-wide text-dark-gray font-semibold text-md">
                  Front-End Javascript React at Binar Academy
                </h4>
                <div className="flex flex-col w-full">
                  <span className="text-sm text-orange-red">
                    July 2022 - Jan 2023
                  </span>
                  <span>The Most Progressive Student</span>
                </div>
              </div>
            </li>
            <li className="flex justify-start w-full">
              <div className="w-10 top-1 left-2  relative flex flex-col">
                <div className="flex-none top-2 left-2 rounded-full h-2 w-2 bg-orange-red "></div>
                <div className="flex-grow relative left-[2.5px] border-l-[2px] border-dashed border-dark-gray "></div>
              </div>
              <div className="w-full mb-2">
                <h4 className="tracking-wide text-dark-gray font-semibold text-md">
                  Front-End Web Developer Expert at Dicoding Indonesia
                </h4>
                <div className="flex flex-col w-full">
                  <span className="text-sm text-orange-red">
                    Dec 2021 - Jan 2022
                  </span>
                </div>
              </div>
            </li>
            <li className="flex justify-start w-full mb-2">
              <div className="w-10 h-full">
                <div className="relative top-2 left-2 rounded-full h-2 w-2 bg-orange-red "></div>
              </div>
              <div className="w-full">
                <h4 className="tracking-wide text-dark-gray font-semibold text-md">
                  Junior Web Developer at Badan Nasional Sertifikasi dan Profesi
                  (BNSP)
                </h4>
                <div className="flex flex-col w-full">
                  <span className="text-sm text-orange-red">
                    Dec 2021 - Jan 2022
                  </span>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="mb-3">
          <div className="flex gap-3">
            <AiFillTrophy className="text-orange-red font-black text-2xl" />{' '}
            <h3 className="font-bold text-xl text-dark-gray ">
              Honors & Awards{' '}
            </h3>
          </div>
          <ol className="list-item">
            <li className="flex justify-start w-full">
              <div className="w-10 top-1 left-2  relative flex flex-col">
                <div className="flex-none top-2 left-2 rounded-full h-2 w-2 bg-orange-red "></div>
                <div className="flex-grow relative left-[2.5px] border-l-[2px] border-dashed border-dark-gray "></div>
              </div>
              <div className="w-full mb-2">
                <h4 className="tracking-wide text-dark-gray font-semibold text-md">
                  3 rd Place Competitive Programming Competition Dimas-TI AMLI
                  2022, Asosiasi MIPA LPTK Indonesia
                </h4>
                <div className="flex flex-col w-full">
                  <span className="text-sm text-orange-red">June 2022</span>
                </div>
              </div>
            </li>
            <li className="flex justify-start w-full">
              <div className="w-10 top-1 left-2  relative flex flex-col">
                <div className="flex-none top-2 left-2 rounded-full h-2 w-2 bg-orange-red "></div>
                <div className="flex-grow relative left-[2.5px] border-l-[2px] border-dashed border-dark-gray "></div>
              </div>
              <div className="w-full mb-2">
                <h4 className="tracking-wide text-dark-gray font-semibold text-md">
                  Awardee Bank Indonesia Scholarships 2022, Bank Indonesia
                </h4>
                <div className="flex flex-col w-full">
                  <span className="text-sm text-orange-red">
                    April 2022 - Present
                  </span>
                </div>
              </div>
            </li>
            <li className="flex justify-start w-full mb-2">
              <div className="w-10 h-full">
                <div className="relative top-2 left-2 rounded-full h-2 w-2 bg-orange-red "></div>
              </div>
              <div className="w-full">
                <h4 className="tracking-wide text-dark-gray font-semibold text-md">
                  1 st Place Competitive Programming Competition DoIt 2021,
                  Universitas Singaperbangsa
                </h4>
                <div className="flex flex-col w-full">
                  <span className="text-sm text-orange-red">June 2021</span>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="mb-3">
          <div className="flex gap-3">
            <FaStar className="text-orange-red font-black text-2xl" />{' '}
            <h3 className="font-bold text-xl text-dark-gray ">Volunteering </h3>
          </div>
          <ol className="list-item">
            <li className="flex justify-start w-full">
              <div className="w-10 top-1 left-2  relative flex flex-col">
                <div className="flex-none top-2 left-2 rounded-full h-2 w-2 bg-orange-red "></div>
                <div className="flex-grow relative left-[2.5px] border-l-[2px] border-dashed border-dark-gray "></div>
              </div>
              <div className="w-full mb-2">
                <h4 className="tracking-wide text-dark-gray font-semibold text-md">
                  Google Developer Student Clubs UPI as Core Team
                </h4>
                <div className="flex flex-col w-full">
                  <span className="text-sm text-orange-red">
                    Sept 2022 - Present
                  </span>
                  <span>
                    Create and plan an event that held by Google Developer
                    Student Clubs UPI and also stream that event with OBS
                    platform
                  </span>
                </div>
              </div>
            </li>
            <li className="flex justify-start w-full mb-2">
              <div className="w-10 h-full">
                <div className="relative top-2 left-2 rounded-full h-2 w-2 bg-orange-red "></div>
              </div>
              <div className="w-full">
                <h4 className="tracking-wide text-dark-gray font-semibold text-md">
                  P3RI Salman ITB 1443 H Bandung as Streaming Divison
                </h4>
                <div className="flex flex-col w-full">
                  <span className="text-sm text-orange-red">
                    March 2022 - Jun 2022
                  </span>
                  <span>
                    Streaming during, before, and after ramadhan activities at
                    Masjid Salman ITB Using OBS as the main tool for streaming
                  </span>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="mb-3">
          <div className="flex gap-3">
            <FaStar className="text-orange-red font-black text-2xl" />{' '}
            <h3 className="font-bold text-xl text-dark-gray ">
              Organizations{' '}
            </h3>
          </div>
          <ol className="list-item">
            <li className="flex justify-start w-full">
              <div className="w-10 top-1 left-2  relative flex flex-col">
                <div className="flex-none top-2 left-2 rounded-full h-2 w-2 bg-orange-red "></div>
                <div className="flex-grow relative left-[2.5px] border-l-[2px] border-dashed border-dark-gray "></div>
              </div>
              <div className="w-full mb-2">
                <h4 className="tracking-wide text-dark-gray font-semibold text-md">
                  Generasi Baru Indonesia (GenBI) UPI
                </h4>
                <div className="flex flex-col w-full">
                  <span className="text-sm text-orange-red">
                    April 2022 - Present
                  </span>
                  <span>
                    Generasi Baru Indonesia (GenBI) is a community consisting of
                    students receiving Bank Indonesia scholarships under Bak
                    Indonesia. Successfully run a program to develop UMKM in one
                    of the villages in Bandung in order to support the G20 and I
                    was in charge of logistic division
                  </span>
                </div>
              </div>
            </li>
            <li className="flex justify-start w-full mb-2">
              <div className="w-10 h-full">
                <div className="relative top-2 left-2 rounded-full h-2 w-2 bg-orange-red "></div>
              </div>
              <div className="w-full">
                <h4 className="tracking-wide text-dark-gray font-semibold text-md">
                  BEM Kemakom FPMIPA UPI
                </h4>
                <div className="flex flex-col w-full">
                  <span className="text-sm text-orange-red">
                    Jan 2022 - Jan 2023
                  </span>
                  <span>
                    Succeeded in holding a public lecture with the theme of
                    cyber security by presenting one of the competent speakers
                    in that field and I was the head of the even
                  </span>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
