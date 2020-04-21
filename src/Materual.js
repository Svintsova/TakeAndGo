import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import {RentItem} from './App.js';
//import {RentItem} from 'components/RentItem.js';

const drawerWidth = 240;

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Montserrat',
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        background: 'white',
        color: 'black',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: 'linear-gradient(177.29deg, #1488CC 0.83%, #2B32B2 99.13%)',
        color: 'white',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function MainStructure() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        История бронирований

                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >

                <div className={classes.toolbar}><img src=''/> </div>

                <List>
                    {['Личный кабинет', 'Моя аренда', 'Действия', 'Выйти'].map((text) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>
            <main className={classes.content}>

            </main>
        </div>
    );
}






