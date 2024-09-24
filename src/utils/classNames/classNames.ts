export const classNames = (...args: unknown[]) => {
  return args
    .filter(s => s)
    .map(s => String(s))
    .join(' ');
};
