import { createTheme } from '@mui/material/styles';
import type { Direction } from '@mui/material/styles';

import colors from 'assets/scss/themes-vars.scss';

import type { CustomizationType } from 'interface/type';

interface ThemeOption {
  colors: typeof colors;
  heading: typeof colors.grey900;
  paper: typeof colors.paper;
  backgroundDefault: typeof colors.paper;
  background: typeof colors.primaryLight;
  darkTextPrimary: typeof colors.grey700;
  darkTextSecondary: typeof colors.grey500;
  textDark: typeof colors.grey900;
  menuSelected: typeof colors.secondaryDark;
  menuSelectedBack: typeof colors.secondaryLight;
  divider: typeof colors.grey200;
  customization: CustomizationType;
}

function componentStyleOverrides(theme: ThemeOption) {
  const bgColor = theme.colors.grey50;
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: `${theme.customization.borderRadius}px`
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        },
        rounded: {
          borderRadius: `${theme.customization.borderRadius}px`
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.textDark,
          padding: '24px'
        },
        title: {
          fontSize: '1.125rem'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px'
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '24px'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: theme.menuSelected,
            backgroundColor: theme.menuSelectedBack,
            '&:hover': {
              backgroundColor: theme.menuSelectedBack
            },
            '& .MuiListItemIcon-root': {
              color: theme.menuSelected
            }
          },
          '&:hover': {
            backgroundColor: theme.menuSelectedBack,
            color: theme.menuSelected,
            '& .MuiListItemIcon-root': {
              color: theme.menuSelected
            }
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          minWidth: '36px'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.textDark
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.textDark,
          '&::placeholder': {
            color: theme.darkTextSecondary,
            fontSize: '0.875rem'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: bgColor,
          borderRadius: `${theme.customization.borderRadius}px`,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.colors.grey400
          },
          '&:hover $notchedOutline': {
            borderColor: theme.colors.primaryLight
          },
          '&.MuiInputBase-multiline': {
            padding: 1
          }
        },
        input: {
          fontWeight: 500,
          background: bgColor,
          padding: '15.5px 14px',
          borderRadius: `${theme.customization.borderRadius}px`,
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0
            }
          }
        },
        inputAdornedStart: {
          paddingLeft: 4
        },
        notchedOutline: {
          borderRadius: `${theme.customization.borderRadius}px`
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.colors.grey300
          }
        },
        mark: {
          backgroundColor: theme.paper,
          width: '4px'
        },
        valueLabel: {
          color: theme.colors.primaryLight
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.divider,
          opacity: 1
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.colors.primaryDark,
          background: theme.colors.primary200
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-deletable .MuiChip-deleteIcon': {
            color: 'inherit'
          }
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.paper,
          background: theme.colors.grey700
        }
      }
    }
  };
}

function themePalette(theme: ThemeOption) {
  return {
    mode: theme.customization.navType,
    common: {
      black: theme.colors.darkPaper
    },
    primary: {
      light: theme.colors.primaryLight,
      main: theme.colors.primaryMain,
      dark: theme.colors.primaryDark,
      200: theme.colors.primary200,
      800: theme.colors.primary800
    },
    secondary: {
      light: theme.colors.secondaryLight,
      main: theme.colors.secondaryMain,
      dark: theme.colors.secondaryDark,
      200: theme.colors.secondary200,
      800: theme.colors.secondary800
    },
    error: {
      light: theme.colors.errorLight,
      main: theme.colors.errorMain,
      dark: theme.colors.errorDark
    },
    orange: {
      light: theme.colors.orangeLight,
      main: theme.colors.orangeMain,
      dark: theme.colors.orangeDark
    },
    warning: {
      light: theme.colors.warningLight,
      main: theme.colors.warningMain,
      dark: theme.colors.warningDark
    },
    success: {
      light: theme.colors.successLight,
      200: theme.colors.success200,
      main: theme.colors.successMain,
      dark: theme.colors.successDark
    },
    grey: {
      50: theme.colors.grey50,
      100: theme.colors.grey100,
      500: theme.darkTextSecondary,
      600: theme.heading,
      700: theme.darkTextPrimary,
      900: theme.textDark
    },
    dark: {
      light: theme.colors.darkTextPrimary,
      main: theme.colors.darkLevel1,
      dark: theme.colors.darkLevel2,
      800: theme.colors.darkBackground,
      900: theme.colors.darkPaper
    },
    text: {
      primary: theme.darkTextPrimary,
      secondary: theme.darkTextSecondary,
      dark: theme.textDark,
      hint: theme.colors.grey100
    },
    background: {
      paper: theme.paper,
      default: theme.backgroundDefault
    }
  };
}

