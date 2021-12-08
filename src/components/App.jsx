import Page from './Page/jsx'

function App() {
  const [state, setState] = useState({
    count: 0
  })
  const { count } = state

  function handleClick(num) {
    setState({
      count: count + num
    })
  }

  return (
    <Page onClick={handleClick} count={count} />
  )
}