import SmallLogo from '../../images/svg/FloofyLogoSmall.svg';

import { BsGearFill } from 'react-icons/bs';
import { VscCode } from 'react-icons/vsc';
import { MdDesignServices } from 'react-icons/md';
import { IoBrush, IoCubeOutline, IoAlertCircleOutline } from 'react-icons/io5';

const SideBar = () => {
  return (
    <div class="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <img src={SmallLogo} className="sidebar-logo" />
      <Divider />
      <SideBarIcon icon={<VscCode size="28" />} text={"Coding"} />
      <SideBarIcon icon={<IoBrush size="24" />} text={"Illustration"} />
      <SideBarIcon icon={<MdDesignServices size="28" />} text={"Graphic Design"} />
      <SideBarIcon icon={<IoCubeOutline size="28" />} text={"Modeling"} />
      <SideBarIcon icon={<IoAlertCircleOutline size="28" />} text={"About"} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} text={"Stuff"} />
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;