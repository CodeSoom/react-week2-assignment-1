function ViewCount({ count, onClick }) {
  return (
    <button type="button" onClick={() => onClick()}>
      Click me!(
      {count}
      )
    </button>
  );
}

export default ViewCount;
