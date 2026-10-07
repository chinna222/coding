// Implement debounce(func, wait) so that func is called only after wait milliseconds have passed since the most recent call.
// The returned function should not invoke func immediately. When the delayed call finally runs,
// it should use the latest arguments and preserve the this value from the most recent call.

export function debounce<F extends (...args: never[]) => unknown>(
  func: F,
  delay: number,
): (this: ThisParameterType<F>, ...args: Parameters<F>) => void {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
