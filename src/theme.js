import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({

});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#191C24',
      secondary: '#AF1763' // Replace with your primary color
    },
    secondary: {
      main: '#0D6EFD',
      secondary: '#198754',
      third: '#0DCAf0',
      fourth: '#AB2E3C',
      fifth: '#FFC107', // Replace with your secondary color
    },
    background: {
      default: '#1F2B3A',
    }
    // Customize other palette options for dark mode
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      // Customize other heading styles for dark mode
    },
    button: {
      textTransform: 'none',
      // Customize button styles for dark mode
    },
    // Customize other typography styles for dark mode
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          // Customize button component styles for dark mode
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.5rem',
          // Customize icon component styles for dark mode
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: '1rem',
          // Customize paragraph component styles for dark mode
        },
      },
    },
    // Customize other components styles for dark mode
  },
  // Customize other options for dark mode
});

export { lightTheme, darkTheme };
