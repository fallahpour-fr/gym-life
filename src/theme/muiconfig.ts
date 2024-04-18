import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
    typography: {
        h1: {
            fontFamily: "Kanit",
        },
        h2: {
            fontFamily: "Kanit",
        },
        h3: {
            fontFamily: "Kanit",
        },
        h4: {
            fontFamily: "Kanit",
        },
        h5: {
            fontFamily: "Kanit",
        },
        h6: {
            fontFamily: "Kanit",
        },
        subtitle1: {
            fontFamily: "Inter",
        },
        subtitle2: {
            fontFamily: "Inter",
        },
        body1: {
            fontFamily: "Inter",
        },
        body2: {
            fontFamily: "Inter",
        },
        button: {
            fontFamily: "Inter",
        },
        caption: {
            fontFamily: "Inter",
        },
        overline: {
            fontFamily: "Inter",
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    border: 'none',
                    transition: 'background-color 0.3s',
                    backgroundColor: 'none',
                    fontFamily: 'Inter',
                    '&:hover': {
                        backgroundColor: 'inherit',
                    },
                },
            },
        },

    },
    breakpoints: {
        values: {
            xs: 430,
            sm: 744,
            md: 1024,
            lg: 1440,
            xl: 1920,
        },
    },

});
