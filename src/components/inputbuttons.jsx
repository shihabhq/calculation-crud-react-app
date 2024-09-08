import PropTypes from "prop-types";
import Button from "./buttons";
const InputButtons = ({ operation, histories, clearHistory }) => {
  return (
    <div>
      <p>Operations</p>
      <Button value="+" operation={operation} />
      <Button value="-" operation={operation} />
      <Button value="*" operation={operation} />
      <Button value="/" operation={operation} />
      <Button value="%" operation={operation} />

      <button disabled={histories.length === 0} onClick={clearHistory}>
        clear
      </button>
    </div>
  );
};

InputButtons.propTypes = {
  operation: PropTypes.func.isRequired,
  histories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.object.isRequired,
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
      result: PropTypes.number.isRequired,
      operator: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }).isRequired,
  ),
  clearHistory: PropTypes.func.isRequired

}

export default InputButtons;
