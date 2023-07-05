import { createTheme } from '@mui/material/styles';

// Light Theme
const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#007BFF',
    },
    success: {
      main: '#33ad0e',
    },
    warning: {
      main: '#0DCAF0',
    },
    error: {
      main: '#e32012'
    },
    info: {
      main: '#17A2B8',
    },
    background: {
      default: '#F3F3F3',
      paper: '#FFFFFF',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: {
      divider: 'rgba(0, 0, 0, 0.12)',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.4)',
      selected: 'rgba(0, 0, 0, 0.87)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    }
  },
  components: {
    MuiBox: {
      styleOverrides: {
        // Light theme styles for Box component
        root: {
          // Add your Box styles here
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        // Light theme styles for Divider component
        root: {
          // Add your Divider styles here
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        // Light theme styles for Drawer component
        paper: {
          // Add your Drawer styles here
        },
      },
    },
    MuiList: {
      styleOverrides: {
        // Light theme styles for List component
        root: {
          // Add your List styles here
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        // Light theme styles for ListItemButton component
        root: {
          // Add your ListItemButton styles here
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        // Light theme styles for ListItemIcon component
        root: {
          // Add your ListItemIcon styles here
          color: ''
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        // Light theme styles for ListItemText component
        root: {
          // Add your ListItemText styles here
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        // Light theme styles for Toolbar component
        root: {
          // Add your Toolbar styles here
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        // Light theme styles for Typography component
        root: {
          // Add your Typography styles here
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        // Light theme styles for AppBar component
        root: {
          // Add your AppBar styles here
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Light theme styles for Button component
        root: {
          // Add your Button styles here
        },
      },
    },
  },
});

// Dark Theme
const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#F3F3F3',
    },
    secondary: {
      main: '#007BFF',
    },
    success: {
      main: '#0D6EFD',
    },
    warning: {
      main: '#198754',
    },
    info: {
      main: '#0DCAF0',
    },
    error: {
      main: '#AB2E3C',
    },
    background: {
      default: '#121212',
      paper: 'rgba(32, 32, 32, 1)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255,255,255, 0.5)',
    },
    divider: {
      divider: 'rgba(255, 255, 255, 0.12)',
    },
    action: {
      active: '#FFFFFF',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 012)',
    }
  },
  components: {
    // Same components as light theme, but with dark theme styles
    MuiBox: {
      styleOverrides: {
        // Dark theme styles for Box component
        root: {
          // Add your Box styles here
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        // Dark theme styles for Divider component
        root: {
          // Add your Divider styles here
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        // Dark theme styles for Drawer component
        paper: {
          // Add your Drawer styles here
        },
      },
    },
    MuiList: {
      styleOverrides: {
        // Dark theme styles for List component
        root: {
          // Add your List styles here
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        // Dark theme styles for ListItemButton component
        root: {
          // Add your ListItemButton styles here
          color: '#FFFFFF'
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        // Dark theme styles for ListItemIcon component
        root: {
          // Add your ListItemIcon styles here
          color: '#FFFFFF'
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        // Dark theme styles for ListItemText component
        root: {
          // Add your ListItemText styles here
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        // Dark theme styles for Toolbar component
        root: {
          // Add your Toolbar styles here
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        // Dark theme styles for Typography component
        root: {
          // Add your Typography styles here
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        // Dark theme styles for AppBar component
        root: {
          // Add your AppBar styles here
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Dark theme styles for Button component
        root: {
          // Add your Button styles here
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        }
      }
    }
  },
});

export { lightTheme, darkTheme };