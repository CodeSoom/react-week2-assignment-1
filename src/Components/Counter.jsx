const Counter = ({ count, onClick }) => (
  <button type="button" onClick={() => onClick(1)}>
    Click me!
    (
    {count}
    )
  </button>
);

export default Counter;
