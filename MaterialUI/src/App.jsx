import { useState } from 'react'
import './App.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme/theme'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Sidebar/>
      </ThemeProvider>
    </>
  )
}

export default App
