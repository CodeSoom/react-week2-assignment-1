import Button from './Button';

export default function Buttons({ count, onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button key={i} onClick={onClick}>
          {i}
        </Button>
      ))}
    </p>
  );
}

// export default function Counter({ count, onClick }) {
//   return (
//     <button type="button" onClick={onClick}>
//       Click me!
//       (
//       { count }
//       )
//     </button>
//   );
// }