function themeTypography(theme: ThemeOption) {
  return {
    fontFamily: theme.customization.fontFamily,
    h6: {
      fontWeight: 500,
      color: theme.heading,
      fontSize: '0.75rem'
    },
    h5: {
      fontSize: '0.875rem',
      color: theme.heading,
      fontWeight: 500
    },
    h4: {
      fontSize: '1rem',
      color: theme.heading,
      fontWeight: 600
    },
    h3: {
      fontSize: '1.25rem',
      color: theme.heading,
      fontWeight: 600
    },
    h2: {
      fontSize: '1.5rem',
      color: theme.heading,
      fontWeight: 700
    },
    h1: {
      fontSize: '2.125rem',
      color: theme.heading,
      fontWeight: 700
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: theme.textDark
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: theme.darkTextSecondary
    },
    caption: {
      fontSize: '0.75rem',
      color: theme.darkTextSecondary,
      fontWeight: 400
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.334em'
    },
    body2: {
      letterSpacing: '0em',
      fontWeight: 400,
      lineHeight: '1.5em',
      color: theme.darkTextPrimary
    },
    button: {
      textTransform: 'capitalize' as 'capitalize'
    },
    customInput: {
      marginTop: 1,
      marginBottom: 1,
      '& > label': {
        top: 23,
        left: 0,
        color: theme.colors.grey500,
        '&[data-shrink="false"]': {
          top: 5
        }
      },
      '& > div > input': {
        padding: '30.5px 14px 11.5px !important'
      },
      '& legend': {
        display: 'none'
      },
      '& fieldset': {
        top: 0
      }
    },
    mainContent: {
      backgroundColor: theme.background,
      borderRadius: `${theme.customization.borderRadius}px`
    },
    menuCaption: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: theme.heading,
      padding: '6px',
      textTransform: 'capitalize' as 'capitalize',
      marginTop: '10px'
    },
    subMenuCaption: {
      fontSize: '0.6875rem',
      fontWeight: 500,
      color: theme.darkTextSecondary,
      textTransform: 'capitalize' as 'capitalize'
    },
    commonAvatar: {
      cursor: 'pointer',
      borderRadius: '8px'
    },
    smallAvatar: {
      width: '22px',
      height: '22px',
      fontSize: '1rem'
    },
    mediumAvatar: {
      width: '34px',
      height: '34px',
      fontSize: '1.2rem'
    },
    largeAvatar: {
      width: '44px',
      height: '44px',
      fontSize: '1.5rem'
    }
  };
}

const themeFactory = (customization: CustomizationType) => {
  const themeOption: ThemeOption = {
    colors,
    heading: colors.grey900,
    paper: colors.paper,
    backgroundDefault: colors.paper,
    background: colors.primaryLight,
    darkTextPrimary: colors.grey700,
    darkTextSecondary: colors.grey500,
    textDark: colors.grey900,
    menuSelected: colors.primaryMain,
    menuSelectedBack: colors.primaryLight,
    divider: colors.grey200,
    customization
  };

  const themeOptions = {
    direction: 'ltr' as 'ltr',
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      }
    },
    typography: themeTypography(themeOption),
    components: componentStyleOverrides(themeOption),
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      }
    }
  };

  const res = createTheme(themeOptions);
  return res as typeof res & typeof themeOptions;
};

export type ThemeType = ReturnType<typeof themeFactory>;

export default themeFactory;
