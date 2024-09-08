import PropTypes from "prop-types";

const Button = ({ value, operation }) => {
  return (
    <button value={value} onClick={() => operation(value)}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  operation: PropTypes.func.isRequired,
};

export default Button;
