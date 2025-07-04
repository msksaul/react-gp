import './App.css'
import { Button, ColorRed } from './components'
import { GlobalProvider } from './context/global.provider'

function App() {

  const handleClick = () => {
    console.log('click')
  }

  return (
    <GlobalProvider>
      <Button parentMethod={handleClick}>
        <ColorRed><div>Label</div></ColorRed>
      </Button>
    </GlobalProvider>
  )
}

export default App