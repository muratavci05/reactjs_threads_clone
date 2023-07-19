import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Feed from './pages/feed'
 
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Feed/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
