import './App.css'
import { Modal } from './components'
import { useModalContext } from './components/Modal/context'

function App() {

  const { setState } = useModalContext()

  const openModal = () => {
    setState(true)
  }

  return (
    <>
      <Modal>
        <h1>Modal</h1>
      </Modal>
      <button onClick={openModal}>Open Modal</button>
    </>
  )
}

export default App