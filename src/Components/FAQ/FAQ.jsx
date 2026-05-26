import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';
import s from './FAQ.module.css';
import FAQs from './FAQData';

function FAQ() {
    const [openFAQIds, setOpenFAQIds] = useState([]);

    function handleClick(FAQId) {
        if(openFAQIds.includes(FAQId)) {
            setOpenFAQIds(openFAQIds.filter(id=>id!== FAQId));
        } else {
            setOpenFAQIds([...openFAQIds, FAQId]);
        }
    }

    return (
        <div className={s.container}>
            <div className={s.title}>
                Frequently Asked Questions
            </div>
            <div className={s.items}>
                {FAQs.map(faq=> {
                    return(
                        <div key={faq.id} onClick={()=>{handleClick(faq.id)}} className={s.item}>
                            <div  className={s.item_top}>
                                <div className={s.item_title}>{faq.title}</div>
                                <div className={s.item_sign}>{openFAQIds.includes(faq.id) ? '-' : '+'}</div>
                            </div>
                            <AnimatePresence>
                                {openFAQIds.includes(faq.id) && (
                                    <motion.div
                                    className={s.item_par}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    >
                                    {faq.par}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                    )
                })}
                
                
            </div>
        </div>
    )
}

export default FAQ;