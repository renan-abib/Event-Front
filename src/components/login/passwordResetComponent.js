import { useState } from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { useStyles } from "./loginTheme"
import services from "../../services/services"
import Cookies, { set } from "js-cookie"
import { useRouter } from "next/router"
import { CircularProgress } from "@material-ui/core"

export function PasswordResetComponent() {
    const classes = useStyles()

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [oldPass, setOldPass] = useState("")
    const [newPass, setNewPass] = useState("")
    const [confirmNewPass, setConfirmNewPass] = useState("")
    const [isButtonClicked, setIsButtonClicked] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleFormSubmit = async () => {
        setIsButtonClicked(false)
        setIsLoading(true)

        try {
            const response = await services.resetPassword({
                username: email,
                oldPassword: oldPass,
                newPassword: newPass
            })

            console.log(response)
            setIsLoading(false)
            setIsButtonClicked(true)
            setIsEmailValid(true)
            router.push("/")
        } catch (error) {
            setIsButtonClicked(true)
            setIsLoading(false)
        }

        // console.log(response)

        console.log(
            `Email ${email}, oldPass ${oldPass}, newPass ${newPass}, confirmNewPass ${confirmNewPass}`
        )
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Recuperar senha
                    </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Nome de usurio"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="oldPass"
                        type="password"
                        label="Senha anterior"
                        autoFocus
                        onChange={(e) => setOldPass(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        type="password"
                        fullWidth
                        label="Senha nova"
                        autoFocus
                        onChange={(e) => setNewPass(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="password"
                        label="Confirme a nova senha"
                        autoFocus
                        onChange={(e) => setConfirmNewPass(e.target.value)}
                    />
                    <Grid container>
                        {isButtonClicked &&
                            (!email ||
                            !oldPass ||
                            !newPass ||
                            !confirmNewPass ||
                            newPass !== confirmNewPass ? (
                                <Button
                                    type="submit"
                                    fullWidth
                                    disabled
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submit}
                                    onClick={handleFormSubmit}
                                >
                                    Recuperar
                                </Button>
                            ) : (
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submit}
                                    onClick={handleFormSubmit}
                                >
                                    Recuperar
                                </Button>
                            ))}
                        {isLoading && (
                            <div>
                                <CircularProgress />
                            </div>
                        )}
                    </Grid>
                    {isEmailValid && (
                        <>
                            <div>
                                <Typography component="h2">
                                    Senha enviada para o email {email}
                                </Typography>
                            </div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                                onClick={handleFormSubmit}
                            >
                                Logar
                            </Button>
                        </>
                    )}
                </div>
            </Grid>
        </Grid>
    )
}
