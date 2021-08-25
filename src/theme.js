import { createMuiTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#dd33fa",
            main: "#d500f9",
            dark: "#9500ae",
            contrastText: "#fff"
        },
        secondary: {
            light: "#f73378",
            main: "#f50057",
            dark: "#ab003c",
            contrastText: "#000"
        },
        error: {
            main: red.A400
        },
        background: {
            default: "#fff"
        }
    }
})

export default theme
