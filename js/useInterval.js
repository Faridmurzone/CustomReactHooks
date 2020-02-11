// useInterval proposed by Dan Abramov to make a good control of intervals in our useEffects.
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}


// USAGE:
useInterval(() => {
    setCount(count + 1);
}, isRunning ? delay : null);
