import { useEffect, useRef, useCallback } from "react";

export function useDebounce<F extends (...args: never[]) => unknown>(
  func: F,
  delay: number,
) {
  const funcRef = useRef<F>(func);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => {
    funcRef.current = func;
  });
  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);
  return useCallback(
    function (this: ThisParameterType<F>, ...args: Parameters<F>) {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        funcRef.current.apply(this, args);
      }, delay);
    },
    [delay],
  );
}
