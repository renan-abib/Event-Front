import { FormControl, MenuItem, Select } from "@material-ui/core"
import { useEffect, useState } from "react"
import { SideWrapper } from "../sidebar/sideWrapper"
import { useStyles } from "./style"
import { DataGrid } from "@material-ui/data-grid"
import services from "../../services/services"
import Cookies from "js-cookie"

const columns = [
    {
        field: "name",
        headerName: "Nome",
        flex: 100
    },
    {
        field: "date",
        headerName: "Data",
        flex: 100
    },
    {
        field: "time",
        headerName: "Hora",
        flex: 100
    },
    {
        field: "city",
        headerName: "Cidade",
        flex: 100
    },
    {
        field: "category",
        headerName: "Categoria",
        flex: 100
    }
]

export function Calendar({ page }) {
    const classes = useStyles()
    const [age, setAge] = useState("")
    const [rows, setRows] = useState()

    const handleChange = (event) => {
        setAge(event.target.value)
    }

    useEffect(async () => {
        try {
            const response = await services.getAllEvents(Cookies.get("token"))
            let data = response.data
            data.forEach((e, v) => {
                console.log(e)
                e["id"] = v
            })
            console.log(data)
            setRows(data)
            console.log(data)
            console.log("aqui")
        } catch (error) {
            console.log("erro")
        }
    }, [])

    return (
        <div className={classes.root}>
            <SideWrapper page={page} />
            <main className={classes.content}>
                <br />
                <br />
                <div className={classes.selection}>
                    <div className={classes.selectBox}>
                        <div className={classes.headerText}>Cidade</div>
                        <div>
                            <FormControl className={classes.formControl}>
                                <Select value={age} className={classes.selectText} onChange={handleChange}>
                                    <MenuItem value={10}>Campinas</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className={classes.selectBoxRight}>
                        <div className={classes.headerText}>Categoria</div>
                        <div>
                            <FormControl className={classes.formControl}>
                                <Select value={age} className={classes.selectText} onChange={handleChange}>
                                    <MenuItem value={10}>Festa</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ height: 400, width: "95%" }}>
                    {rows && <DataGrid rows={rows} columns={columns} pageSize={5} />}
                </div>
            </main>
        </div>
    )
}
