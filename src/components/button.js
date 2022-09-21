function Button(props) {
  return (
    <div>
      <button
        className={`${props.bgColor} ${props.fontColor} p-3 rounded-[20px] flex justify-center items-center w-96 text-lg font-sans font-medium`}
      >
        <div className="w-5 mr-5">
          <img src={props.icon} />
        </div>
        <div>{props.buttonFor}</div>
      </button>
    </div>
  );
}

export default Button;
