import Logo from "../assets/discord-logo.svg";
import Menu from "../assets/menu.png";

function NavBar() {
  return (
    <nav className="flex py-4 px-32 justify-between font-mono items-center">
      <div className="flex">
        <div className="w-32">
          <img src={Logo} className="w-full" />
        </div>
      </div>
      <div>
        
        <ul className="hidden lg:flex justify-between text-white font-semibold ">
          <li>Download</li>
          <li className="ml-6">Nitro</li>
          <li className="ml-6">Saftey</li>
          <li className="ml-6">Support</li>
          <li className="ml-6">Blog</li>
          <li className="ml-6">Careers</li>
        </ul>
      </div>
      <div>
        <button className="bg-white p-3 rounded-[20px] text-sm hidden lg:flex">Login</button>
        <div className="w-10 lg:hidden">
          <img src={Menu} className="w-full" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
