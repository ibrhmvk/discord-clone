function Button(props) {
  return (
    <div>
      <button
        className={`${props.bgColor} ${props.fontColor} ${props.hoverColor} ${props.width} p-3 rounded-[20px] flex justify-center items-center text-lg font-sans font-medium hover:drop-shadow-2xl w-96 `}
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
