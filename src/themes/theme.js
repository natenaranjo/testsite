import { createTheme } from '@mui/material/styles';

// Light Theme
const lightTheme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#2196f3',
        light: '#eef2f6',
        dark: '#1e88e5',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#673ab7',
        light: '#ede7f6',
        dark: '#5e35b1',
        contrastText: '#ffffff',
      },
      error: {
        main: '#D32F2F',
      },
      background: {
        default: '#f8fafc',
        paper: '#ffffff',
      },
      text: {
        title: '#000000',
        primary: '#000000',
        secondary: '#000000',
      },
      warning: {
        main: '#F57C00',
      },
      info: {
        main: '#0288D1'
      },
      success: {
        main: '#388E3C',
      },
    },
    typography: {
      fontFamily: 'Roboto',
      h1: {
        fontFamily: 'Roboto',
        fontSize: '2.2rem',
        fontWeight: 700,
      },
      h2: {
        fontFamily: 'Roboto',
        fontSize: '1.5rem',
        fontWeight: 700,
      },
      h3: {
        fontFamily: 'Roboto',
        fontSize: '1.3rem',
        fontWeight: 600,
      },
      h4: {
        fontFamily: 'Roboto',
        fontSize: '1rem',
        fontWeight: 600,
      },
      h6: {
        fontFamily: 'Roboto',
        fontSize: '0.8rem',
      },
      h5: {
        fontFamily: 'Ubuntu Mono',
        fontSize: '0.9rem',
        fontWeight: 500,
      },
      subtitle1: {
        fontFamily: 'Roboto',
        fontSize: '0.8rem',
        fontWeight: 500,
      },
      subtitle2: {
        fontFamily: 'Roboto',
        fontSize: '0.7rem',
      },
      button: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '0.8rem',
      },
      overline: {
        fontFamily: 'Ubuntu Mono',
      },
      fontSize: '0.9rem',
      body1: {
        fontSize: '0.9rem',
        lineHeight: 1.34,
      },
      body2: {
        lineHeight: 1.33,
        fontSize: '0.8rem',
      },
      caption: {
        fontSize: '0.8rem',
        fontWeight: 400,
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            borderRadius: '4px'
          }
        }
      },
    //   MuiPaper: {
    //     defaultProps: {
    //       elevation: 0
    //     },
    //     styleOverrides: {
    //       root: {
    //         backgroundImage: 'none'
    //       },
    //       rounded: {
    //         borderRadius: `1rem`
    //       }
    //     }
    //   },
    //   MuiCardHeader: {
    //     styleOverrides: {
    //       root: {
    //         color: '#000000',
    //         padding: '24px'
    //       },
    //       title: {
    //         fontSize: '1.125rem'
    //       }
    //     }
    //   },
    //   MuiCardContent: {
    //     styleOverrides: {
    //       root: {
    //         padding: '24px'
    //       }
    //     }
    //   },
    //   MuiCardActions: {
    //     styleOverrides: {
    //       root: {
    //         padding: '24px'
    //       }
    //     }
    //   },
    //   MuiListItemButton: {
    //     styleOverrides: {
    //       root: {
    //         color: '#000000',
    //         paddingTop: '10px',
    //         paddingBottom: '10px',
    //         '&.Mui-selected': {
    //           color: '5e35b1',
    //           backgroundColor: '#ede7f6',
    //           '&:hover': {
    //             backgroundColor: '#ede7f6'
    //           },
    //           '& .MuiListItemIcon-root': {
    //             color: '5e35b1'
    //           }
    //         },
    //         '&:hover': {
    //           backgroundColor: '#ede7f6',
    //           color: '5e35b1',
    //           '& .MuiListItemIcon-root': {
    //             color: '5e35b1'
    //           }
    //         }
    //       }
    //     }
    //   },
    //   MuiListItemIcon: {
    //     styleOverrides: {
    //       root: {
    //         color: '#000000',
    //         minWidth: '36px'
    //       }
    //     }
    //   },
    //   MuiListItemText: {
    //     styleOverrides: {
    //       primary: {
    //         color: '#000000'
    //       }
    //     }
    //   },
    //   MuiInputBase: {
    //     styleOverrides: {
    //       input: {
    //         color: '#000000',
    //         '&::placeholder': {
    //           color: '#000000',
    //           fontSize: '0.875rem'
    //         }
    //       }
    //     }
    //   },
    //   MuiOutlinedInput: {
    //     styleOverrides: {
    //       root: {
    //         background: bgColor,
    //         borderRadius: `1rem`,
    //         '& .MuiOutlinedInput-notchedOutline': {
    //           borderColor: theme.colors?.grey400
    //         },
    //         '&:hover $notchedOutline': {
    //           borderColor: '#eef2f6'
    //         },
    //         '&.MuiInputBase-multiline': {
    //           padding: 1
    //         }
    //       },
    //       input: {
    //         fontWeight: 500,
    //         background: bgColor,
    //         padding: '15.5px 14px',
    //         borderRadius: `1rem`,
    //         '&.MuiInputBase-inputSizeSmall': {
    //           padding: '10px 14px',
    //           '&.MuiInputBase-inputAdornedStart': {
    //             paddingLeft: 0
    //           }
    //         }
    //       },
    //       inputAdornedStart: {
    //         paddingLeft: 4
    //       },
    //       notchedOutline: {
    //         borderRadius: `1rem`
    //       }
    //     }
    //   },
    //   MuiSlider: {
    //     styleOverrides: {
    //       root: {
    //         '&.Mui-disabled': {
    //           color: theme.colors?.grey300
    //         }
    //       },
    //       mark: {
    //         backgroundColor: theme.paper,
    //         width: '4px'
    //       },
    //       valueLabel: {
    //         color: theme?.colors?.primaryLight
    //       }
    //     }
    //   },
    //   MuiDivider: {
    //     styleOverrides: {
    //       root: {
    //         borderColor: theme.divider,
    //         opacity: 1
    //       }
    //     }
    //   },
    //   MuiAvatar: {
    //     styleOverrides: {
    //       root: {
    //         color: theme.colors?.primaryDark,
    //         background: theme.colors?.primary200
    //       }
    //     }
    //   },
    //   MuiChip: {
    //     styleOverrides: {
    //       root: {
    //         '&.MuiChip-deletable .MuiChip-deleteIcon': {
    //           color: 'inherit'
    //         }
    //       }
    //     }
    //   },
    //   MuiTooltip: {
    //     styleOverrides: {
    //       tooltip: {
    //         color: theme.paper,
    //         background: theme.colors?.grey700
    //       }
    //     }
    //   }
  },
});

