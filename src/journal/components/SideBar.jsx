import { CalendarMonth } from "@mui/icons-material"
import { Avatar, Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux";

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName, photoURL, email } = useSelector(state => state.auth);

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
                        s
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
                        ['January', 'February', 'March', 'April', 'May', 'June', 'July'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <CalendarMonth />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={`month description...`} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
