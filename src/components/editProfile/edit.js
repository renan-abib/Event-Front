import { Button, TextField } from "@material-ui/core";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import api from "../../services/services";
import services from "../../services/services";
import { Sidebar } from "../sidebar/sidebar";
import { useStyles } from "./style";

const EditProfile = ({ page }) => {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [zip, setZip] = useState("");
    const [isLoading, setIsLoading] = useState("");
    const [valid, setValid] = useState(false);

    useEffect(async () => {
        try {
            setIsLoading(false);
            console.log("aqui");
            const res = await api.consultUser(
                Cookies.get("token"),
                Cookies.get("nick")
            );
            console.log(res.data);
            setName(res.data.name);
            setSurname(res.data.surname);
            setEmail(res.data.email);
            setCountry(res.data.country);
            setCity(res.data.city);
            setZip(res.data.zip);
            setIsLoading(true);
        } catch (error) {}
    }, []);

    const handleSubmit = async () => {
        try {
            const data = {
                username: Cookies.get("nick"),
                newUsername: Cookies.get("nick"),
                name,
                surname,
                email,
                city,
                country,
                zip,
            };
            console.log(data);

            let response = await api.updateUser(Cookies.get("token"), data);

            console.log(response);
            setValid(true);
        } catch (e) {
            console.log("errou");
            setValid(false);
        }
    };

    return (
        <div className={classes.root}>
            <Sidebar page={page} />
            <main className={classes.content}>
                <div className={classes.mainTitle}>Editar Perfil</div>
                <div className={classes.center}>
                    <div className={classes.createTittle}>Editando Perfil</div>
                    <div className={classes.createSubTittle}>
                        Complete seu perfil aqui!
                    </div>
                </div>
                <div className={classes.bottom}>
                    {isLoading && (
                        <>
                            <TextField
                                fullWidth
                                value={name}
                                variant="filled"
                                onChange={(e) => setName(e.target.value)}
                                label="Nome"
                            />
                            <TextField
                                value={surname}
                                fullWidth
                                variant="filled"
                                onChange={(e) => setSurname(e.target.value)}
                                label="Sobrenome"
                            />
                            <TextField
                                value={email}
                                fullWidth
                                variant="filled"
                                onChange={(e) => setEmail(e.target.value)}
                                label="Email"
                            />
                            <TextField
                                value={city}
                                fullWidth
                                variant="filled"
                                onChange={(e) => setCity(e.target.value)}
                                label="Cidade"
                            />
                            <TextField
                                value={country}
                                fullWidth
                                variant="filled"
                                onChange={(e) => setCountry(e.target.value)}
                                label="Pais"
                            />
                            <TextField
                                value={zip}
                                fullWidth
                                variant="filled"
                                onChange={(e) => setZip(e.target.value)}
                                label="CEP"
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={
                                    !name ||
                                    !surname ||
                                    !email ||
                                    !city ||
                                    !country ||
                                    !zip
                                }
                                onClick={handleSubmit}
                            >
                                Editar
                            </Button>
                            <div className={classes.valid}>
                                {valid && "Perfil atualizado com sucesso"}
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
};

export { EditProfile };
