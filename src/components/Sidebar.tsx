import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className="sidebar fixed top-0 left-0 h-screen w-20 bg-[#1A1C1E] text-white">
      <ul className="p-4 flex flex-col justify-between items-center h-full">
        <div className="top">
          <li className="mb-2">
            <div className="flex items-center justify-center">
              <FaHome className="mb-3 cursor-pointer" size={20} />
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center justify-center">
              <FaUser className="mb-3 cursor-pointer" size={20} />
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center justify-center">
              <FaSearch className="mb-3 cursor-pointer" size={20} />
            </div>
          </li>
        </div>

        <div className="bottom">
          <li className="flex flex-col items-center">
            <IoMdSettings size={20} className="cursor-pointer" />
            <FaUser className="mt-4 cursor-pointer" size={20} />
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
