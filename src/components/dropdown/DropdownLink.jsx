'use client'

import { useState } from 'react';
import styles from './DropdownLink.module.css';
import Link from 'next/link';
import { motion } from "framer-motion"


const DropdownLink = ({ href, children, content, className, className1 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${styles.dropdownContainer} ${className1}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <Link  href={href} className={ `${styles.link} ${className}`}>{children}</Link>
      {isHovered && (
       
        <motion.div className={styles.dropdownContent}
        key="modal"
        initial={{ opacity: 0, x: 140 , y: -10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? -30 : -10 }}
        /* transition={{ duration: 0.6, ease: 'easeOut' }} */
        transition={{type: "spring",
        
        mass: 0.7,
        damping: 7,
        ease: "easeIn",}}
        
        exit={{x: "-5hw",
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" },}}
        >
          {content}
        </motion.div>
        
      )}
    
    </div>
  );
};

export default DropdownLink;