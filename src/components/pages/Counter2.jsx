import { useState } from "react";
import { Helmet } from "react-helmet-async";

function useCounter() {
  let initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [value, setValue] = useState();

  const incrementHandler = () => {
    setCount((prevValue) => prevValue + 1);
  };
  
  const decrementHandler = () => {
    setCount((prevValue) => prevValue - 1);
  };

  const resetHandler = () => {
    setCount(initialCount);
  };

  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const setValueBtnHandler = (e) => {
    e.preventDefault();
    setCount((prevValue) => (prevValue = value));
  };

  return (
    <div>
      <Helmet>
        <title>Counter App | OsitaLight</title>
        <meta
          name="description"
          content="Welcome! this is my counter app project"
        />
        <link rel="canonical" href="counter" />
      </Helmet>
      <h1> useState Counter</h1>
      <h2>
        Counter: <span>{count}</span>
      </h2>
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <form>
        <input
          type="number"
          placeholder="0"
          value={value}
          onChange={valueHandler}
        />
        <button type="submit" onClick={setValueBtnHandler}>
          Set value
        </button>
      </form>
    </div>
  );
}
export default useCounter;
