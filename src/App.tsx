import './App.css'
import { Button, ColorRed } from './components'

function App() {

  const handleClick = () => {
    console.log('click')
  }

  return (
    <Button parentMethod={handleClick}>
      <ColorRed><div>Label</div></ColorRed>
    </Button>
  )
}

export default App
