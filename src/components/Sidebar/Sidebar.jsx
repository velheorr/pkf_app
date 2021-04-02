import React from 'react';
import '../../App.css';
import s from "./Sidebar.module.css";
import {NavLink} from 'react-router-dom';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import StorefrontIcon from '@material-ui/icons/Storefront';

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <List>
                <NavLink to="/login" activeClassName={s.activeLink}><ListItem button><ListItemIcon className={s.sideIcon}>
                    <ExitToAppIcon /></ListItemIcon><ListItemText primary="Login"/></ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/todolist" activeClassName={s.activeLink}><ListItem button><ListItemIcon className={s.sideIcon}>
                    <PlaylistAddIcon /></ListItemIcon><ListItemText primary="Todo List"/></ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/phonebook2" activeClassName={s.activeLink}><ListItem button><ListItemIcon className={s.sideIcon}>
                    <ContactPhoneIcon /></ListItemIcon><ListItemText primary="Телефонная книга"/></ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/permcandy" activeClassName={s.activeLink}><ListItem button><ListItemIcon className={s.sideIcon}>
                    <StorefrontIcon /></ListItemIcon><ListItemText primary="Пермские конфеты"/></ListItem>
                </NavLink>
                <Divider />
            </List>
        </div>
    )
}

export default Sidebar;