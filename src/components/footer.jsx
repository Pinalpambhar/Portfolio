import { TbBrandLinkedin } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import { SiWellfound } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:px-6 lg:py-8">
          {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
          <div className="sm:flex sm:items-center sm:justify-between">
            {/* Text */}
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Developed by Pinal Pambhar
            </span>

            {/* Social Icons */}
            <div className="mt-4 sm:mt-0 flex items-center justify-center gap-4 text-2xl">
              <a
                href="https://linkedin.com/in/pinal-pambhar" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandLinkedin />
              </a>
              <a
                href="https://github.com/pinalpambhar" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub />
              </a>
              <a
                href="https://wellfound.com/u/pinal-pambhar" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWellfound />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
