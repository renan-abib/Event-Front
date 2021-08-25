import { Button, TextField } from "@material-ui/core"
import Cookies from "js-cookie"
import { useState } from "react"
import services from "../../services/services"
import { Sidebar } from "../sidebar/sidebar"
import { useStyles } from "./style"

const Announces = ({ page }) => {
    const classes = useStyles()

    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [city, setCity] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [valid, setValid] = useState()

    const handleSubmit = async () => {
        try {
            const data = { name, date, time, city, category, description }
            console.log(data)

            const response = await services.createEvent(Cookies.get("token"), data)

            console.log(response.data)
            setValid(true)
        } catch (e) {
            console.log(e.response)
            setValid(false)
        }
    }

    return (
        <div className={classes.root}>
            <Sidebar page={page} />
            <main className={classes.content}>
                <div className={classes.mainTitle}>Divulgar Eventos</div>
                <div className={classes.center}>
                    <div className={classes.createTittle}>Criando Evento</div>
                    <div className={classes.createSubTittle}>Complete as informações do seu evento</div>
                </div>
                <div className={classes.bottom}>
                    <TextField
                        fullWidth
                        variant="filled"
                        id="standard-basic"
                        onChange={(e) => setName(e.target.value)}
                        label="Nome do Evento"
                    />
                    <div className={classes.time}>
                        <TextField
                            fullWidth
                            variant="filled"
                            id="standard-basic"
                            label="Data"
                            className={classes.date}
                            onChange={(e) => setDate(e.target.value)}
                        />

                        <TextField
                            fullWidth
                            variant="filled"
                            id="standard-basic"
                            label="Horário"
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                    <TextField
                        fullWidth
                        variant="filled"
                        id="standard-basic"
                        label="Cidade"
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        id="standard-basic"
                        label="Categoria"
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        id="standard-basic"
                        label="Descrição"
                        multiline
                        rows={8}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={!name || !date || !time || !city || !category || !description}
                        onClick={handleSubmit}
                    >
                        Cadastrar
                    </Button>
                    <div className={classes.valid}>{valid && "Evento criado com sucesso"}</div>
                </div>
            </main>
        </div>
    )
}

export { Announces }
