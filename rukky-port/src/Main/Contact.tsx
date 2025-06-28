import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="mt-10 flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-8 lg:text-4xl">Contact Me</h3>
      <div className="flex flex-col items-center">
        <form className=" w-[90vw] border-zinc-300 rounded-md border-2 p-6 lg:w-[60vw]">
          <div className="mb-4">
            <label htmlFor="name" className="block text-zinc-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 bg-zinc-200 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-zinc-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 bg-zinc-200 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-zinc-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 bg-zinc-200 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md cursor-pointer hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>

        <div className="flex gap-6 mt-4">
          <a
            href="mailto:michaelomonedo001@gmail.com"
            className="text-zinc-700 hover:text-blue-500 transition-colors duration-200"
            aria-label="Email"
          >
            <SiGmail size={24} />
          </a>
          <a
            href="http://linkedin.com/in/michael-omonedo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 hover:text-blue-500 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://x.com/Wazzaaah_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 hover:text-blue-500 transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://github.com/Rukkyoo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 hover:text-blue-500 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
