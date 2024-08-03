import { FaGithub, FaReact } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { SiNestjs, SiVite } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-400 min-h-[15vh] flex justify-center p-5 font-semibold flex-col align-middle items-center gap-8">
      <h2 className="text-[20px] text-neutral-800">StudyStorage</h2>
      <p className="text-neutral-800">
        Using Supabase and NestJS to store files in a simple way
      </p>
      <nav>
        <ul className="flex gap-8">
          <li>
            <a href="https://github.com/devlooppear" className="text-neutral-800 hover:text-neutral-950">
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a href="https://supabase.com/" className="text-neutral-800 hover:text-neutral-950">
              <RiSupabaseFill size={30} />
            </a>
          </li>
          <li>
            <a href="https://react.dev/" className="text-neutral-800 hover:text-neutral-950">
              <FaReact size={30} />
            </a>
          </li>
          <li>
            <a href="https://nestjs.com/" className="text-neutral-800 hover:text-neutral-950">
              <SiNestjs size={30} />
            </a>
          </li>
          <li>
            <a href="https://vitejs.dev/" className="text-neutral-800 hover:text-neutral-950">
              <SiVite size={30} />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
