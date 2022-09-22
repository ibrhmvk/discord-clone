import JustChilling from "../assets/just_chiling_landing.svg";
import Button from "./button";
import DownloadWhite from "../assets/download-white.png";

function StartJourney() {
  return (
    <div className="flex justify-center items-center p-36 flex-col bg-slate-100">
      <h2 className="text-6xl text-black font-sans font-bold w-full text-center">
        RELIABLE TECH FOR STAYING CLOSE
      </h2>
      <p className=" w-3/4 mt-6 font-sans font-light text-lg text-center">
        Low-latency voice and video feels like you’re in the same room. Wave
        hello over video, watch friends stream their games, or gather up and
        have a drawing session with screen share.
      </p>
      <div className="w-full lg:w-[1000px]">
        <img src={JustChilling} className="w-full h-auto" />
      </div>
      <h2 className="text-3xl text-black font-sans font-bold w-full text-center mt-10">
        Ready to start your journey?
      </h2>
      <div className="mt-10">
      <Button
              bgColor={"bg-blue-600"}
              fontColor={"text-white"}
              icon={DownloadWhite}
              buttonFor={"Download from Google Play"}
              hoverColor={"hover:text-blue-600"}
              
            />
      </div>
      
    </div>
  );
}

export default StartJourney;
