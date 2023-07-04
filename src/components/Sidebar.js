import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import TableViewIcon from '@mui/icons-material/TableView';
import WorkIcon from '@mui/icons-material/Work';
import React from 'react'
import { Link } from 'react-router-dom';

const drawerWidth = 200;

const Sidebar = () => {
  return (
    <Drawer
      variant='permanent'
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
          style={{ textAlign: 'center', paddingTop: '2rem' }}
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

        <List style={{ padding: '1rem' }}>

        <ListItem disablePadding>
            <Link to='/' relative='path' style={{ width: '100%', textDecoration: 'none', color: 'black' }}>
              <ListItemButton>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItemButton>
            </Link>
          </ListItem>
          
          <ListItem disablePadding>
            <Link to='/wells' relative='path' style={{ width: '100%', textDecoration: 'none', color: 'black' }}>
              <ListItemButton>
                <ListItemIcon><WorkIcon /></ListItemIcon>
                <ListItemText primary='Wells' />
              </ListItemButton>
            </Link>
          </ListItem>

        </List>
      </Box>
    </Drawer>
  )
}

export default Sidebar