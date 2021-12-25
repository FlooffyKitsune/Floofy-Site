import SideBar from "./components/SideBar";
import logo from '../images/svg/FloofyLogo.svg';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <img src={logo} />
        <h2>Coming soon...</h2>
      </div>
    </div>
  );
}

export default App;