import { IoIosHome } from "react-icons/io";
import { SiSimpleanalytics } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { IoRocket } from "react-icons/io5";
import { IoMdDocument } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2"
import { IoMdClose } from "react-icons/io";
import PropTypes from 'prop-types';
const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className=" h-full w-72 p-3">
      <div className="me-auto fs-3  d-lg-none" onClick={toggleSidebar}>
        <IoMdClose />
      </div>

      <div className="text-center">
        <span className="text-3xl font-bold">MLM Software</span>
      </div>
      <hr className="border-t border-gray-700 my-4" />
      <div className="space-y-2">
        <a href="#" className="block px-4 py-2 ">
          <span className="d-flex text-lg gap-3 font-semibold  rounded py-2 bg-white"> <span className="p-2 ms-2 rounded-full fs-5 text-white" style={{ background: '#009688' }} ><IoIosHome /></span> Dashboard</span>
        </a>
        <a href="#" className="block px-4 py-2 ">
          <span className="d-flex text-sm gap-3 font-semibold  rounded py-2"> <span className="p-2 ms-2 rounded-full fs-5 bg-white" style={{ color: '#009688' }} ><SiSimpleanalytics /></span> Commision Structure</span>
        </a>
        <a href="#" className="block px-4 py-2 ">
          <span className="d-flex text-sm gap-3 font-semibold  rounded py-2"> <span className="p-2 ms-2 rounded-full fs-5 bg-white" style={{ color: '#009688' }} ><FaWallet /></span> Rewarding</span>
        </a>
        <a href="#" className="block px-4 py-2 ">
          <span className="d-flex text-sm gap-3 font-semibold  rounded py-2"> <span className="p-2 ms-2 rounded-full fs-5 bg-white" style={{ color: '#009688' }} ><HiMiniWrenchScrewdriver /></span> Flexible Reward</span>
        </a>
        <a href="#" className="block px-4 py-2 ">
          <span className="d-flex text-sm gap-3 font-semibold  rounded py-2"> <span className="p-2 ms-2 rounded-full fs-5 bg-white" style={{ color: '#009688' }} ><CgProfile /></span> Personal Insight</span>
        </a>
        <a href="#" className="block px-4 py-2 ">
          <span className="d-flex text-sm gap-3 font-semibold  rounded py-2"> <span className="p-2 ms-2 rounded-full fs-5 bg-white" style={{ color: '#009688' }} ><IoMdDocument /></span> Custom Dashboard</span>
        </a>
        <a href="#" className="block px-4 py-2 ">
          <span className="d-flex fs-4 gap-3 font-semibold  rounded ">Account Page</span>
        </a>

        <a href="#" className="block px-4 py-2 ">
          <span className="d-flex text-sm gap-3 font-semibold  rounded py-2"> <span className="p-2 ms-2 rounded-full fs-5 bg-white" style={{ color: '#009688' }} ><CgProfile /></span> Profile</span>
        </a>
        <a href="#" className="block px-4 py-2 ">
          <span className="d-flex text-sm gap-3 font-semibold  rounded py-2"> <span className="p-2 ms-2 rounded-full fs-5 bg-white" style={{ color: '#009688' }} ><IoMdDocument /></span> Sign Up</span>
        </a>
        <a href="#" className="block px-4 py-2 ">
          <span className="d-flex text-sm gap-3 font-semibold  rounded py-2"> <span className="p-2 ms-2 rounded-full fs-5 bg-white" style={{ color: '#009688' }} ><IoRocket /></span> Sign In</span>
        </a>
      </div>
    </div>
  );
}
Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};
export default Sidebar;
