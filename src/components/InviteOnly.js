import InviteImage from "../assets/invite_only_landing.svg";

function InviteOnly() {
  return (
    <div className="flex justify-center items-center p-36 lg:flex-row flex-col">
      <div className="w-full lg:w-[1000px]">
        <img src={InviteImage} className="w-full h-auto" />
      </div>
      <div className="flex flex-col ml-28">
        <h2 className="text-6xl text-black font-sans font-bold xl:w-2/3 w-full">
          Create an invite-only place where you belong
        </h2>
        <p className="xl:w-2/4 w-full mt-6 font-sans font-light text-lg">
          Discord servers are organized into topic-based channels where you can
          collaborate, share, and just talk about your day without clogging up a
          group chat.
        </p>
      </div>
    </div>
  );
}

export default InviteOnly;
