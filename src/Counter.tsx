/* eslint-disable jsx-a11y/aria-role */
export const Counter = () => {
  return (
    <>
      <label htmlFor="counter">Count</label>
      <span id="counter" role="counter">
        1
      </span>
    </>
  );
};
