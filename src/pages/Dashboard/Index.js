import * as React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import ShortText from '@mui/icons-material/ShortText';
import AssessmentOutlined from '@mui/icons-material/AssessmentOutlined';


import Well from './components/Well/Index';
import Slide from './components/Slide/Index';
import Survey from './components/Survey/Index'

const drawerWidth = 240;

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Slide Seen
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <Typography 
            variant='h5' 
            noWrap 
            component='h5' 
            style={{ textAlign: 'center', paddingTop: '2rem'}}
          >
            John Doe
          </Typography>
          <Typography 
            variant='p' 
            noWrap 
            component='p' 
            style={{ textAlign: 'center', paddingBottom: '2rem' }}
          >
            Directional Driller
          </Typography>
          <Divider />
          <List style={{ padding: '1rem'}}>
            <ListItem disablePadding>
              <Link to='/well' relative='path' style={{  width: '100%', textDecoration: 'none', color: 'black' }}>
                <ListItemButton>
                  <ListItemIcon><WorkIcon /></ListItemIcon>
                  <ListItemText primary="Wells" />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path='/well' element={<Well />} />
          <Route path='/well/:wellId/survey' element={<Survey />} />
          <Route path='/well/:wellId/survey/slide' element={<Slide />} />
        </Routes>
      </Box>
    </Box>
  );
}