import { useSelector, useDispatch } from "react-redux";
import { clearGlobalError } from "../features/error/errorSlice";

const GlobalError = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.error.message);

  if (!errorMessage) return null;

  return (
    <div className="global-error">
      <p>{errorMessage}</p>
      <button onClick={() => dispatch(clearGlobalError())}>Close</button>
    </div>
  );
};

export default GlobalError;
