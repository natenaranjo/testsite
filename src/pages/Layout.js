import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../theme';
import React, { useState } from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
  const [ currentTheme, setCurrentTheme ] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light' );
  }
  
  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme }>
      <CssBaseline enableColorScheme />
      <div>
        <Topbar toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <Sidebar />
      </div>
      <main style={{ marginLeft: '210px', marginTop: '4rem' }}>
        {children}
      </main>
    </ThemeProvider>
  )
}

export default Layout;