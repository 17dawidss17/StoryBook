import PropTypes from "prop-types";

function Button({
  label,
  backgroundColor = "green",
  size = "md",
  handleClick,
}) {
  let scale = 1;
  if (size === "sm") scale = 0.5;
  if (size === "lg") scale = 2;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  };
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default Button;
