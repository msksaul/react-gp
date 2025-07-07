import './App.css'
import { getCharacter } from './services/api.service'
import { type Character } from './models'
import { useApi } from './hooks/useApi'

function App() {

  const { loading, error, data, fetch } = useApi<Character, number>(getCharacter, {autoFetch: true , params: 1},)

  if(loading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Error loading data: {error.message}</div>
  }

  return (
    <>
      {JSON.stringify(data)}
      <button onClick={() => fetch(2)}>Load Data</button>
    </>
  )
}

export default App