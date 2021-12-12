export default function NumberButtons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((number,index) => (
        <button type="button" key={index+1} onClick={() => onClick(number)}>
          {number}
        </button>
      ))}
    </p>
  );
}