// Dark Theme
const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2196f3',
      light: '#eef2f6',
      dark: '#1e88e5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7c4dff',
      light: '#d1c4e9',
      dark: '#651fff',
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336',
      contrastText: '#000000',
      light: '#ef9a9a',
      dark: '#c62828',
    },
    background: {
      default: '#343E59',
      main: '#2B2D3E',
      paper: '#2B2D3E',
    },
    text: {
      title: '#d7dcec',
      primary: '#cccccc',
      secondary: '#8492c4',
    },
    warning: {
      main: '#ffe57f',
      light: '#fff8e1',
      dark: '#ffc107',
    },
    success: {
      main: '#28a745',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontFamily: 'Roboto',
      fontSize: '2.2rem',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Roboto',
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: '1.3rem',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Roboto',
      fontSize: '1rem',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'Roboto',
      fontSize: '0.8rem',
    },
    h5: {
      fontFamily: 'Ubuntu Mono',
      fontSize: '0.9rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: 'Roboto',
      fontSize: '0.8rem',
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: 'Roboto',
      fontSize: '0.7rem',
    },
    button: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: '0.8rem',
    },
    overline: {
      fontFamily: 'Ubuntu Mono',
    },
    fontSize: '0.9rem',
    body1: {
      fontSize: '0.9rem',
      lineHeight: 1.34,
    },
    body2: {
      lineHeight: 1.33,
      fontSize: '0.8rem',
    },
    caption: {
      fontSize: '0.8rem',
      fontWeight: 400,
    },
  },
});

export { lightTheme, darkTheme };