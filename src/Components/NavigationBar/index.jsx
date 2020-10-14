/*
   NavigationBar : 
    This component handles displaying of the Header and the Navigation Bar.
    This also handles the open close events of the Navigation drawer and 
    the click event of drawer menu items. 
*/
import React, { useState } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import Routes from '../Routes';

import { createStyles, makeStyles} from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  MenuList,
  MenuItem,
  ListItemText,
 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseButton from '@material-ui/icons/Close';
import "./NavigationBar.css";
import Locale from '../utlis/Locale';
const drawerWidth = 200;

/* istanbul ignore next */
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: drawerWidth,
    },
    fullList: {
      width: 'auto',
    }
    ,
    title: {
      fontSize: 25,
    } 
  }),
);

/**
 * Component to render whole UI of Header and Navigation Drawer
 * @param {*} props props
 */  
/* istanbul ignore next */
function NavigationBar (props){
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open) => (
  ) => {    
    setIsOpen(open);
  };

  /**
   * Gets path name for the selected option
   * @param {*} routeName Name of the selected option
   */
  const activeRoute = (routeName) => {
    return props.location.pathname === routeName ? true : false;
  }

  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed" style={{background:'#0066a1'}}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <div className="titleContainer">
              <Typography id="title" className={classes.title}>
              {Locale.print("Weather Check")}
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer classes={{ paper: classes.drawer }} open={isOpen} onClose={toggleDrawer(false)}>
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <CloseButton />
            </IconButton>
          <MenuList>
            {Routes.map((prop, key) => {
              return (
                <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                  <MenuItem selected={activeRoute(prop.path)}>
                    <ListItemText primary={prop.sidebarName} />
                  </MenuItem>
                </NavLink>
              );
            })}
          </MenuList>
        </div>
      </Drawer>
    </>
  );
};

export default withRouter(NavigationBar);