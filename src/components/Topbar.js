import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import React from 'react'

const Topbar = ({ currentTheme, toggleTheme}) => {
  const theme = useTheme();

  return (
    <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant='h6' noWrap component='div'>
          Slide Seen
        </Typography>
        <Button onClick={toggleTheme}>
          {currentTheme === 'light'
            ? <LightModeIcon  color='secondary' />
            : <ModeNightIcon color='secondary' />
          }
          </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar