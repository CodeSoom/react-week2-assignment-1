const Buttons = ({ onClick }) => (
  <div>
    {[1, 2, 3, 4, 5].map((btnNumber) => (
      <button key={btnNumber} type='button' onClick={() => onClick(btnNumber)}>
        {btnNumber}
      </button>
    ))}
  </div>
);

export default Buttons;
