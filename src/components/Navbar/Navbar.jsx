import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs"  activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        News
      </div>
      <div className={s.item}>
        Music
      </div>
      <div className={s.item}>
        Settings
      </div>
    </nav>
  );
}

export default Navbar;