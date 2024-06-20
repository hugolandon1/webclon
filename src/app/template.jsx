'use client'
import { motion } from 'framer-motion';



const Template = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.99, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}

      transition={{ ease: 'easeInOut', duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default Template;