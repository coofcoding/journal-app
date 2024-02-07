import { Avatar, Box, Divider, Drawer, Grid, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName, photoURL, email } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);


    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent" // temporary
                open
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Avatar
                        sx={{
                            mr: 1,
                            border: `3px solid #543884`,
                        }}
                        src={photoURL}
                        referrerPolicy="no-referrer" />
                    <Grid container
                    >
                        <Typography
                            variant="p"
                            fontWeight={600}
                            fontSize={16}
                            noWrap
                            maxWidth={150}
                            component='div'
                        >
                            {displayName}
                        </Typography>
                        <Typography
                            variant="span"
                            fontWeight={400}
                            fontSize={11}
                            color="#7c7a7e"
                            component='span'
                        >
                            {email}
                        </Typography>
                    </Grid>
                </Toolbar>
                <Divider />

                <List>
                    {
                        notes.map( note => (
                            <SideBarItem 
                                key={ note.id }
                                note = { note }
                            />
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
