import { SideWrapper } from "./sideWrapper";
import { useStyles } from "./sideStyles";

export function Sidebar({ page }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <SideWrapper page={page} />
            <main className={classes.content}></main>
        </div>
    );
}
