import PropTypes from "prop-types";

const HistoryList = ({ history, restoredHistoryId, restoreOperation }) => {
  return (
    <>
      <li key={history.id.value} style={{ margin: "1rem" }}>
        {`the operation ${history.a} ${history.operator} 
                  ${history.b} 
                  results ${history.result}`}{" "}
        <br />
        <small>created at {history.createdAt}</small>
      </li>
      <button
        disabled={history.id === restoredHistoryId}
        onClick={() => restoreOperation(history.id)}
      >
        restore
      </button>
    </>
  );
};

HistoryList.propTypes = {
  history: PropTypes.shape({
    id: PropTypes.object.isRequired,
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
    result: PropTypes.number.isRequired,
    operator: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  restoredHistoryId: PropTypes.number.isRequired,
  restoreOperation: PropTypes.func.isRequired
};

export default HistoryList;
