import PropTypes from "prop-types";
const Fields = ({ result, operatorInPlace, inputChange, inputs }) => {
  return (
    <div>
      <h1>Result:{result}</h1>
      <h3>Operaton: {operatorInPlace}</h3>
      <p>Inputs</p>
      <input
        type="number"
        name="a"
        id=""
        onChange={inputChange}
        value={inputs.a}
      />
      <input
        type="number"
        name="b"
        id=""
        onChange={inputChange}
        value={inputs.b}
      />
    </div>
  );
};

Fields.propTypes = {
  result: PropTypes.number.isRequired,
  operatorInPlace: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
  inputs: PropTypes.objectOf({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
};

export default Fields;
