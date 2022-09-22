import HangOut from "../assets/hanging_out_easy_landing.svg";

function HangingOut() {
  return (
    <div className="flex justify-center items-center p-36 lg:flex-row flex-col bg-slate-100">
      <div className="flex flex-col ml-28">
        <h2 className="text-6xl text-black font-sans font-bold xl:w-2/3 w-full">
          Where hanging out is easy
        </h2>
        <p className="xl:w-2/4 w-full mt-6 font-sans font-light text-lg">
          Grab a seat in a voice channel when you’re free. Friends in your
          server can see you’re around and instantly pop in to talk without
          having to call.
        </p>
      </div>
      <div className="w-full lg:w-[1000px]">
        <img src={HangOut} className="w-full h-auto" />
      </div>
    </div>
  );
}

export default HangingOut;
