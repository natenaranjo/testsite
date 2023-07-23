import * as React from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableViewIcon from '@mui/icons-material/TableView';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Typography } from '@mui/material';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton href='/'>
      <ListItemIcon>
        <DashboardIcon color='primary' sx={{ fontSize: 24 }} />
      </ListItemIcon>
      <Typography variant='h4' color='text'>Dashboard</Typography>
    </ListItemButton>
    <ListItemButton href='/wells'>
      <ListItemIcon>
        <TableViewIcon color='primary' sx={{ fontSize: 24 }} />
      </ListItemIcon>
      <Typography variant='h4' color='text'>Wells</Typography>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon color='primary' sx={{ fontSize: 24 }} />
      </ListItemIcon>
      <Typography variant='h4' color='text'>Clients</Typography>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      <Typography variant='h3' component='h3' color='primary' sx={{ fontSize: 24 }} >Reports</Typography>
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon color='primary' sx={{ fontSize: 24 }} />
      </ListItemIcon>
      <Typography variant='h4' color='text'>Shift Report</Typography>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon color='primary' sx={{ fontSize: 24 }} />
      </ListItemIcon>
      <Typography variant='h4' color='text'>Daily Report</Typography>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon color='primary' sx={{ fontSize: 24 }} />
      </ListItemIcon>
      <Typography variant='h4' color='text'>Passdown Notes</Typography>
    </ListItemButton>
  </React.Fragment>
);