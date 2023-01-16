import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [userName, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [subject, setSubject] = useState<string>();
  const [message, setMessage] = useState<string>();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId: string | undefined = import.meta.env
      .VITE_SERVICE_ID_EMAILJS as string;
    const template: string | undefined = import.meta.env
      .VITE_TEMPLATE_EMAILJS as string;
    const publicKey: string | undefined = import.meta.env
      .VITE_PUBLIC_KEY_EMAILJS as string;

    emailjs.sendForm(serviceId, template, form.current as any, publicKey).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          title: 'Message has been sent successfully',
          showConfirmButton: false,
          icon: 'success',
          timer: 1500,
          timerProgressBar: true,
          customClass: {
            container: 'container-swal',
            title: 'text-swal',
            icon: 'text-swal',
          },
        });
        setEmail('');
        setMessage('');
        setSubject('');
        setUsername('');
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="mt-16">
      <div className="relative z-0 bg-dark-gray w-full h-[100%] p-5">
        <div className="bg-white  p-4">
          <h2 className="text-center tracking-wide  mb-2 mx-5 font-medium text-4xl text-dark-gray">
            Contact
          </h2>
          <form ref={form} className="mt-5" onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="username" className="text-dark-gray ">
                Username
              </label>
              <input
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                name="user_name"
                className="w-full p-2 my-1 placeholder:text-dark-gray-2 border-1 border border-solid border-dark-gray focus:border-2"
                placeholder="Username *"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="text-dark-gray ">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="user_email"
                className="w-full p-2 my-1 placeholder:text-dark-gray-2 border-1 border border-solid border-dark-gray focus:border-2"
                placeholder="Email *"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="text-dark-gray ">
                Subject
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                id="subject"
                name="subject"
                className="w-full p-2 my-1 placeholder:text-dark-gray-2 border-1 border border-solid border-dark-gray focus:border-2"
                placeholder="Subject *"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="text-dark-gray ">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                className="w-full p-2 my-1 placeholder:text-dark-gray-2 border-1 border border-solid border-dark-gray focus:border-2"
                placeholder="Message *"
                required
              />
            </div>
            <div className="relative transform w-full flex justify-start mb-20 group text-md">
              <button
                type="submit"
                className="absolute z-10 w-40 h-10 flex justify-center py-2 bg-soft-yellow hover:text-white text-dark-gray rounded-sm tracking-wider shadow-md group-hover:bg-orange-red transition duration-300 ease-in-out"
              >
                SEND MESSAGE
              </button>
              <button className="absolute z-0 top-2 translate-x-1 w-40 h-10 flex justify-center py-2 bg-orange-red text-white rounded-sm tracking-wider shadow-md group-hover:bg-soft-yellow transition duration-300 ease-in-out"></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
