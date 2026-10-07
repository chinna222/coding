import { useState, useRef, useEffect } from "react";
import { debounce } from "./questions/javascript/debounce.ts";

function App() {
  const [inputVal, setInputVal] = useState<string>("");
  const debounceFetch = useRef<(val: string) => void>();

  const fetchResultsCallback = useRef<(val: string) => void>(() => {});

  useEffect(() => {
    fetchResultsCallback.current = (val: string) => {
      console.log("inputVal", val);
    };
  });

  useEffect(() => {
    if (!debounceFetch.current) {
      debounceFetch.current = debounce(
        (val: string) => fetchResultsCallback.current(val),
        500,
      );
    }
  }, []);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    debounceFetch.current?.(e.target.value);
  };

  return (
    <>
      <input value={inputVal} onChange={onChangeHandler} />
    </>
  );
}

export default App;
