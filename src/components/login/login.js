import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./loginTheme";
import services from "../../services/services";
import Cookies, { set } from "js-cookie";
import { useRouter } from "next/router";
import { CircularProgress } from "@material-ui/core";

export function Login() {
    const classes = useStyles();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginFailed, setLoginFailed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = async () => {
        const loginObject = {
            username: email,
            password,
        };
        try {
            setIsLoading(true);
            console.log(loginObject);
            const response = await services.login(loginObject);
            Cookies.set("token", response.data.token);
            Cookies.set("nick", response.data.username);
            router.push("/announce");
        } catch (error) {
            setIsLoading(false);
            console.error(error.response);
            setLoginFailed(true);
        }
        console.log(email, password);
    };

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
                    <Avatar
                        className={classes.avatar}
                        src={"./logo_login.png"}
                    />
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Nome de usuário"
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
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                        {loginFailed &&
                            "Credenciais incorretas, tente novamente"}
                    </div>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Lembrar de mim"
                    />

                    <Grid container>
                        {isLoading ? (
                            <CircularProgress />
                        ) : (
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                                onClick={handleFormSubmit}
                            >
                                Entrar
                            </Button>
                        )}
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Link href="/sign/passwordReset" variant="body2">
                                Modificar a senha?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/sign/createAccount" variant="body2">
                                Não possui uma conta? Cadastre-se!
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
}
