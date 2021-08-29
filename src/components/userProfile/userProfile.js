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
                <div className={classes.mainTitle}>Perfil do usuário</div>
                <div className={classes.center}>
                    <div className={classes.createTittle}>Perfil</div>
                    <div className={classes.createSubTittle}>Informações e eventos do perfil</div>
                </div>
                <div className={classes.bottom}>




                </div>
            </main>
        </div>
    )
}

export { Announces }
