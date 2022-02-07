import PropTypes from "prop-types";

function Input(props) {
  const {
    padding = 1,
    border = "1px solid black",
    placeholder = "Password",
    backgroundColor = "silver",
  } = props;

  const style = {
    padding: `${padding}rem`,
    border: border,
    backgroundColor: backgroundColor,
  };

  return (
    <>
      <input style={style} placeholder={placeholder} />
    </>
  );
}

Input.propTypes = {
  padding: PropTypes.number,
  border: PropTypes.string,
  placeholder: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Input;
