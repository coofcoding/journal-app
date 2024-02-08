import { Notes } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal";
import { useMemo } from "react";

export const SideBarItem = ({ note }) => {

    const dispatch = useDispatch();

    const handleActiveNote = () => {
        dispatch( setActiveNote( note ) )
    }

    const title = ( note.title.length > 18 ) 
                  ? (note.title.substring(0, 17) + '...' )
                  : note.title

    const body = ( note.body.length > 21 ) 
                  ? (note.body.substring(0, 21) + '...' )
                  : note.body

    return (
        <ListItem disablePadding>
            <ListItemButton
                onClick={ handleActiveNote }
            >
                <ListItemIcon>
                    <Notes />
                </ListItemIcon>
                <Grid container
                    spacing={0}
                    direction='column'
                >
                    <ListItemText  primary={title} />
                    <ListItemText sx={{ m: 0 }} secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
