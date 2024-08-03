import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-400 flex flex-row justify-between p-2">
        <h2 className="font-semibold text-[20px] text-neutral-900 bg-neutral-300 px-2 rounded-md shadow-md">StudyStorage</h2>
        <ul>
          <li>
          </li>
          <li className="bg-gray-300 rounded p-1 border border-gray-500 shadow-md">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
