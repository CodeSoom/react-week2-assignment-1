/**
 * @export
 * @param {{
 *  type: 'submit' | 'button',
 *  children: import('react').ReactElement,
 *  onClick: import('react').MouseEventHandler,
 * }} { type, children, onClick }
 * @return {import('react').ReactElement}
 */
export default function Button({ type, children, onClick }) {
  return (
    <button type={type === 'submit' ? 'submit' : 'button'} onClick={onClick}>
      {children}
    </button>
  );
}
