import { makeStyles } from "@material-ui/core/styles"

const fullDrawaerWidth = 360
const midDrawaerWidth = 240
const smallDrawaerWidth = 180

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    appBar: {
        width: `calc(100% - ${fullDrawaerWidth}px)`,
        marginLeft: fullDrawaerWidth,
        [theme.breakpoints.down("md")]: {
            width: `calc(100% - ${midDrawaerWidth}px)`,
            marginLeft: midDrawaerWidth
        },
        [theme.breakpoints.down("sm")]: {
            width: `calc(100% - ${smallDrawaerWidth}px)`,
            marginLeft: smallDrawaerWidth
        }
    },
    drawer: {
        width: fullDrawaerWidth,

        flexShrink: 0,
        [theme.breakpoints.down("md")]: {
            width: midDrawaerWidth
        },
        [theme.breakpoints.down("sm")]: {
            width: smallDrawaerWidth
        }
    },
    drawerPaper: {
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: "url(./sidebar-1.jpg)",
        backgroundColor: "#FAF",
        color: "#FFFFFF",
        width: fullDrawaerWidth,
        [theme.breakpoints.down("md")]: {
            width: midDrawaerWidth
        },
        [theme.breakpoints.down("sm")]: {
            width: smallDrawaerWidth
        }
    },
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    },
    formControl: {
        width: "100px"
    },
    selectBox: {
        width: "600px",
        padding: "1rem",
        backgroundColor: "#de2b69",
        borderRadius: "0.5rem"
    },
    selectBoxRight: {
        width: "600px",
        padding: "1rem",
        backgroundColor: "#fe9b1a",
        borderRadius: "0.5rem"
    },
    headerText: {
        fontSize: "1.5rem",
        color: "#FFFFFF"
    },
    selectText: {
        color: "#FFFFFF",
        borderBottom: "#FFFFFF solid 2px"
    },
    selection: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around"
    }
}))

export { useStyles }
