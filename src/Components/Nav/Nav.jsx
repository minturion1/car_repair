import s from './Nav.module.css';

function Nav() {
  return (
    <div className={s.nav}>
        <div className={s.logo}>AutoWorks</div>
        <div className={s.right}>
            <div className={s.links_list}>
                <a href="#" className={s.link}>About</a>
                <a href="#" className={s.link}>Gallery</a>
                <a href="#" className={s.link}>Pricing</a>
                <a href="#" className={s.link}>Contacts</a>
            </div>
        </div>
    </div>
  );
}

export default Nav;
