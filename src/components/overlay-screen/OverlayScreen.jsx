import { motion } from "framer-motion";

const OverlayScreen = ({ isHovered }) => {
  return (
    <motion.div
      id="motion"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full h-full bg-slate-950 z-50 ${ true
        // isHovered ? "pointer-events-auto" : "pointer-events-none"
      }`}
    ></motion.div>
  );
};

export default OverlayScreen;
