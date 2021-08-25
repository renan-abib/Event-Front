import { makeStyles } from "@material-ui/core/styles";

const fullDrawaerWidth = 360;
const midDrawaerWidth = 240;
const smallDrawaerWidth = 180;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    drawer: {
        width: fullDrawaerWidth,

        flexShrink: 0,
        [theme.breakpoints.down("md")]: {
            width: midDrawaerWidth,
        },
        [theme.breakpoints.down("sm")]: {
            width: smallDrawaerWidth,
        },
    },
    drawerPaper: {
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: "url(./sidebar-1.jpg)",
        backgroundColor: "#FAF",
        color: "#FFFFFF",
        width: fullDrawaerWidth,
        [theme.breakpoints.down("md")]: {
            width: midDrawaerWidth,
        },
        [theme.breakpoints.down("sm")]: {
            width: smallDrawaerWidth,
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    item: {
        marginRight: "15px",
        marginLeft: "15px",
        borderRadius: "15px",
    },
    retangle: {
        height: "65px",
        width: "275px",
        borderRadius: "0.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
            transition: "0.5s",
            backgroundColor: "#9C27B0",
        },
    },
    selected: {
        height: "65px",
        width: "275px",
        backgroundColor: "#9C27B0",
        borderRadius: "0.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    outter: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0,0.75)",
    },
    text: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginLeft: "0.25rem",
    },
    icons: {
        marginRight: "0.25rem",
    },
}));

export { useStyles };
