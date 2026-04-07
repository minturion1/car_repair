import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { GrSchedules } from "react-icons/gr";


function Nav() {
  const [isModalOpen,setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
  function onModalClick() {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  }
  return (
    <div className={s.nav}>
        <NavLink to="/" className={s.logo}>AutoWorks</NavLink>
        <button onClick={onModalClick} className={s.barButton}><i className="fa-solid fa-bars"></i></button>
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
                 <NavLink to="/make-an-appointment" className={({ isActive }) => isActive ? `${s.book_link} ${s.book_active}` : s.book_link}>
                  Make an Appointment <GrSchedules />

                </NavLink> 
            </div>
        </div>
        <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className={s.modal}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className={s.modalTop}>
              <NavLink to="/" className={s.modalTitle}>AutoWorks</NavLink>
              <i
                onClick={onModalClick}
                className={`fa-solid fa-xmark ${s.modalCross}`}
              ></i>
            </div>
            <div className={s.modalNav}>
              <NavLink to="/services" className={({ isActive }) => isActive ? `${s.modalLink} ${s.active}` : s.modalLink}>Services</NavLink>
              <NavLink to="/gallery" className={({ isActive }) => isActive ? `${s.modalLink} ${s.active}` : s.modalLink}>Gallery</NavLink>
              <NavLink to="/contact-us" className={({ isActive }) => isActive ? `${s.modalLink} ${s.active}` : s.modalLink}>Contacts</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        
    </div>
  );
}

export default Nav;
