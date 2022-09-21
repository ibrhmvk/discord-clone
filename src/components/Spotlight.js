import Button from "./button";
import Right from "../assets/right-bg.svg";
import Left from "../assets/left-bg.svg";
import Download from "../assets/download.png";

function Spotlight() {
  return (
    <div className="grid place-items-center h-[90vh] bg-hero-pattern bg-right bg-fixed bg-no-repeat bg-cover">
      <div className="w-full ">
        <div className="relative w-full ">
          <div className="flex justify-center items-center flex-col absolute z-10 w-full">
            <h1 className="text-7xl font-sans font-bold text-white">
              IMAGINE A PLACE...
            </h1>
            <p className="w-[45%] text-white text-base mt-12 font-sans leading-9 text-center">
              …..Where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full ">
        <div className="flex justify-center items-center mt-7 absolute z-10 w-full">
          <div>
            <Button
              bgColor={"bg-slate-100"}
              fontColor={"text-black"}
              icon={Download}
              buttonFor={"Download for Mac"}
              hoverColor={"hover:text-blue-600"}
            />
          </div>
          <div className="ml-16">
            <Button
              bgColor={"bg-gray-800"}
              fontColor={"text-white"}
              buttonFor={"Open Discord in your browser"}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <img src={Right} className=" w-[45%] absolute top-[-300px] right-0" />
        <img src={Left} className="w-2/5 absolute top-[-210px] left-0" />
      </div>
    </div>
  );
}

export default Spotlight;
