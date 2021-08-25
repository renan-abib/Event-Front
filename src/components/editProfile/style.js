import { makeStyles } from "@material-ui/core/styles";

const fullDrawaerWidth = 360;
const midDrawaerWidth = 240;
const smallDrawaerWidth = 180;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    content: {
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    mainTitle: {
        fontSize: "1.5rem",
        color: "#333333",
    },
    center: {
        alignSelf: "center",
        marginLeft: "3rem",
        marginRight: "3rem",
        height: "100px",
        width: "100%",
        backgroundColor: "#de2b6a",
        flexDirection: "column",
        display: "flex",
        alignItems: "left",
        justifyContent: "space-around",
        padding: "1rem",
        borderRadius: "0.5rem",
        marginBottom: "1rem",
    },
    bottom: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        alignSelf: "center",
        marginBottom: "25px",
        borderRadius: "0.5rem",
        height: "700px",
        width: "100%",
        backgroundColor: "#EEEEEE",
        padding: "2rem",
    },
    createTittle: {
        fontSize: "1.5rem",
        color: "#FFFFFF",
    },
    createSubTittle: {
        fontSize: "1rem",
        color: "#FFFFFF",
    },
    time: {
        display: "flex",
        width: "100%",
    },
    date: {
        marginRight: "1rem",
    },
    valid: {
        color: "#51fb00",
    },
}));

export { useStyles };
