import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainSection from './pages/MainSection'
import JobsSection from './pages/JobsSection'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/projects" element={<JobsSection />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
