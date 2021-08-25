import React from "react"
import Drawer from "@material-ui/core/Drawer"
import { Dashboard, Person, Favorite, Today, FormatListBulleted, Edit } from "@material-ui/icons"
import { useStyles } from "./sideStyles"
import { useRouter } from "next/router"

export function SideWrapper({ page }) {
    const classes = useStyles()

    const router = useRouter()
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper
            }}
            anchor="left"
        >
            <div className={classes.outter}>
                <div>
                    <img src="../ievent_logo.png" alt="" />
                </div>
                <div
                    className={page === "calendar" ? classes.selected : classes.retangle}
                    onClick={() => router.push("/home")}
                >
                    <Dashboard className={classes.icons} />
                    <div className={classes.text}>Calendário</div>
                </div>
                <div
                    className={page === "profile" ? classes.selected : classes.retangle}
                    onClick={() => router.push("/profile")}
                >
                    <Person className={classes.icons} />
                    <div className={classes.text}>Perfil</div>
                </div>
                <div
                    className={page === "favorites" ? classes.selected : classes.retangle}
                    onClick={() => router.push("/favorites")}
                >
                    <Favorite className={classes.icons} />
                    <div className={classes.text}>Favoritos</div>
                </div>
                <div
                    className={page === "announce" ? classes.selected : classes.retangle}
                    onClick={() => router.push("/announce")}
                >
                    <Today className={classes.icons} />
                    <div className={classes.text}>Divulgar Eventos</div>
                </div>
                <div
                    className={page === "manage" ? classes.selected : classes.retangle}
                    onClick={() => router.push("/manage")}
                >
                    <FormatListBulleted className={classes.icons} />
                    <div className={classes.text}>Gerenciar Eventos</div>
                </div>
                <div
                    className={page === "edit" ? classes.selected : classes.retangle}
                    onClick={() => router.push("/edit")}
                >
                    <Edit className={classes.icons} />
                    <div className={classes.text}>Editar Perfil</div>
                </div>
            </div>
        </Drawer>
    )
}
