import { Button, Paper, Grid } from "@material-ui/core"
import { Card, CardContent, CardActions} from '@material-ui/core';
import { DataGrid } from "@material-ui/data-grid"
import Cookies from "js-cookie"
import { useEffect, useState } from "react";
import services from "../../services/services"
import { Sidebar } from "../sidebar/sidebar"
import { useStyles } from "./style"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import avatar from "../../assets/personas/persona1.png"

const dates = [ '14/9', '16/9', '20/9', '30/0' ]


function createData(evento, datevento, cidade, quando) {
    return { evento, datevento, cidade, quando};
  }
  
  const rows = [
    createData("Hackathon React", "08/04/2021", "Campinas", "Daqui a 2 dias"),
    createData("Cervejada PUCC","10/04/2021", "Campinas", "Daqui a 4 dias"),
    createData("Guarani x Corinthians", "07/04/2021", "Campinas", "Amanhã"),
    createData("Mostra de Carros Antigos", "10/04/2021", "Águas de Lindóia", "Daqui a 4 dias"),
    createData("Festival Happy Holi", "12/04/2021", "São Paulo", "Daqui a 1 semana"),
  ];

const UserProfile = ({ page }) => {
    const classes = useStyles()


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

    return (
        <div className={classes.root}>
            <Sidebar page={page} />
            <main className={classes.content}>
                <div className={classes.mainTitle}>Perfil do usuário</div>
                    <div className={classes.center}>
                        <div className={classes.createTittle}>Perfil</div>
                        <div className={classes.createSubTittle}>Informações e eventos do perfil</div>
                    </div>
                <div className={classes.bottom}>{/* Tudo do perfil vai aqui abaixo */}
                
                
    <div className={classes.time}>
        <Grid container spacing={3}>
            <Grid item xs={6} md={6}  justifyContent="center"> 
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                    <img src={avatar} /> 
                        <h4>Carlos Correia</h4>
                        <Button variant="contained" color="primary">Seguidores</Button>
                        <Button variant="contained" color="secondary">Seguindo</Button>
                    <p className={classes.description}>
                    <p>Campinas-SP</p>
                    <p>23 anos</p>
                    <p>Logo mais formado em Engenharia Química!!</p>
                    </p>

                    <CardActions>
                        <Button variant="contained" color="primary">Seguir</Button>
                    </CardActions>
                    </CardContent>
                </Card>
            </Grid>
            


            <Grid item xs={6} md={6}>
               
            <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableFont}>Evento</TableCell>
            <TableCell className={classes.tableFont} align="right">Data</TableCell>
            <TableCell className={classes.tableFont} align="right">Cidade</TableCell>
            <TableCell className={classes.tableFont} align="right">Quando</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.evento}>
              <TableCell component="th" scope="row">
                {row.evento}
              </TableCell>
              <TableCell align="right">{row.datevento}</TableCell>
              <TableCell align="right">{row.cidade}</TableCell>
              <TableCell align="right">{row.quando}</TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>

            </Grid>
        </Grid>



    </div>
                </div>
            </main>
        </div>
    )
}

export { UserProfile }
