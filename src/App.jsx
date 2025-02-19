import { useState } from 'react'
import { Button } from './components/ui/button'
import Header from './components/custom/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
    
      </div>
    </>
  )
}

export default App
