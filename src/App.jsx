import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainSection from './pages/MainSection'
import JobsSection from './pages/JobsSection'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <MantineProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/projects" element={<JobsSection />} />
      </Routes>
    </BrowserRouter>
    </MantineProvider>
  )
}

export default App
