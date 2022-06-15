export default function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <button type="button" onClick={() => onClick(i)} key={i}>
          {i}
        </button>
      ))}
    </p>
  );    "react/jsx-uses-react": "off",