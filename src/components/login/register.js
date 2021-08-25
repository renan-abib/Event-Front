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

export function Register() {
    const classes = useStyles()

    const router = useRouter()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isButtonClicked, setIsButtonClicked] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isInvalid, setIsInvalid] = useState(false)

    const handleFormSubmit = async () => {
        setIsButtonClicked(false)
        setIsLoading(true)

        console.log(
            `Email ${email}, password ${password}, confirmPassword ${confirmPassword}`
        )

        try {
            const response = await services.register({
                username: username,
                email: email,
                password: password
            })

            console.log(response)
            setIsLoading(false)
            setIsButtonClicked(true)
            setIsEmailValid(true)
        } catch (error) {
            setIsButtonClicked(true)
            setIsLoading(false)
            setIsInvalid(true)
        }
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
                        Criar conta
                    </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Nome de usuário"
                        autoFocus
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Endereço de email"
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
                        id="password"
                        type="password"
                        label="Senha"
                        autoFocus
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        type="password"
                        fullWidth
                        label="Confirmar senha"
                        autoFocus
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Grid container>
                        {isButtonClicked &&
                            (!email ||
                            !password ||
                            !confirmPassword ||
                            password !== confirmPassword ? (
                                <Button
                                    type="submit"
                                    fullWidth
                                    disabled
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submit}
                                    onClick={handleFormSubmit}
                                >
                                    Criar
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
                                    Criar
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
                                    Conta criada com sucesso, prossiga para o
                                    login
                                </Typography>
                            </div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                onClick={() => router.push("/")}
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
