import FantomImage from "../assets/fandom_landing.svg";

function Fantom() {
  return (
    <div className="flex justify-center items-center p-36 lg:flex-row flex-col">
      <div className="w-full lg:w-[1000px]">
        <img src={FantomImage} className="w-full h-auto" />
      </div>
      <div className="flex flex-col ml-28">
        <h2 className="text-6xl text-black font-sans font-bold xl:w-2/3 w-full">
          From few to a fandom
        </h2>
        <p className="xl:w-2/4 w-full mt-6 font-sans font-light text-lg">
          Get any community running with moderation tools and custom member
          access. Give members special powers, set up private channels, and
          more.
        </p>
      </div>
    </div>
  );
}

export default Fantom;
