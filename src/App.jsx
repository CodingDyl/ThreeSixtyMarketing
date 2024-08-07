import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainSection from './pages/MainSection'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSection />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
