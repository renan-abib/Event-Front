import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh"
    },
    image: {
        background:
            "url(https://source.unsplash.com/collection/54387659/2400x1600)",
        backgroundRepeat: "repeat",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        paddding: "2px",
        backgroundColor: theme.palette.primary.contrastText,
        width: theme.spacing(20),
        height: theme.spacing(20),
        border: "2px solid",
        borderColor: theme.palette.secondary.dark
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: "#ffffff"
    }
}))

export { useStyles }
