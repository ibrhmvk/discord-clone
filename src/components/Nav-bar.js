import Logo from "../assets/discord-logo.svg";

function NavBar() {
  return (
    <nav className="flex py-4 px-32 justify-between font-mono items-center">
      <div className="flex">
        <div className="w-full">
          <img src={Logo} className="w-32" />
        </div>
      </div>
      <div>
        <ul className="flex justify-between text-white font-semibold">
          <li>Download</li>
          <li className="ml-6">Nitro</li>
          <li className="ml-6">Saftey</li>
          <li className="ml-6">Support</li>
          <li className="ml-6">Blog</li>
          <li className="ml-6">Careers</li>
        </ul>
      </div>
      <div>
        <button className="bg-white p-3 rounded-[20px] text-sm">Login</button>
      </div>
    </nav>
  );
}

export default NavBar;
