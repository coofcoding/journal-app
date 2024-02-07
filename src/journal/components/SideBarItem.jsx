import { EditNote } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

export const SideBarItem = ({ note }) => {

    const handleActiveNote = () => {
        console.log( note )
    }

    return (
        <ListItem disablePadding>
            <ListItemButton
                onClick={ handleActiveNote }
            >
                <ListItemIcon>
                    <EditNote />
                </ListItemIcon>
                <Grid container
                    spacing={0}
                    direction='column'
                >
                    <ListItemText sx={{ maxWidth: '13ch' , overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}} primary={note.title} />
                    <ListItemText sx={{ m: 0 }} secondary={note.body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
