import InviteImage from "../assets/invite_only_landing.svg";

function InviteOnly() {
  return (
    <div className="flex justify-between items-center p-36">
      <div className="w-full">
        <img src={InviteImage} className="w-full h-auto" />
      </div>
      <div className="flex flex-col ml-28">
        <h2 className="text-6xl text-black font-sans font-bold w-2/3 ">
          Create an invite-only place where you belong
        </h2>
        <p className="w-2/4 mt-6 font-sans font-light text-lg">
          Discord servers are organized into topic-based channels where you can
          collaborate, share, and just talk about your day without clogging up a
          group chat.
        </p>
      </div>
    </div>
  );
}

export default InviteOnly;
