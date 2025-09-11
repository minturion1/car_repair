import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className={s.nav}>
        <NavLink to="/" className={s.logo}>AutoWorks</NavLink>
        <div className={s.right}>
            <div className={s.links_list}>
                <NavLink to="/services" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
                  Services
                </NavLink>
                <NavLink to="/gallery" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
                  Gallery
                </NavLink>
                <NavLink to="/contact-us" className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}>
                  Contacts
                </NavLink>
            </div>
        </div>
    </div>
  );
}

export default Nav;
